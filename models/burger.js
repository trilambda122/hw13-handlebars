const { builtinModules } = require('module');
const orm = require('../config/orm');
let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(response) {
            cb(response);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.selectAll('burgers', cols, vals, function(resposne) {
            cb(response);
        });
    },
    updateOne: function(colVals, condition, cb) {
        orm.selectAll('burgers', colVals, condition, function(resposne) {
            cb(response);
        });
    },
    deleteOne: function(condition, cb) {
        orm.selectAll('burgers', condition, function(resposne) {
            cb(response);
        });
    }


};

module.exports = burger;