import { User } from './../../models/user.class';
export class Utils {
  static space(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }

  static getCleanUserJson(user: User) {
    return {
      fullName: user.fullName,
      email: user.email,
      imageIndex: user.imageIndex,
    };
  }

  static setUserObject(user: User): User {
    return {
      fullName: user.fullName,
      email: user.email,
      imageIndex: user.imageIndex,
    };
  }
}
