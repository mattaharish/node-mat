const database = require('./../config/db-config');
const dbConn = new database();

const attachConnection = async (req, res, next) => {

    let connection = await dbConn.getConnection();

    req.connection = connection;

    next();
}

module.exports = attachConnection;