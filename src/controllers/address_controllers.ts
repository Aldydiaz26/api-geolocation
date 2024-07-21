import { Address } from "../models/address";
import { addressModel } from "../models/address_model";
import { Action, Log, RequestType } from "../models/log";
import { logModel } from "../models/log_model";
import { MESSAGE_MISSING_PARAMETER } from "../utils/message";
import { MessageResponse, ResponseType } from "../utils/type";

class AddressControllers {
    async getDetailByAddress(addressName: string | null | undefined): Promise<MessageResponse> {
        const requestLog: Log = { type: RequestType.GET_DETAIL_BY_ADDRESS, action: Action.REQUEST, params: { addressName }, body: null }

        if (!addressName) {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: MESSAGE_MISSING_PARAMETER, body: null }
            const responseLog: Log = { type: RequestType.GET_DETAIL_BY_ADDRESS, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const result: Address[] | string = await addressModel.getDetailByAddress(addressName)
        if (typeof result === "string") {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: result, body: null }
            const responseLog: Log = { type: RequestType.GET_DETAIL_BY_ADDRESS, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }
        const responseLog: Log = { type: RequestType.GET_DETAIL_BY_ADDRESS, action: Action.RESPONSE, params: null, body: response }
        // it's not waiting (await) because I don't want it to be blocking
        logModel.save(requestLog, responseLog)

        return response
    }

    async getDetailByLatitudeAndLongitude(latitude: number | null | undefined, longitude: number | null | undefined): Promise<MessageResponse> {
        const requestLog: Log = { type: RequestType.GET_DETAIL_BY_LATITUDE_AND_LONGITUDE, action: Action.REQUEST, params: { latitude, longitude }, body: null }

        if (!latitude || !longitude) {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: MESSAGE_MISSING_PARAMETER, body: null }
            const responseLog: Log = { type: RequestType.GET_DETAIL_BY_LATITUDE_AND_LONGITUDE, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const result: Address[] | string = await addressModel.getDetailByLatitudeAndLongitude(latitude, longitude)
        if (typeof result === "string") {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: result, body: null }
            const responseLog: Log = { type: RequestType.GET_DETAIL_BY_LATITUDE_AND_LONGITUDE, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }
        const responseLog: Log = { type: RequestType.GET_DETAIL_BY_LATITUDE_AND_LONGITUDE, action: Action.RESPONSE, params: null, body: response }
        // it's not waiting (await) because I don't want it to be blocking
        logModel.save(requestLog, responseLog)

        return response
    }

}

export const addressControllers = new AddressControllers()
