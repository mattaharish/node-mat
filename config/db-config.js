const mysql = require('mysql');
const DB_CONFIG = require('./source-config').DEFAULT;

class DataBase {
    constructor() {
        this.config = DB_CONFIG;
        this.connection = undefined;
    }

    createConnection() {
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection(DB_CONFIG);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                }
                resolve(connection);
            });
        });
    }

    async getConnection() {
        if (this.connection === undefined) {
            try {
                this.connection = await this.createConnection();
                return this.connection;
            } catch (err) {
                console.log(err);
                return err;
            }
        } else {
            return this.connection;
        }

    }
}

module.exports = DataBase;