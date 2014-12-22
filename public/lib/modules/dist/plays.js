(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["desc_parser"], function(parser) {
    var Play, Plays;
    Play = (function(_super) {
      __extends(Play, _super);

      function Play() {
        return Play.__super__.constructor.apply(this, arguments);
      }

      Play.prototype.parse = function(response) {
        console.log(response);
        response.description = parser.parse(response.description, response.play_type);
        return response;
      };

      return Play;

    })(Backbone.Model);
    Plays = (function(_super) {
      __extends(Plays, _super);

      function Plays() {
        return Plays.__super__.constructor.apply(this, arguments);
      }

      Plays.prototype.model = Play;

      Plays.prototype.url = function() {
        return "./plays/";
      };

      return Plays;

    })(Backbone.Collection);
    return {
      Play: Play,
      Plays: Plays
    };
  });

}).call(this);
