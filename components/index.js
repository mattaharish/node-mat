const router = require('express').Router();

const attachDBConnection = require('./../middlewares/attach-db-connection');
const getTenantDetails = require('./router-instance/router.controller');
const Users = require('./user-details/user.controller');

router.use('/', attachDBConnection);

router.use('/check-realm', getTenantDetails);

router.use('/Users', Users);

// Authorization to be added for below routes
module.exports = router;
