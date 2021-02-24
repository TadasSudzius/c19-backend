import NodeCache from 'node-cache'
const myCache = new NodeCache()
let apiData
let setCacheElement
let prevCountry = ''
let countryList = []

const handleData = (data) => {
  apiData = data
  Object.values(data).map((value, index) => {
    if (value.country !== prevCountry) {
      setCacheElement = myCache.set(`${value.country}`, index, 0)
      countryList.push(value.country)
    }
    prevCountry = value.country
  })
  console.log('Data indexed')
}

export { myCache, handleData, countryList, apiData }
