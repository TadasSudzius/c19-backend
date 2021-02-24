const apiUrl = 'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/'
const hostname = '127.0.0.1'
const port = 3000
let searchQuery

const setSearchQuery = (value) => {searchQuery = value}

export {
   apiUrl,
   hostname, 
   port, 
   searchQuery, 
   setSearchQuery, 
}