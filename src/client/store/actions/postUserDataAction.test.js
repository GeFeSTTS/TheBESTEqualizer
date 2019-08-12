import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import axios from 'axios';

import {
  AUTH_START,
  POST_USER_DATA,
  AUTH_FAIL,
} from './types';

import {
  postUserData,
} from './postUserDataAction';

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => ({}));
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  mockPizzicato.Effects = jest.fn(() => {});
  const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
    'Reverb', 'Tremolo', 'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator',
  ];
  effects.forEach((effect, el) => {
    mockPizzicato.Effects[effect] = jest.fn(() => function Effect() {
      return {
        effect: () => (`fakeEffect${el}`),
      };
    });
  });
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('test async post action', () => {
  let mockAxiosPost;
  let store;
  beforeEach(() => {
    mockAxiosPost = jest.spyOn(axios, 'post');
    store = mockStore();
    jest.resetAllMocks();
  });

  it('should dispatch actions `create post user data` which recieve valid token', async () => {
    const response = {
      data: {
        username: 'fakeName',
        token: {
          access: 'fakeToken1234',
        },
      },
    };
    const expectedActions = [{
      type: AUTH_START,
    },
    {
      type: POST_USER_DATA,
      error: null,
    },
    ];

    mockAxiosPost.mockImplementationOnce(() => response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions `create post user data` which recieve denny access', async () => {
    const response = {
      data: {
        username: 'fakeName',
        token: {
          access: null,
        },
        error: 'fakeError',
      },
    };
    const expectedActions = [{
      type: AUTH_START,
    },
    ];

    mockAxiosPost.mockImplementationOnce(() => response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions `create post user data` which call exception', async () => {
    const response = {
      response: {
        data: {
          username: 'fakeName',
          token: {
            access: 'fakeToken1234',
          },
          error: 'fakeError',
        },
      },
    };
    const expectedActions = [
      {
        type: AUTH_START,
      },
      {
        type: AUTH_FAIL,
        error: 'fakeError',
      },
    ];

    mockAxiosPost.mockRejectedValueOnce(response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
