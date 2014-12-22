define [], ->

    class Parser
        constructor: (@description, @playType) ->
        parse: ->
            switch (@playType)
                when "KICK OFF" then @parseKickoff();
                when "PASS" then @parsePass();
                when "RUSH" then @parseRush();
                when "PUNT" then @parsePunt()
        parseKickoff: ->
            # console.log("kickoff")
            # console.log(@description)
            # debugger
        parsePass: ->
            console.log "pass"
            console.log(@description)
            debugger
        parseRush: ->
            console.log "rush"
        parsePunt: ->
            console.log "punt"

    return {
        parse: (description, playType) ->
            p = new Parser description, playType
            p.parse()
    }