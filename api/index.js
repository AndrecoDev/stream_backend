const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const stream = require('./routes/stream')
const auth = require('./routes/auth')

Stream = require('node-rtsp-stream');
const onvif = require('node-onvif')
// const path = require('path');

const app = express()

process.camera = [];
onvif.startProbe().then((device_info_list) => {
  console.log(device_info_list.length + ' devices were found.');
  // Show the device name and the URL of the end point.

  const arr = [];
  device_info_list.forEach((info,x) => {
    if(x <= 5){

    //console.log('- ' + info.urn);
    //console.log('  - ' + info.name);
    //console.log('  - ' + info.xaddrs[0]);
    arr.push(info.xaddrs[0])
    }
  });
  //console.log(arr)
    process.camera = arr;
    arr.forEach((onCam,i)=>{
       
            let device = new onvif.OnvifDevice({
                xaddr: onCam,
                user : '',
                pass : ''
            }); 
            
            // Initialize the OnvifDevice object
            device.init().then(() => {
                // Get the UDP stream URL
                let url = device.getUdpStreamUrl();
    
                stream = new Stream({
                    name: 'name',
                    streamUrl: url,
                    wsPort: 9000 + i
                })
    
                console.log("URL :"+url);
            }).catch((error) => {
                console.error(error);
            });


    })
            

}).catch((error) => {
  console.error(error);
});


app.use(bodyParser.json())

const db = config.get('mongoURI');
// connect MongoDB
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected successfully'))
.catch((e)=> console.log('Error Connected ' + e))
//Routes
app.use('/api/stream', stream)
app.use('/api/auth', auth)

const port = 4200
app.listen(port, ()=> console.log('Server listening on port ' + port))

// app.get('*', (req, res) => {
//     console.log('Hello World')
//     res.send({ msg: 'Hi there!' })
// })
module.exports = app