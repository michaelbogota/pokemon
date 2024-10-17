---
description: 'Pagina dedicada a explicar el ejecicio en clase:'
---

# Page Pokemon

```
const app = express();
```

Se instancia la libreria express la cual nos ayuda a tener un servidor en node js.

```
app.use(cors());
```

Se usa la libreria cors para habilitar el llamado desde el front con diferente dominio.

```
app.use(express.json());
```

Se agrega el uso del parseador json de expreses, para manejar json como entrada y salida del servidor.

```
app.use(express.urlencoded({ extended: true }));
```

Se agrega el uso de la codificación de parametros de la url en las peticiones.

```
app.use("/public", express.static("public/"));
```

Se establece una ruta base public para todos los archivos estaticos de express para el front end.

```
app.set("view engine", "ejs");
```

Se establece el motod de procesamiento de vistas para express. El que se usa es ejs.

```
app.set("views", "./views");
```

Se establece la ruta donde van a quedar la rutas de las vistas para el frontend para express.

```
app.get("/", (req, res) => {
    res.render("inicio", {});
});
```

Se establece la ruta inicial / con el metodo get. y se le indica a express que renderiza la vista inicio.

```
app.use("/", router);
```

Se cargan las rutas a express desde router que es un objecto "express.Router()".

```
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`);
});
```

Se define una constante que puede tomar un valor fijo o tomar una variable de entorno de node js. Luego se usa este valor para inicializar el servidor de express.



**Vistas**

```
<%- include('includes/header') %>
```

Se usa esta expresion para unir partes de templates en otro template. En este caso se esta inyectando el template header.

```
<% pokemons.forEach(function(pokemon) { %>
```

Esta expression se usa para recorrer un array que devuelve el controlador de una vista, en este  caso se esta iterando la lista de pokemons que devuelve el controlador.

```
return JSON.parse(fs.readFileSync("./src/resources/pokedex.json").toString());
```

Esta expresion se esta usando en el controlador de pokemones para buscar un archivo estatico con los pokemones con sus nombres, descripciones, etc.
