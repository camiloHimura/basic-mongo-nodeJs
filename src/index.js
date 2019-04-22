const conect = require("./conect");

conect.run()
    .then(info => console.log("----- conected -----", info))
    .catch(error => console.log("----- error -----", error))