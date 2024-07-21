import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  // const mensaje = { action: "/address/name", body: { addressName: "" } }
  //  const mensaje = { action:"/address/geometry" , body: {latitude: "", longitude:"" } }
  const mensaje = { action: "/place", body: { latitude: 37.7937, longitude: -122.3965, type: "pizzalog" } }

  const message = JSON.stringify(mensaje);
  client.write(message);
});


client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
  console.log(mensaje);
});