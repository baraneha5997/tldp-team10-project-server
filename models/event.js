import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const eventSchema = new Schema({
  EVENT_ID: Number,
  EVENT_CD: String,
  EVENT_TITLE: String,
  EVENT_DESC: String
})

eventSchema.plugin(sequence, {inc_field: 'EVENT_ID'}) 

const Event = model('event', eventSchema )
export default Event