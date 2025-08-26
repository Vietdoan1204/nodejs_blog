const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const me = require('./me')

function route(app){

    app.use('/news', newsRouter);
    app.use('/me', me);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

}

module.exports = route;