const React = require("react");
const ga = require("../google-analytics");
const globals = require("../globals");
const chrome = globals.getChrome();
const i18n = require("../i18n");

function SupportRequest(props) {
    let inner = {__html: i18n.getText("supportMessageML")};
    return (
        <div id="support-request" dangerouslySetInnerHTML={inner}>
        </div>
    );
}

class SupportedSites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: props.sites
        };
    }

    handleSiteClick(siteUrl) {
        ga.trackEvent("site_icon", "clicked", siteUrl);
        if (globals.isChromeExtension()) {
            chrome.tabs.update({url: siteUrl});
        }
    }

    render() {
        let sitesIcons = this.state.sites
            .filter(site => !site.hidden)
            .map(site => {
                let url = new URL(site.url || "https://" + site.host);
                let image = site.image || "../images/" + url.host + ".png";
                return (
                    <div className="site" key={url}>
                        <a className="siteLink" href={url} onClick={(e) => this.handleSiteClick(url.href)}>
                            <img className="siteIcon" src={image} alt={url} title={url}/>
                        </a>
                    </div>
                );
            });

        return (
            <div id="supported-sites">
                <div>
                    <div id="app-name">{i18n.getText("appName")}</div>
                </div>
                <SupportRequest/>
                <div>
                    <div id="supported-sites-title">{i18n.getText("supportedSitesTitle")}</div>
                </div>
                {sitesIcons}
            </div>
        );
    }
}

module.exports = SupportedSites;
