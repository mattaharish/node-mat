const mysql = require('mysql');

class Router {

    constructor(connection) {
        this.connection = connection;
    }

    async findByName(name) {
        const query = `select * from tenant.instance where name = ?`;
        let sql = mysql.format(query, [name]);
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = Router;