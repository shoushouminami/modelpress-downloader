const ga = require("./google-analytics");
const {getGA4UID} = require("./ga/ga4-uid");
ga.bootstrap("google-analytics-bootstrap.js");
ga.bootstrapGA4();
