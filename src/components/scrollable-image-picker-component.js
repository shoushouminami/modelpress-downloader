const React = require("react");
const { useState } = React;
const i18n = require("../i18n");
const { insertSortedImmutable } = require("../utils/array-utils");


// images: array of strings OR array of objects with at least { src }
//   - string: "url"           → id = url, src = url
//   - object: { src, id? }    → id = id || src
function ScrollableImagePicker({ images = [], onChange }) {
    // Normalize images into a consistent internal shape
    const normalizedImages = images.map((img, index) => {
        return {
            index,
            src: img.src,
            label: img.label,
            className: img.className,
            isVideo: img.isVideo
        };
    });
    const all = normalizedImages.map(img => img.index);

    // by default: all selected
    const [selectedIds, setSelectedIds] = useState(
        normalizedImages.map(img => img.index)
    );

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

    if (all.length === 0) {
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
                        {String(selectedIds.length).padStart(3, "\u00A0")}/{String(normalizedImages.length).padEnd(3, "\u00A0")}
                    </span>
                </span>
                <button className="image-pick-button" type="button" onClick={deselectAll} >
                    {i18n.getText("deselectAllButton")}
                </button>
            </div>

            {/* Scrollable container */}
            <div className="image-picker-table">
                {normalizedImages.map((img) => {
                    const selected = selectedIds.includes(img.index);
                    const arr = img.label?.split("/");
                    const folder = arr?.length === 2 ? (arr[0] + "/"): "";
                    const filename = arr?.length === 2 ? arr[1] : img.label;
                    return (
                        <label
                            key={"img" + img.index}
                            className="image-picker-row"
                        >
                            <input
                                type="checkbox"
                                checked={selected}
                                onChange={() => toggle(img.index)}
                            />

                            <span style={{ marginLeft: 8, fontSize: 12 }}>
                                {img.index + 1}
                            </span>
                            <span className="image-picker-thumbnail">
                                <img
                                    className={(img.className ?? "")}
                                    src={img.src}
                                    alt={img.label}
                                />
                                {img.isVideo && (
                                    <span className="video-overlay">▶</span>
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
