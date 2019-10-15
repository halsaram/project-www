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

    server.get('/log', (req, res) => {
        const actualPage = '/login'
        app.render(req, res, actualPage)
    })

    server.get('/join', (req, res) => {
        const actualPage = '/join'
        app.render(req, res, actualPage)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    // 공지사항
    server.get('/Notices', (req, res) => {
        const actualPage = '/Notices'
        app.render(req, res, actualPage)
    })
    //개인정보처리방침
    server.get('/Privacy', (req, res) => {
        const actualPage = '/Privacy'
        app.render(req, res, actualPage)
    })
    server.get('/TermOfUse', (req, res) => {
        const actualPage = '/TermOfUse'
        app.render(req, res, actualPage)
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