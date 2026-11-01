const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end('Hello')
})

server.listen(port, () => {
  console.log(`Sasi's Node.js HTTP server is listening on port ${port}.`)
})
