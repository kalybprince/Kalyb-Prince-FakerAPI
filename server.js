const faker = require("faker");

const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor() {
        this.userName = faker.internet.userName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    };
};

class Company {
    constructor() {
        this.companyName = faker.company.companyName();
    };
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.json({ message: "Use the url '/api/users/:new' (no quotes)" });
});

app.get("/api/users/new", (req, res) => {
    newUser = new User();
    res.json({ 
        "user_name": newUser.userName, 
        "email": newUser.email, 
        "password": newUser.password 
    });
});

app.get("/api/companies/new", (req, res) => {
    newCompany = new Company();
    res.json({ "company_name": newCompany.companyName });
});

app.get("/api/user/company", (req, res) => {
    newCompany = new Company();
    newUser = new User();
    res.json({ 
        "company_name": newCompany.companyName,
        "user_name": newUser.userName,
        "email": newUser.email,
        "password": newUser.password
    });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );