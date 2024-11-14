const express = require('express')
const cors = require('cors')
const axios = require("axios")
const app = express()

//Handling cors error
app.use(cors({
    origin: '*'
}))

//Forwarding and response
app.get('/', async (req, res, next) => {
    try {
        const response = await axios.get('https://hcassignment-production.up.railway.app/');
        return res.status(200).json({data: response.data});
    } 
    catch(err) {
        next(err);
    }
});

//Error Handling
app.use((err, req, res, next) => {
    const code = err.statusCode || 500; 
    const message = err.message || 'Internal Server Error'; 
    return res.status(code).json({ message: message });
});

//Listening to server
app.listen(3000, () => console.log('Server is running on port 3000'));