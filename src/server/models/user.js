import mongoose from 'mongoose';
import mongooseBcrypt from 'mongoose-bcrypt';
import effectsSchema from './effects';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: username => /^[a-zA-Z].*/.test(username),
      message: props => `${props.value} is not a valid username! It can't start with digit`,
    },
    required: [true, 'Username is required'],
    minlength: [3, 'Username length must be greater than 3 symbols'],
    maxlength: [30, 'Username length must be lower than 30 symbols'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: email => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email),
      message: props => `${props.value} is not a valid email! It can be e.g. (blah@blah.com)`,
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    bcrypt: true,
    minlength: [3, 'Password length must be greater than 3 symbols'],
    maxlength: [8, 'Password length must be lower than 8 symbols'],
    validate: {
      validator: password => /(?=.*[a-z])(?=.*[A-Z])(?=.*(\d)).*/.test(password),
      message: props => `${props.value} is not a valid password! It must contain at least one upper&lower case letter and digit.`,
    },
  },
  effects: [effectsSchema],
});

userSchema.plugin(mongooseBcrypt);

export default mongoose.model('User', userSchema);
