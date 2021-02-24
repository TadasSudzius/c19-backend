// import { responseSize } from './memTest.js'
import path from 'path'
import { searchQuery, setSearchQuery } from './env.js'
import { myCache, countryList, apiData } from './dataHandler.js'

export const requestHandler = (req, res) => {
  res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
  if (isFaviconRequest(req, res, sendResponse)) {return}
  if (!isCorrectRequest(req, res)) {return}
  if (handleGetRequest(req, res)) {return}
}

const isFaviconRequest = (req, res, callback) => {
  if (req.url === '/favicon.ico') {
    callback(res, 'favicon.ico', 200, { 'Content-Type': 'image/x-icon' })
    return true
  } else {
    return false
  }
}

const isCorrectRequest = (req, res) => {
  if (req.method == 'GET') {
    return true
  } else {
    console.log(req.method)
    console.log('Worng request method')
    sendResponse(res, 'Not Found', 404)
    return false
  }
}

const handleGetRequest = (req, res) => {
  const reqUrl = path.parse(req.url)
  const params = new URLSearchParams(reqUrl.name)
  const paramsValue = params.get('country')

  if (reqUrl.dir !== '/') {
    console.log('Directory path not root(/)')
    sendResponse(res, 'Incorrect path', 404, { 'Content-Type': 'text/html' })
    return true
  }

  if (reqUrl.name === 'countries') {
    console.log('Request for countries')
    res.end(JSON.stringify(countryList))
    return true
  }

  //Length check: designed to limit input length of associated value of given parameter
  //"Bonaire, Saint Eustatius and Saba" has a longest string value in country array
  if (paramsValue && paramsValue.length <= 33) {
    setSearchQuery(paramsValue)
  } else {
    console.log('Incorrect search parameter')
    sendResponse(res, 'Incorrect parameter', 404, {
      'Content-Type': 'text/html; charset=utf-8',
    })
    // 'Content-Type': 'application/json; charset=utf-7'
    return true
  }

  if (myCache.has(searchQuery)) {
    let resultArray = []
    let startIndex = myCache.get(searchQuery)
    //countriesMap.get(query)
    console.log(`Query "${searchQuery}" index at: ${startIndex}`)

    for (let i = startIndex; i < apiData.length; i++) {
      if (apiData[i].country !== searchQuery) { break } 
      else { resultArray.push(apiData[i]) }
    }
    console.log(`Sending ${resultArray.length} elements`)
    res.end(JSON.stringify(resultArray))
  } else {
    sendResponse(res, 'Incorrect search value', 404, {
      'Content-Type': 'text/html; charset=utf-8',
    })
    return true
  }
}

const sendResponse = (res, message, statusCode, header) => {
  res.writeHead(statusCode, header)
  res.end(message)
}
