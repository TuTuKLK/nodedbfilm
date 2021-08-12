const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const userRoutes = (app, fs) => {
    app.get('/users', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('select * from user', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    });
};
    module.exports = userRoutes;