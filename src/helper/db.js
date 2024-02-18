import { user } from "@/models/user";
import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        console.log(process.env.Mongodb_Uri)
        const { connection } = await mongoose.connect(process.env.Mongodb_Uri, {
            dbName: "NextPractice"
        });
        console.log('database connected...')
        // const userdata = new user({
        //     email: 'marfaterrahman@gmail.com',
        //     password: '123456'
        // })

        // await userdata.save()
        // console.log('user created')
        // console.log(connection)

    } catch (error) {
        console.log('connection failed with mongodb databse')
        console.log(error)
    }
} 