const React = require("react");
const ga = require("../google-analytics");
const globals = require("../globals");
const chrome = globals.getChrome();
const i18n = require("../i18n");

export function DownloadButton(props) {
    let text;
    let disabled;
    if (props.count) {
        text = i18n.getText("downloadButtonMessage", null, [props.count]);
    } else {
        disabled = "disabled";
        if (props.loading) {
            text = "⌛";
        } else {
            text = i18n.getText("noImageMessage")
        }
    }

    return (
        <button id="download" disabled={disabled} onClick={props.onClick}>
            <span id="buttonText"><span id="count">{text}</span></span>
        </button>
    );
}

class Popup extends React.Component {

}
