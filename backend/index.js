import { handler } from '../svelte/build/handler.js';
import express from 'express';
import fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


const app = express();

app.get('/apps', (req, res) => {
  fs.readFile(path.resolve(__dirname, "./apps.json"), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.end("404");
      return;
    }
    res.end(data);
  });
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(1236, () => {
	console.log('listening on port 1236');
});