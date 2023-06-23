import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HouseService {
    createHouse(houseData) {

        const newHouse = new House(houseData)

        console.log('house constructed', newHouse);

        AppState.houses.push(newHouse)
    }
}

export const housesService = new HouseService()