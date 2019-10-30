// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({dev})
// const handle = app.getRequestHandler()

// app.prepare()
// .then(() => {
//     const server = express()

//     server.get('/', (req, res) => {
//         const actualPage = '/'
//         app.render(req, res, actualPage)
//     })

//     server.get('/p', (req, res) => {
//         const actualPage = '/project'
//         app.render(req, res, actualPage)
//     })

//     server.get('/d', (req, res) => {
//         const actualPage = '/detail'
//         app.render(req, res, actualPage)
//     })

//     server.get('/log', (req, res) => {
//         const actualPage = '/login'
//         app.render(req, res, actualPage)
//     })

//     server.get('/join', (req, res) => {
//         const actualPage = '/join'
//         app.render(req, res, actualPage)
//     })

//     server.get('*', (req, res) => {
//         return handle(req, res)
//     })
//     // 공지사항
//     server.get('/Notices', (req, res) => {
//         const actualPage = '/Notices'
//         app.render(req, res, actualPage)
//     })
//     //개인정보처리방침
//     server.get('/Privacy', (req, res) => {
//         const actualPage = '/Privacy'
//         app.render(req, res, actualPage)
//     })
//     server.get('/TermsOfUse', (req, res) => {
//         const actualPage = '/TermsOfUse'
//         app.render(req, res, actualPage)
//     })

    
//     server.listen(3333, (err) => {
//         if (err) throw err
//         console.log('> Ready on http://localhost:3333')
//     })
// })
// .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
// })

/**
 * server.js
 *
 * You can use the default server.js by simply running `next`,
 * but a custom one is required to do paramaterized urls like
 * blog/:slug.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * BENEVOLENT WEB LLC BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { createServer } = require('http')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3333
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')

const handler = routes.getRequestHandler(app)
app.prepare().then(() => {
    createServer(handler).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
