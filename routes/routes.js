// load up our shiny new route for users
const filmRoutes = require('./films');
const actorRoutes = require('./actors');
const crewRoutes = require('./crew');
const directorRoutes = require('./directors');
const genreRoutes = require('./genres');
const userRoutes = require('./users');
const filmRoutesGenre = require('./filmRoutesGenre');
const actorByIDRoutes = require('./actorsByID');
const genreIDRoutes = require('./genresID');


const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
    app.get('/', (req, res) => {
    res.send('GG ServerApi Acess OK');
    });

  // run our user route module here to complete the wire up
    filmRoutes(app, fs);
    actorRoutes(app, fs);
    crewRoutes(app, fs);
    directorRoutes(app, fs);
    userRoutes(app, fs);
    filmRoutesGenre(app, fs);
    genreRoutes(app, fs);
    actorByIDRoutes(app, fs);
    genreIDRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;