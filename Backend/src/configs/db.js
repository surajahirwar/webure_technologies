const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect('mongodb+srv://surajifastdigital:surajsunita@cluster0.jsxnysg.mongodb.net/webure_technologies')
}

module.exports = connect    