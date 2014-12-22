(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var Player, Players;
    Player = (function(_super) {
      __extends(Player, _super);

      function Player() {
        return Player.__super__.constructor.apply(this, arguments);
      }

      return Player;

    })(Backbone.Model);
    return Players = (function(_super) {
      __extends(Players, _super);

      function Players() {
        return Players.__super__.constructor.apply(this, arguments);
      }

      Players.prototype.model = Player;

      Players.prototype.url = function() {
        return "./players/";
      };

      return Players;

    })(Backbone.Collection);
  });

}).call(this);
