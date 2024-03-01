const mongoose = require('mongoose')
const { Schema } = mongoose

const workerSchema = new Schema({
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gebrachtVon: { type: mongoose.Schema.Types.ObjectId, ref: 'Mitarbeiter' }, // Reference to another worker
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mitarbeiter' }, // Reference to supervisor worker
  lvl2: { type: mongoose.Schema.Types.ObjectId, ref: 'Mitarbeiter' }, // Calculated field
  lvl3: { type: mongoose.Schema.Types.ObjectId, ref: 'Mitarbeiter' }, // Calculated field
  superprovBerechtigt: { type: Boolean, default: false },
  strasse: { type: String },
  ort: { type: String },
  iban: { type: String },
})

const workerModel =
  mongoose.models.Worker || mongoose.model('Worker', workerSchema)

module.exports = workerModel
