const utils = require('loader-utils')

module.exports = function (code) {
    const {appName, appConfig} = utils.getOptions(this)
    const {importName} = appConfig[appName]
    code = code.replace(/\/\/import/, importName)
    code = code.replace(/Rendering app now/,`Rendering ${appName} now`)
    return code
}