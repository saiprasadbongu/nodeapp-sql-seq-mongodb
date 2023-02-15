var express = require('express');
var router = express.Router();

var service=require('../service/productController');
var service=require('../service/mysql');
var cors = require('cors');
const app = require('../app');
router.use(cors())

var corsOptions =
{
    origin: '*'
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/mcityemp',cors(corsOptions),(req, res)=>{
  service.getEmployeeData().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})


router.get('/postemployee',cors(corsOptions),(req, res)=>{
  service.postEmployee().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})


router.get('/updateemployee',cors(corsOptions),(req, res)=>{
  service.updateEmployee().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})

router.get('/innerjoin',cors(corsOptions),(req, res)=>{
  service.empInnerJoin().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})

router.get('/leftjoin',cors(corsOptions),(req, res)=>{
  service.empLeftJoin().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})

router.get('/rightjoin',cors(corsOptions),(req, res)=>{
  service.empRightJoin().then(data => res.send(data)).catch(err=>res.send('err in sending file'))
})

module.exports = router;
