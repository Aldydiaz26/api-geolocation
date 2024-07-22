import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
    // Address requests
    const message = { action: "/address/name", body: { addressName: "Olmos 2010, Laferrere, La Matanza, Argentina" } }
    // const message = { action: "/address/name", body: { addressName: "" } }
    // const message = { action: "/address/name", body: { addressName: null } }
    // const message = { action: "/address/name", body: {  } }
    // const message = { action: "/address/name" }
    //  const message = { action:"/address/geometry" , body: {latitude: 37.7937, longitude: -122.3965 } }
    //  const message = { action:"/address/geometry" , body: {latitude: 37.7937 } }
    //  const message = { action:"/address/geometry" , body: { longitude: -122.3965 } }
    //  const message = { action:"/address/geometry" , body: { } }
    //  const message = { action:"/address/geometry" }

    // Place requests
    // const message = { action: "/place", body: { latitude: 37.7937, longitude: -122.3965, type: "restaurant" } }
    // const message = { action: "/place", body: { latitude: 37.7937, longitude: -122.3965, type: "pizzalog" } }
    // const message = { action: "/place", body: { longitude: -122.3965, type: "pizza_restaurant" } }
    // const message = { action: "/place", body: { latitude: 37.7937, type: "shopping_mall" } }

    // Incorrect requests
    // const message = {  }
    // const message = { action: "" }
    // const message = { action: "/request" }

    // Log requests
    // const message = { action: "/log/all" }

    const request = JSON.stringify(message)
    client.write(request)
});


client.on("data", (serverMessage: string) => {
    const mensaje = serverMessage.toString();
    console.log(mensaje);
});