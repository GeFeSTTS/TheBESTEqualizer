import Pizzicato from 'pizzicato';

export const HOST = 'http://localhost:8080';

export const fieldsInfo = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    isMember: false,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email',
    isMember: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    isMember: true,
  },
  {
    type: 'password',
    name: 'passwordConfirmation',
    label: 'Pasword confirmation',
    isMember: false,
  },
];

export const JAZZ_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0,
        time: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0,
        time: 0,
        cutoff: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0.18,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0.06,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0.2,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0.57,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0.18,
      midLowGain: 0.06,
      midHighGain: 0.2,
      highGain: 0.57,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: {
        value: 0.32,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0.77,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0.79,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0.17,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0.32,
      speed: 0.77,
      depth: 0.79,
      feedback: 0,
      mix: 0.17,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0,
      decay: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: {
        value: 5.86,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0.4,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0.61,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 5.86,
      depth: 0.4,
      mix: 0.61,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: -21,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 8,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0.73,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0.73,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 18,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: -21,
      knee: 8,
      attack: 0.73,
      release: 0.73,
      ratio: 18,
    }),
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 12308,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 17.18,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 12308,
      peak: 17.18,
    }),
    isVisible: true,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];

export const ROCK_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0,
        time: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0,
        time: 0,
        cutoff: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: {
        value: 0.1,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0.1,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 1,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 1,
        minValue: 1,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 1,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 1,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 1,
      midLowGain: 1,
      midHighGain: 1,
      highGain: 0,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: {
        value: 0.3,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0.3,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0.2,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0.15,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0.09,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0.3,
      speed: 0.3,
      depth: 0.2,
      feedback: 0.15,
      mix: 0.09,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: {
        value: 1.39,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 2.66,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0.53,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 1.39,
      decay: 2.66,
      mix: 0.53,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: {
        value: 17,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0.25,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 1,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 17,
      depth: 0.25,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: -20,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 10,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0.85,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0.3,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 14,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: -20,
      knee: 10,
      attack: 0.85,
      release: 0.3,
      ratio: 14,
    }),
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 22050,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 22050,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: true,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];

export const POP_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0,
        time: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0,
        time: 0,
        cutoff: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0.04,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0.13,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0.46,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0.09,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0,
      midLowGain: 0.04,
      midHighGain: 0.13,
      highGain: 0.46,
      mix: 0.09,
    }),
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Reverb',
    effects: {
      time: {
        value: 2.55,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 2.55,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 2.55,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 2.55,
      decay: 2.55,
      mix: 2.55,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: {
        value: 13.58,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0.05,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0.79,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 13.58,
      depth: 0.05,
      mix: 0.79,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: -47,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 32,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0.82,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0.94,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 18,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: -47,
      knee: 32,
      attack: 0.82,
      release: 0.94,
      ratio: 18,
    }),
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 6217,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 9.97,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 6217,
      peak: 9.97,
    }),
    isVisible: true,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];
