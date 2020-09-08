const rewiremock = require('rewiremock/webpack');
rewiremock.overrideEntryPoint(module);
module.exports = rewiremock
