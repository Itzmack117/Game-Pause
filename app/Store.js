import Game from "./Models/GameTemp.js"
import { generateId } from "./utils.js";

let _state = {
    games: [
        new Game({ id: generateId(), title: "Grand Theft Auto V", genre: "Free-Roam", price: 0, imgUrl: "https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg" }),
    ],
    basket: []
}

class Store {
    get State() {
        return _state;
    }
    addGame(game) {
        _state.games.push(game)
    }
    addCart(game) {
        _state.basket.push(game)
        console.log(_state.basket)
    }
}

const STORE = new Store();
export default STORE 