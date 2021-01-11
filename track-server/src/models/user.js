const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function() {
  const user = this;
  if(!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) {
        next(err);
      }
      user.password = hash;
      next();
    });
  });
});

mongoose.model('User', userSchema);
