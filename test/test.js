import {
  GetInventory,
  PlaceOrder,
  GetOrderById,
  DeleteOrder,
  LoginUser,
  CreateUsersWithArrayInput,
  CreateUsersWithListInput,
  CreateUser,
  GetUserByName,
  UpdateUser,
  DeleteUser,
  LogoutUser,
} from './apis.js'

GetInventory({
  $config: {
    headers: {
      'api_key': 'admin'
    }
  }
}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

PlaceOrder({
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

GetOrderById({ orderId: 0 }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

DeleteOrder({ orderId: 0 }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

LoginUser({ username: 'admin', password: 'abc123' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

CreateUsersWithArrayInput({
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
  ]
}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

CreateUsersWithListInput({
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
  ]
}).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

CreateUser({
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

GetUserByName({ username: 'admin' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

UpdateUser({ username: '111', body: {} }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

DeleteUser({ username: '222' }).then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})

LogoutUser().then(response => {
  console.log(response.status)
}).catch(err => {
  console.log(err.response.status)
})
