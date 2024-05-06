import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 2000;


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const resname1 = path.join(dirname, "index.html");
const resname2 = path.join(dirname, "authentication.html");

let userAuthentication = false;
app.use(bodyParser.urlencoded({ extended: true }));

function pwdCheck(req, res, next) {
    const uname = req.body['uname'];
    const pwd = req.body['pwd'];
    if (uname === "Kali" && pwd === "123") {
        userAuthentication = true;
    } else {
        console.log("Username or Password are Incorrect");
    }
    next();
}

app.use(pwdCheck);
app.get("/", (req, res) => {
    res.sendFile(resname1);
});
app.post("/authentication", (req, res) => {
    if (userAuthentication) {
        console.log("Authentication was Successful");
        userAuthentication = false;
        res.sendFile(resname2);
    } else {
        res.redirect("/");
    }
});
app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
});

