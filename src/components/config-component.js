const React = require("react");
const ga = require("../google-analytics");
const i18n = require("../i18n");
const logger = require("../logger2")(module.id);
const config = require("../config");
const {clearRecentSites} = require("../recent-sites");

class ConfigComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = config.getConfigMap();
    }

    inputChanged(e) {
        const newVal = !this.state[e.target.id];
        config.setConf(e.target.id, newVal);
        ga.trackEvent("config_change", e.target.id, newVal + "");
        ga.trackEventGA4("config_change", Object.fromEntries([[String(e.target.id), String(newVal)]]));
        this.setState(config.getConfigMap())
        // check side effects on config change
        if (!config.keepRecentClicks()) {
            clearRecentSites();
        }
    }

    render() {
        // ga.trackPageViewGA4("Config");
        return (
            <div id="configComponent">
                <div className="configRow">
                    <label htmlFor={config.KEEP_RECENT_CLICKS}>{i18n.getText("configKeepRecentClicks")}</label>
                    <input id={config.KEEP_RECENT_CLICKS} type="checkbox" className="configCheckbox" checked={this.state[config.KEEP_RECENT_CLICKS]}
                           onChange={(e) => this.inputChanged(e)}/>
                </div>
               <div className="configRow">
                   <label htmlFor={config.DOWNLOAD_PREPEND_JOBID}>{i18n.getText("configDownloadPrependJobId")}</label>
                   <input id={config.DOWNLOAD_PREPEND_JOBID} type="checkbox" className="configCheckbox" checked={this.state[config.DOWNLOAD_PREPEND_JOBID]}
                          onChange={(e) => this.inputChanged(e)}/>
               </div>
            </div>
        );
    }

    componentDidMount(){
        document.title = "Config"
    }
}

exports.ConfigComponent = ConfigComponent;
