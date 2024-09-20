export interface IPateintInput{
    firstName: string
    secondName: string
    date: string
    diagnosis: string
    email: string
    phone: string
    gender: string
}
export interface IStaffInput{
    firstName: string
    secondName: string
    dateEmployed: string
    gender: string
    phone: string
    email: string
    age: number
}
export interface IScheduleInput{
    title: string
    date: string
    time: string
}
export interface IInventoryInput{
    item: string
    price: number
    quantity: number
    amount: number
}