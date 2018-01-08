module.exports = function (app) {
    app.get('/teste', function (req, res) {
        console.log('Recebida requisição de teste');
        res.send('Ok /teste')
    })
}