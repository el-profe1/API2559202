const moviesRouter = require('./moviesRouter');
const commentsRouter = require('./commentsRouter');

function routerApi(app){
    app.use('/movies', moviesRouter);
    app.use('/comments', commentsRouter);       
}

module.exports = routerApi;