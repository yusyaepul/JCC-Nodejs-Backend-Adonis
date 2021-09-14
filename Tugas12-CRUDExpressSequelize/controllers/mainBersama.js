const { Venues } = require('../models')

class MainBersamaController {
    static async findAll(req, res){
        let venues = await Venues.findAll()
        res.status(200).json({ status: 'Berhasil', data: venues })
    }

    static async store(req, res){
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone

        let newVenue = Venues.build({ name: name, address: address, phone: phone })

        await newVenue.save()
        res.status(201).json({ status: "Sukses", message: "Berhasil menyimpan" })
    }

    static async show(req, res){
        let id = req.params.id
        let venues = await Venues.findByPk(id)

        res.status(200).json({ status: "Sukses", data: venues })
    }

    static async update(req, res){
        let id = req.params.id
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone

        let qry = await Venues.update({
            name: name,
            address: address,
            phone: phone
        }, {
            where: {
                id: id
            }
        })

        res.status(201).json({ status: "Sukses", message: `Berhasil merubah data dengan id ${id}` })
    }

    static async delete(req, res){
        let id = req.params.id

        await Venues.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json({ status: "Sukses", message: `Berhasil menghapus data dengan id ${id}` })
    }
}

module.exports = MainBersamaController