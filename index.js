const Controller = require('toto-api-controller');
const config = require('./config')

const getTCM = require('./dlg/GetTCM')

var apiName = "tcm"

const api = new Controller(apiName, config.config);

api.path('GET', '/tcm', getTCM);

api.listen();