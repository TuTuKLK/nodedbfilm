const sql = require("mssql/msnodesqlv8");
const dbConnect = require("../dbConnect");

const filmRoutesGenre = (app, fs) => {
app.get("/filmsgenre", (req, res) => {
    let request = new sql.Request(dbConnect);
    console.log(req)
    // console.log(req.query)
    // console.log(req.query.genre)
    request.query(`SELECT m.Title, g.Label FROM Movie as m RIGHT OUTER JOIN MovieGenre as mg on m.IdMovie = mg.IdMovie left OUTER JOIN Genre as g on mg.IdGenre=g.IdGenre where g.Label in ('${req.query.genre}')`, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        res.send(result.recordset);
    }
    });
});
};
module.exports = filmRoutesGenre;
