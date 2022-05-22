const React = require("react");
const ga = require("../google-analytics");
const globals = require("../globals");
const {addRecentSite} = require("../recent-sites");

class SiteIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            host: props.host,
            image: props.image,
            handleSiteClick: props.handleSiteClick
        }
    }

    handleSiteClick(host, href) {
        if (this.state.handleSiteClick) {
            this.state.handleSiteClick(host, href);
        }
        addRecentSite(host);
        if (globals.isChromeExtension()) {
            chrome.tabs.update({url: href});
        }
    }

    render() {
        let url = new URL(this.state.url || "https://" + this.state.host);
        let image = this.state.image || "../images/" + url.host + ".png";
        return (
            <div className="site">
                <a className="siteLink" href={url.href} onClick={(e) => this.handleSiteClick(url.host, url.href)}>
                    <img className="siteIcon" src={image} alt={url} title={url}/>
                </a>
            </div>
        );
    }
}

exports.SiteIcon = SiteIcon;
