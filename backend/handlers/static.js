const STATIC_DATA =  require('../response/static.json')
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const IS_OFFLINE = process.env.IS_OFFLINE;



// const BOOTSTRAP_STATISTIC = "https://fantasy.premierleague.com/api/bootstrap-static/";

app.use(bodyParser.json({ strict: false, limit: '10mb' }));

app.get('/getFPLStats', async function(req, res) {
    try {
        if(IS_OFFLINE) {
            res.json({data: STATIC_DATA})
        } else {
            res.json({data: "TODO"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'error writing user'});
    }
});

module.exports.handler = serverless(app);