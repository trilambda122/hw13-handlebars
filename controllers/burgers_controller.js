const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(request, response) {
    console.log('in the burgers controller file');
    burger.selectAll(function(data) {
        var handleObj = {
                burgers: data
            }
            // console.log(handleObj);
        response.render('index', handleObj);
    })

});

// route to add a budger 
router.post('/api/burgers/', function(request, response) {
    console.log(request.body.burger_name);
    console.log(request.body.devoured);
    burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], (result) => {

        response.json({ id: result.insertID });

    });

});

// route to update a burger

router.put("/api/burgers/:id", (request, response) => {
    const condition = { id: request.params.id };

    // console.log("condition", condition);

    burger.updateOne({ devoured: request.body.devoured }, condition.id, (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        }
        response.status(200).end();
    });
});



module.exports = router;