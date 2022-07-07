const mysql = require('mysql')
const conn = mysql.createPool({
    connectionLimit : 10,
    password : '',
    user : 'root',
    database : 'AD4SCREEN',
    host : 'localhost',
    port : '3306'
})

let AD4SCREEN_db = {}

AD4SCREEN_db.all_client = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM client`, (err, results) =>{
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

AD4SCREEN_db.add_client = () => {
    const data = {
        
        "name": "AD4SCREEN_1",
        "Descriptio_Max_Size": 100,
        "create_date": "2022-07-06T22:51:49.000",
        "update_date": "2022-07-06T22:51:49.000"
    }
    
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO client SET ?`, data, (err, results) =>{
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

AD4SCREEN_db.rm_client = (id) => {

    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM client WHERE id = ? `, [id], (err, results) =>{
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

AD4SCREEN_db.update_client = (id,name) => {

    return new Promise((resolve, reject) => {
        conn.query(`UPDATE client set name = ? WHERE id = ? `, [name,id], (err, results) =>{
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}
module.exports = AD4SCREEN_db