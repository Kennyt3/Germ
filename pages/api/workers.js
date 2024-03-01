const mongoose = require('mongoose')
const MitarbeiterModel = require('./model/worker')

mongoose
  .connect(`${process.env.MONGODB_SECURE}/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        vorname,
        nachname,
        email,
        gebrachtVon,
        supervisor,
        strasse,
        ort,
        iban,
      } = req.body
      let gebrachtVonId
      let lvl3
      let supervisorId
      if (gebrachtVon) {
        gebrachtVonId = await MitarbeiterModel.findOne({
          email: gebrachtVon,
        })
      }
      if (supervisor) {
        supervisorId = await MitarbeiterModel.findOne({
          email: supervisor,
        })
      }
      if (gebrachtVonId?.gebrachtVon) {
        lvl3 = await MitarbeiterModel.findById(gebrachtVonId?.gebrachtVon)
      }
      const newMitarbeiter = new MitarbeiterModel({
        vorname,
        nachname,
        email,
        strasse,
        ort,
        iban,
        gebrachtVon: gebrachtVonId && gebrachtVonId?._id,
        supervisor: supervisorId && supervisorId?._id,
        lvl2: gebrachtVonId?.gebrachtVon && gebrachtVonId?.gebrachtVon,
        lvl3: lvl3 && lvl3?.gebrachtVon,
      })

      await newMitarbeiter.save()

      res.json(newMitarbeiter)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
}
