(function() {
  define([], function() {
    var Parser;
    Parser = (function() {
      function Parser(description, playType) {
        this.description = description;
        this.playType = playType;
        this.players = [];
        this.parsedObj = {};
        _.bindAll(this, "eval");
      }

      Parser.prototype["eval"] = function(word) {
        var lastname, match, regex;
        regex = /(\d{1,})-(\D).(\D{0,})/g;
        match = regex.exec(word);
        if ((match != null)) {
          lastname = match[3].replace(".", "").replace(",", "").replace(";", "");
          return this.players.push({
            number: parseInt(match[1]),
            firstletter: match[2],
            lastname: lastname
          });
        }
      };

      Parser.prototype.parse = function() {
        this.prepareDescription();
        switch (this.playType) {
          case "KICK OFF":
            return this.parseKickoffPlayers();
          case "PASS":
            return this.parsePassPlayers();
          case "RUSH":
            return this.parseRushPlayers();
          case "PUNT":
            return this.parsePuntPlayers();
          default:
            return this.parsedObj;
        }
      };

      Parser.prototype.parseKickoffPlayers = function() {
        this.parsedObj["kicker"] = this.players[0];
        this.parsedObj["receiver"] = this.players[1];
        return this.parsedObj;
      };

      Parser.prototype.prepareDescription = function() {
        this.description = this.description.replace(/[()]/g, '');
        this.description = this.description.replace("NO HUDDLE, SHOTGUN", "NHS");
        return _.each(this.description.split(" "), this["eval"]);
      };

      Parser.prototype.parsePassPlayers = function() {
        this.parsedObj["thrower"] = this.players[0];
        this.parsedObj["receiver"] = this.players[1];
        this.parsedObj["tackler"] = this.players[2];
        this.parsedObj["extras"] = this.players.slice(3);
        return this.parsedObj;
      };

      Parser.prototype.parseRushPlayers = function() {
        this.parsedObj["rusher"] = this.players[0];
        this.parsedObj["tacklers"] = this.players.slice(1);
        return this.parsedObj;
      };

      Parser.prototype.parsePuntPlayers = function() {
        this.parsedObj["kicker"] = this.players[0];
        return this.parsedObj;
      };

      Parser.prototype.parseNoPlay = function() {
        return console.log("no play: " + this.description);
      };

      Parser.prototype.parseExtraPointPlayers = function() {
        return console.log("xtra: " + this.description);
      };

      return Parser;

    })();
    return {
      parse: function(description, playType) {
        var p;
        p = new Parser(description, playType);
        return p.parse();
      }
    };
  });

}).call(this);
