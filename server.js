const express = require('express')
const fallback = require('express-history-api-fallback')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
const root = path.resolve(__dirname, 'build')

app.use('/', express.static(root))
app.use(fallback('index.html', { root }))

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
