const routers = require('express').Router();

// routers.get('/', (req, res, next) => {
//     res.json('Awesome person');
// });
const myController = require('../controllers')

routers.get('/', myController.firstFunction);
routers.get('/persons', myController.secondFunction);

module.exports = routes;