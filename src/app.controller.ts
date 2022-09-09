import { Get, Controller, Render, UseInterceptors } from "@nestjs/common";
import { LoggingInterceptor} from "./app.interceptor";

@UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  @Get(['/','index'])
  @Render('index.hbs')
  root() {
    return {};
  }

  @Get('RestaurantMenu')
  @Render('RestaurantMenu.hbs')
  RestaurantMenu() {
    return {};
  }

  @Get('BookTable')
  @Render('BookTable.hbs')
  BookTable() {
    return {};
  }

  @Get('RestLocation')
  @Render('RestLocation.hbs')
  RestLocation() {
    return {};
  }

  @Get('ContactUs')
  @Render('ContactUs.hbs')
  ContactUs() {
    return {};
  }

  @Get('LogInOut')
  @Render('LogInOut.hbs')
  LogInOut() {
    return {};
  }
}


