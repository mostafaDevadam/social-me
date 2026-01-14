import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MONGODB_URI } from 'constant';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { CommonModule } from './common/common.module';
import { RequestsModule } from './requests/requests.module';
import { FriendsModule } from './friends/friends.module';
import { PagesModule } from './pages/pages.module';
import { MembersModule } from './members/members.module';
import { GroupsModule } from './groups/groups.module';
import { ArchiveModule } from './archive/archive.module';
import { SharesModule } from './shares/shares.module';
import { EventsModule } from './events/events.module';
import { InvitationsModule } from './invitations/invitations.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { CollectionsModule } from './collections/collections.module';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //MongooseModule.forRoot(MONGODB_URI.toString()),
    
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.getOrThrow('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    


    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    CommonModule,
    RequestsModule,
    FriendsModule,
    PagesModule,
    MembersModule,
    GroupsModule,
    ArchiveModule,
    SharesModule,
    EventsModule,
    InvitationsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    CollectionsModule,
    ChatModule,
    MessagesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
