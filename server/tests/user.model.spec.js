const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcrypt');

const User = require('../models/User');

describe('User model validations', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('should require a username', async () => {
    // Arrange: set up user
    const user = new User({ password: 'password123' });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['username'].message).to.equal('Username is required!');
  });

  it('should require a password', async () => {
    // Arrange: set up user
    const user = new User({ username: 'testuser' });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['password'].message).to.equal('Password is required!');
  });

  it('should require a username with a minimum length of 4 characters', async () => {
    // Arrange: set up user
    const user = new User({ username: 'abc', password: 'password123' });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['username'].message).to.equal(
      'Username must be at least 4 characters long!'
    );
  });

  it('should require a password with a minimum length of 8 characters', async () => {
    // Arrange: set up user
    const user = new User({ username: 'testuser', password: 'pass123' });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['password'].message).to.equal(
      'Password must be at least 8 characters long!'
    );
  });

  it('should require a repeat password', async () => {
    // Arrange: set up user
    const user = new User({
      username: 'testuser',
      password: 'password123',
      repeatPassword: '',
    });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['repeatPassword'].message).to.equal(
      'Repeat password is required!'
    );
  });

  it('should require the repeat password to match the password', async () => {
    // Arrange: set up user
    const user = new User({
      username: 'testuser',
      password: 'password123',
      repeatPassword: 'differentpassword',
    });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['repeatPassword'].message).to.equal(
      'Password mismatch!'
    );
  });

  it('should require a valid email', async () => {
    // Arrange: set up user
    const user = new User({
      username: 'testuser',
      password: 'password123',
      repeatPassword: 'password123',
      email: 'invalid-email',
    });

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['email'].message).to.equal(
      'Please enter a valid email address!'
    );
  });

  it('should require an email which is not in use', async () => {
    // Arrange: set up user, stubs
    const user = new User({
      username: 'testuser',
      password: 'password123',
      repeatPassword: 'password123',
      email: 'validEmail@mail.com',
    });

    const userTwo = new User({
      username: 'testuser2',
      password: 'password123',
      repeatPassword: 'password123',
      email: 'validEmail@mail.com',
    });

    sinon.stub(User, 'findOne').resolves(userTwo);

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.exist;
    expect(error.errors['email'].message).to.equal(
      'The email address is already in use!'
    );
  });

  it('should hash the password before saving', async () => {
    // Arrange: set up user, stubs
    const plainTextPassword = 'testpassword';
    const hashedPassword = 'hashed#password';

    const bcryptStub = sinon.stub(bcrypt, 'hash').resolves(hashedPassword);

    const user = new User({
      username: 'testuser',
      email: 'validEmail@mail.com',
      password: plainTextPassword,
      repeatPassword: plainTextPassword,
    });

    sinon.stub(User, 'findOne').resolves(user);

    // Act: validate the user
    await user.validate();

    // Assert: that correct error is thrown
    expect(bcryptStub.calledOnce).to.be.true;
    expect(bcryptStub.calledWith(plainTextPassword, 10)).to.be.true;
    expect(user.password).to.equal(hashedPassword);
  });

  it('should not throw any error when data is correct', async () => {
    // Arrange: set up user
    const user = new User({
      username: 'testuser',
      email: 'validEmail@mail.com',
      password: 'password123',
      repeatPassword: 'password123',
    });

    sinon.stub(User, 'findOne').resolves(null);

    // Act: validate the user
    let error = null;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }

    // Assert: that correct error is thrown
    expect(error).to.not.exist;
  });
});
