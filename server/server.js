const express = require('express')
const app = express()
const PORT = 3000;

app.get("/api", (req, res) => {
     res.json({ "users": ["userOne", "uesrTwo" ,"userThree"]})
    //res.send('Hello, world!'); // Send a simple response
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
})