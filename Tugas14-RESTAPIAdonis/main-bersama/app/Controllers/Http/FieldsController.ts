import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
  

export default class FieldsController {

    public async index({ response }: HttpContextContract){

        let fields = await Database.from('fields').select('id', 'name', 'type', 'venue_id')
        response.ok({ message: 'Sukses ambil data!', data: fields })

    }
    
    public async store({ request, response, params }: HttpContextContract){
        let venue_id = params.venue_id

        const newFieldSchema = schema.create({

            name: schema.string({ trim: true }),
            type: schema.string({ trim: true })

        })

        try {

            let payload = await request.validate({ 
                schema: newFieldSchema,

                messages: {
                    'name.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'type.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong'
                }
            })

            response.status(200).json({ 
                data: payload 
            })

            let newFieldsId = await Database.table('fields').returning('id').insert({
                name: request.input('name'),
                type: request.input('type'),
                venue_id: venue_id
            })

            response.created({ message: 'Data tersimpan!', newId: newFieldsId })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        let fields = await Database.from('fields').where('id', id).select('id', 'name', 'type', 'venue_id').firstOrFail()
        return response.ok({ message: 'Sukses ambil data!', data: fields })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        let venue_id = params.venue_id

        let updateData = await Database.from('fields').where('id', id).update({
            name: request.input('name'),
            type: request.input('address'),
            venues_id: venue_id
        })

        return response.ok({ message: 'Data updated!', data: updateData })
    }

    public async destroy({ response, params }: HttpContextContract){

        let id = params.id
        await Database.from('fields').where('id', id).delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
