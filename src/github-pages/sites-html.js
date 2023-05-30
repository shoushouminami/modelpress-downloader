const ga = require("../google-analytics");
const React = require("react");
const ReactDOM = require("react-dom");
const SupportedSites = require("../components/supported-sites");
const {getGA4UID} = require("../ga/ga4-uid");

ga.bootstrap("sites-html.js");
ga.bootstrapGA4();
ReactDOM.render(
    <SupportedSites
        sites={require("../inject/sites").all()}
    />,
    document.getElementById("supported-sites-react-root")
);
