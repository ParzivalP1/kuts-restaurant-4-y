import {ForbiddenException, Injectable} from "@nestjs/common";
import {AuthDto} from "../auth/dto";
import {Tokens} from "../auth/types";
import {PrismaService} from "../prisma/prisma.service";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

@Injectable()
export class BookingService {
    constructor(private prisma: PrismaService,
    ) {}

    async addNewBooking(dto: AuthDto): Promise<Tokens>{

        // save the new user in db
        try{
            // const newUser = await this.prisma.user.create({
            //     // data: {
            //     //     // email: dto.email,
            //     //     // ,
            //     // }
            // });


            return //tokens;

        }catch (error){
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002'){
                    throw new ForbiddenException('Credential taken');
                }
            }
            throw error;
        }
    }
    async deleteBooking(userId: number){
        await this.prisma.user.updateMany({
            where: {
                id: userId,
                hashedRt: {
                    not: null,
                },
            },
            data: {
                hashedRt: null
            }
        });
    }
}