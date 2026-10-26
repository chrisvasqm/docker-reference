import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use('/', (_, response) => {
  const welcome = 'Welcome to the Docker Reference API';
  response.send(welcome);
});

function errorMiddleware(error: Error, _request: Request, _response: Response, next: NextFunction) {
  console.log(error);
  next();
}

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));