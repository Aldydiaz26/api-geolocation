export enum RequestType{
    GET_DETAIL_BY_ADDRESS = "GET_DETAIL_BY_ADDRESS",
    GET_GET_DETAIL_BY_LATITUDE_AND_LONGITUDE = "GET_GET_DETAIL_BY_LATITUDE_AND_LONGITUDE",
    GET_ALL_PLACE_NEARLY = "GET_ALL_PLACE_NEARLY",
    GET_DETAIL_BY_LATITUDE_AND_LONGITUDE = "GET_DETAIL_BY_LATITUDE_AND_LONGITUDE",
}

export enum Action {
    REQUEST = "REQUEST",
    RESPONSE = "RESPONSE",
}

export interface Log {
    type: RequestType,
    action: Action,
    params: any | null,
    body: any | null,
}