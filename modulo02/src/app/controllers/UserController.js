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
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(res.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists!' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match!' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      email,
      name,
      provider,
    });
  }
}

export default new UserController();
