require("dotenv").config()
const express = require('express')
const hbs = require('hbs');
const app = express()

const port = process.env.PORT
//handlebars
app.set('view engine', 'hbs');
//los partial son archivos que reutilizaremos en los archivos hbs como un footer
//para usar el footer se pone ahi {{> footer }}
hbs.registerPartials(__dirname + '/views/partials');

//usara la carp public, donde esta su css
app.use(express.static("public"))
//por defecto si vas a la ruta / este ira al archivo index del public
//si no tiene ese archivo entonces ira a la ruta de abajo con "/"
app.get("/",(req,res)=>{
  res.render("home",{
    name:"hola"
  })
  })

app.get("/generic",(req,res)=>{
  res.render("generic",{
    name:"hola"
  })
  })

//sendfile usara el archivo del public
app.get("*",(req,res)=>{
res.sendFile(__dirname+"/public/404.html")
})


app.listen(port,()=>{
  console.log(`Puerto http://localhost:${port} listo!!!`)
})

//vid5
//instalar npm i express
//https://www.npmjs.com/package/express
//copiar y hacer unas pruebas con nodemon
//el * es un comodin donde se vera cualquier ruta que escribamos
//ver aqui su doc http://expressjs.com/en/starter/installing.html

//vid6
//servir contenido estatico
//para hacerlo, siempre se crea una carpeta public-index.html donde ira el express
//usar el app use donde express statc usara la carp public
//en el html crear algo
//en el segundo app donde hace un get a la ruta.para que vaya a la /ruta del static
//entonces crear dentro del public una carp ruta - index.html-recordar que siempre cuando va a una carp
//el express va a su index
//en el app get con el comodin-como no podemos crear una carp * en el public,entonces lo crearemos ahi como otro html
//se accede a ese html en el app.get mandando como res.sendfile a la ruta del archivo 404.html
//para acceder a ese archivo se pone el _dirname (este te trae una ruta exacta hasta su padre,que es la carp del proyecto)
//estando ahi se le concatena el public/archivo 404.html que queremos acceder

//vid7
//probar una carp- con el app static
//al ver la ruta de la pagina-sale con html-hacer un app,get con la ruta sin el html
//para que aparezca ese archivo
//en el nav del index tambien configurarlo

//vid8
//usar handlebars para express https://github.com/pillarjs/hbs
//esta extension creo que hace un pre compilado de una pagina(plantillas) para que cargue mas rapido y se le manda como res
//al endpoint osea una ruta-en public hacer un respaldo de la carp de template del proyect original
//instalar el handle para expres  npm install hbs - traer lo que dice su doc
//crear una carp views y crear un arch home.hbs donde estara ahi el index html del template
//crear otra ruta y renderizar el arch home 

//vid9
//al render se pone un segundo param como obj y ahi se pone algunas props
//esas props se pueden usar en el hbs,usarlo ahi como si fuera un jsx { {"aqui una prop"}}

//vid10
//ahora usar los partials de handlebars
//ir a su doc y pegarlo aqui-crear una carp partials en en view-crear arch para retutilizar una
//parte del codigo-y se usa con {{>"el nombre del archivo"}}
//tambien se debe renderizar las pag element y generic-crear sus archivos en el view-y cambiar las rutas
//ahora funciona si esta antes del app use public

//vid11
//instalar el dotenv y crear un env con el port dentro
//al subir tu aplicacion - donde lo subas este te da un puerto automatico como variable de entorno
//al tener el dotenv , si te da el housting,usara la de este, si no te da, entonces
//usara lo que has puesto en el env
//en el pkjson-el housting debe saber que script ejecutar para iniciar la aplicacion- poner ahi el start
//crear el gitignore nodemodules

//vid12
//despliege de heroku
//ver si tienes heroku con heroku --version
//heroku login   para logear
//en tu proyecto git init
//heroku git:remote -a curso-node-prueba12    - el ultimo es el nombre que has creado en heroku
//git add . y git commit -m "algo"
//git branch para ver en que rama estas
//git push heroku main

//vid13
//los archivos de react para ejecutarlo,estos necesitan un servidor http
//descargar https://www.npmjs.com/package/http-server y seguir las instrucciones http-server -o en la carp del proyecto
//copiar los arch de una carp y pegarlo en el public
//comentar lo de hbs y el get / ya que app use static usara el index del public y usar node app

//vid14
//para ver la url de adonde has pusheado es git remote -v
//para reemplazar lo anterior osea en el vid12-hacer de nuevo el git add . - commit -git push heroku main