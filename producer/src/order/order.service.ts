import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
    constructor(@Inject('ORDER_SERVICE') private rabbitClient: ClientProxy) { }

    placeOrder(order: OrderDto) {
        console.log('Order placed successfully');
        this.rabbitClient.emit('order-placed', order);

        return { message: 'Order placed successfully' };
    }
}
