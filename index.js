const express =require("express")
const {checkSchema} =require('express-validator')
const configureDb =require('./config/db')
const userCltr =require('./app/controlers/users-cltr')
const userRegisterValidationSchema =require('./app/validations/user-registration')
const app =express()
const port =1000
configureDb()

app.use(express.json())

app.post('/users/register',userCltr.register)
// app.get('/users/account',userCltr.account)
// app.delete('/users/account',userCltr.logout)
// app.post('/users/register',checkSchema(userRegisterValidationSchema),userCltr.register)


app.listen(port,() =>{
    console.log('server running on port' ,port);
})