/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            unique: true,
            required: true,
            minLength: 1
        },
        email: {
            type: 'string',
            unique: true,
            required: true,
            minLength: 1,
            email: true
        },
        phone: {
            type: 'int',
            unique: true,
            required: true,
            min: 1
        }
    }
};