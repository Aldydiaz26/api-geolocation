import { logController } from "../controllers/log_controller";
import { MESSAGE_ERROR_ADDRESS} from "../utils/message";
import { Message, MessageResponse, ResponseType } from "../utils/type";

export async function routerLog(Message: Message): Promise<MessageResponse> {
    if (Message.action === "/log/all") {
        return await logController.getAll()
    }

    return { responseType: ResponseType.ERROR, message: MESSAGE_ERROR_ADDRESS, body: null }

}