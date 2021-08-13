const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const directorRoutes = (app, fs) => {
    app.get('/directors', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('select * from [directors]', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result.recordset)
            }
        })
    });
};
    module.exports = directorRoutes;