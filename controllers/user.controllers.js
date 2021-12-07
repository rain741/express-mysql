const db = require("../config/db");

module.exports = {
    
    getAllUser : (req, res) => {
        db.query("select * from user ", (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json(results);
        });
      },

      getUserById : (req, res) => {
        const { id } = req.params;
      
        db.query(`select * from user where id = ?`, [id], (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json(results);
        });
      },

      addUser : (req, res) => {
        let users = req.body;
      
        db.query(
          `insert into user (nama, email, password) 
          values (?, ?, ?)`,
          [users.nama, users.email, users.password],
          (err, results, field) => {
            if (err) {
              console.log(err);
            }
            res.json("Post user Success");
          }
        );
      },

      deleteUser : (req, res) => {
        const { id } = req.params;
      
        db.query(`delete from user where id = ?`, [id], (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json("Delet User Success");
        });
      },

      editUser : (req, res) => {
        const { id } = req.params;
        let update = req.body;
        db.query(
          `update user set nama = ?, email = ?, password = ? where id = ?`,
          [update.nama, update.email, update.password, id],
          (err, results, field) => {
            if (err) {
              console.log(err);
            }
            res.json("Update User Success");
          }
        );
      }
}