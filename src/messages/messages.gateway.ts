import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';

@WebSocketGateway(5000, { cors: true })
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private messageService: MessagesService) { }



  @SubscribeMessage('create_message')
  async handleCreateMessage(client: any, @MessageBody() payload: { user: any, chat: any, content: string }) {
    console.log("handleCreateMessage payload:", payload)
    const msg = await this.messageService.create(payload);
    console.log("msg:", msg)
    this.server.emit('created_message', JSON.stringify(msg));
  }

  @SubscribeMessage('update_message')
  async handleUpdateMessage(client: any, @MessageBody() payload: {_id: any, content: any }) {
    console.log("handleUpdateMessage payload:", payload)
    const msg = await this.messageService.update({_id: payload[0]._id, content: payload[0].content});
    console.log("msg:", msg)
    this.server.emit('updated_message', JSON.stringify(msg));
  }

  @SubscribeMessage('remove_message')
  async handleRemoveMessage(client: any, @MessageBody() payload: {_id: any}) {
    console.log("handleRemoveMessage payload:", payload)
    const msg = await this.messageService.remove(payload._id);
    console.log("msg:", msg)
    this.server.emit('removed_message', JSON.stringify(msg));
  }

  @SubscribeMessage('get_messages_by_chatId')
  async handleGetMessagesByChatId(client: any, @MessageBody() payload: {chatId: any}) {
    console.log("handleGetMessagesByChatId payload:", payload)
    const all = await this.messageService.findAllByChatId(payload[0].chatId);
    console.log("msg:", all)
    this.server.emit('got_messages_by_chatId', JSON.stringify(all));
  }

  @SubscribeMessage('get_messages_by_userId')
  async handleGetMessagesByUserId(client: any, @MessageBody() payload: {userId: any}) {
    console.log("handleGetMessagesByUserId payload:", payload)
    const msg = await this.messageService.findAllByUserId(payload.userId);
    console.log("msg:", msg)
    this.server.emit('got_messages_by_userId', JSON.stringify(msg));
  }

  @WebSocketServer()
  server: Server;

  // Handle client connection
  handleConnection(client: Socket): void {
    this.server.emit('room', `${client.id} joined!`);
  }

  // Handle client disconnection
  handleDisconnect(client: Socket): void {
    this.server.emit('room', `${client.id} left!`);
  }
}
