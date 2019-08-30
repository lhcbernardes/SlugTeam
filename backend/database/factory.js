'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder{
    async run(){
        const user = await user.create({
            name: 'Leandro',
            email:'leandro.bernardes@hotmail.com',
            password:"34589190"
        })
        
        await user.teams().create({
            name:'ACID-Systems',
            slug:''
            user_id: user.id,

        })
    }
}
module.exports=DatabaseSeeder