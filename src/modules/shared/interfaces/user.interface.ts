export interface IUser {
    createdAt: { seconds: number, nanoseconds: number }
    displayName: string;
    email: string;
    id: string;
}