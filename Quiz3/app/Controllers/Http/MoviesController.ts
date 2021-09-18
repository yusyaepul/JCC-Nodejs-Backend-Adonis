import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
  

export default class MoviesController {

    public async index({ response }: HttpContextContract){

        let movies = await Database.from('movies').select('*')
        response.ok({ message: 'Sukses ambil data!', data: movies })

    }
    
    public async store({ request, response }: HttpContextContract){

        const newMovieschema = schema.create({

            title: schema.string({ trim: true }),
            resume: schema.string({ trim: true }),
            release_date: schema.date(),
            genre_id: schema.number()

        })

        try {

            let payload = await request.validate({ 
                schema: newMovieschema,

                messages: {
                    'title.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'resume.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'release_date.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong',
                    'genre_id.required': 'tidak dapat di proses, {{ field }} tidak boleh kosong'
                }
            })

            response.status(200).json({ 
                data: payload 
            })

            let newMoviesId = await Database.table('movies').returning('id').insert({
                title: request.input('title'),
                resume: request.input('resume'),
                release_date: request.input('release_date'),
                genre_id: request.input('genre_id')
            })

            response.created({ message: 'Data tersimpan!', newId: newMoviesId })

        } catch (error) {

            response.unprocessableEntity({ 
                errors: error.messages 
            })

        }

    }

    public async show({ response, params }: HttpContextContract){
        
        let id = params.id
        let movies = await Database
                    .from('movies')
                    .where('movies.id', id)
                    .join('genres', 'movies.genre_id', '=', 'genres.id')
                    .select('movies.id')
                    .select('movies.title')
                    .select('movies.resume')
                    .select('movies.release_date')
                    .select('genres.name as genre')

        return response.ok({ message: 'Sukses ambil data!', data: movies })

    }

    public async update({ request, response, params }: HttpContextContract){
        
        let id = params.id
        let updateData = await Database.from('movies').where('id', id).update({
            title: request.input('title'),
            resume: request.input('resume'),
            release_date: request.input('release_date'),
            genre_id: request.input('genre_id')
        })

        return response.ok({ message: 'Data updated!', data: updateData })
    }

    public async destroy({ response, params }: HttpContextContract){

        let id = params.id
        await Database.from('movies').where('id', id).delete()
        return response.ok({ message: 'Data deleted!' })

    }

}
