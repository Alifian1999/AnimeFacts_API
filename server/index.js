const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')
const PORT = 5000

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    try {
        console.log(req.body.username);
        request('https://anime-facts-rest-api.herokuapp.com/api/v1', async(error, response, body)=> {
        const failed = error
        const success = response? response.body :null
        const data = await body
        console.error('error:',failed); // Print the error if one occurred
        console.log('statusCode:',success); // Print the response status code if a response was received
        console.log('body:',data); // Print the HTML for the Google homepage.

        res.status(200).send({
            status:'success',
            data : data
        })
        });
    } catch (error) {
        console.log(error);
    }

})

app.listen(PORT, console.log(`App run on PORT = ${PORT}`))