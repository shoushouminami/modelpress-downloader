const React = require("react");
const ga = require("../google-analytics");
const globals = require("../globals");
const chrome = globals.getChrome();

function SupportRequest(props) {
    return (<div id="support-request" hidden="hidden">
        You can request support for this website <a
        href="https://docs.google.com/forms/d/1RVrtZfl22pGhGgvm8SFxmdTRG7yQ-er75s60-CpUK_8">here</a>
    </div>);
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
        chrome.tabs.update({url:siteUrl});
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
            <div id="supported-sites" hidden="hidden">
                <div>
                    <div id="app-name">Modelpress Image Downloader</div>
                </div>
                <SupportRequest />
                <div>
                    <div id="supported-sites-title">Supported Websites:</div>
                </div>
                {sitesIcons}
            </div>
        );
    }
}

module.exports = SupportedSites;
