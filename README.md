# Mongoose
Helps me to handle operations with mongoDB

[definition](https://mongoosejs.com/docs/guide.html#definition)

## Schemas 
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

* [Example](/src/tag/tag.model.js) 
* [Schema definitions](https://mongoosejs.com/docs/guide.html#definition)
* [Add](https://mongoosejs.com/docs/api.html#schema_Schema-add)


Is possible to add values after creating a schema whit the method add

```
    const CamiloSchema = new Schema();
    CamiloSchema.add({ name: 'string', color: 'string', price: 'number' });
```


## Models 
Model is a class that's your primary tool for interacting with MongoDB. An instance of a Model is called a Document.

```
    ///////////////////////Module Name///Schema
    var myModel = mongoose.model("link", new mongoose.Schema({name: String}));
```

* [Example](/src/log/log.model.js)
* [Model](https://mongoosejs.com/docs/api.html#model_Model)

### Methods
Documents have many of their own built-in instance methods. We may also define our own custom document instance methods too.

### Custom Methods

* [Definition](/src/tag/tag.model.js)
* [Example](/src/tag/tag.controller.js)
* [Docs](https://mongoosejs.com/docs/guide.html#methods)

### Default Methods

#### Create Document
* [Example](/src/utils/gCrud.js)
* [Create](https://mongoosejs.com/docs/api.html#model_Model.create): Model.create({data})
* This function triggers the following middleware: save()

#### Finds Document
* [Examples](/src/utils/gCrud.js)
* [Find](https://mongoosejs.com/docs/api.html#model_Model.find): `Model.find({properties})`
* `Model.findBy({properties})`: Returns a fake promise, inorder to execute it is necessary add .exec()
* `Model.findById({properties})`.exec(): Returns a promise
* `Model.findByIdAndUpdate({properties}`, {dataToUpdate}, {new: true}).exec(): {new: true} it's necessary in order to return the new updated object, if not the retuned obj it's going to be the old one
* `Model.findOneAndRemove({properties})`

[Middleware](https://mongoosejs.com/docs/middleware.html)

[Model definitions](https://mongoosejs.com/docs/api.html#model)

## Comparison

[Query Comparison](https://docs.mongodb.com/manual/reference/operator/query-comparison/)

## Virtuals

## Hooks

## Compound index


## Operator
* [Operator update](https://docs.mongodb.com/manual/reference/operator/update/)

## Links
* [Mongodb 4](https://www.mongodb.com/mongodb-4.0)
* [Stitch](https://www.mongodb.com/cloud/stitch)
* [Hasura](https://hasura.io/)
* [Prisma](https://www.prisma.io/)
* [Waterline](https://www.npmjs.com/package/waterline)
* [Wiredtiger](http://www.wiredtiger.com/)

## HTTP Status Codes
* 200- OK; Standard response for successful HTTP requests
* 201- Created; Request has been fulfilled. New resource created
* 204- No Content; Request processed. No content returned
* 301- Moved Permanently; This and all future requests directed to the given URI
* 304- Not Modified; Resource has not been modified since last requested
* 400- Bad Request; Request cannot be fulfilled due to bad syntax
* 401- Unauthorized; Authentication is possible, but has failed
* 403- Forbidden; Server refuses to respond to request
* 404- Not Found; Requested resource could not be found
* 500- Internal Server Error; Generic error message when server fails
* 501- Not Implemented; Server does not recognize method or lacks ability to fulfill
* 503- Service Unavailable; Server is currently unavailable