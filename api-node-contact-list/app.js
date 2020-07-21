// Requires
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const PORTA = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rotas
const contactRoutes = require('./routes/contact.routes')

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

// Conexão com base de dados
mongoose.connect('mongodb://localhost:27017/contatos_2020',{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then( _ => console.log('Conectado com sucesso ao MongoDB') )
    .catch( e => { 
        console.log({errors:e})
        process.exit()
    })
  
app.use(cors(corsOptions))
// Registrar as Rotas 
app.use('/contatos', contactRoutes)

app.listen( PORTA, () => {
    console.log(`Express server rodando na porta ${PORTA}: \x1b[32m%s\x1b[0m`, 'online')
})

  