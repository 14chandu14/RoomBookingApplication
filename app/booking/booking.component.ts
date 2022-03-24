import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/BookingService/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  allRoomsForBooking=[];

  constructor(private bookingService:BookingService) {
    this.allRoomsForBooking=this.bookingService.getAllRoomsForBooking();
   }

  ngOnInit() {
  }

}
