import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use((req, res, next) => {
  console.log('Receving request...')
  req.time = Date.now()

  next()
})

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})