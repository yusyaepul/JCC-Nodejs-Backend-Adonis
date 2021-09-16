import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
  

export default class VenuesController {
    
    public async store({ request, response }: HttpContextContract){

        const newVenueSchema = schema.create({

            nama: schema.string({ trim: true }),
            alamat: schema.string({ trim: true }),
            phone: schema.string({}, [
                rules.mobile({
                    locales: ['id-ID'],
                    strict: true
                })
            ])

        })

        try {

            let payload = await request.validate({ 
                schema: newVenueSchema,

                messages: {
                    'nama.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'alamat.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'phone.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'phone.mobile': 'tidak dapat di proses, format {{ field }} tidak sesuai'
                }
            })

            response.status(200).json({ 
                data: payload 
            })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

}
