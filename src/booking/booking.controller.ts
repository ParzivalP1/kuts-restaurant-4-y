import {Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {BookingService} from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) {
    }

    @Post('addBooking')
    @HttpCode(HttpStatus.CREATED)
    addNewBooking(){
        // return this.authService.signup(dto);
    }
    @Post('deleteBooking')
    @HttpCode(HttpStatus.OK)
    deleteBooking(){

    }
}