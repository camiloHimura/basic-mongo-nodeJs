# Mongoose
Helps me to handle operations with mongoDB

## Schemas 
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

* [Schema definitions](https://mongoosejs.com/docs/guide.html#definition)

## Models 

* Create: Model.create({data})
* Find: Model.find({properties})
* * Model.findById({properties})
* * Model.findByIdAndUpdate({properties}, {dataToUpdate})
* * Model.findByIdAndRemove({properties}, {dataToUpdate})
* * Model.findByIdAndDelete({properties}, {dataToUpdate})

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