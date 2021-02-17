const https = require('https')

// const hostname = '127.0.0.1'
// const port = 3000

const zendpoint =
  'https://zzopendata.ecdc.europa.eu/covid19/nationalcasedeath/json/'
const endpoint = 'https://www.google.com/'

// const server = https.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Testas!!!\n')
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at https://${hostname}:${port}/`)
// })

https
  .get(endpoint, (res) => {
    const statusCode = res.statusCode

    console.log('Entered')
    if (!statusCode || statusCode === !200) {
      console.log('Request failed, status code: ', statusCode)
    } else {
      console.log('Connection established')
    }

    // console.log('Request header: ', res.headers)
    //       res.on('data', (d) => {
    //          process.stdout.write(d)
    //       })
    //       res.on('error', (e) => {
    //          console.log(e)
    //       })
    //    })
  })
  .on('error', (e) => {
    console.log('This is error: ', e)
  })

// const readable = getReadableStreamSomehow();
// readable.on('readable', function() {
//   // There is some data to read now.
//   let data;

//   while (data = this.read()) {
//     console.log(data);
//   }
// })
