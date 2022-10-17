# Restaurant-project
 
REST-Rant is an app where users can review restaurants.
Rate REST-Rant
REST-Rant is an app where users can review restaurants.
Method	Path	Purpose
GET	/	Home Page
| |

Method	Path	Purpose
GET	/	The home page
GET	/places	Index page listing all places
GET	/places/new	New form for a place
POST	/places	Create a new place
GET	/places/:id	Show one place in detail (Associated rants, new rant form, delete rant button)
GET	/places/:id/edit	Edit form for a place
PUT	/places/:id	Make changes to existing place
DELETE	/places/:id	Delete a place
POST	/places/:id/rant	Add rant to a place
DELETE	/places/:id/rant/:rantId	Delete a rant
GET: / Home page
GET: /places Places index page
POST: /places Create new place
GET: /places/new Form page for creating a new place
GET: /places/:id Details about a particular place
PUT: /places/:id Update a particular place
GET: /places/:id/edit Form page for editing an existing place
DELETE: /places/:id Delete a particular place
Database
places

Field	Type
_id	Object ID
name	String
city	String
state	String
cuisines	String
pic	String
rants

Field	Type
_id	Object ID
place_id	ref(places) Object_Id
rant	Boolean
rating	Number
comment	String
reviewer	String
Part 1: Project setup, stub three routes, and creating a README file
Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
Part 3: Making more views, creating a layout page, and expanding your README
Part 4: Adding some style with CSS
Part 5: Forms, validation, and navigation
Part 6: Implementing delete functionality and adding a DELETE route
Part 7: Implementing edit form and functionality, adding a PUT route
Part 8: Implementing the Mongoose ODM
Part 9: Seed data, validations, and helper methods
Part 10: Adding commentary: rants and raves
Part 11: Populating data for star ratings
Part 12: Deploying your project# RateRestRant