import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class AuthController {

    public async register({ request, response }: HttpContextContract){
        try {

            const data = await request.validate(UserValidator)
            const newUser = await User.create(data)
            
            const otp_code = Math.floor(100000 + Math.random() * 900000)

            let save_code = Database.table('otp_codes').insert({ otp_code: otp_code, users_id: newUser.id })

            await Mail.send((message) => {
                message
                  .from('coba@gmail.com')
                  .to(data.email)
                  .subject('Welcome Onboard!')
                  .htmlView('emails/otp_verification', { otp_code })
            })
          
            return response.created({ messages: 'User created!', data: newUser })
        } catch (error) {

            return response.unprocessableEntity({ 
                message: error.message 
            })

        }
    }

    public async login({ auth, request, response }: HttpContextContract){

        const userSchema = schema.create({
            email: schema.string(),
            password: schema.string()
        })

        try {
            
            await request.validate({ schema: userSchema })

            const email = request.input('email')
            const password = request.input('password')

            const token = await auth.use('api').attempt(email, password)

            return response.ok({ message: 'login sukses', token})

        } catch (error) {

            if (error.guard) {
                return response.badRequest({ 
                    message: error.message  
                })
            } else {
                return response.badRequest({ 
                    message: error.messages
                })
            }
            

        }
    }

}
