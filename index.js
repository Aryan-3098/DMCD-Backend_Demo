import express from 'express'
import cors from 'cors'
const port = 8000;
import router from './routes/route.js';
import chalk from 'chalk';
const app = express();

app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('', (req, res) => {
    res.send('Backend Online')
})

app.use('/api', router)

app.listen(port, () => {
    console.log(chalk.bgYellow(`Server is running on http://localhost:${port}`));
});