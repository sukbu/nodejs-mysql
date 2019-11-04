// 나쁜방법. 버전관리 시스템으로 절대 이렇게 관리하면 안됨
// db.template.js 로 가봐라
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a123123',
    database: 'opentutorials'
  });
db.connect();
module.exports = db;