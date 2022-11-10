const app = require("./index")
const connect = require("./configs/db")

app.listen(5000,async()=>{
    try {
        console.log("listening on port 5000")
        return connect()
    } catch (error) {
        console.log(error)
    }
})