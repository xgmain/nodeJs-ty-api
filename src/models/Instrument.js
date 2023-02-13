import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import Env from '../config/env.config.js';

const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
        index: true,
        trim: true
    }
},{
    timestamps: true,
    strict: true,
    collection: 'Instrument'
});

export default mongoose.model('Instrument', instrumentSchema);