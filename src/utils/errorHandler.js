module.exports = function errorHandler (err, req, res, next) {
    const status = err.status || 500
    const responseData = {
        error : err.name,
        message : err.message || err,
        stack : err.stack
    }
    console.error(err.message || err);
    res.status(status).render("error",responseData)
}
