var AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'aFSoSE4BY2yHGf3oDQXz',
  secretAccessKey: 'WDjIV0nKThCjKmWFbfrsWqwLVrtB4lqgSLGt-evD'
});

var host = 'test-tagger-app.objects.dreamhost.com';
var bucket = 'test-tagger-app.objects.dreamhost.com';

var ep = new AWS.Endpoint(host);
var s3 = new AWS.S3({endpoint: ep});
//s3.service.endpoint.hostname == host;

 s3.createBucket({Bucket: bucket}, function() {

  var params = {Bucket: bucket, Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)
          console.log(err)
      else
          console.log("Successfully uploaded data to myBucket/myKey");

   });

});
