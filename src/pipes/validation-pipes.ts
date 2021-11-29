import {
  ArgumentMetadata,
  Injectable,
  PayloadTooLargeException,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../user/user.dto';

@Injectable()
export class EmailToLowerCasePipe implements PipeTransform {
  transform(payload: any, metadata: ArgumentMetadata) {
    payload.email = payload.email.toLowerCase();
    return payload;
  }
}
