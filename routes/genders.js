const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const genderRoutes = (app, fs) => {
    app.get('/genders', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('select * from genre', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    });
};
    module.exports = genderRoutes;