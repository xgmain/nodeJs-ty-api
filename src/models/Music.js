import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import Env from '../config/env.config.js';

const Schema = mongoose.Schema;

const musicSchema = new Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
        index: true,
        trim: true
    },
    mode: {
        type: String,
        enum: [Env.MODE.MTV, Env.MODE.SONG],
        required: [true, "can't be blank"],
    },
    instrument: {
        type: Schema.Types.ObjectId,
        required: [true, "can't be blank"],
        ref: 'Instrument'
    },
},{
    timestamps: true,
    strict: true,
    collection: 'Music'
});

musicSchema.plugin(mongoosePaginate);
const musicModel = mongoose.model('Music', musicSchema);

musicModel.on('index', (err) => {
    if (err) {
        console.error('Music index error: %s', err);
    } else {
        console.info('Music indexing complete');
    }
})

export default musicModel;
