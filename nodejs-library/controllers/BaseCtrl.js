const mongoose = require('mongoose');

class BaseController {
    constructor(name=null, modelSchema=null){
        this._model = null;
        if (name !== null){
            this._model = mongoose.model(name, modelSchema);
        }
    }
    
    get model(){
        return this._model;
    }

    Response(res, err, data){
        let code = 200;
        if (err){
            code = 400;
        }
        return res.status(code).json({
            messeage: err,
            data: data
        });
    }

    async getList(req, res){
        await this._model.find({}, (err, data)=>{
            this.Response(res, err, data)
        })
    }

    async getOne(req, res){
        const id = req.params.id;
        await this._model.findById({_id:id}, (err, data)=>{
            this.Response(res, err, data)
        })
    }

    async update(req, res){
        const id = req.params.id;
        const instance = req.body;
        await this._model.findByIdAndUpdate({_id:id}, {instance}, (err, data)=>{
            this.Response(res, err, data)
        })
    }

    async delete(req, res){
        const id = req.params.id;
        await this._model.findByIdAndDelete({_id: id}, (err, data)=>{
            this.Response(res, err, data)
        })
    }

    async create(req, res){
        const instance = new this._model(req.body);
        await this._model.create(instance, (err, data)=>{
            this.Response(res, err, data);
        })
    }

}

module.exports = BaseController;