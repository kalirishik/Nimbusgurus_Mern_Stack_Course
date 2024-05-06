import express from 'express'
import path from "path";
import { fileURLToPath } from 'url';
const app = express();
const port = 4000;
app.get('/Home', (req, res) => {
    const filename=fileURLToPath(import.meta.url);
    const dirname=path.dirname(filename);
    const resname=path.join(dirname,"Home.html")
    res.sendFile(resname);
})
app.get('/Teams', (req, res) => {
    const filename=fileURLToPath(import.meta.url);
    const dirname=path.dirname(filename);
    const resname=path.join(dirname,"Teams.html")
    res.sendFile(resname);
})
app.get('/About', (req, res) => {
    const filename=fileURLToPath(import.meta.url);
    const dirname=path.dirname(filename);
    const resname=path.join(dirname,"About.html")
    res.sendFile(resname);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});