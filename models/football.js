import mongoose from "mongoose";
const Schema = mongoose.Schema;


const FootballSchema = new Schema({
    "area": {
        "name": String,
        "code": String,
        "flag": String
    },
    "name": String,
    "code": {"type": String, require: false},
    "currentSeason": {
        "startDate": String,
        "endDate": String
    }
})

export default mongoose.model("football", FootballSchema)