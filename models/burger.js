
var orm = require("../config/orm.js");


var burger = {
    //Show all burgers : SELECT *    
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
    //Add a burger : INSERT INTO
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
    //Edit existing : UPDATE
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
};


module.exports = burger;