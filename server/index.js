const express = require('express')
const app = express()
const port = 3000
const { sequelize } = require('./models')


app.get('/', (req, res) => {
    // send my front-end
})

//app.use('/api',)

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