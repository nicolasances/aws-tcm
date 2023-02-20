const Controller = require('toto-api-controller');
const config = require('./config')
const fs = require('fs')

const getTCM = require('./dlg/GetTCM')

var apiName = "tcm"

console.log(`AWS DocDB Certificate exists? ${fs.existsSync("./rds-combined-ca-bundle.pem")}`)

const api = new Controller(apiName, config.config);

api.path('GET', '/tcm', getTCM);

api.listen();