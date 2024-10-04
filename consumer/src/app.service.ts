import { Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';

@Injectable()
export class AppService {
  orders: OrderDto[] = [];

  handleOrderPlaced(order: OrderDto) {
    console.log('Order placed successfully', order);
    this.orders.push(order);

    // sending email to the user
  }

  getOrders() {
    console.log('Fetching orders');
    return this.orders;
  }
}
