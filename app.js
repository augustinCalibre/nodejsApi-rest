// Cette application est une application pour la mise en place d'une API

const express = require('express');
const app = express();

const bodyparser = require('body-parser')

// Importer le  fichier de connection à la base de données Mongoose
require('./models/dbconfigmodels')
//Importer le modèle de la table posts
require('./models/postmodel')
const cors = require('cors')


 



// Anlyse la requête et le type de contenu, 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors());

// Midleware pour laa communication avec la base de donnée
const postRoutes = require('./routes/postroute')

app.use('/posts', postRoutes)







app.listen(5500, () => console.log('Server Starting'))
