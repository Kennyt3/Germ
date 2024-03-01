const mongoose = require('mongoose')
const workerModel = require('./model/worker')
const bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)

mongoose
  .connect(`${process.env.MONGODB_SECURE}/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      vorname,
      nachname,
      email,
      gebrachtVon,
      supervisor,
      lvl2,
      lv3,
      superprovBerechtigt,
      strasse,
      ort,
      iban,
    } = req.body
    try {
      newWorker = await workerModel.create({
        vorname,
        nachname,
        email,
        gebrachtVon,
        supervisor,
        lvl2,
        lv3,
        superprovBerechtigt,
        strasse,
        ort,
        iban,
      })
      res.json(newWorker)
    } catch (e) {
      res.status(450).json(e)
    }
  }
}
