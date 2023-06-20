const React = require("react");
const i18n = require("../i18n");
const sites = require("../inject/sites");
const {SiteIcon} = require("./site-icon");
const ga = require("../google-analytics");
const {getRecentSites, clearRecentSites} = require("../recent-sites");

class RecentSitesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentSites: getRecentSites()
        };
    }

    handleSiteClick(host, href) {
        ga.trackEvent("recent_icon", "clicked", host);
        ga.trackEventGA4("recent_icon_click", {
            "domain": host
        });
    }

    clearRecentSites() {
        ga.trackEvent("recent_icon", "removed");
        ga.trackEventGA4("recent_icon_clear");
        clearRecentSites();
        this.setState({
            recentSites: getRecentSites()
        });
    }

    render() {
        let recentSites = this.state.recentSites.map(
            host => sites.getByWindowLocation({host:host})
        ).filter (site => !site.hidden)
            .map(site =>
                <SiteIcon
                    key={site.host}
                    url={site.url}
                    host={site.host}
                    image={site.image}
                    handleSiteClick={this.handleSiteClick}
                />
            )
        if (recentSites.length > 0) {
            return (
                <div id="recentSites">
                    <div className="controlButton" onClick={(e) => this.clearRecentSites()}>
                        <img src="images/delete.svg" className="controlButtonImg" />
                    </div>
                    <div className="sectionTitle">
                        {/*recent sites*/}
                        <div>{i18n.getText("recentClicks")}</div>
                    </div>
                    {recentSites}
                    <hr/>
                </div>
            );
        } else {
             return null;
        }
    }
}

exports.RecentSites = RecentSitesComponent;

