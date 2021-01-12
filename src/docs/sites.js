const React = require("react");
const ReactDOM = require("react-dom");
const ga = require("../google-analytics");

ga.bootstrap();

class DocSites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: props.sites
        };
    }

    handleSiteClick(siteUrl) {
        ga.trackEvent("doc_icon", "clicked", siteUrl);
        window.location.href = siteUrl;
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
                    <div id="app-name">Currently works on these sites</div>
                </div>
                {sitesIcons}
            </div>
        );
    }
}

ReactDOM.render(
    <DocSites sites={require("../inject/sites").all()}/>,
    document.getElementById("react-root")
);

