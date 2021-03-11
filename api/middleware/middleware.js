const Users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`Method: ${req.method}, URL: ${req.url}, TimeStamp: ${Date.now()}`)
  next()
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try{
    const user = await Users.getById(req.params.id)
    if(user){
      res.status(200)
      req.user = user
      next()
    }else{
      res.status(404).json({message: "user not found..."})
    }
  }catch(e){
    res.status(500).json({message: e.message})
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if(!req.body){
    res.status(404).json({message: 'mising user data'})
  }else if(!req.body.name){
    res.status(404).json({message: 'missing name field'})
  }else{
    next()
  }
}
function validatePost(req, res, next) {
  // DO YOUR MAGIC

}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validatePost,
  validateUser,
  validateUserId
}