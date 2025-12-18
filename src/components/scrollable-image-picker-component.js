const React = require("react");
const { useState } = React;

// images: array of strings OR array of objects with at least { src }
//   - string: "url"           → id = url, src = url
//   - object: { src, id? }    → id = id || src
function ScrollableImagePicker({ images = [], onChange }) {
    // Normalize images into a consistent internal shape
    const normalizedImages = images.map((img, index) => {
        return {
            index,
            src: img.src,
            label: img.label
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
                : [...prev, index];               // add
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
        <div className="image-picker">
            <div className="image-pick-button-row" style={{ marginBottom: 8 }}>
                <button className="image-pick-button" type="button" onClick={selectAll}>
                    Select all
                </button>
                <span className="image-pick-button"  style={{ fontSize: 12 }}>
                    Selected: {selectedIds.length}/{normalizedImages.length}
                </span>
                <button className="image-pick-button" type="button" onClick={deselectAll} >
                    Deselect all
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
                                    src={img.src}
                                    alt={img.label}
                                />
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
