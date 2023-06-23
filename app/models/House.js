import { generateId } from "../utils/generateId.js";

export class House {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description || 'Family home for sale'
        this.img = data.imgUrl
    }

    get houseTemplate() {
        return /*HTML*/`
        <div class="container-fluid">
            <section class="row">
                <div class="col-12">
                <h1>Houses</h1>
                </div>
            </section>
            <div>
                <div class="col-10 m-auto mb-2">
                    <section class="row bg-light elevation-5">
                        <div class="col-4">
                            <img class="img-fluid"
                            src="${this.img}"
                            alt = "${this.name}" >
                        </div >
                        <div class="col-8">
                            <h2>${this.year}</h2>
                            <h3>${this.name}</h3>
                            <h4>Bedrooms: ${this.bedrooms}</h4>
                            <h4>Bathrooms: ${this.bathrooms}</h4>
                            <h4>sq feet: ${this.sqft}</h4>
                            <h4>$${this.price}</h4>
                            <p>${this.description}</p>
                        </div>
                    </section>
                </div >
            </div >
        </div >
        `
    }
}