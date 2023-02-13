import Music from '../../models/Music.js';

const index = async (req, res) => {
    const page = parseInt(req.query.page);
    const size = 10;
    const query = {
        'skip': size * (page - 1),
        'limit': size
    };

    try {
        const data = await Music.paginate({}, { offset: query.skip, limit: query.limit })
        res.send({ status: "OK", data: data });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
  
const show = async (req, res) => {
    const musicId = parseInt(req.params.id);

    if (!musicId) {
        res
          .status(400)
          .send({
            status: "FAILED",
            data: { error: "Parameter ':musicId' can not be empty" },
          });
    }

    try {
        const music = await Music.findById(musicId);
        res.send({ status: "OK", data: music });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
  
const create = async (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.mode
        // !body.instrument
    ) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
            error:
                "One of the following keys is missing or is empty in request body: 'name', 'mode', 'instrument'",
            },
        });
        return;
    }

    const data = new Music({
        name: body.name,
        mode: body.mode,
        // instrument: body.instrument,
    });

    try {
        // const createdmusic = musicService.create(newmusic);
        const dataToSave = await data.save();
        res.status(201).send({ status: "OK", data: dataToSave });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
  
const update = async (req, res) => {
    const musicId = req.params.id;
    const body = req.body;
    const options = { new: true };

    if (!musicId) {
        res
          .status(400)
          .send({
            status: "FAILED",
            data: { error: "Parameter ':musicId' can not be empty" },
          });
    }

    try {
        const datatoupdate = await Music.findByIdAndUpdate(
            musicId, body, options
        );
        // const updatedmusic = musicService.update(musicId, body); 
        res.send({ status: "OK", data: datatoupdate });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

export default {
    index,
    show,
    create,
    update,
};
