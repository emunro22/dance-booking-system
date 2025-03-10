const { coursesDB } = require('../models/db');

exports.getCourses = (req, res) => {
  coursesDB.find({}, (err, docs) => {
    if (err) return res.status(500).send("Error retrieving courses");
    res.render('courses', { courses: docs });
  });
};

exports.getCourseById = (req, res) => {
  coursesDB.findOne({ _id: req.params.id }, (err, doc) => {
    if (err || !doc) return res.status(404).send("Course not found");
    res.render('course', { course: doc });
  });
};

exports.getAddCourse = (req, res) => {
  res.render('addCourse');
};

exports.postAddCourse = (req, res) => {
  const newCourse = {
    name: req.body.name,
    duration: req.body.duration,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price
  };
  coursesDB.insert(newCourse, (err, newDoc) => {
    if (err) return res.status(500).send("Error adding course");
    res.redirect('/courses');
  });
};

exports.getUpdateCourse = (req, res) => {
  coursesDB.findOne({ _id: req.params.id }, (err, doc) => {
    if (err || !doc) return res.status(404).send("Course not found");
    res.render('updateCourse', { course: doc });
  });
};

exports.postUpdateCourse = (req, res) => {
  const updatedCourse = {
    name: req.body.name,
    duration: req.body.duration,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price
  };
  coursesDB.update({ _id: req.params.id }, { $set: updatedCourse }, {}, (err) => {
    if (err) return res.status(500).send("Error updating course");
    res.redirect('/courses');
  });
};

exports.getDeleteCourse = (req, res) => {
  coursesDB.findOne({ _id: req.params.id }, (err, doc) => {
    if (err || !doc) return res.status(404).send("Course not found");
    res.render('confirmDelete', { course: doc });
  });
};

exports.postDeleteCourse = (req, res) => {
  if (req.body.confirmation !== 'delete') {
    return res.send("Incorrect confirmation word. Please type 'delete' to confirm deletion.");
  }
  coursesDB.remove({ _id: req.params.id }, {}, (err) => {
    if (err) return res.status(500).send("Error deleting course");
    res.redirect('/courses');
  });
};

exports.getEnrol = (req, res) => {
  coursesDB.findOne({ _id: req.params.courseId }, (err, doc) => {
    if (err || !doc) return res.status(404).send("Course not found");
    res.render('enrol', { course: doc });
  });
};

exports.postEnrol = (req, res) => {
  console.log(`Enrolment for course ${req.params.courseId} => Name: ${req.body.name}, Email: ${req.body.email}`);
  res.send("Enrolment submitted!");
};
