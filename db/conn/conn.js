import mongoose from "mongoose"
import ENV from '../../config.js'

const mongoConn = () => {
    mongoose.connect(`mongodb+srv://aryanap3098:${ENV.mongo_Atlas_Password}@dmcd.0avpmjo.mongodb.net/?retryWrites=true&w=majority&appName=DMCD`)
        .then(() => console.log('Connected to MongoDB'))
        .catch(error => console.error('MongoDB connection error:', error))
}

export default mongoConn;