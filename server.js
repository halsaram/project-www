const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/', (req, res) => {
        const actualPage = '/'
        app.render(req, res, actualPage)
    })

    server.get('/p', (req, res) => {
        const actualPage = '/project'
        app.render(req, res, actualPage)
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