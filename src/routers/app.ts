import { MESSAGE_INVALID_ACTION } from "../utils/message";
import { Message, MessageResponse, ResponseType } from "../utils/type";
import { routerAddress } from "./address_router";
import { routerLog } from "./log_router";
import { routerPlace } from "./place_router";

export async function router(data: string): Promise<MessageResponse> {
    if (data === "") {
        return { responseType: ResponseType.ERROR, message: MESSAGE_INVALID_ACTION, body: null}
    }

    const message: Message = JSON.parse(data)
    if (!message || !message.action || message.action === "") {
        return { responseType: ResponseType.ERROR, message: MESSAGE_INVALID_ACTION, body: null}
    }

    if (message.action.indexOf("/address") === 0) {
        return await routerAddress(message)
    }

    if (message.action.indexOf("/place") === 0) {
        return await routerPlace(message)
    }

    if (message.action.indexOf("/log") === 0) {
        return await routerLog(message)
    }
    
    return { responseType: ResponseType.ERROR, message: MESSAGE_INVALID_ACTION, body: null }
}

