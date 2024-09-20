export const typeDefs = `#graphql
  type Inventory {
    id: ID!
    item: String!
    price: Int!
    quantity: Int!
    amount: Int!
  }
  type Schedule {
    id: ID!
    title: String!
    date: String!
    time: String!
  }
  type Staff {
    id: ID!
    firstName: String!
    secondName: String!
    dateEmployed: String!
    gender: String!
    phone: String!
    email: String!
    age: Int!
  }
  type Pateint {
    id: ID!
    firstName: String!
    secondName: String!
    date: String!
    diagnosis: String!
    email: String!
    phone: String!
    gender: String!
  }
  type Query {
    inventories: [Inventory]
    schedules: [Schedule]
    staff: [Staff]
    singleStaff(id: ID!): Staff
    pateints: [Pateint]
  }
  type Mutation {
    deletePateint(id: ID!): [Pateint]
    deleteStaff(id: ID!): [Staff]
    deleteInventory(id: ID!): [Inventory]
    deleteSchedule(id: ID!): [Schedule]
    addPateint(pateint: AddPateintInput!): Pateint
    addStaff(staff: AddStaffInput!): Staff
    addInventory(inventory: AddInventoryInput!): Inventory
    addSchedule(schedule: AddScheduleInput!): Schedule
  }
  input AddPateintInput {
    firstName: String!
    secondName: String!
    date: String!
    diagnosis: String!
    email: String!
    phone: String!
    gender: String!
  }
  input AddStaffInput {
    firstName: String!
    secondName: String!
    dateEmployed: String!
    gender: String!
    phone: String!
    email: String!
    age: Int!
  }
  input AddScheduleInput {
    title: String!
    date: String!
    time: String!
  }
  input AddInventoryInput {
    item: String!
    price: Int!
    quantity: Int!
    amount: Int!
  }
`