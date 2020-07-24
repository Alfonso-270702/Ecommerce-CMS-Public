# Ecommerce-CMS

## POST /login
Login to CRUD products

### Properties
- email (string)
- password (string)

### Response
Status 200
``` javascript
{
  "msg": "successfully login",
  "token": "<user_token>"
}
```
Status 400
``` javascript
{
    "errors": {
      "email or password are wrong"
    }
}
or
{
    "errors": {
      "No user found"
    }
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## GET /products
Get all product

### Properties
- name (string)
- image_url (string)
- stock (integer)
- price (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

### Response
Status 200
``` javascript
{
    "data": {
        "id": "user_id",
        "name": "name",
        "image_url": "image_url",
        "stock": 10,
        "price": 10000
        "createdAt": "2020-07-20T11:12:05.376Z",
        "updatedAt": "2020-07-20T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## POST /products
Add product

### Properties
- name (string)
- image_url (string)
- stock (integer)
- price (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "name": (string),
        "image_url": (string),
        "stock": (integer),
        "price": (integer),
    }
}
```

### Response
Status 201
``` javascript
{
    "data": {
        "id": "user_id",
        "name": "name",
        "image_url": "image_url",
        "stock": 1,
        "price": 10000,
        "createdAt": "2020-07-20T11:12:05.376Z",
        "updatedAt": "2020-07-20T11:13:16.220Z"
    }
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## PUT /products
Update product

### Properties
- name (string)
- image_url (string)
- stock (integer)
- price (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Body
``` javascript
{
    "data": {
        "id": 3,
        "name": "name",
        "description": "image_url",
        "stock": 1,
        "price": 1000
    }
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully edit'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>

## DELETE /products
Delete product

### Properties
- id (integer)

## Request Header
``` javascript
{
   "token" : "<user_token>" 
}
```

## Request Params
``` javascript
{
  "id": "user_id",
}
```

### Response
Status 200
``` javascript
{
  msg:'successfully delete'
}
```
Status 400
``` javascript
{
    "errors": [
      "error_name"
    ]
}
```
Status 404
``` javascript
{
    "errors": [
      "ERROR! Not Found"
    ]
}
```

Status 500
``` javascript
{
    "errors": {
      "internal server error"
    }
}
```
<br>
