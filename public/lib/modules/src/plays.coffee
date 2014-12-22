define ["desc_parser"], (parser) ->

    class Play extends Backbone.Model
        parse: (response) ->
            response.players = parser.parse(response.description, response.play_type);
            response.game_date = new Date(response.game_date);
            response
    class Plays extends Backbone.Collection
        model: Play
        url: -> "./plays/"

    return {
        Play: Play,
        Plays: Plays
    }