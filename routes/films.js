const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const filmRoutes = (app, fs) => {

app.get('/films', (req, res) => {
    let request = new sql.Request(dbConnect);
    request.query('select * from movie', function(err,result){
        if (err){
            console.log(err);
        }else{
            // result=result.recordsets.title;
            res.send(result)
        }
    })
});
};

module.exports = filmRoutes;