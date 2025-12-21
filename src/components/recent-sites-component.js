const React = require("react");
const i18n = require("../i18n");
const sites = require("../inject/sites");
const {SiteIcon} = require("./site-icon");
const ga = require("../google-analytics");
const {getRecentSites, clearRecentSites} = require("../recent-sites");
const Toggle = require("./toggle");
const config = require("../config");

class RecentSitesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentSites: getRecentSites()
        };
    }

    handleSiteClick(host, href) {
        ga.trackEventGA4("recent_icon_click", {
            "domain": host
        });
    }

    clearRecentSites() {
        ga.trackEventGA4("recent_icon_clear");
        clearRecentSites();
        this.setState({
            recentSites: getRecentSites()
        });
    }

    handleRecentSitesToggle(checked) {
        config.setKeepRecentClicks(checked);
        ga.trackEventGA4(`cfg_${config.KEEP_RECENT_CLICKS}_${String(checked)}`);
        // check side effects on config change
        if (!checked) {
            this.clearRecentSites(); 
        }
    }

    render() {
        let recentSites = this.state.recentSites.map(
            host => sites.getByWindowLocation({host:host})
        ).filter(site => site != null)
            .filter (site => !site.hidden)
            .map(site =>
                <SiteIcon
                    key={site.host}
                    url={site.url}
                    host={site.host}
                    image={site.image}
                    handleSiteClick={this.handleSiteClick}
                />
            )
        return (
            <div id="recentSites">
                <Toggle
                    className="controlButton"
                    checked={config.keepRecentClicks()}
                    handleToggle={(checked) => this.handleRecentSitesToggle(checked)}
                />
                <div className="controlButton" onClick={(e) => this.clearRecentSites()}>
                    <img src="images/delete.svg" className="controlButtonImg" />
                </div>
                <div className="sectionTitle">
                    {/*recent sites*/}
                    <div>{i18n.getText("recentClicks")} </div>
                </div>
                {recentSites}
                <hr />
            </div>
        );
    }
}

exports.RecentSites = RecentSitesComponent;

