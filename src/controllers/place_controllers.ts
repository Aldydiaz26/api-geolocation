import { PlaceType } from "../models/place"
import { placeModel } from "../models/place_model"

class PlaceControllers {
    async getAllPlaceNearly(latitude: number, longitude: number, type: PlaceType){
        return await placeModel.getAllPlaceNearly(latitude,longitude,type)
    }
}


export const placeControlers = new PlaceControllers()
