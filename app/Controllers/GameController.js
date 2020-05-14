import _store from "../Store.js"
import GAME_SERVICE from "../Services/GameServices.js";
function _draw() {
    let games = _store.State.games
    let template = ""
    games.forEach(g => template += g.Template);
    document.getElementById("g-card").innerHTML = template
}

export default class GameController {
    constructor() {
        _draw()
    }
    newGame(event) {
        event.preventDefault()
        debugger
        let formData = event.target
        let rawGame = {
            title: formData.title.value,
            imgUrl: formData.imgUrl.value,
            genre: formData.genre.value,
            price: formData.price.value,
        }
        formData.reset()
        GAME_SERVICE.newGame(rawGame)
        _draw()
    }
    buy(id) {
        let item = GAME_SERVICE.findGame(id)
        GAME_SERVICE.buy(id)
    }
}