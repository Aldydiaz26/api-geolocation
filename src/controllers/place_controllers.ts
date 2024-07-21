import { Action, Log, RequestType } from "../models/log"
import { logModel } from "../models/log_model"
import { Place, PlaceType } from "../models/place"
import { placeModel } from "../models/place_model"
import { MESSAGE_INCORRECT_PLACE_TYPE, MESSAGE_MISSING_PARAMETER } from "../utils/message"
import { MessageResponse, ResponseType } from "../utils/type"

class PlaceControllers {
    async getAllPlaceNearly(latitude: number | null | undefined, longitude: number | null | undefined, type: PlaceType | null | undefined): Promise<MessageResponse> {
        const requestLog: Log = { type: RequestType.GET_ALL_PLACE_NEARLY, action: Action.REQUEST, params: { latitude, longitude, type }, body: null }

        if (!latitude || !longitude || !type) {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: MESSAGE_MISSING_PARAMETER, body: null }
            const responseLog: Log = { type: RequestType.GET_ALL_PLACE_NEARLY, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        if (!Object.values(PlaceType).includes(type)) {
            const error: MessageResponse = { responseType: ResponseType.ERROR, message: MESSAGE_INCORRECT_PLACE_TYPE, body: null }
            const responseLog: Log = { type: RequestType.GET_ALL_PLACE_NEARLY, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const result: Place[] = await placeModel.getAllPlaceNearly(latitude, longitude, type)

        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }

        const responseLog: Log = { type: RequestType.GET_ALL_PLACE_NEARLY, action: Action.RESPONSE, params: null, body: response }
        logModel.save(requestLog, responseLog)

        return response
    }
}

export const placeControlers = new PlaceControllers()
