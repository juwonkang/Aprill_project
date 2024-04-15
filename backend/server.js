const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('MongoDB connected...')
})

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

const Item = mongoose.model('Item', ItemSchema)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
