const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(request, response) {
    console.log('in the burgers controller file');
    burger.selectAll(function(data) {
        var handleObj = {
            burgers: data
        }
        console.log(handleObj);
        response.render('index', handleObj);
    })

});

router.post('api/burgers', function (request, response){
    burger.insertOne()
 })

module.exports = router;