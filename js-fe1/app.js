 // express is a small HTTP server wrapper, but this works with any HTTP server
const server = require('express')()
const Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    secure: false,
    accessKey: '31IR2D186ZM64UPWCQ4S',
    secretKey: '4RzdEfbf2YCb2dmdjbsaNisx1uRe7rCXWFzJAp00'
})

server.get('/presignedUrl', (req, res) => {
    minioClient.presignedPutObject('uploads', req.query.name, (err, url) => {
        if (err) throw err
        res.end(url)
    })
})

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

var listener = minioClient.listenBucketNotification('uploads', 'foo', '.txt', ['s3:ObjectCreated:*'])
listener.on('notification', function(record) {
  // For example: 's3:ObjectCreated:Put event occurred (2016-08-23T18:26:07.214Z)'
  console.log('%s event occurred (%s)', record.eventName, record.eventTime)
  console.log(JSON.stringify(record))
  listener.stop()
})

server.listen(8088)
