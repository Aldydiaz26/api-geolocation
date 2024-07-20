import { Message } from "../utils/message_type";
import { routerAddress } from "./address_router";
import { routerPlace } from "./place_router";
//validarque esto sea correcto
export async function router(data: string) {
    const message: Message = JSON.parse(data)
    if (message.action.indexOf("/address") === 0 ) {
        return await routerAddress(message)
    }

    if (message.action.indexOf("/place") === 0 ) {
        return await routerPlace(message)
    }

    return "the action is incorrect"

}

