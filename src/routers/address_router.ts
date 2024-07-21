import { addressControllers } from "../controllers/address_controllers";
import { MESSAGE_INVALID_ACTION } from "../utils/message";
import { Message, MessageResponse, ResponseType } from "../utils/type";

export async function routerAddress(message: Message): Promise<MessageResponse> {
    if (message.action === "/address/name") {
        return await addressControllers.getDetailByAddress(message?.body?.addressName)
    }

    if (message.action === "/address/geometry") {
        return await addressControllers.getDetailByLatitudeAndLongitude(message?.body?.latitude, message?.body?.longitude)
    }

    return { responseType: ResponseType.ERROR, message: MESSAGE_INVALID_ACTION, body: null }
}
