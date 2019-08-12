import mongoose from 'mongoose';

const { Schema } = mongoose;

const effectsSchema = new Schema({
  title: {
    type: String,
    validate: {
      validator: title => /^[a-zA-Z0-9_.-]{1,}$/.test(title),
      message: 'Please, name your title with one word.',
      required: [true, 'Title is required'],
    },
  },
  presets: [{
    name: String,
    effects: {
      attack: Object,
      cutoff: Object,
      decay: Object,
      depth: Object,
      distortion: Object,
      feedback: Object,
      frequency: Object,
      gain: Object,
      highGain: Object,
      knee: Object,
      lowGain: Object,
      midHighGain: Object,
      midLowGain: Object,
      mix: Object,
      pan: Object,
      peak: Object,
      ratio: Object,
      release: Object,
      speed: Object,
      threshold: Object,
      time: Object,
    },
  }],
});

export default effectsSchema;
