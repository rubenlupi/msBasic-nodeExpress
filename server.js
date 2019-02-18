let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
let config = require('./config.js');
var path = require('path');

// ROUTES
config.getGlobbedFiles('./routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(app);
});

// START THE SERVER
app.listen(port);
console.log('Server running on port ' + port);
