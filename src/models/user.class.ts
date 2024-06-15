export class User {
  fullName: string;
  email: string;
  password: string;
  imageIndex: number;

  constructor(obj?: any) {
    this.fullName = obj ? obj.fullName : '';
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
    this.imageIndex = obj ? obj.imageIndex : '';
  }
}
