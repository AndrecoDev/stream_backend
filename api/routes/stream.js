const express = require('express')
const Stream = require('../models/Stream')
Streamx = require('node-rtsp-stream');
const onvif = require('node-onvif')
// const { isAuthenticated, hasRoles } = require('../auth')
const router = express.Router()

router.get('/', (req, res) => {
  Stream.find().limit(3)
    .then(data => {
      res.json(data)
    })
})

Stream.find()
  .then((data) => {
    if (data) {
      const count = 0
      data.map((datos, _id, name, desc) => {
        onvif.startProbe().then((device_info_list) => {
          stream = new Streamx({
            name: '',
            streamUrl: datos.streamUrl,
            wsPort: `800${count}`
          });
        }).catch((error) => {
          console.error(error);
        });

        router.get(`/camera/${datos.name}`, (req, res) => {
          res.write(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style>
          html, body {
            padding: 0;
            margin: 0;
          }
          .camera{
            width: 100%;
            heigh: 100%;
          }
        </style>
        <title>${ datos.name}</title>
        <div><canvas class="camera" id="videoCanvas${ count }" width="640" height="360"></canvas></div>
        <script src="https://jsmpeg.com/jsmpeg.min.js"></script>
        <script type="text/javascript">
                     var canvas${ count} = document.getElementById('videoCanvas${count}');
                     var ws${ count} = "ws://localhost:800${count}";
                     var player${ count} = new JSMpeg.Player(ws${count}, {canvas:canvas${count}, autoplay:true,audio:false,loop: true });
        </script>
    <body>
    </body>
    </html>`)
          res.end();
        })
        count += 1
      })
    }
  })

router.post('/camera', (req, res) => {
  const { name, streamUrl } = req.body
  Stream.findOne({ streamUrl }).exec()
    .then((stream) => {
      if (stream) {
        return res.send('stream url exists')
      }
      Stream.create({
        name,
        streamUrl
      }).then(() => {
        res.send('Camera add successfully')
      })
    })
})

module.exports = router