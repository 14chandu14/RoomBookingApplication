import { Room } from "./Room";
import { User } from "./User";

export class Booking{
    constructor(public id:number=0,
        public room:Room=new Room(),
        public user:User=new User(),
        public purpose:string="",
        public participants:number=0){
    }
}