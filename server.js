const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/start', (req, res) => {
        const actualPage = '/project'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/p/:id', (req, res) => {
        const actualPage = '/project'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/login', (req, res) => {
        const actualPage = '/login'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/find', (req, res) => {
        const actualPage = '/login/find'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })


    server.get('/join', (req, res) => {
        const actualPage = '/login/join'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    
    server.get('/termsOfUse', (req, res) => {
        const actualPage = '/components/main/TermsOfUse'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/notices', (req, res) => {
        const actualPage = '/components/main/Notices'
        const queryParams =  { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(3333, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3333')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
