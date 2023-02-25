const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))
app.get("/", function (request, respone){

})
app.listen(port, function() {
    console.log(`Server listening at https://localhost:${port}`
})