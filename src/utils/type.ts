export enum ResponseType {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
}

export interface Message {
    action: string,
    body: any | null,
}

export interface MessageResponse {
    responseType: ResponseType,
    message: string | null,
    body: any | null,
}
