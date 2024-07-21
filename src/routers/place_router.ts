import { placeControlers } from "../controllers/place_controllers";
import { MESSAGE_INVALID_ACTION } from "../utils/message";
import { Message, MessageResponse, ResponseType } from "../utils/type";

export async function routerPlace(message: Message): Promise<MessageResponse> {
    if (message.action.indexOf("/place") === 0) {
        return await placeControlers.getAllPlaceNearly(message?.body?.latitude, message?.body?.longitude, message?.body?.type)
    }

    return { responseType: ResponseType.ERROR, message: MESSAGE_INVALID_ACTION, body: null }
}


