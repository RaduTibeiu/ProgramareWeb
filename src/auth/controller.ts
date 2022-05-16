// import { Request, Response, NextFunction } from 'express'
// import * as bcrypt from 'bcrypt-nodejs'
// import * as admin from 'firebase-admin'

// import logger from '../logger'

// import { UserCredentials } from './types'
// import { findUserByUsername } from './user-db'

// export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
//   const credential: UserCredentials = req.body

//   logger.log('info', `Logging in user with username ${credential.username}`);
//   const user = await findUserByUsername(credential.username);
//   if (!user) {
//     logger.log('warn', `Could not log in user ${credential.username} as it could not be found in the database`);
//     return res.boom.badRequest(`No user with username: ${credential.username}`);
//   }
//   const isMatch = verifyPassword(credential.password, user.Password as string)
//   if (!isMatch) {
//     logger.log('warn', `Could not log in user ${credential.username} as the provided password does not match with the one in the database`);
//     return res.boom.badRequest('Wrong password provided');
//   }
//   if (!user.FirebaseUid) {
//     logger.log('error', `Failed to find firebase uid for user ${user.UserId}`);
//     return res.boom.badImplementation('Missing firebase uid for user');
//   }
//   const token = await generateToken(user.FirebaseUid as string);
//   logger.log('info', `User ${credential.username} logged in successfully. New authorization token generated: ${token}`);
//   return res.status(200).set('Authorization', `Bearer ${token}`).json({ access_token: token });
// }

// const generateToken = async (userUid: string): Promise<string> => {
//   const token = await admin.auth().createCustomToken(userUid);

//   return token
// }

// const verifyPassword = (passwordInClear: string, userPasswordInDatabase: string) => {
//   try {
//     const passwordHashNodejs = phpToNodejsFormat(userPasswordInDatabase);

//     return bcrypt.compareSync(passwordInClear, passwordHashNodejs);
//   } catch (error) {
//     logger.log('warn', 'Passwords to compare do not follow format');

//     return false;
//   }
// }

// // keep password in synch, so both node backend and php backend bcrypt algorithm work fine.
// // Node uses $2a$ prefix, while php uses $2y$
// const toPhpFormatPassword = (passwordInClear: string) => {
//   const hashedPassword = bcrypt.hashSync(passwordInClear);
//   return hashedPassword.replace('$2a$', '$2y$');
// }

// const phpToNodejsFormat = (userPasswordInDatabase: string) => {
//   return userPasswordInDatabase.replace(/^\$2y(.+)$/i, '$2a$1');
// }
