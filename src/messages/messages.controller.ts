import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'List messages'
    }

    @Post()
    createMessages() {
        return 'Create Message'
    }

    @Get('/:id')
    getMessage() {
        return 'Get message'
    }
}
