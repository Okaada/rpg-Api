const {Router} = require('express');

const routes = new Router();

const UserController = require('./app/Controllers/UserController');

routes.post('/user', UserController.store)
routes.get('/users', UserController.index)

routes.get('/', (req, res)=>{
    res.json({hello: 'world'})
})

module.exports = routes;