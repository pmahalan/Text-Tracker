// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var sequelize = require("sequelize");


module.exports = function(app) {
  //html route to index on homeslice
  app.get('/', function (req, res, next) {
    res.render('index');
  });

  //get to find one user by cellphone number
  app.get("/api/users/cell/:cell", function(req, res) {
      // console.log(req.params.cell);
     
      // For join
    let personObj = {};
    let eventArr = [];
      // First find user by cell
      db.Users.findOne({where: {
        cell: req.params.cell
      }})
      .then(data => {
        // console.log(data.id);
        personObj.first_name = data.first_name;
        personObj.last_name = data.last_name;
        personObj.cell = data.cell;
        personObj.email = data.email;
        personObj.role = data.role;

        db.Keywords.findAll({where: {
          cell: data.cell
        }})
        .then(data2 => {
          // console.log(data2);
          let keyArray = data2.map(item => item.keyword)

          keyArray.forEach(keyWord => {
            db.Events.findOne({
              where: {
                keyword: keyWord
              }
            })
            .then( data3 => {
              console.log("event log", data3.id);
              
              eventArr.push(data3)
              // console.log(eventArr);
            })
          })


          // async function () {
          // res.render("people", {
          //   person:personObj,
          //   event: eventArr})
          // }

          setTimeout(function(){

          console.log("array", eventArr);

            res.render("people", {
                person:personObj,
                event: eventArr})

          }, 500)

        })
        // .then(()=>{
        //   console.log("array", eventArr);

        //   res.render("people", {
        //     person: personObj,
        //     event: eventArr
        // })
        // })
          
      })

      
      
      // Then find all keywords that the cell has assoicated

      //find all events from those keywords

      // app.get("/api/users/keyword/:keyword", function(req, res) {
  //   db.Events.hasMany(db.Users, {foreignKey:'keyword'})
  //   db.Users.belongsTo(db.Events,{foreignKey:'keyword'})
  //   db.Users.findAll({where: {keyword:req.params.keyword},include:[{model:db.Events,
  //     on:{col1:sequelize.where(sequelize.col("Users.keyword"),"=",sequelize.col("Events.keyword"))}
  //    }]
  //  }).then((data)=>{
  //    res.json(data);
  //  })




    // db.Users.findOne({where: {cell: req.params.cell}}).then((data)=>{
    //   res.json(data);

  });

//html route to the page to create a new user
  app.get('/newPerson', function (req, res, next) {
     
    res.render('newPerson');
  });

//html route to page with form for creating new event
  app.get('/newEvent', function (req, res, next) {
 
    res.render('newEvent');
  });

}




