(function() {
  define([], function() {
    var Parser;
    Parser = (function() {
      function Parser(description, playType) {
        this.description = description;
        this.playType = playType;
      }

      Parser.prototype.parse = function() {
        switch (this.playType) {
          case "KICK OFF":
            return this.parseKickoff();
          case "PASS":
            return this.parsePass();
          case "RUSH":
            return this.parseRush();
          case "PUNT":
            return this.parsePunt();
        }
      };

      Parser.prototype.parseKickoff = function() {};

      Parser.prototype.parsePass = function() {
        console.log("pass");
        console.log(this.description);
        debugger;
      };

      Parser.prototype.parseRush = function() {
        return console.log("rush");
      };

      Parser.prototype.parsePunt = function() {
        return console.log("punt");
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
