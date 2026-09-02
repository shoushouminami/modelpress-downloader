const React = require("react");
const { useState } = React;
const i18n = require("../i18n");
const { insertSortedImmutable } = require("../utils/array-utils");


// images: array of strings OR array of objects with at least { src }
//   - string: "url"           → id = url, src = url
//   - object: { src, id? }    → id = id || src
function ScrollableImagePicker({ images = [], onChange, onRetry }) {
    // Normalize images into a consistent internal shape
    const normalizedImages = images.map((img, index) => {
        return {
            index,
            src: img.src,
            label: img.label,
            className: img.className,
            isVideo: img.isVideo,
            failed: img.failed,
            disabled: img.disabled
        };
    });
    const all = normalizedImages.map(img => img.index);

    // by default: all selected, including ones still loading - selectedIds is only initialized once
    // (on first mount), so images still loading/failed at that point must stay "selected" underneath;
    // otherwise they'd never become selected once they finish loading, since re-renders triggered by
    // renderEventEmitter reuse this same component instance instead of remounting it.
    // "disabled" images are just rendered as unchecked/non-interactive below, regardless of membership here.
    const [selectedIds, setSelectedIds] = useState(all);

    // // if images prop changes, reset selection to all
    // useEffect(() => {
    //     setSelectedIds(all);
    // }, [images]);

    const toggle = (index) => {
        setSelectedIds(prev => {
            const next = prev.includes(index)
                ? prev.filter(x => x !== index)   // remove
                : insertSortedImmutable(prev, index); // add
            onChange?.(next);
            return next;
        });
        
    };

    const deselectAll = () => {
        setSelectedIds([]);
        onChange?.([]);
    };

    const selectAll = () => {
        setSelectedIds(all);
        onChange?.(all);
    }

    if (normalizedImages.length === 0) {
        return null
    }

    return (
        <div className="image-picker-container">
            <div className="image-pick-button-row" style={{ marginBottom: 8 }}>
                <button className="image-pick-button" type="button" onClick={selectAll}>
                    {i18n.getText("selectAllButton")}
                </button>
                <span className="image-pick-button"  style={{ fontSize: 12 }}>
                    {i18n.getText("selected")}:
                    <span style={{
                        display: "inline-block",
                        width: 55,
                        fontVariantNumeric: "tabular-nums"
                    }}>
                        {/* exclude disabled images from the count: they're checked in state but render unchecked */}
                        {String(selectedIds.filter(i => !normalizedImages[i]?.disabled).length).padStart(3, "\u00A0")}/{String(normalizedImages.length).padEnd(3, "\u00A0")}
                    </span>
                </span>
                <button className="image-pick-button" type="button" onClick={deselectAll} >
                    {i18n.getText("deselectAllButton")}
                </button>
            </div>

            {/* Scrollable container */}
            <div className="image-picker-table">
                {normalizedImages.map((img) => {
                    // disabled images render as unchecked regardless of underlying selectedIds membership
                    const selected = selectedIds.includes(img.index) && !img.disabled;
                    const arr = img.label?.split("/");
                    const folder = arr?.length === 2 ? (arr[0] + "/"): "";
                    const filename = arr?.length === 2 ? arr[1] : img.label;
                    return (
                        <label
                            key={"img" + img.index}
                            className={"image-picker-row" + (img.disabled ? " image-picker-row-disabled" : "")}
                        >
                            <input
                                type="checkbox"
                                checked={selected}
                                disabled={img.disabled}
                                onChange={() => toggle(img.index)}
                            />

                            <span style={{ marginLeft: 8, fontSize: 12 }}>
                                {img.index + 1}
                            </span>
                            <span
                                className="image-picker-thumbnail"
                                style={img.failed ? { cursor: "pointer" } : undefined}
                                onClick={img.failed ? (e) => {
                                    // prevent the enclosing <label> from toggling its checkbox on this click
                                    e.preventDefault();
                                    onRetry?.(img.index);
                                } : undefined}
                            >
                                <img
                                    key={img.src}
                                    className={(img.className ?? "")}
                                    src={img.src}
                                    alt={img.label}
                                />
                                {img.isVideo && (
                                    <span className="video-overlay">▶</span>
                                )}
                                {img.failed && (
                                    <span className="retry-overlay" title={i18n.getText("retryImageTitle")}>
                                        <span className="retry-icon">⟳</span>
                                        <span className="retry-label">{i18n.getText("retryImageTitle")}</span>
                                    </span>
                                )}
                            </span>
                            <span className="image-picker-filename">
                                {folder}<br/>
                                {filename}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

module.exports = ScrollableImagePicker;
