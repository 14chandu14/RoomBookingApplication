import { Injectable } from '@angular/core';
import { Booking } from 'src/model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking = [{
    "roomNo": "101",
    "charges": "500.00"
  }, {
    "roomNo": "102",
    "charges": "600.00"
  }, {
    "roomNo": "103",
    "charges": "700.00"
  }];

  constructor() { }

  getAllRoomsForBooking() {
    return this.booking;
  }
}
