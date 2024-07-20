import { placeControlers } from "../controllers/place_controllers";
import { Message } from "../utils/message_type";

export async function routerPlace(message: Message) {
    if (message.action.indexOf("/place") === 0) {
        return await placeControlers.getAllPlaceNearly(message.body.latitude, message.body.longitude, message.body.type)
    }

    return "the action is incorrect"
}


