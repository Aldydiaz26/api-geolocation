import { sprintf } from "sprintf-js"
import { ADDRESS_URL_BY_NAME } from "../utils/url"

async function getDetailByAddress(addressName: string): Promise<any> {
  const url = sprintf(ADDRESS_URL_BY_NAME, addressName)
  //console.log("URL: " + url)

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)

  return data
}

async function getDetailByLatitudeAndLongitude(latitude: number, longitude: number): Promise<any> {
  const url = sprintf(ADDRESS_URL_BY_NAME, latitude, longitude)
  //console.log("URL: " + url)

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)

  return data
}

export { getDetailByAddress, getDetailByLatitudeAndLongitude }

//getDetailByAddress("Olmos 2010, Laferrere, La Matanza, Argentina")