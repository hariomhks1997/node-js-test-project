const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");
const fs = require("fs");

exports.getinput = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};
exports.postinput = (req, res, next) => {
  const companyname = req.body.companyname;
  const pros = req.body.pros;
  const cons = req.body.cons;
  const rating = req.body.rating;

  Product.create({
    companyname: companyname,
    pros: pros,
    cons: cons,
    rating: rating,
  })
    .then((result) => {
      // console.log(result);

      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getpostinput = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      // console.log(products)
      res.json(products);
    })
    .catch((err) => console.log(err));
};
