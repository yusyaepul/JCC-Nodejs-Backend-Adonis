import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateVenueValidator from 'App/Validators/CreateVenueValidator'

import Venue from 'App/Models/Venue'

export default class VenuesController {

    public async index({ response }: HttpContextContract){

        //let venues = await Database.from('venues').select('id', 'name', 'address')
        let venues = await Venue.all()
        response.ok({ message: 'Sukses ambil data!', data: venues })

    }
    
    public async store({ request, response }: HttpContextContract){

        try {

            await request.validate(CreateVenueValidator)

            //let newVenuesId = await Database.table('venues').returning('id').insert({
            //    name: request.input('name'),
            //    address: request.input('address'),
            //    phone: request.input('phone')
            //})

            let newVenues = new Venue()
                newVenues.name = request.input('name')
                newVenues.address = request.input('address')
                newVenues.phone = request.input('phone')

            await newVenues.save() 

            response.created({ message: 'Data tersimpan!', newId: newVenues.id })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        //let venues = await Database.from('venues').where('id', id).select('id', 'name', 'address').firstOrFail()
        let venues = await Venue.find(id)
        return response.ok({ message: 'Sukses ambil data!', data: venues })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        //let updateData = await Database.from('venues').where('id', id).update({
        //    name: request.input('name'),
        //   address: request.input('address'),
        //    phone: request.input('phone')
        //})
        let updateData = await Venue.findOrFail(id)
            updateData.name = request.input('name')
            updateData.address = request.input('address')
            updateData.phone = request.input('phone')

        updateData.save()
        return response.ok({ message: 'Data updated!', data: updateData })
    }

    public async destroy({ response, params }: HttpContextContract){

        let id = params.id
        //await Database.from('venues').where('id', id).delete()
        let delVenue = await Venue.findOrFail(id)
        delVenue.delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
