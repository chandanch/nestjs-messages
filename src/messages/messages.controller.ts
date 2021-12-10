import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService: MessageService;
    constructor() {
        this.messageService = new MessageService();
    }

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessageDTO) {
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messageService.findOne(id);

        if (!message) {
            throw new NotFoundException(`message with ID: ${id} not found`);
        }

        return message;
    }
}
