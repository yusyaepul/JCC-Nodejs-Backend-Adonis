import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
  

export default class BookingsController {
    
    public async store({ request, response }: HttpContextContract){

        const newBookingSchema = schema.create({

            nama: schema.string({ trim: true }),
            nama_venue: schema.string({ trim: true }),
            tanggal_booking: schema.date({}, [
                rules.after('today')
            ])

        })

        try {

                let payload = await request.validate({ 
                    schema: newBookingSchema,

                    messages: {
                        'nama.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                        'nama_venue.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                        'tanggal_booking.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                        'tanggal_booking.after': 'tidak dapat di proses, {{ field }} minimal booking 1 hari sebelum'
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
