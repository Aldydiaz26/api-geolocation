interface Component {
    country: string
    state: string
    city: string
    postcode: string
    road: string
}

interface Geometry {
    latitude: number
    longitude: number
}

interface Address {
    components: Component
    geometry: Geometry
    formatted: string 
}
