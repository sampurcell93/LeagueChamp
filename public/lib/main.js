require.config({
    urlArgs: "bust=" + new Date().getTime(),
    paths: {
        "backbone"      : "bower_components/backbone/backbone",
        "underscore"    : "bower_components/underscore/underscore-min",
        "jquery"        : "bower_components/jquery/dist/jquery.min",
        "desc_parser"   : "modules/dist/desc_parser",
        "players"       : "modules/dist/players",
        "plays"         : "modules/dist/plays"
    }
})


define(["jquery", "backbone", "underscore"], function($, Backbone, _) {
    require(["desc_parser", "players", "plays"], function(parser, players, plays) {
        var p = new plays.Plays();
        console.log(p);
        var promise = p.fetch()
        promise.success(function() {
            console.log(p);
        })
    })
})