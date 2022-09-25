const express = require('express');
const app = express();

const { mongoConnect } = require('./migrations/database');
const productRouter = require('./routes/product');

app.use(express.json());
app.use('/api', productRouter);

app.use((error, req, res, next) => {
    res.status(404).send({ error: 'Page not found' });
});

mongoConnect(() => {
    app.listen(3000, () => {
        console.log('listening on port 3000');
    })
});