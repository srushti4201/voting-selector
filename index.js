import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use (express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs', { name: null, age: null });
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.render('index.ejs', { name, age });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});