import { sprintf } from "sprintf-js"
import { PLACE_URL } from "../utils/url"
import { GOOGLE_API_KEY } from "../utils/api_key"

const MAX_QUANTITY_RESULTS: number = 20
const RADIUS: number = 1000

async function getAllPlaceNearly(latitude: number, longitude: number, type: string): Promise<any> {
    const raw = JSON.stringify({
        "includedTypes": [type],
        "maxResultCount": MAX_QUANTITY_RESULTS,
        "locationRestriction": {
            "circle": {
                "center": {
                    "latitude": latitude,
                    "longitude": longitude
                },
                "radius": RADIUS
            }
        }
    });

    // console.log("[log] " + raw)

    const response = await fetch(PLACE_URL, {
        method: "POST",
        headers: {
            "X-Goog-FieldMask": "places.displayName",
            "Content-Type": "application/json",
            "X-Goog-Api-Key": GOOGLE_API_KEY
        },
        body: raw,
        redirect: "follow"
    })
    const data = await response.json()

    // console.log(JSON.stringify(data))

    return data
}

export { getAllPlaceNearly }

// getAllPlaceNearly(37.7937, -122.3965, "restaurant")