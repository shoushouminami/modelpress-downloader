const React = require("react");
const ga = require("../google-analytics");
const i18n = require("../i18n");
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
        // TODO remove once optValue custom dimension is ready
        ga.trackEventGA4(`cfg_${e.target.id}_${String(newVal)}`);
        ga.trackEventGA4(`cfg_${e.target.id}`, {
            "optValue": String(newVal)
        });
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
