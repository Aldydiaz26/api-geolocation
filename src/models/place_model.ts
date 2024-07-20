import { getAllPlaceNearly } from "../external_api/place_api";
import { Place, PlaceType } from "./place";


class PlaceModel {
    public async getAllPlaceNearly(latitude: number, longitude: number, type: PlaceType): Promise<Place[] | string> {
        const placeJson = await getAllPlaceNearly(latitude, longitude, type)

        console.info("[resultado]" + JSON.stringify(placeJson))
          
        return placeJson.results

    }

}
export const placeModel= new PlaceModel();