const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const actorRoutes = (app, fs) => {
    app.get('/actors', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('select * from cast', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    });
};
    
    module.exports = actorRoutes;