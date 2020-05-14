import { generateId } from "../utils.js"

export default class Game {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.genre = data.genre
        this.price = data.price
    }
    get Template() {
        return /*html*/  `<div class="col-sm-3">
                        <div class="card card-color">
                            <h2 class="card-title text-center">${this.title}</h2>
                            <img src="${this.imgUrl}" class="card-img-top img-cap">
                            <div class="card-body">
                                <h4><div class="card-text">${this.genre}</div><div>$${this.price}</div></h4>
                                </div>
                                <a href="#" class="btn btn-primary" onclick="app.gameController.buy('${this.id}')">Buy</a>
                        </div>
                    </div>`
    }
}