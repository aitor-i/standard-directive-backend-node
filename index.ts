import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';

const app = express()

const PORT = 4040;

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {

  res.status(200).json({ message: `Service is running on port: ${PORT}` })
})


app.listen(PORT, () => { })

