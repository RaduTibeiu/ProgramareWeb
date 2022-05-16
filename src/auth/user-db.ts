// import { findWhere } from '../db';

// const USERS_TABLE_NAME = 'Users';

// export const findUserByUsername = async (username: string) => {
//   const resp = await findWhere(USERS_TABLE_NAME, {
//     column: 'User',
//     value: username,
//   });

//   return resp.length > 0 ? resp[0] : undefined;
// };

// export const findUserByFirebaseUid = async (firebaseUid: string) => {
//   const resp = await findWhere(USERS_TABLE_NAME, {
//     column: 'FirebaseUid',
//     value: firebaseUid,
//   });

//   return resp.length > 0 ? resp[0] : undefined;
// };
