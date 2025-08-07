const express = require(`express`);
const app = express();
const PORT = 3000

app.get(`/`,(req, res) => {
    res.send(`
        
        <!DOCTYPE html >
        <html>
            <head>
                <style>

                    body{
                        display: flex;
                        flex-direction:column;
                        align-items: center;
                        justify-items: center;
                        margin-top: 5%;
                    }
                    h1{
                        color:red;
                        font-size: 40px;
                    }
                    div{
                        display: flex;
                        flex-direction:column;
                        align-items: center;
                        justify-items: center;
                        box-shadow:3px 3px 5px #000;
                        width: 40%;
                    }
                </style>
            </head>
            <body>
                <div>
                    <h1>Server under maintenance</h1>
                    <p> We are currently performing schedule maintenance. Please check back  after. </p>
                    <p> Thank you for  your patience</p> 
                </div>
            </body>
        
        </html>
        
        `);

})

app.listen(PORT, () => {
    console.log(`Server is running on http//localhost:${PORT}`)
})

