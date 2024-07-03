const userController = require('./controller/users');
const express = require('express')
const app = express()
const port = 3000
const { sequelize } = require('./models')

app.use(express.json())

//controllers
app.use('api/users', require('./controller/users'))

// Server front-end
app.get('/', (req, res) => {
    // send my front-end
})

app.use('/api/users', require('./controller/users'))

app.listen(port,async() => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been lost established successfully.');
        await sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log('Example app listening on port ${port}')
})

//app.listen(port, () => {
  //  console.log('Example app listening on port ${port}')
//})
 
