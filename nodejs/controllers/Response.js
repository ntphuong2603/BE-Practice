function Response(res, err, data){
    let code = 200;
    if (err){
        code = 400;
    }
    return res.status(code).json({
        messeage: err,
        data: data
    })
}

module.exports = Response;