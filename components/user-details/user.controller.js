const router = require('express').Router();

const UserDetails = require('./User');

class User {
    async getAll(req, res) {
        console.log(req.url);
        let usersData = await req.userObject.getAll();
        res.send(usersData);
    }
}

const user = new User();

router.use('/', (req, res, next) => {
    req.userObject = new UserDetails(req.connection);
    next();
});

router.get('/', user.getAll)

module.exports = router;