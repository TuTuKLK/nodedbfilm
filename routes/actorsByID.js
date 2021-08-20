const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const actorByIDRoutes = (app, fs) => {
    app.get('/actorsByID', (req, res) => {
        let request = new sql.Request(dbConnect);
        req=request.query('SELECT c.IdCast,mc.idMovie,FirstName,LastName FROM [Cast] AS c INNER JOIN [MovieCast] AS mc on c.IdCast = mc.IdCast', function(err,result){
            if (err){
                console.log(err);
            }else{
                // result=result.filter(result=>result.recordsets.lastname)
                res.send(result.recordset)
            }
        })
    });
};
    
    module.exports = actorByIDRoutes;