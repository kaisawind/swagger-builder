const apis = require('./apis')

apis.StoreGetInventory({ $config: {
  headers: {
    'api_key': 'admin'
  }
}}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.StorePlaceOrder({
  body: {
    'id': 0,
    'petId': 0,
    'quantity': 0,
    'shipDate': '2019-07-12T07:50:04.212Z',
    'status': 'placed',
    'complete': false
  }
}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.StoreGetOrderById({ orderId: 0 }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.StoreDeleteOrder({ orderId: 0 }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserLoginUser({ username: 'admin', password: 'abc123' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserCreateUsersWithArrayInput({
  body: [
    {
      'id': 0,
      'username': 'string',
      'firstName': 'string',
      'lastName': 'string',
      'email': 'string',
      'password': 'string',
      'phone': 'string',
      'userStatus': 0
    }
  ] }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserCreateUsersWithListInput({
  body: [
    {
      'id': 0,
      'username': 'string',
      'firstName': 'string',
      'lastName': 'string',
      'email': 'string',
      'password': 'string',
      'phone': 'string',
      'userStatus': 0
    }
  ] }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserCreateUser({
  body: {
    'id': 0,
    'username': 'string',
    'firstName': 'string',
    'lastName': 'string',
    'email': 'string',
    'password': 'string',
    'phone': 'string',
    'userStatus': 0
  }
}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserGetUserByName({ username: 'admin' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserUpdateUser({ username: '111', body: {}}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserDeleteUser({ username: '222' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

apis.UserLogoutUser().then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})
