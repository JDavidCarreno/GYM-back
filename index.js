const { PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes/index');

const app = express();



app.use(express.json())
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app.use('/', router);

const server = app.listen(3001, () => {
    console.log(`Listening on port: 3001`)
})

// conn.sync({force: false}).then(() => {
//     server.listen(PORT, () => {
//         console.log(`Listening on port: ${PORT}`);
//     })
// })

/*const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
) */
