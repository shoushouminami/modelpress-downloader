const React = require("react");
const { useState, useEffect } = React;

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
        <div style={{ maxWidth: 400 }}>
            <div style={{ marginBottom: 8 }}>
                <button type="button" onClick={deselectAll}>
                    Deselect all
                </button>
                <button type="button" onClick={selectAll}>
                    Select all
                </button>
                <span style={{ marginLeft: 8, fontSize: 12 }}>
                    Selected: {selectedIds.length}/{normalizedImages.length}
                </span>
            </div>

            {/* Scrollable container */}
            <div
                style={{
                    maxHeight: 300,          // adjust as needed
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    padding: 4
                }}
            >
                {normalizedImages.map((img) => {
                    const selected = selectedIds.includes(img.index);

                    return (
                        <label
                            key={"img" + img.index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "4px 2px",
                                borderBottom: "1px solid #eee",
                                cursor: "pointer",
                                gap: 8
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={selected}
                                onChange={() => toggle(img.index)}
                            />

                            <span style={{ marginLeft: 8, fontSize: 12 }}>
                                {img.index + 1}
                            </span>
                            <img
                                src={img.src}
                                alt={img.label}
                                style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "cover",
                                    borderRadius: 4,
                                    flexShrink: 0
                                }}
                            />
                            <span style={{ marginLeft: 8, fontSize: 12 }}>
                                {img.label}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

module.exports = ScrollableImagePicker;
