const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const genreRoutes = (app, fs) => {
    app.get('/genres', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('SELECT * FROM genre', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result.recordset.map(item=>item.Label))
                // res.send(result.recordset)
            }
        })
    });
};
    module.exports = genreRoutes;