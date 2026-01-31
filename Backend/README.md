  # Uber Clone - Backend API Documentation

## Endpoints

### POST /users/register

#### Description
Registers a new user in the system. This endpoint accepts user registration details, validates the input, hashes the password, creates a new user in the database, and returns an authentication token along with the user data.

#### Request Method
```
POST /users/register
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "fullname": {
    "firstname": "string (required, minimum 3 characters)",
    "lastname": "string (optional, minimum 3 characters if provided)"
  },
  "email": "string (required, must be valid email format)",
  "password": "string (required, minimum 6 characters)"
}
```

#### Request Body Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secure123"
}
```

#### Response

##### Success Response (201 Created)
```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

##### Error Responses

**400 Bad Request** - Validation Error
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be atleast 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**500 Internal Server Error** - Server Error
```json
{
  "error": "Server error message"
}
```

#### Status Codes

| Status Code | Description |
|---|---|
| 201 | User successfully registered. User object and authentication token returned. |
| 400 | Validation error. Check the error array for specific validation failures. |
| 500 | Internal server error. |

#### Validation Rules

| Field | Rules |
|---|---|
| `fullname.firstname` | Required, minimum 3 characters |
| `fullname.lastname` | Optional, minimum 3 characters if provided |
| `email` | Required, must be a valid email format, must be unique in database |
| `password` | Required, minimum 6 characters |

#### Notes
- The password is automatically hashed using bcrypt before being stored in the database.
- The endpoint returns a JWT token that should be used for subsequent authenticated requests.
- Email addresses must be unique; attempting to register with an existing email will result in an error.

