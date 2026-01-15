import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWTConstants } from 'constant';

@Module({
    imports: [
        ConfigModule.forRoot(),
       UsersModule,
       /* JwtModule.register({
        global: true,
        secret: '--key--',
      //signOptions: { expiresIn: '60s'}
      }),*/
       JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: { expiresIn: '24h' },
        }),
        inject: [ConfigService],
    }),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
