import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { JwtPayload } from '../shared/types/jwt-payloadTypes';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    //@InjectRepository(UserEntity)
    //private userRepository: Repository<UserEntity>,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
    });
  }
  // async validate(payload: JwtPayload): Promise<UserEntity> {
  //   const { email } = payload;
  //   const user = await this.userRepository.findOne({ email });
  //   if (!user) {
  //   }
  //   throw new UnauthorizedException();
  //   return user;
  // }
}
