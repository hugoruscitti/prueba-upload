var AWS = require('aws-sdk');

/*
 * https://github.com/aws/aws-sdk-js/blob/master/doc-src/guide/node-examples.md
 */

AWS.config.update({
  accessKeyId: 'aFSoSE4BY2yHGf3oDQXz',
  secretAccessKey: 'WDjIV0nKThCjKmWFbfrsWqwLVrtB4lqgSLGt-evD'
});

//var host = 'test-tagger-app.objects.dreamhost.com';
var bucket = '12312test-tagger-app.objects.dreamhost.com';

var ep = new AWS.Endpoint('objects.dreamhost.com');
var s3 = new AWS.S3({endpoint: ep});
//s3.service.endpoint.hostname == host;

 s3.createBucket({Bucket: bucket}, function() {

  var params = {Bucket: bucket, Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)
          console.log(err)
      else {
          console.log("Successfully uploaded data to myBucket/myKey");
          console.log(data);
        }

   });

});


s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket test: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
