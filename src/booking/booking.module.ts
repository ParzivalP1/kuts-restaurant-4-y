import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import {BookingController} from "./booking.controller";
import {JwtModule} from "@nestjs/jwt";
import {AtStrategy, RtStrategy} from "../auth/strategies";


@Module({
  imports: [],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
