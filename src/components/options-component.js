const React = require("react");
const Toggle = require("./toggle");

function DownloadOptions({ stOptions, handleOptionChange, handleOptionCommit}) {
    // sort entries by index
    const optionMapEntries = Object.entries(stOptions).sort((a, b) => a[1].index - b[1].index);

    if (!optionMapEntries.length) {
        return null;
    }

    return (
        <div className="site-option-container">
            {optionMapEntries.map((entry, i) => {
                const name = entry[0];
                const stOpt = entry[1];
                const id = "option" + i;

                // Allow sites to disable certain options
                if (stOpt.hidden === true) {
                    return;
                }

                switch (stOpt.type) {
                    case "checkbox":
                        return (
                            <div key={id} className="site-option">
                                <label htmlFor={id} className="site-option-label">{stOpt.label}</label>
                                <Toggle
                                    id={id}
                                    className="site-option-checkbox"
                                    checked={stOpt.checked}
                                    handleToggle={checked => handleOptionCommit(name, checked)}
                                />
                                {/* <input
                                    id={id}
                                    type="checkbox"
                                    className="site-option-checkbox"
                                    checked={stOpt.checked}
                                    onChange={e => handleOptionCommit(name, e.target.checked)}
                                /> */}
                            </div>
                        );

                    case "range":
                        return (
                            <div key={id} className="site-option">
                                <label htmlFor={id} className="site-option-label">{stOpt.label}</label>
                                <span className="site-option-range">
                                    <input
                                        id={id}
                                        type="range"
                                        className="site-option-range-slider"
                                        min={stOpt.min}
                                        max={stOpt.max}
                                        value={stOpt.value}
                                        onChange={e => handleOptionChange(name, e.target.value)}
                                        onPointerUp={e => handleOptionCommit(name, e.target.value)}
                                    />
                                    <span className="site-option-range-label">{stOpt.value}</span>
                                </span>
                                
                            </div>
                        );

                    case "text":
                        return (
                            <div key={id} className="site-option">
                                <label htmlFor={id} className="site-option-label">{stOpt.label}</label>
                                {/* clickable pattern tags */}
                                {Array.isArray(stOpt.possiblePatternList) && stOpt.possiblePatternList.length > 0 && (
                                    <div style={{ margin: "4px 0" }}>
                                        {stOpt.possiblePatternList.map((pattern) => (
                                            <span
                                                key={pattern}
                                                onClick={() => handleOptionCommit(name, stOpt.value + pattern)} // or append: stOpt.value + pattern
                                                style={{
                                                    padding: "3px 6px",
                                                    backgroundColor: "#eee",
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                    fontSize: "0.85em",
                                                    userSelect: "none",
                                                }}
                                            >
                                                {pattern}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <input
                                    id={id}
                                    type="text"
                                    className="site-option-text"
                                    value={stOpt.value}
                                    onChange={e => handleOptionCommit(name, e.target.value)}
                                />
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}

module.exports = DownloadOptions;
