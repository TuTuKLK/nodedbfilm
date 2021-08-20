const sql = require("mssql/msnodesqlv8");
const dbConnect = require("../dbConnect");

const filmRoutes = (app, fs) => {
  app.get("/films", (req, res) => {
    let request = new sql.Request(dbConnect);
    // request.query("SELECT * FROM Movie ORDER BY Title OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;", function (err, result) {
    request.query("select * from [movie]", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result.recordset);
      }
    });
  });
  app.get("/filmsAlpha", (req, res) => {
    let request = new sql.Request(dbConnect);
    // request.query("SELECT * FROM Movie ORDER BY Title OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;", function (err, result) {
    request.query("select * from [movie] order by Title DESC", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result.recordset);
      }
    });
  });
  app.get("/filmsNotAlpha", (req, res) => {
    let request = new sql.Request(dbConnect);
    // request.query("SELECT * FROM Movie ORDER BY Title OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;", function (err, result) {
    request.query("select * from [movie] order by Title", function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result.recordset);
      }
    });
  });
  app.get("/filmsid", (req, res) => { let request = new sql.Request(dbConnect);
    console.log(req)
    // console.log(req.query)
    // console.log(req.query.genre)
    request.query(`SELECT * FROM Movie where IdMovie = ('${req.query.id}')`, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        res.send(result.recordset);
    }
    });
  });
};


module.exports = filmRoutes;
