# TRABAJO PRÁCTICO N°3 

## Introducción 

Esta es una API sobre geolocalización, nos sirve para buscar **direcciones** y **negocios** dentro de un radio establecido. Para esto, se consume dos APIs distintas que se complementan:

- [OpenCage Geocoding API] (https://opencagedata.com/)
- [Places Google API](https://developers.google.com/maps/documentation/places/web-service/nearby-search?hl=es_419)

Este proyecto se encuentra modularizado siguiendo al patrón MVC, desarrollado en el lenguaje de typescript. Para poder ejecutar los request se crearon un server y un client.


### Detalle funcional

La información que brinda esa API es:

- **El datalle completo de la dirección recibida por parámetro**. 

```bash
  { action: "/address/name", body: { addressName: "Av. Juan de Garay 4202, CABA, Argentina" } }
```

Recibe como atributo una dirección (adressName) de tipo string y obligatoria, que se buscará y completará con mayor detalle. En el archivo [address.ts](./src/models/address.ts), en la interfaz Address se puede ver el detalle de todo lo que se retorna, entre ellos la dirección formateada. 
En el archivo [client.ts] (./client.ts) se pueden ver el mensaje que se deben enviar (línea 6). También hay unos con error, para ver como responde la api (líneas de la 8 a la 10).


- **El detalle completo según la latitud y longitud pasada por parámetro**. 

```bash
 { action:"/address/geometry" , body: { latitude: 37.7937, longitude: -122.3965 } }
```

Recibe como atributo una latitud y longitud de tipo numérico, ambos obligatorios.

En el archivo [client.ts] (./client.ts) se pueden ver los mensajes que se deben enviar (desde la línea 11 a la 15).


- **Retorna todos los negocios que están en un radio de 500 metros, a partir de una latitud y longitud en particular, y un tipo de lugar**.

```bash
  { action: "/place", body: { latitude: 37.7937, longitude: -122.3965, type: "restaurant" } }
```

  Recibe como atributo una latitud, longitud y un tipo de negocio a buscar.
  Los posibles tipos de negocio son:
  1. restaurant
  2. pizza_restaurant
  3. shopping_mall
  En el archivo [client.ts] (./client.ts) se pueden ver los mensajes con las distintas pruebas (desde la línea 18 a la 21).


- **Logs**.

```bash
{ action: "/log/all" }
```

Por cada invocación, se guardaron los requests y responses. Con esta acción se obtienen esos datos.
En el archivo [client.ts](./client.ts) se puede ver el mensaje asociados a esta funcionalidad (línea 24). 

A partir de la linea 27 de éste mismo archivo se pueden observar otros mensajes para comprobar validaciones.

### Detalle técnico

El proyecto fue modularizado en las siguientes carpetas:

- controllers: Dentro de esta carpeta vamos a encontrar los controllers relacionados a las diversas funciones (address, place y log)
- database: En esta carpeta se encuentra la lógica para guardar los logs, en un json, y asi poder leerlos. 
- external_api: Se encuentran los requests a las apis externas, dividido por funcionalidades (address, place)
- models: tiene las interfaces (adress.ts, place.ts, log.ts) y clases (address_model.ts, place_model.ts y log_model.ts) asociadas a los modelos. Cada clase posee la conexión con la external api o database.
- routers: Acá se encuentran las rutas a las distintas funcionalidades. En el archivo app.ts está la entrada a las distintas rutas (address_router.ts, place_router.ts y log_router.ts).
- utils: Dentro de esta carpeta vamos a encontrar archivos auxiliares, como urls, constantes que poseen mensajes de error, etc.

El index.ts representa el server, mientras que el client.ts al cliente.

El proyecto corre en el puerto 3000.

### Para poder ejecutarlo, siga estos pasos:

**1- Instale las dependencias:** 
npm i

**2- Ejecute:**
npm run build

**3- Primero ejecute el server con la siguiente instrucción:**
npm run server

**4- Luego, cuando el server esté escuchando (en la consola tiene que ver el mensaje "Listening in port: 3000"), ejecute la siguiente instrucción para que el cliente funcione:**
npm run client

El resultado de la acción que haya ejecutado, la verá en la terminal/consola donde esté ejecutando el client. Dentro del archivo client.ts puede ir descomentando y comentando cada prueba, si lo desea.
