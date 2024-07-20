import { API_KEY } from "./api_key";

const ADDRESS_BASE_URL: string = "https://api.opencagedata.com/geocode/v1/json?pretty=1&key=" + API_KEY

export const ADDRESS_URL_BY_NAME: string = `${ADDRESS_BASE_URL}&q=%s`

export const ADDRESS_URL_BY_LATITUDE_AND_LOGITUDE: string = `${ADDRESS_BASE_URL}&q=%s%2C%s` // latitude and then logitude

export const PLACE_URL: string = "https://places.googleapis.com/v1/places:searchNearby"