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

export function DownloadMobilePermission(props) {
    return !props.granted && (
        <div id="downloadMobilePermission">
            <label id="downloadMobileLabel" htmlFor="downloadMobileCheck">
                {i18n.getText("downloadMobileLabel")}
            </label>
            <input type="checkbox" id="downloadMobileCheck" name="downloadMobile" onChange={props.onClick}/>
            <a id="downloadMobilePermissionHelpLink" href={i18n.getText("downloadMobileStatusHelpLink")}>?</a>
        </div>
    );
}

export function DownloadMobileStatus(props) {
    let helpLink = props.helpLink ?
        (<a id="downloadMobileStatusHelpLink" href={props.helpLink}>?</a>)
        : null;
    return props.granted ? (
        <div id="downloadMobileStatus">
            <span id="downloadMobileStatusText">
                {props.status}
            </span>
            {helpLink}
        </div>
    ) : null;
}

class Popup extends React.Component {

}
