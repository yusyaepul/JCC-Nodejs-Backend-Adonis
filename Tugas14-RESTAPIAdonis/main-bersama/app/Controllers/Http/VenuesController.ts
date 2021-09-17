import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
  

export default class VenuesController {

    public async index({ response }: HttpContextContract){

        let venues = await Database.from('venues').select('id', 'name', 'address')
        response.ok({ message: 'Sukses ambil data!', data: venues })

    }
    
    public async store({ request, response }: HttpContextContract){

        const newVenueSchema = schema.create({

            name: schema.string({ trim: true }),
            address: schema.string({ trim: true }),
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
                    'name.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'address.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'phone.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'phone.mobile': 'tidak dapat di proses, format {{ field }} tidak sesuai'
                }
            })

            response.status(200).json({ 
                data: payload 
            })

            let newVenuesId = await Database.table('venues').returning('id').insert({
                name: request.input('name'),
                address: request.input('address'),
                phone: request.input('phone')
            })

            response.created({ message: 'Data tersimpan!', newId: newVenuesId })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        let venues = await Database.from('venues').where('id', id).select('id', 'name', 'address').firstOrFail()
        return response.ok({ message: 'Sukses ambil data!', data: venues })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        let updateData = await Database.from('venues').where('id', id).update({
            name: request.input('name'),
            address: request.input('address'),
            phone: request.input('phone')
        })

        return response.ok({ message: 'Data updated!', data: updateData })
    }

    public async destroy({ response, params }: HttpContextContract){

        let id = params.id
        await Database.from('venues').where('id', id).delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
