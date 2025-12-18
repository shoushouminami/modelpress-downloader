const React = require("react");
const {useState} = React;
require('../toggle.css');

function Toggle({checked, handleToggle, className}) {
    const [checkedState, setCheckedState] = useState(checked);

    const toggleCheckedState = (checked) => {
        setCheckedState(checked);
        return true; // allow chaining
    };

    return (
        <div className={"controlButton " + (className ?? "")} >
            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    onChange={e => toggleCheckedState() && handleToggle(e.target.checked) }
                    checked={checkedState}
                />
                <label
                    htmlFor="toggle"
                    className="toggle-slider"
                />
            </div>
        </div>
    );
}

module.exports = Toggle;
