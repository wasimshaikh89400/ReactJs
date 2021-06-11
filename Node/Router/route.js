var express = require("express");
const router = express.Router();
const UserData = require("../model/userData");

//get userData
router.post("/insertUserData", (req, res, next) => {
  const newUserData = new UserData({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    gender: req.body.gender,
    mobileNo: req.body.mobileNo,
    address: req.body.address,
  });

  newUserData.save((err, userData) => {
    if (err) res.send("data not added");
    else {
      res.json({ msg: "product added successfully", userData: userData });
    }
  });
});

//getUser data

router.get("/getUserData", (req, res, next) => {
  UserData.find((err, userData) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userData);
    }
  });
});

router.get("/getUserData/:userName/:selectUser", (req, res, next) => {
  if (req.params.selectUser == "firstName") {
    UserData.findOne({ firstName: req.params.userName }, (error, result) => {
      if (error) {
        return res.status(500).send({ error });
        console.log("error", error);
      }
      if (result == null) {
        res.send([
          {
            firstName: "notFound",
            lastName: "shaikh",
            email: "wasim@gmail.com",
            gender: "male",
            dob: "1998-11-25",
            mobileNo: "9112906475",
            address: "khedle",
          },
        ]);
      } else res.send([result]);
      console.log("result", result);
    });
  } else if (req.params.selectUser == "lastName") {
    UserData.findOne({ lastName: req.params.userName }, (error, result) => {
      if (error) {
        return res.status(500).send({ error });
      }
      if (result == null) {
        res.send([
          {
            firstName: "notFound",
            lastName: "shaikh",
            email: "wasim@gmail.com",
            gender: "male",
            dob: "1998-11-25",
            mobileNo: "9112906475",
            address: "khedle",
          },
        ]);
      } else res.send([result]);
      console.log("result", result);
    });
  } else {
    UserData.findOne({ email: req.params.userName }, (error, result) => {
      if (error) {
        return res.status(500).send({ error });
      }
      if (result == null) {
        res.send([
          {
            firstName: "notFound",
            lastName: "shaikh",
            email: "wasim@gmail.com",
            gender: "male",
            dob: "1998-11-25",
            mobileNo: "9112906475",
            address: "khedle",
          },
        ]);
      } else res.send([result]);
      console.log("result", result);
    });
  }
});

//delete userData
router.delete("/userData/:id", (req, res, next) => {
  UserData.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//update user Data
router.put("/userData/:id", (req, res) => {
  var myquery = { _id: req.params.id };
  var newvalues = {
    $set: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      mobileno: req.body.mobileNo,
      address: req.body.address,
    },
  };
  UserData.updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
});

module.exports = router;
