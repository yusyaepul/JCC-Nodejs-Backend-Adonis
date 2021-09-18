import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
  

export default class GenresController {

    public async index({ response }: HttpContextContract){

        let genres = await Database.from('genres').select('*')
        response.ok({ message: 'Sukses ambil data!', data: genres })

    }
    
    public async store({ request, response }: HttpContextContract){

        const newGenreschema = schema.create({

            name: schema.string({ trim: true })

        })

        try {

            let payload = await request.validate({ 
                schema: newGenreschema,

                messages: {
                    'name.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong'
                }
            })

            response.status(200).json({ 
                data: payload 
            })

            let newGenresId = await Database.table('genres').returning('id').insert({
                name: request.input('name')
            })

            response.created({ message: 'Data tersimpan!', newId: newGenresId })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        let genres = await Database
                    .from('genres')
                    .where('id', id)
                    .select('id')
                    .select('name')
        
        let dataMovies = await Database
                        .from('movies')
                        .where('genre_id', id)
                        .select('id')
                        .select('title')
                        .select('release_date')
                        .select('resume')

        let dataArr = {...genres, movies: dataMovies}

        return response.ok({ message: 'Sukses ambil data!', data: dataArr })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        let updateData = await Database.from('genres').where('id', id).update({
            name: request.input('name')
        })

        return response.ok({ message: 'Data updated!', data: updateData })
    }

    public async destroy({ response, params }: HttpContextContract){

        let id = params.id
        await Database.from('genres').where('id', id).delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
