export class User {
    constructor(
        public email: string,
        public password: string,
        public title: string,
        public firstName: string,
        public lastName: string,
        public phone: number | null,
        public address: string,
        public state: string,
        public zip: number | null,
        public userId?: number
    ) {

    }
}