var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')
/* GET home page. */
router.get('/', user.getUser);
router.get('/getTargetUser', user.getTargetUser)
router.post('/register',user.userRegister)
router.get('/getUserName',user.getUserName)
router.post('/userLogin',user.userLogin)
router.get('/verifyToken',user.verifyToken)
router.get("/getIDTargetUser",user.getIDTargetUser)
router.post("/updateUserInfo",user.updateUserInfo)
router.post("/changUserBanned",user.changUserBanned)


module.exports = router;





// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
