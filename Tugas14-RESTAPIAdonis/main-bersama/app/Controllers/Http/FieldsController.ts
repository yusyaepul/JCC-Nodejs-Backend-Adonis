import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateFieldValidator from 'App/Validators/CreateFieldValidator'

import Field from 'App/Models/Field'

export default class FieldsController {

    public async index({ response, params }: HttpContextContract){

        let venue_id = params.venue_id
        //let fields = await Database.from('fields').where('venue_id', venue_id).select('id', 'name', 'type', 'venue_id')
        let fields = await Field
                    .query()
                    .where('venue_id', venue_id)
        response.ok({ message: 'Sukses ambil data!', data: fields })

    }
    
    public async store({ request, response, params }: HttpContextContract){
        let venue_id = params.venue_id

        try {

            await request.validate(CreateFieldValidator)

            //let newFieldsId = await Database.table('fields').returning('id').insert({
            //    name: request.input('name'),
            //    type: request.input('type'),
            //    venue_id: venue_id
            //})
            let newFields = new Field()
                newFields.name = request.input('name')
                newFields.type = request.input('type')
                newFields.venue_id = venue_id

            await newFields.save() 

            response.created({ message: 'Data tersimpan!', newId: newFields.id })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        let venue_id = params.venue_id
        //let fields = await Database.from('fields').where('id', id).andWhere('venue_id', venue_id).select('id', 'name', 'type', 'venue_id')
        let fields = await Field
                    .query()
                    .where('id', id)
                    .andWhere('venue_id', venue_id)
        return response.ok({ message: 'Sukses ambil data!', data: fields })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        let venue_id = params.venue_id

        //let updateData = await Database.from('fields').where('id', id).update({
        //    name: request.input('name'),
        //    type: request.input('address'),
        //    venues_id: venue_id
        //})

        await Field
            .query()
            .where('id', id)
            .andWhere('venue_id', venue_id)
            .update({
                name: request.input('name'),
                type: request.input('type')
            })

        return response.ok({ message: 'Data updated!' })
    }

    public async destroy({ response, params }: HttpContextContract){

        let venue_id = params.venue_id
        let id = params.id
        //await Database.from('fields').where('id', id).andWhere('venue_id', venue_id).delete()
        await Field
            .query()
            .where('id', id)
            .andWhere('venue_id', venue_id).delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
