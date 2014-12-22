define ["desc_parser"], (parser) ->

    class Play extends Backbone.Model
        parse: (response) ->
            console.log(response);
            response.description = parser.parse(response.description, response.play_type);
            response
    class Plays extends Backbone.Collection
        model: Play
        url: -> "./plays/"

    return {
        Play: Play,
        Plays: Plays
    }