export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: Date;
    image?: string;
}

export interface IUserWrapper{
    users: Array<IUser>;
    total: number;
    skip: number;
    limit: number;
}