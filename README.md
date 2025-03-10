Web Development Coursework Part 2
===================================

Overview:
---------
This is my Web Development Coursework Part 2. Upon visiting the provided link, users are greeted with a styled landing page created using CSS (styles.css). The homepage automatically redirects users to the following pages:
  • View Courses
  • Admin Login
  • Sign Up as Admin

This Node.js web application enables users to browse dance courses and allows administrators (or newly signed-up users) to manage courses (add, update, delete) through secure authentication and additional verification steps (such as captcha on sign-up and deletion confirmation).

Directory Structure:
--------------------
Coursework/
├── controllers/
│   ├── authController.js
│   └── courseController.js
├── database/
│   ├── courses.db
│   └── users.db
├── models/
│   └── db.js
├── public/
│   ├── index.html
│   └── styles.css
├── views/
│   ├── addCourse.mustache
│   ├── signup.mustache
│   ├── login.mustache
│   ├── updateCourse.mustache
│   ├── courses.mustache
│   ├── course.mustache
│   ├── confirmDelete.mustache
│   └── enrol.mustache
├── index.js
├── package.json
├── package-lock.json
└── README.txt

Features and Functionalities:
------------------------------
View Courses:
  • Users can freely browse available dance courses (e.g. Ballet Dancing, Irish Dancing).
  • Each course displays complete details: name, duration, date, time, description, location, and price.
  • "View Details" displays the complete course information.
  • Users can register for courses with successful registrations logged.

Admin Login:
  • Secure username/password login.
  • Displays an Admin Dashboard for course management.
  • Incorrect login attempts produce clear error messages.

Admin Sign-Up:
  • Users can sign up with a username, password, and captcha verification.
  • Incorrect captcha entries display "Captcha mismatch! Go back and try again."
  • Successful sign-up immediately grants admin rights.

Course Management:
  • Admins can add, update, and delete courses.
  • Deletion requires confirmation by typing the word "delete".
  • Unauthorized update/delete attempts display: "Unauthorized. Admin login required."

Additional Functionalities:
  • User enrolment via a simple enrolment form.
  • The front end is styled with custom CSS (styles.css) and Bootstrap.
  • The code is modular with separate controllers, models, and views.

Installation and Running the Application:
-------------------------------------------
Prerequisites:
  • Node.js (version 14 or later is recommended)
  • Git

Steps:
  1. Clone the repository:
       git clone https://github.com/emunro22/dance-booking-system.git

  2. Navigate to the project folder:
       cd dance-booking-system

  3. Install the required dependencies:
       npm install

  4. Start the application:
       npm start
       or
       node index.js

  5. Open your web browser and go to:
       http://localhost:3000

Deployment:
-----------
For local development, running the application on http://localhost:3000 is sufficient.

Conclusion:
-----------
This project demonstrates a thorough understanding of web development concepts, including secure authentication, dynamic content management, and enhanced user interaction. Extra verification steps, such as captcha on sign-up and deletion confirmation, have been implemented to improve security and usability.

Thank you for reviewing my coursework. I hope you enjoy browsing and navigating the site.

Author: Euan Munro
