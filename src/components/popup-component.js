const React = require("react");
const i18n = require("../i18n");
const SupportedSites = require("./supported-sites");
const logger = require("../logger2")(module.id);
const window = require("../globals").getWindow();
const ScrollableImagePicker = require("./scrollable-image-picker-component");
const DownloadOptions = require("./options-component");

function DownloadButton({ count, disabled, hasImage, loading , onClick}) {
    document.title = "Download Button";
    let btnDisabled = disabled;
    let text;
    if (hasImage) {
        text = i18n.getText("downloadButtonMessage", null, [count]);
    } else {
        if (loading) {
            text = "⌛";
        } else {
            btnDisabled = true;
            text = i18n.getText("noImageMessage")
        }
    }

    return (
        <button id="download" className="row" disabled={btnDisabled ? "disabled": null} onClick={onClick}>
            <span id="buttonText"><span id="count">{text}</span></span>
        </button>
    );

}

function DownloadMobileStatus(props) {
    let helpLink = props.appFetchStatus === "error" ?
        (<a id="downloadMobileStatusHelpLink" href={i18n.getText("downloadMobileStatusFailedHelp")}>?</a>)
        : null;
    let downloadMobileStatusText;
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
        <div id="downloadMobileStatus" className="row">
            <span id="downloadMobileStatusText">
                {downloadMobileStatusText}
            </span>
            {helpLink}
        </div>
    );
}

class PopupComponent extends React.Component {
    constructor(props) {
        super(props);
        logger.debug("initializing with props", props);
        this.state = {
            supported: props.supported,
            loading: props.loading,
            hasAppImage: props.hasAppImage,
            hasAppPerm: props.hasAppPerm,
            appFetchStatus: props.appFetchStatus, // null, "started", "200", "404", "error"
            appImageCount: props.appImageCount,
            downloadDisabled: false,
            options: props.options,
            imageThumbnails: props.imageThumbnails,
            selectedIndexes: null
        };
        this.downloadHandler = props.downloadHandler;
        this.optionHandler = props.optionHandler;
        this.imagePickerHandler = props.imagePickerHandler;
        this.downloadClicked = this.downloadClicked.bind(this);
    }

    downloadClicked() {
        if (this.state.selectedIndexes && this.state.selectedIndexes.length === 0) {
            // no image selected, no op
            return ;
        }

        this.setState({
            downloadDisabled: true
        });
        
        this.downloadHandler({}, function (){
            window.close();
        });
    }

    handleOptionChange(name, newValue) {
        const options = this.state.options;

        logger.debug("handleOptionChange", name, newValue);

        if (options[name].type === "checkbox") {
            options[name].checked = newValue;
        } else {
            options[name].value = newValue;
        }

        // update userInteracted flag
        options[name].userInteracted = true;
        
        this.setState({
            options: options
        });
    }

    handleOptionCommit(name, newValue) {
        this.handleOptionChange(name, newValue);

        if (this.optionHandler) {
            this.optionHandler(this.state.options);
        }
    }


    handleImagePicker(selectedIndexes) {
        this.setState({ selectedIndexes, downloadDisabled: false });
        this.imagePickerHandler?.(selectedIndexes);
        logger.debug("handleImagePicker", selectedIndexes);
    }

    render() {
        let st = this.state;
        if (st.supported) {
            let permOrStatus;
            if (st.hasAppImage) {
                if (!st.hasAppPerm) {
                    permOrStatus = <DownloadMobileStatus
                        appFetchStatus="error"
                        appImageCount={st.appImageCount}
                    />;
                } else {
                    permOrStatus = <DownloadMobileStatus
                        appFetchStatus={st.appFetchStatus}
                        appImageCount={st.appImageCount}
                    />;
                }
            }

            const hasImage = this.state.imageThumbnails.length > 0;
            return (
                <div>
                    <DownloadButton
                        count={this.state.selectedIndexes ? this.state.selectedIndexes.length : this.state.imageThumbnails.length}
                        hasImage={hasImage}
                        loading={st.loading}
                        onClick={() => this.downloadClicked()}
                        disabled={this.state.downloadDisabled}
                    />
                    {permOrStatus}
                    {hasImage && <DownloadOptions stOptions={st.options} handleOptionChange={(n,v) => this.handleOptionChange(n,v)} handleOptionCommit={(n,v) => this.handleOptionCommit(n,v)} /> }
                    {hasImage &&<ScrollableImagePicker images={this.state.imageThumbnails} onChange={(e) => this.handleImagePicker(e)}/> }
                </div>
            );
        } else {
            return <SupportedSites />
            // return <SupportedSites />
            // TODO double check support link
        }
    }
}

exports.DownloadButton = DownloadButton;
exports.DownloadMobileStatus = DownloadMobileStatus;
exports.PopupComponent = PopupComponent;
