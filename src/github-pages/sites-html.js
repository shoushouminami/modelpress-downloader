const ga = require("../google-analytics");
const React = require("react");
const ReactDOM = require("react-dom");
const SupportedSites = require("../components/supported-sites");

ga.bootstrap("sites-html.js");
ReactDOM.render(
    <SupportedSites
        sites={require("../inject/sites").all()}
    />,
    document.getElementById("supported-sites-react-root")
);
