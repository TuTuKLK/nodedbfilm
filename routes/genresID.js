const sql = require('mssql/msnodesqlv8');
const dbConnect = require('../dbConnect');
const genreIDRoutes = (app, fs) => {
    app.get('/genresID', (req, res) => {
        let request = new sql.Request(dbConnect);
        request.query('SELECT IdMovie, g.IdGenre, Label FROM [MovieGenre] AS mg INNER JOIN [Genre] AS g on mg.IdGenre = g.IdGenre', function(err,result){
            if (err){
                console.log(err);
            }else{
                res.send(result.recordset)
            }
        })
    });
};
    module.exports = genreIDRoutes;