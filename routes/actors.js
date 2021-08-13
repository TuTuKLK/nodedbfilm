const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const actorRoutes = (app, fs) => {
    app.get('/actors', (req, res) => {
        let request = new sql.Request(dbConnect);
        req=request.query('select * from [cast]', function(err,result){
            if (err){
                console.log(err);
            }else{
                // result=result.filter(result=>result.recordsets.lastname)
                res.send(result.recordset)
            }
        })
    });
};
    
    module.exports = actorRoutes;