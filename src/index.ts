import express from 'express';

process.on('SIGINT', () => {
  console.log('Interrupted');
  process.exit(0);
});

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  throw error;
});

const app = express();

app.get('/', (_req: express.Request, res: express.Response) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.info(`Server listening on port 3000...`);
});
