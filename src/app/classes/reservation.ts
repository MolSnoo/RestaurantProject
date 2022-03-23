export class Reservation {
    constructor(
        public date: string,
        public time: string,
        public seats: number | null
    ) {

    }
}