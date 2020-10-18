const { builtinModules } = require('module');
const orm = require('../config/orm');
let burger = {
    selectAll: function(cb) {

        orm.selectAll('burgers', function(response) {

            cb(response);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    updateOne: function(colVals, condition, cb) {
        orm.updateOne('burgers', colVals, condition, function(response) {
            cb(response);
        });


    },
    deleteOne: function(condition, cb) {
        orm.delete('burgers', condition, function(resposne) {
            cb(response);
        });
    }


};

module.exports = burger;