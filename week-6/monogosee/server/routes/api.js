const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const Person = require("../models/Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});
router.post("/person", function (req, res) {
  console.log(req.body);
  const p1 = new Person({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    age: req.body.age,
  });
  p1.save();
});
router.put("/person/:id", function (req, res) {
  Person.findByIdAndUpdate(req.params.id, { age: 80 }, function (err, person) {
    console.log(person)
})
});
router.delete("/apocalypse", function (req, res) {
  Person.find({}, function (err, people) {
    people.forEach(person => {
      person.remove(function (err) {
        console.log(err) 
    })
    });
})
});
module.exports = router;
