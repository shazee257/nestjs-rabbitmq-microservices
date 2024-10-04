import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('place-order')
  placeOrder(@Body() order: OrderDto) {
    return this.orderService.placeOrder(order);
  }

  @Get('place-order')
  getHello(): string {
    return 'Hello World!';
  }
}

