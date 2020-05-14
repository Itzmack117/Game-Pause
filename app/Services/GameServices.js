import _store from "../Store.js"
import Game from "../Models/GameTemp.js"

class GameService {
    buy(game) {
        _store.addCart(game)
        console.log("buy")
    }
    newGame(rawGame) {
        let game = new Game(rawGame)
        _store.addGame(game)
    }
    findGame(gameId) {
        let item = _store.State.games.find(g => g.id == gameId)
        return item
    }
}
const GAME_SERVICE = new GameService()
export default GAME_SERVICE