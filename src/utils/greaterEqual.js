const errorHandle = require("./errorHandler");

module.exports = (model, {arrayFormat}) => async (req, res) => {
    try{
        let {num = 0} = req.body;
        let data = await model.find({ version: { $gte: num}}).exec();

        if(!data){ return res.status(304).end() }

        res.status(200).send(arrayFormat(data));
    }catch(error){
        errorHandle(error, res);
    }
}