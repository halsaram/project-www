/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/
const routes = (
    module.exports = require('next-routes')()
        .add('/cate', '/')
        .add('/new', '/')
        .add('/last', '/')
        .add('project', '/project/:id')
)