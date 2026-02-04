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

---

### POST /users/login

#### Description
Authenticates an existing user in the system. This endpoint accepts user credentials (email and password), validates the input, verifies the credentials against the database, and returns an authentication token along with the user data upon successful authentication.

#### Request Method
```
POST /users/login
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "email": "string (required, must be valid email format)",
  "password": "string (required, minimum 6 characters)"
}
```

#### Request Body Example
```json
{
  "email": "john.doe@example.com",
  "password": "secure123"
}
```

#### Response

##### Success Response (200 OK)
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
      "msg": "Password must be atleast 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**401 Unauthorized** - Invalid Credentials
```json
{
  "message": "Invalid username or password"
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
| 200 | User successfully authenticated. User object and authentication token returned. |
| 400 | Validation error. Check the error array for specific validation failures. |
| 401 | Invalid credentials. Email does not exist or password is incorrect. |
| 500 | Internal server error. |

#### Validation Rules

| Field | Rules |
|---|---|
| `email` | Required, must be a valid email format |
| `password` | Required, minimum 6 characters |

#### Notes
- The endpoint compares the provided password with the hashed password stored in the database.
- The endpoint returns a JWT token that should be used for subsequent authenticated requests.
- Returns a generic "Invalid username or password" error message for both missing user and incorrect password cases for security reasons.
- The authentication token is also set as a cookie in the response for client convenience.

---

### GET /users/profile

#### Description
Retrieves the profile information of the currently authenticated user. This is a protected endpoint that requires valid authentication.

#### Request Method
```
GET /users/profile
```

#### Request Headers
```
Authorization: Bearer <jwt_token>
```
or
```
Cookie: token=<jwt_token>
```

#### Request Body
No request body required.

#### Response

##### Success Response (200 OK)
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

##### Error Responses

**401 Unauthorized** - Missing or Invalid Token
```json
{
  "message": "Unauthorized"
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
| 200 | Profile retrieved successfully. User object returned. |
| 401 | Authentication failed. Token is missing, invalid, or expired. |
| 500 | Internal server error. |

#### Authentication
- **Required**: Yes. This endpoint requires a valid JWT token.
- **Token Location**: Can be sent via Authorization header (`Bearer <token>`) or as a cookie.

#### Notes
- This endpoint is protected and can only be accessed by authenticated users.
- The user information is extracted from the authentication token.
- No sensitive data like password hashes are returned.

---

### GET /users/logout

#### Description
Logs out the currently authenticated user by invalidating their authentication token. This is a protected endpoint that requires valid authentication. The token is blacklisted to prevent its reuse.

#### Request Method
```
GET /users/logout
```

#### Request Headers
```
Authorization: Bearer <jwt_token>
```
or
```
Cookie: token=<jwt_token>
```

#### Request Body
No request body required.

#### Response

##### Success Response (200 OK)
```json
{
  "message": "User Logged out"
}
```

##### Error Responses

**401 Unauthorized** - Missing or Invalid Token
```json
{
  "message": "Unauthorized"
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
| 200 | User successfully logged out. Token blacklisted. |
| 401 | Authentication failed. Token is missing, invalid, or expired. |
| 500 | Internal server error. |

#### Authentication
- **Required**: Yes. This endpoint requires a valid JWT token.
- **Token Location**: Can be sent via Authorization header (`Bearer <token>`) or as a cookie.

#### Notes
- This endpoint is protected and can only be accessed by authenticated users.
- The authentication token is cleared from cookies.
- The token is added to a blacklist to prevent its reuse for future requests.
- After logout, the client should discard the token and treat the user as unauthenticated.

