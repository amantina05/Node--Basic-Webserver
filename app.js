// console.log('hello')
// function greeting (greet) {
//   console.log(greet)
// }
// greeting('hello world')


// basic web-server
  //including a basic module
const http = require('http')
const fs = require('fs')

  //if no error continue and run the server
const hostname = '127.0.0.1'
const port = 3000

//to load a file
fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err
  }

  const server = http.createServer((req, res) => {
    //code that says everything is ok
      res.statusCode = 200
      //'text/plain' shows the entire html doc 
      res.setHeader('Content-type', 'text/html')
      res.write(html)
      res.end()
  })

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port)
  })
})

