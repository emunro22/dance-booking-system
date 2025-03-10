const express = require('express');
const session = require('express-session');
const path = require('path');
const mustache = require('mustache-express');


const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
const { coursesDB } = require('./models/db');

const app = express();

app.use(session({
  secret: 'SecretKey', 
    resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

function adminAuth(req, res, next) {
  if (req.session && req.session.admin) {
    next();
  } else {
    res.status(401).send("Unauthorized. Admin login required.");
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/courses', courseController.getCourses);
app.get('/course/:id', courseController.getCourseById);
app.get('/addCourse', adminAuth, courseController.getAddCourse);
app.post('/addCourse', adminAuth, courseController.postAddCourse);
app.get('/updateCourse/:id', adminAuth, courseController.getUpdateCourse);
app.post('/updateCourse/:id', adminAuth, courseController.postUpdateCourse);
app.get('/deleteCourse/:id', adminAuth, courseController.getDeleteCourse);
app.post('/deleteCourse/:id', adminAuth, courseController.postDeleteCourse);
app.get('/enrol/:courseId', courseController.getEnrol);
app.post('/enrol/:courseId', courseController.postEnrol);

app.get('/login', authController.getLogin);
app.post('/login', authController.postLogin);
app.get('/logout', authController.logout);
app.get('/signup', authController.getSignup);
app.post('/signup', authController.postSignup);

app.get('/admin', adminAuth, (req, res) => {
  res.send(`
    <h1>Admin Dashboard</h1>
    <p>You are logged in as admin.</p>
    <a href="/courses">Manage Courses</a><br>
    <a href="/logout">Logout</a>
  `);
});

coursesDB.count({}, (err, count) => {
  if (count === 0) {
    coursesDB.insert([
      {
        name: "Hip Hop Basics",
        duration: "4 weeks",
        date: "2023-09-01",
        time: "18:00",
        description: "Learn the basics of hip hop dancing.",
        location: "Dance Studio A",
        price: "£50"
      },
      {
        name: "Salsa Intermediate",
        duration: "6 weeks",
        date: "2023-09-15",
        time: "19:00",
        description: "Improve your salsa skills with intermediate classes.",
        location: "Dance Studio B",
        price: "£70"
      }
    ], (err, newDocs) => {
      if (err) {
        console.log("Error inserting sample courses:", err);
      } else {
        console.log("Sample courses inserted:", newDocs);
      }
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
