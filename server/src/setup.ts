import { config as dotenvConfig } from "dotenv"
import mongoose from "mongoose"

const a = 4

// **** Setup **** //
// Dotenv
dotenvConfig()

// Mongoose
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log(
      "Connected to",
      `${process.env.MONGO.split(":").slice(0, 2).join("")}...`,
    )
  } catch (error) {
    console.error(error)
  }
}

await connectToMongo()
