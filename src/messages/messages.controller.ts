import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'List messages';
    }

    @Post()
    createMessages(@Body() body: CreateMessageDTO) {
        return { request: body };
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return { message: `The message ID is ${id}` };
    }
}
