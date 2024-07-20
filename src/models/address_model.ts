import { getDetailByAddress, getDetailByLatitudeAndLongitude } from "../external_api/address_api"
import { MESSAGE_ERROR_ADDRESS } from "../utils/message"
import { Address } from "./address"

const HTTP_STATUS_CODE: number = 200

class AddressModel {
    public async getDetailByAddress(addressName: string): Promise<Address[] | string> {
        // todo
        const detailJson = await getDetailByAddress(addressName)

        console.info("[resultado] " + JSON.stringify(detailJson))
        
        if (detailJson?.status?.code !== HTTP_STATUS_CODE) {
            console.error("ERROR") // completar mensaje
            return MESSAGE_ERROR_ADDRESS
        }
        
        return detailJson.results
    }

    public async getDetailByLatitudeAndLongitude(latitude: number, longitude: number): Promise<Address[] | string> {
        //todo
        const detailJson = await getDetailByLatitudeAndLongitude(latitude, longitude)

        console.info("[resultado] " + JSON.stringify(detailJson))

        if (detailJson?.status?.code !== HTTP_STATUS_CODE){
            console.error("ERROR")
            return MESSAGE_ERROR_ADDRESS
        }

        return detailJson.results
    }
}