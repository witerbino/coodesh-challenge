import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import cors from 'cors';

import { FindAllSalesFactory, ImportSalesFactory } from '@/factories';

const app = express();
const upload = multer();

app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sales', (_, res) => {
  return FindAllSalesFactory().handle(res);
});

app.post('/sales', upload.single('file'), (req, res) => {
  return ImportSalesFactory().handle(req, res);
});

app.listen(4000, () => {
  console.log('Application listening on port 4000');
});
