module.exports = {
    deprecated: require('./deprecated.json'),
    discarded: require('./discarded.json'),
    wikipedia: require('./wikipedia.json'),
    imperial: require('./imperial.json'),
    featureIcons: require('maki/www/maki-sprite.json'),
    locales: require('./locales.json'),
    en: require('../dist/locales/en.json'),
    suggestions: require('./name-suggestions.json'),
    addressFormats: require('./address-formats.json'),
    phoneFormats: require('./phone-formats.json'),
    driveLeft: require('./drive-left.json'),
    presets: {
        presets: require('./presets/presets.json'),
        defaults: require('./presets/defaults.json'),
        categories: require('./presets/categories.json'),
        fields: require('./presets/fields.json')
    },
    imagery: require('./imagery.json')
};
