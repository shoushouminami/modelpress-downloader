const React = require("react");
const Toggle = require("./toggle");

function DownloadOptions({ stOptions, handleOptionChange, handleOptionCommit}) {
    // sort entries by index
    const optSorter = (a, b) => a[1].index - b[1].index;
    const optionMapEntries = Object.entries(stOptions).sort(optSorter);

    if (!optionMapEntries.length) {
        return null;
    }

    return (
        <div className="site-option-container">
            {optionMapEntries.map(([name, stOpt], i) => {
                // nested options are handled together in top level option
                // so skip here
                if (name.indexOf(":") > -1) {
                    return null;
                }

                const id = "option" + i;
                // get nested options with name:<sub_option_name>
                const nestedOptsEntries = optionMapEntries.filter(
                    ([nestedName, nestedOpt]) => nestedName.startsWith(name + ":")
                ).sort(optSorter);

                // Allow sites to disable certain options
                if (stOpt.hidden) {
                    return null;
                }

                return (
                    <>
                        {renderSiteOption(stOpt, name, id)}
                        {
                            nestedOptsEntries.map(([nestedName, nestedOpt], nestedI) => (
                                renderSiteOption(nestedOpt, nestedName, id + "_" + nestedI, true, nestedOpt.hidden === true)
                            ))
                        }
                    </>
                )
            })}
        </div>
    );

    function renderSiteOption(stOpt, name, id, isNested = false, isCollapsed = false) {
        const className = isNested ?
            (isCollapsed ?
                "site-option site-option-nested is-hidden"
                : "site-option site-option-nested"
            )
            : "site-option";

        switch (stOpt.type) {
            case "checkbox":
                return (
                    <div key={id} className={className}>
                        <label htmlFor={id} className="site-option-label" title={stOpt.description}>{stOpt.label}</label>
                        <Toggle
                            id={id}
                            className="site-option-checkbox"
                            checked={stOpt.checked}
                            handleToggle={checked => handleOptionCommit(name, checked)} />
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
                    <div key={id} className={className}>
                        <label htmlFor={id} className="site-option-label" title={stOpt.description}>{stOpt.label}</label>
                        <span className="site-option-range">
                            <input
                                id={id}
                                type="range"
                                className="site-option-range-slider"
                                min={stOpt.min}
                                max={stOpt.max}
                                value={stOpt.value}
                                onChange={e => handleOptionChange(name, e.target.value)}
                                onPointerUp={e => handleOptionCommit(name, e.target.value)} />
                            <span className="site-option-range-label">{stOpt.value}</span>
                        </span>

                    </div>
                );

            case "text":
                return (
                    <div key={id} className={className}>
                        <label htmlFor={id} className="site-option-label" title={stOpt.description}>{stOpt.label}</label>
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
                            onChange={e => handleOptionCommit(name, e.target.value)} />
                    </div>
                );

            default:
                return null;
        }
    }
}

module.exports = DownloadOptions;
