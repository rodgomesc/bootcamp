import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists!' });
    }
    // eslint-disable-next-line camelcase
    const { id, email, name, password_hash, provider } = await User.create(
      req.body
    );
    return res.json({
      id,
      email,
      name,
      password_hash,
      provider,
    });
  }

  async update(req, res) {
    return res.json({ ok: res.userId });
  }
}

export default new UserController();
