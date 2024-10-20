import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/userModel';

export class AuthService {
  async register(data: { name: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new UserModel({ ...data, password: hashedPassword });
    await user.save();
    return user;
  }

  async login(data: { email: string; password: string }) {
    const user = await UserModel.findOne({ email: data.email });
    if (!user) throw new Error('User not found');

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return token;
  }
}
