export class Reservation {
    constructor(
        public title: string,
        public start: string,
        public end: string,
        public seats: number,
        public userId: number
    ) {

    }
}