const fs = require('fs')

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "sachin"
data.age = 25

const dataJSONCon = JSON.stringify(data)
fs.writeFileSync('1-JSON.json', dataJSONCon)

