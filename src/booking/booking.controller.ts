import {Body, Controller, HttpCode, HttpStatus, Post, UseGuards} from "@nestjs/common";
import {BookingService} from './booking.service';
import {AuthDto} from "../auth/dto";
import {Tokens} from "../auth/types";
import {GetCurrentUserId} from "../authDefence/decorators";
import {AtGuard} from "../authDefence/guards";

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) {
    }

    @Post('addBooking')
    @HttpCode(HttpStatus.CREATED)
    addNewBooking(@Body() dto: AuthDto): Promise<Tokens>{
        return this.bookingService.addNewBooking(dto);
    }

    @UseGuards(AtGuard)
    @Post('deleteBooking')
    @HttpCode(HttpStatus.OK)
    deleteBooking(@GetCurrentUserId() userId: number){
        return this.bookingService.deleteBooking(userId);
    }
}