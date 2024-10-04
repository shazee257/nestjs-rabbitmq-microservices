import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('order-placed')
  handleOrderPlaced(@Payload() order: OrderDto) {
    this.appService.handleOrderPlaced(order);
  }

  @MessagePattern({ cmd: 'fetch-orders' })
  getOrders() {
    return this.appService.getOrders();
  }
}
