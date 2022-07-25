// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
//  controller in the MVC framework, responsible for get request
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// get the response route to the view 
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// render all response data onto view 
  res.render('all');
});

module.exports = router;
