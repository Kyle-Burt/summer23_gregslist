import { AppState } from "../AppState.js"
import { housesService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouse() {
    const houses = AppState.houses

    let template = ''

    houses.forEach(h => template += h.houseTemplate)

    setHTML('houseListing', template)
}

export class HousesController {
    constructor() {
        console.log('Houses Controller Working!', AppState.houses);
        _drawHouse()
    }

    createHouse(event) {
        event.preventDefault()
        console.log('Did the form submit?');

        const form = event.target

        const houseData = getFormData(form)

        console.log('house data!', houseData);

        housesService.createHouse(houseData)

        form.reset()

    }
}