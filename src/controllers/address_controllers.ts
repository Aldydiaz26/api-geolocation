import { getDetailByLatitudeAndLongitude } from "../external_api/address_api";
import { addressModel } from "../models/address_model";

class AddressControllers {
    async getDetailByAddress(addressName: string) {
        return await addressModel.getDetailByAddress(addressName)
    }
    async getDetailByLatitudeAndLongitude(latitude: number, longitude: number){
        return await addressModel.getDetailByLatitudeAndLongitude(latitude,longitude)
    }
    }

    export const addressControllers = new AddressControllers()

    