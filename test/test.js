const apis = require('./apis')

apis.UserGetUserByName({ username: 'admin' }).then(response => {
  console.log(response.data)
}).catch(err => {
  console.log(err)
})
