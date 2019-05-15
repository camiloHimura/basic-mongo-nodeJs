# Mongoose
Helps me to handle operations with mongoDB

[definition](https://mongoosejs.com/docs/guide.html#definition)

## Schemas 
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

* [Example](/src/tag/tag.model.js) 
* [Schema definitions](https://mongoosejs.com/docs/guide.html#definition)
* [Add](https://mongoosejs.com/docs/api.html#schema_Schema-add)
* [schematypes](https://mongoosejs.com/docs/schematypes.html)


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

#### Comparison Query Operators
[Documentation](https://docs.mongodb.com/manual/reference/operator/query/)

* Match equal value
    * `model.find({ property: {$eq: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq)

* Select documents where the value is greater than (>)
    * [Examples](/src/utils/greater.js) `model.find({ property: {$gt: value }})`, this property not work for getting data in base of the length (arrays)
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/gt/#op._S_gt)

* Select documents where the value is greater or equal than (>=)
    * [Examples](/src/utils/greaterEqual.js) `model.find({ property: {$gte: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/gte/#op._S_gte)

* Matches any of the values specified in an array.
    * [Examples](/src/utils/inArray.js) `model.find({ property: {$in: [value, value, ...] }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/in/#op._S_in)

* Matches values that are less than a specified value.
    * [Examples](/src/utils/less.js) `model.find({ property: {$lt: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/lt/#op._S_lt)

* 	Matches values that are less than or equal to a specified value.
    * [Examples](/src/utils/lessEqual.js) `model.find({ property: {$lte: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/lte/#op._S_lte)

* 	Matches all values that are not equal to a specified value.
    * [Examples](/src/utils/noEqual.js) `model.find({ property: {$ne: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/ne/#op._S_ne)

* 	Matches none of the values specified in an array.
    * [Examples](/src/utils/noInArray.js) `model.find({ property: {$nin: value }})`
    * [Docs](https://docs.mongodb.com/manual/reference/operator/query/nin/#op._S_nin)

There are many other useful operators that can make our life easy, short list:

* [Logical](https://docs.mongodb.com/manual/reference/operator/query-logical/): $and, $or, $not, $nor
* [Elemet](https://docs.mongodb.com/manual/reference/operator/query-element/): $exist, $type
* [Evaluation](https://docs.mongodb.com/manual/reference/operator/query/): $expr, $jsonSchema, $mod, $regex, $text, $where
* [Array](https://docs.mongodb.com/manual/reference/operator/query-array/): $all, $elemMatch, $size
* [Comments](https://docs.mongodb.com/manual/reference/operator/query/comment/#op._S_comment): $comments
* [Projection](https://docs.mongodb.com/manual/reference/operator/projection/): $, $elemtMatch, $slice, $meta

#### Update Operators
[Documentation](https://docs.mongodb.com/manual/reference/operator/update/)

* [Field](https://docs.mongodb.com/manual/reference/operator/update-field/): $inc, $min, $max, $mul, $rename, $set, $setOnInsert, $unset
* [Array Update Operators](https://docs.mongodb.com/manual/reference/operator/update-array/): $addToset, $pop, $pull, $push, $pullAll
    * Array Update Operator Modifiers: $each, $position, $slice, $sort

#### Aggregation Pipeline Stages
Some times is necessary to add new files on our document, limit the outcomes or group it, this is the [Documentation](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/) 

#### Cursor Operators
These methods modify the way that the underlying query is executed.
[Documentation](https://docs.mongodb.com/manual/reference/method/js-cursor/)
```
    model.find({ staff: {$in: ["d", "f"]} }).limit(2).exec();
    model.find({ staff: {$in: ["b", "c"]} }).sort("+students").exec();
    model.find({ staff: {$in: ["b", "c"]} }).sort("-students").exec();
    model.find({ staff: {$in: ["b", "c"]} }).sort({students: 1}).exec();
    model.find({ staff: {$in: ["b", "c"]} }).sort({students: -1}).exec();
```

###Query Helpers
You can also add query helper functions, which are like instance methods but for mongoose queries. Query helper methods let you extend mongoose's chainable query builder API. 

* [Definition](/src/link/link.model.js) 
* [Execution (findWithTags)](/src/link/link.controller.js) 

####Virtuals
Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage.

If you use toJSON() or toObject() mongoose will not include virtuals by default. This includes the output of calling JSON.stringify() on a Mongoose document, because JSON.stringify() calls toJSON(). Pass { virtuals: true } to either toObject() or toJSON().

* [Definition](/src/link/link.model.js) 
* Execution: every time we make a request through a Schema with a virtual definition that value is going to be returned by default 


[Documentation](https://mongoosejs.com/docs/guide.html#query-helpers)

## Middleware
Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. 

[Docs](https://mongoosejs.com/docs/middleware.html)

### Hooks




## Compound index


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