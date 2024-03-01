const mongoose = require('mongoose')
const { Schema } = mongoose

const MitarbeiterSchema = new Schema({
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gebrachtVon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mitarbeiter',
    default: null,
  },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mitarbeiter',
    default: null,
  },
  lvl2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mitarbeiter',
    default: null,
  },
  lvl3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mitarbeiter',
    default: null,
  },
  superprovBerechtigt: { type: Boolean, default: false },
  strasse: { type: String },
  ort: { type: String },
  iban: { type: String },
})

const MitarbeiterModel =
  mongoose.models.Mitarbeiter ||
  mongoose.model('Mitarbeiter', MitarbeiterSchema)

module.exports = MitarbeiterModel
