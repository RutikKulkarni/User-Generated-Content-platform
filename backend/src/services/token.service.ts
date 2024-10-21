import Jwt from "jsonwebtoken";
import { config } from "../config/config";
import { UserDocument } from "../models/user.model";

const generateToken = (
  userId: string,
  expires: number,
  secret: string = config.SECRET
): string => {
  let payload = {
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
    exp: expires,
  };

  let token = Jwt.sign(payload, secret);

  return token;
};

const generateAuthToken = async (user: UserDocument): Promise<object> => {
  let tokenExpires = Math.floor(Date.now() / 1000) + 300 * 60;
  let token = generateToken(user._id, tokenExpires);

  return {
    token,
    expires: new Date(tokenExpires * 1000).toLocaleString(),
  };
};

export { generateAuthToken };
