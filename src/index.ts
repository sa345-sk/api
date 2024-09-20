import mongoose from 'mongoose';
import dotenv from 'dotenv'
import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {typeDefs} from './graphql/schema'
import { staff, pateint, inventory, schedule } from './models/model'

dotenv.config()
const resolvers =  {
  Query: {
     async inventories(){
      try {
         return await inventory.find({});
      } catch (error) {
         return error
      }
     },
      async pateints() {
      try {
         return await pateint.find({})
      }catch(error) {
         return error
      } 
     },
     async staff() {
      try{
         return await staff.find({})
      } catch(error) {
         return error
      }
     },
     async schedules() {
      try {
         return await schedule.find({})
      } catch(error) {
         return error
      }
     },
      async singleStaff(_: any, args: any) {
      try {
         return await staff.findById({_id: args.id})
      } catch (error) {
         return error
      }
     }
  },
  Mutation: {
     async deletePateint(_: any, args: any) {
        try {
           await pateint.findOneAndDelete({ _id: args.id })
           let remainingdata = await pateint.find({})
           return remainingdata
        } catch (error) {
         return error
        }
     },

     async deleteStaff(_: any, args: any) {
        try {
           await staff.findOneAndDelete({ _id: args.id })
           let s = await staff.find({})
           return s
      } catch (error) {
         return error
      }
     },
     async deleteInventory(_:any, args: any) {
      try {
         await inventory.findOneAndDelete({ _id: args.id })
         let s = await inventory.find({})
         return s
      } catch (error) {
         return error
      }
     },
     async deleteSchedule(_:any, args: any) {
      try {
         await schedule.findOneAndDelete({ _id: args.id })
         return await schedule.find({})
      } catch (error) {
         return error
      }
     },
     async addPateint(_:any, args: any) {
      try {
         let p = { ...args.pateint }
         return await pateint.create({firstName: p.firstName, secondName: p.secondName, date: p.date, diagnosis: p.diagnosis, email: p.email, phone: p.phone, gender: p.gender})
      } catch (error) {
         return error
      }
     },
     async addStaff(_:any, args: any) {
      try {
         let s = { ...args.staff}
         return await staff.create({firstName: s.firstName, secondName: s.secondName, age: s.age, email: s.email, gender: s.gender, phone: s.phone, dateEmployed: s.dateEmployed})
      } catch (error) {
         return error
      }
     },
     async addInventory(_:any, args: any) {
      try {
         let i = {...args.inventory}
         return await inventory.create({item: i.item, price: i.price, quantity: i.quantity, amount: i.amount})
      } catch (error) {
         return error
      }
     },
     async addSchedule(_:any, args: any) {
      try {
         let s = {...args.schedule}
         return await schedule.create({title: s.title, time: s.time, date: s.date})
      } catch (error) {
         return error
      }
     }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MongodbURI as string)
        console.log("Connected to DB!, Happy Hacking");
        const {url} = await startStandaloneServer(server, {
         listen: {port: 3000}
        })
    } catch (error) {
       console.log(error)
    }
}
connectDb()
