var express = require('express'),
    app = express(),
    server;

app.get('/', function(req, res) {
  res.send('Now it says a different thing!!!');
});

server = app.listen(process.env.PORT || 80, function() {
  var host = server.address().address;
      port = server.address().port;

  console.log('Listening at %s:%s', host, port);
});
