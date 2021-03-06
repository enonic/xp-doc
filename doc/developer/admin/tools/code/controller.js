var mustache = require('/lib/xp/mustache');
var portalLib = require('/lib/xp/portal');
var adminLib = require('/lib/xp/admin');

function handleGet() {
    var view = resolve('./my-view.html');

    var params = {
        adminUrl: adminLib.getBaseUri(),
        assetsUrl: portalLib.assetUrl({path: ''}),
        appName: 'My custom tool'
    };

    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}

exports.get = handleGet;
