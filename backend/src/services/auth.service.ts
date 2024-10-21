import httpStatus from "http-status";
import { ApiError } from "../utils/ApiError";
import { User } from "../models";
import { UserDocument } from "../models/user.model";

interface UserAuthProps {
  fullName?: string;
  email: string;
  password: string;
  tokenId?: string;
  role?: string;
}

const registerUser = async ({
  fullName,
  email,
  password,
  role,
}: UserAuthProps): Promise<UserDocument> => {
  try {
    let user = await findUserByUsername(email);

    if (user) {
      throw new ApiError(
        `User already exists, Please login!`,
        httpStatus.BAD_REQUEST
      );
    }

    user = new User.Model({ fullName, email, password, role });

    if (!user) {
      throw new ApiError(
        `Something went wrong, please try again.`,
        httpStatus.BAD_REQUEST
      );
    }

    user.password = await user.hashPassword(user.password);
    await saveDocument(user);

    return user;
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const loginUser = async ({
  email,
  password,
  tokenId,
}: UserAuthProps): Promise<UserDocument> => {
  try {
    let user = await findUserByUsername(email);

    if (!user) {
      throw new ApiError(
        `User doesn't exist, try registering first or email is incorrect`,
        httpStatus.BAD_REQUEST
      );
    }

    if (String(user._id) !== tokenId) {
      throw new ApiError(`Unauthorized access`, httpStatus.FORBIDDEN);
    }

    if (!(await user.comparePassword(password))) {
      throw new ApiError("Incorrect password", httpStatus.BAD_REQUEST);
    }

    return user;
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const resetUserPass = async (
  username: string,
  newPassword: string,
  resetKey: string | string[] | undefined
): Promise<UserDocument> => {
  try {
    if (resetKey !== process.env.PASSWORD_RESET_KEY) {
      throw new ApiError(
        "Can't reset password; resetKey is invalid!",
        httpStatus.BAD_REQUEST
      );
    }

    let user = await User.Model.findOneAndUpdate(
      { username },
      { password: newPassword },
      { new: true }
    );

    if (!user) {
      throw new ApiError(
        `User doesn't exist, try registering first or username is incorrect`,
        httpStatus.BAD_REQUEST
      );
    }

    user.password = await user.hashPassword(user.password);
    await saveDocument(user);

    return user;
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const findUserByUsername = async (
  username: string
): Promise<UserDocument | null> => await User.Model.findOne({ username });

const saveDocument = async (doc: UserDocument): Promise<UserDocument> =>
  await doc.save();

export { registerUser, loginUser, resetUserPass };
