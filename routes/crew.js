const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const crewRoutes = (app, fs) => {
    app.get('/crew', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('SELECT c.IdCrew, IdMovie,FirstName,LastName,Job FROM [Crew] AS c RIGHT OUTER JOIN [CrewMovie] AS cm on c.IdCrew = cm.IdCrew  ', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result.recordset)
            }
        })
    });
};
    module.exports = crewRoutes;