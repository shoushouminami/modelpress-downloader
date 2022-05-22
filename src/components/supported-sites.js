const React = require("react");
const ga = require("../google-analytics");
const i18n = require("../i18n");
const {SiteIcon} = require("./site-icon");
const {RecentSites} = require("./recent-sites-component");
const sites = require("../inject/sites");
const logger = require("../logger2")(module.id);
const {wait} = require("../utils/async-utils");
const {BrowserRouter, Link, Routes, Route, Outlet, useLocation} = require("react-router-dom");
const {ConfigComponent} = require("./config-component");

function SupportRequest(props) {
    let inner = {__html: i18n.getText("supportMessageML")};
    return (
        <div id="supportRequest" dangerouslySetInnerHTML={inner}>
        </div>
    );
}

class SupportedSites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: sites.all(),
            query: "",
            showQuery: false,
            currentPage: "/",
            configButtonTo: "config"
        };
        this.queryInput = React.createRef();
    }

    handleSiteClick(host) {
        ga.trackEvent("site_icon", "clicked", host);
        if (this.state.query !== "") {
            ga.trackEvent("site_query", "used", host);
        }
    }

    filterSites(e) {
        const q = e.target.value;
        this.setState({
            query: q,
            sites: q.trim().length === 0 ? sites.all() : sites.search(q)
        });
    }

    toggleQuery() {
        const newVal = !this.state.showQuery;
        if (newVal) {
            // somehow focus wouldn't work unless in async call
            wait(50).then(() => document.querySelector("#siteQuery input").focus());
        }
        this.setState({showQuery: newVal})
        ga.trackEvent("query_icon", "clicked");
    }

    handleConfigIconClick(e) {
        logger.debug("config button CLICKED", e)
        // const to = useLocation().pathname === "/config" ? "config": "/";
        ga.trackEvent("config_icon", "clicked");
    }

    render() {
        let sitesIcons = this.state.sites
            .filter(site => !site.hidden)
            .map(site => <SiteIcon
                    key={site.host}
                    url={site.url}
                    host={site.host}
                    image={site.image}
                    handleSiteClick={() => {this.handleSiteClick(site.host)}}
                />
            );

        return (
            <div id="supportedSites">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <div id="appName">
                                    {i18n.getText("appName")}
                                </div>
                                <Outlet />
                            </div>
                        }>
                            {/* site icons route */}
                            <Route path="*" element={
                                <div>
                                    <div className="topControlRow">
                                        <div className="controlButton">
                                            <Link to="config"
                                                  onClick={(e) => this.handleConfigIconClick(e)}
                                            >
                                                <img src="images/gear.svg" className="controlButtonImg" />
                                            </Link>
                                        </div>
                                        <div className="controlButton" onClick={(e) => {this.toggleQuery()}}>
                                            <img src="images/search.svg" className="controlButtonImg" hidden={this.state.showQuery} />
                                        </div>
                                        <div id="siteQuery" className="topControl" >
                                            <input type="input" hidden={!this.state.showQuery} ref={this.queryInput} size="10"
                                                   value={this.state.query} onChange={(e) => this.filterSites(e)}/>
                                        </div>
                                    </div>
                                    <SupportRequest/>
                                    <hr/>
                                    <RecentSites />
                                    {sitesIcons}
                                </div>
                            } />
                            {/* config route */}
                            <Route path="config" element={<ConfigComponent />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

module.exports = SupportedSites;
