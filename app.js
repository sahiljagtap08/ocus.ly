// Importing the API and instantiating the client using your keys
const { default: Terra } = require("terra-api");

const API_KEY = "DjtBgCbu4RmJlzrtBUq1OMZbGtdH7Phn"
const DEV_ID = "moosic-testing-flRNfCOJbq"
const SECRET = "hehehehehhehe"

const terra = new Terra(DEV_ID, API_KEY, "SECRET");

const USER_ID = "Rohan"

// Get the nutrition data from start date to current time
terra
    .getDaily({ userId: "", startDate: new Date("2023-03-29"), endDate: new Date(), toWebhook: false })
    .then((p) => console.log(p))
    .catch((e) => console.log(e.status, e.message));

