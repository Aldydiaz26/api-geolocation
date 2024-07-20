import { addressControllers } from "../controllers/address_controllers";
import { Message } from "../utils/message_type";

export async function routerAddress(message: Message) {
    if (message.action === "/address/name") {
        return await addressControllers.getDetailByAddress(message.body.addressName)
    }

    if (message.action === "/address/geometry") {
        return await addressControllers.getDetailByLatitudeAndLongitude(message.body.latitude, message.body.longitude)
    }

    return "the action is incorrect"
}
