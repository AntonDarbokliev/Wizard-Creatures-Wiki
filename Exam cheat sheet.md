# Cheat Sheet

1. Initialize project
2. Install & setup express
    * add routes
    * add body parser
    * add static route
3. Add view engine: express-handlebars
    * register with express
    * add views folder
    * add home template 
    * add main layout
    * change all views extension to .hbs
    * cut out excess html from all views	
    * add partial template folder
4. Add home controller
    * add controller to routes
5. Connect database
    * set strict query / deprecation warning
6. Authentication
    * fix html links in layout
    * add user controller
    * add reigster page
    * add login page
7. Add user model
8. Add user service
9. Install bcrypt and cookie-parser and configure 
* add secret key config
* install jsonwebtoken
* add custom jwt util
* add token helper util	
10. Register user
    * validate repeat password
    * check if user exists
    * use bcrypt to hash password
11. Login user
    * check if user exists
    * check if password is valid
12. Add authentication middleware
    * add decoded token to request
    * use authentication middleware
13. Logout
14. Authorization middleware
15. Dynamic navigation
16. Error handling (local error handling)
17. Add error notification to main layout
18. Login automatically after register
19. Parse errors
20. Add Animal model
21. Add Animal service  
    * modify the methods according to the task
22. Add create controller
    * fix create form (field names, form method)
    * import animalService into the animalController
    * add get/post
23. Add catalog controller
    * make animal card
    * show correct message if there are no posts
24. Add details controller
    * adjust view properties
25. Add donate controller (if the task requires it)
26. Add edit controller
    * Add form values 
    * Add form method
27. Add delete controller
28. Add profile controller (if the task requires it)	 