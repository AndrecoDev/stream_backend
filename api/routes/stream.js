const express = require('express')
const { isAuthenticated, hasRoles } = require('../auth')
const router = express.Router()

// router.get('/', isAuthenticated, (req, res) => {
//      res.send('Howdy From /stream')
// })
router.get('/', (req, res) => {
     console.log(process.camera)
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
        <title>House Camera</title>

       ${ process.camera.map((can, i) => {

          return ` <div><canvas class="camera" id="videoCanvas${i}" width="640" height="360"></canvas></div>`
     }).join("")}
       
    
        <script src="https://jsmpeg.com/jsmpeg.min.js"></script>
        <script type="text/javascript">
    
        ${ process.camera.map((can, i) => {

          return ` var canvas${i} = document.getElementById('videoCanvas${i}');
                     var ws${i} = "ws://localhost:900${i}";
                     var player${i} = new JSMpeg.Player(ws${i}, {canvas:canvas${i}, autoplay:true,audio:false,loop: true });
            `
     }).join("")}
    
        </script>
    
    <body>
          
    </body>
    </html>`)

     res.end();
})

module.exports = router