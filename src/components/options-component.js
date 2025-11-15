const React = require("react");

function DownloadOptions({ stOptions, handleOptionChange, handleOptionCommit}) {
    // sort entries by index
    const optionMapEntries = Object.entries(stOptions).sort((a, b) => a[1].index - b[1].index);

    if (!optionMapEntries.length) {
        return null;
    }

    return (
        <div>
            {optionMapEntries.map((entry, i) => {
                const name = entry[0];
                const stOpt = entry[1];
                const id = "option" + i;

                switch (stOpt.type) {
                    case "checkbox":
                        return (
                            <div key={id}>
                                <label htmlFor={id}>{stOpt.label}</label>
                                <input
                                    id={id}
                                    type="checkbox"
                                    checked={stOpt.checked}
                                    onChange={e => handleOptionCommit(name, e.target.checked)}
                                />
                            </div>
                        );

                    case "range":
                        return (
                            <div key={id}>
                                <label htmlFor={id}>{stOpt.label}</label>
                                <input
                                    id={id}
                                    type="range"
                                    min={stOpt.min}
                                    max={stOpt.max}
                                    value={stOpt.value}
                                    onChange={e => handleOptionChange(name, e.target.value)}
                                    onPointerUp={e => handleOptionCommit(name, e.target.value)}
                                />
                                <span>{stOpt.value}</span>
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
