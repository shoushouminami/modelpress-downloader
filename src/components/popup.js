const React = require("react");
const ga = require("../google-analytics");
const globals = require("../globals");
const chrome = globals.getChrome();
const i18n = require("../i18n");
const SupportedSites = require("./supported-sites");
const logger = require("../logger");

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
    return (
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
    let helpLink = props.appFetchStatus === "error" ?
        (<a id="downloadMobileStatusHelpLink" href={i18n.getText("downloadMobileStatusFailedHelp")}>?</a>)
        : null;
    let downloadMobileStatusText;
    logger.debug("appFetchStatus=", props.appFetchStatus);
    switch (props.appFetchStatus) {
        case "started":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextInProgress");
            break;
        case "200":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextSuccess", null, [props.appImageCount])
            break;
        case "404":
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextNotFound");
            break;
        case "error": // fall through to default case
        default:
            downloadMobileStatusText = i18n.getText("downloadMobileStatusTextFailed");
    }

    return (
        <div id="downloadMobileStatus">
            <span id="downloadMobileStatusText">
                {downloadMobileStatusText}
            </span>
            {helpLink}
        </div>
    );
}

export class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supported: props.supported,
            count: props.count,
            loading: props.loading,
            hasAppImage: props.hasAppImage,
            hasAppPerm: props.hasAppPerm,
            appFetchStatus: props.appFetchStatus, // null, "started", "200", "404", "error"
            appImageCount: props.appImageCount,
        };
        this.permHandler = props.permHandler;
        this.downloadHandler = props.downloadHandler;
        logger.debug("constructor: appFetchStatus=", props.appFetchStatus);
    }

    render() {
        const st = this.state;
        if (st.supported) {
            let permOrStatus;
            if (st.hasAppImage) {
                const appState = this.state.appState;
                if (!st.hasAppPerm) {
                    permOrStatus = <DownloadMobilePermission
                        onClick={this.permHandler}
                    />;
                } else {
                    permOrStatus = <DownloadMobileStatus
                        appFetchStatus={st.appFetchStatus}
                        appImageCount={st.appImageCount}
                    />;
                }
            }

            return (
                <div>
                    <DownloadButton
                        count={st.count}
                        loading={st.loading}
                        onClick={this.downloadHandler}
                    />
                    {permOrStatus}
                </div>
            );
        } else {
            return <SupportedSites sites={require("../inject/sites").all()}/>
            // TODO double check support link
            // addClickListenerForLinks(document.getElementById("support-request"), () => {
            //     ga.trackEvent("support_link", "clicked");
            // });
        }
    }
}
