const path = require('path')

module.exports = {
    // Source files
    src: path.resolve(__dirname, '../web/src'),

    // Production build files
    build: path.resolve(__dirname, '../web/dist'),

    // Templates
    templates: path.resolve(__dirname, '../templates'),
}
