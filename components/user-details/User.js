const mysql = require('mysql');

class Users {

    constructor(connection) {
        this.connection = connection;
    }

    async getAll() {
        const query = `select * from nodemat.user_detail`;
        let sql = mysql.format(query, []);
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = Users;