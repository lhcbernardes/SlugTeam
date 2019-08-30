'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Invite extends Model {
    user(){
        return this.belongsTo('App/Models/Team')
    }
    team(){
        return this.belongsTo('App/Models/Team')
    }
}

module.exports = Invite
