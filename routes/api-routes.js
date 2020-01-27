// Requiring our models 
var db = require("../models");

module.exports = function (app) {

  // #1 -- POST route for creating + saving a new user!
  app.post("/api/users", function (req, res) {
    function createUser() {
      db.Users.create({
        //"results" above refers to line 9 in user.js (models).

        createdAt: req.body.createdAt,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        cell: req.body.last_name,
        email: req.body.email,
        role: req.body.role

      })
      .then(function () {
        res.status(200).send('New person successfully created!');
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
    }
  });

  // #2 -- Route for creating + saving a new event!
  app.post("/api/newEvent", function (req, res) {
    db.Events.create({
      //"Events" above refers to line 9 in events.js (models).

      title: req.body.title,
      location: req.body.location,
      host: req.body.host,
      keyword: req.body.keyword

    })
      .then(function () {
        res.status(200).send('New event successfully created!');
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get('/users', function (req, res, next) {

    db.Users.findAll({}).then((data) => {
      res.json(data);
    })
  });


  app.get('/events', function (req, res, next) {

    db.Events.findAll({}).then((data) => {
      res.json(data);
    })
  })

  // #3 -- Route for deleting a person.
  app.delete("/api/users/:id", function (req, res) {
    db.Users.destroy({

      where: {
        id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      });
  });

  // #4 -- Route for updating a person.
  app.put("/api/users", function (req, res) {
    function updateUser() {
      db.Users.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          cell: req.body.cell,
          email: req.body.email,
          role: req.body.role},
        
    
      {
          where: {
            cell: req.body.cell
          }
        })
      .then(function (data) {
        res.json(data);
      });
    }
    updateUser();
  });



  // #5 -- Route for deleting an event. 
  app.delete("/api/newEvent/:id", function (req, res) {
    db.Events.destroy({
      //"Events" above refers to line 9 in events.js (models).
      where: {
        id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      });
  });

  // #6 -- Route for updating an event. 
  app.put("/api/newEvent", function (req, res) {
    db.Events.update(req.body,
      //"Events" above refers to line 9 in events.js (models).
      {
        where: {
          keyword: req.body.keyword
        }
      })
      .then(function (data) {
        res.json(data);
      });
  });

  //building join get to return both users and events with matching keywords
  // app.get("/api/users/keyword/:keyword", function(req, res) {
  //   db.Events.hasMany(db.Users, {foreignKey:'keyword'})
  //   db.Users.belongsTo(db.Events,{foreignKey:'keyword'})
  //   db.Users.findAll({where: {keyword:req.params.keyword},include:[{model:db.Events,
  //     on:{col1:sequelize.where(sequelize.col("Users.keyword"),"=",sequelize.col("Events.keyword"))}
  //    }]
  //  }).then((data)=>{
  //    res.json(data);
  //  })

  //  });

  app.get("/api/users/name/:first_name/:last_name", function (req, res) {

    db.Users.findAll({
      where: {
        first_name: { $like: '%' + req.body.first_name + '%' },
        last_name: { $like: '%' + req.body.last_name + '%' }
      }
    }).then((data) => {
      res.json(data);
    })
  });

  app.get("/api/events/keyword/:keyword", function (req, res) {

    db.Events.findOne({ where: { keyword: { $like: '%' + req.body.keyword + '%' } } }).then((data) => {
      res.json(data);
    })
  });


  app.get("/api/events/title/:title", function (req, res) {

    db.Events.findOne({ where: { title: { $like: '%' + req.body.title + '%' } } }).then((data) => {
      res.json(data);
    })
  });


  // Must create the webhook route that links to clearstream.io

  app.get("/api/webhook", function (req, res) {
    var KW = req.data.keyword.name;
    db.Users.findOne({ where: { cell: req.data.subscriber.mobile_number } }).then((data) => {
      if (data !== null) {
        db.Keywords.create({

          keyword: KW,
          cell: req.data.subscriber.mobile_number


        })

      }
      else {
        createUser();

      }

      res.json(data);
      console.log(data);
    })
  });



  function updateUser() {
    db.Users.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        cell: req.body.cell,
        email: req.body.email,
        role: req.body.role
      },

      {
        where: {
          cell: req.body.cell
        }
      })
    .then(function (data) {
      res.json(data);
    });
  }

  function createUser() {
    db.Users.create({

      createdAt: req.body.createdAt,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      cell: req.body.last_name,
      email: req.body.email,
      role: req.body.role

    })
    .then(function () {
      res.status(200).send('New person successfully created!');
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
  }


};



