Web Development Coursework Part 2

Overview

This is my Web Development Coursework Part 2. Upon visiting the link provided, the users are greeted with a styled landing page created using CSS (styles.css). The homepage redirects users automatically to:

View Courses

Admin Login

Sign Up as Admin

Directory Structure

Coursework/
├── controllers/
│ ├── authController.js
│ └── courseController.js
├── database/
│ ├── courses.db
│ └── users.db
├── models/
│ └── db.js
├── public/
│ ├── styles.css
├── views/
│ ├── addCourse.mustache
│ ├── signup.mustache
│ ├── login.mustache
│ ├── signup.mustache
│ ├── updateCourse.mustache
│ └── courses.mustache
├── index.js
├── package.json
├── package-lock.json
└── README.md

Features and Functionalities

View Courses

Browsing Courses:

Users can browse available dance courses (e.g., Ballet Dancing, Irish Dancing) freely.

Each course displays complete detail: name, duration, date, time, description, location, price.

Course Interaction:

"View Details" displays complete course details.

Users can register, successful registrations noted against user's name, email, and registration ID.

Invalid update/delete attempts render: "Unauthorized. Admin login required."

Admin Login

Authentication:

Secure username/password login.

Admin Dashboard view to manage courses.

Show errors prominently in case of incorrect credentials.

Managing Courses:

Update course details (name, duration, date, etc.).

Deletion requested with confirmation; incorrect confirmations show error: "Incorrect confirmation word. Please type 'delete' to confirm deletion."

Admin Sign-Up

Account Creation:

Password/username sign-up with Captcha verification.

Incorrect Captcha brings up: "Captcha mismatch! Go back and try again."

Successful sign-up gives immediate admin access.

Technical Details

Frontend: CSS-styled (styles.css).

Backend: Node.js, controllers, and models.

Database Management: SQLite (courses.db, users.db).

Logging: Terminal-based logging for enrolment.

Security: Captcha and Authentication protection.

Conclusion

The project demonstrates a thorough understanding of the concepts of web development, including secure authentication, dynamic content, and improving user interaction. I have included additional verification steps beyond the minimum specification to improve security and useability.

Thank you for taking the time to read my coursework. I hope you will enjoy browsing and navigating the site and find it easy to navigate.

Author: Euan Munro