const userModel = require('../models/user.model')

const createUser = async ({firstname, lastname, email, password}) => {

    console.log({firstname, lastname, email, password})
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }

    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: password
    })

    return user;
}

module.exports = {
    createUser
}