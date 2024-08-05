const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { renderToStaticMarkup } = require('react-dom/server') // Добавьте import
const { BrowserRouter, Routes, Route } = require('react-router-dom')

const path = require('path')

const About = require('../pages/client/About')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>,
  )
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Multipage SSR App</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="/client.js"></script>
        </body>
        </html>
    `)
})

app.listen(4000, () => {
  console.log('Server listening on port 3000')
})
