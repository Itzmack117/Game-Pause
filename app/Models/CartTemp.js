import _store from "../Store.js"

export default class Cart {
    get cartTemplate() {
        return /*html*/  `<div class="sb"><span>${_store.State.games["title"]}</span><span>$${_store.State.games["price"]}</span></div>`
    }
}