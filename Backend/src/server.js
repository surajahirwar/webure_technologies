const app = require("./index")
const connect = require("./configs/db")
const PORT = process.env.PORT || 3000;
app.listen(PORT,async()=>{
    try {
        console.log("listening on port 5000")
        return connect()
    } catch (error) {
        console.log(error)
    }
})