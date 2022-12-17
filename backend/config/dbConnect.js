const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        const connected = await mongoose.connect(
          process.env.MONGO_URI,
          {
            useUnifiedTopology: true,
            useNewUrlParser: true,
          }
        );
          console.log(`Mongodb connected`)
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}
module.exports = {
    dbConnect
}