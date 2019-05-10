const errorHandle = require("./errorHandler");

module.exports = (model, {arrayFormat}) => async (req, res) => {
    try{
        let {value = 0} = req.body;
        let data = await model.find({ tags: { $lte: value}}).exec();

        if(!data){ return res.status(304).end() }

        res.status(200).send(arrayFormat(data));
    }catch(error){
        errorHandle(error, res);
    }
}