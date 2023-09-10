# microservices_timestap

```javascript
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
```

- **express**: Importamos el módulo Express, que es un framework de Node.js para crear aplicaciones web.

- **app**: Creamos una instancia de la aplicación Express para manejar nuestras rutas y configuración.

- **cors**: Importamos el módulo `cors`, que nos permite habilitar el intercambio de recursos entre diferentes dominios, lo que es útil para permitir solicitudes desde otros sitios web.

- `app.use(cors())`: Utilizamos el middleware `cors()` para habilitar el manejo de solicitudes de diferentes orígenes (CORS) en nuestra aplicación.

- `app.use(express.static("public"))`: Configuramos Express para servir archivos estáticos desde el directorio "public". Esto es útil para servir archivos HTML, CSS, JavaScript y otros recursos estáticos.

```javascript
app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;
  let date;

  // Comprobamos si dateParam está vacío
  if (!dateParam) {
    date = new Date(); // Si dateParam está vacío, utilizamos la hora actual
  } else if (!isNaN(dateParam)) {
    date = new Date(parseInt(dateParam)); // Convertimos el parámetro en un objeto Date si es un número
  } else {
    date = new Date(dateParam); // Intentamos analizar el parámetro como una cadena de fecha
  }

  // Verificamos si la fecha es válida
  if (isNaN(date)) {
    res.json({ error: "Fecha inválida" });
  } else {
    // Si la fecha es válida, respondemos con un objeto JSON que contiene el timestamp Unix y la fecha UTC
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});
```

- `app.get("/api/:date", (req, res) => { ... }`: Definimos una ruta GET "/api/:date" que captura un parámetro de fecha desde la URL.

- `const dateParam = req.params.date;`: Capturamos el valor del parámetro de fecha desde la URL.

- Comprobamos si `dateParam` está vacío o es un número, y luego creamos un objeto `Date` basado en el valor proporcionado.

- Verificamos si la fecha es válida. Si no es válida, respondemos con un objeto JSON que contiene un mensaje de error.

- Si la fecha es válida, respondemos con un objeto JSON que contiene el timestamp Unix y la fecha UTC.

```javascript
const listener = app.listen("3000", () => {
  console.log("La aplicación está escuchando en el puerto " + listener.address().port);
});
```

- Creamos un servidor HTTP escuchando en el puerto 3000.

- Imprimimos un mensaje en la consola indicando que la aplicación está escuchando en el puerto especificado.
