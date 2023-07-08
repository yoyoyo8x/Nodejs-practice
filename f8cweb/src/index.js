import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import morgan from 'morgan';
import  {engine}   from 'express-handlebars';

const app = express();
const port = 8088
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views',join(__dirname, 'resources//views'));

console.log('__dirname', __dirname)

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, ()=>console.log(`listening on port at http://localhost:${port}`))