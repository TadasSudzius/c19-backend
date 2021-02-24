import  https  from 'https'
import { createServer } from 'http'
import { requestHandler } from './requestHandler.js'
import { hostname, port, apiUrl} from './env.js'
import { handleData } from './dataHandler.js'

/***********************
 * Handle API request
 ***********************/

let data = ''
https.get( apiUrl , (res) => {
  console.log('Connected. StatusCode:', res.statusCode);

  res.on('data', (buffer) => {
    data += buffer
  })
  res.on('end', () => {
    data = JSON.parse(data)
    console.log('Data parsed')
    handleData(data)
  })
})

const server = createServer(requestHandler)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

