define [], ->

    # Parses a description string for players
    class Parser
        constructor: (@description, @playType) ->
            @players = []
            @parsedObj = {}
            _.bindAll @, "eval"
        eval: (word) ->
            regex = /(\d{1,})-(\D).(\D{0,})/g
            match = regex.exec(word)
            if (match?) 
                lastname = match[3].replace(".","").replace(",","").replace(";","")
                @players.push({
                    number: parseInt match[1]
                    firstletter: match[2]
                    lastname: lastname
                })
        parse: ->
            @prepareDescription()
            switch (@playType)
                when "KICK OFF" then @parseKickoffPlayers();
                when "PASS" then @parsePassPlayers();
                when "RUSH" then @parseRushPlayers();
                when "PUNT" then @parsePuntPlayers()
                else @parsedObj
                # when "EXTRA POINT" then @parseExtraPointPlayers()
                # when "NO PLAY" then @parseNoPlay()
        parseKickoffPlayers: ->
            @parsedObj["kicker"] = @players[0];
            @parsedObj["receiver"] = @players[1];
            @parsedObj
        prepareDescription: ->
            @description = @description.replace(/[()]/g,'');
            @description = @description.replace("NO HUDDLE, SHOTGUN", "NHS");
            _.each @description.split(" "), @eval
        parsePassPlayers: ->
            @parsedObj["thrower"] = @players[0]
            @parsedObj["receiver"] = @players[1];
            @parsedObj["tackler"] = @players[2];
            @parsedObj["extras"] = @players.slice(3)
            @parsedObj
        parseRushPlayers: ->
            @parsedObj["rusher"] = @players[0]
            @parsedObj["tacklers"] = @players.slice(1)
            @parsedObj
        parsePuntPlayers: ->            
            @parsedObj["kicker"] = @players[0];
            @parsedObj;
        parseNoPlay: ->
            console.log("no play: " + @description)
        parseExtraPointPlayers: ->
            console.log("xtra: " + @description)

    return {
        parse: (description, playType) ->
            p = new Parser description, playType
            p.parse()
    }