import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map} from 'rxjs';


export interface AnswerTime {
  dataTime: number;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<AnswerTime> {

    const now = Date.now();
    return next
      .handle()
      .pipe(map(() => { return {dataTime: Date.now() - now}}));
  }
}
