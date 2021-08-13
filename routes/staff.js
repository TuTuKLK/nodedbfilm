const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const genderRoutes = (app, fs) => {
    app.get('/staff', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('select * from [crew]', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result.recordset)
            }
        })
    });
};
    module.exports = genderRoutes;