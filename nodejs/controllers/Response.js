function Response(req, res, err, data){
    if (err){
        return res.code(400).json({
            messeage: err,
            data: data
        })
    }
    return res.code(200).json({
        messeage: err,
        data: data
    })
}

module.exports = Response;