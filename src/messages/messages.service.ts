import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessageService {
    constructor(public messagesRepo: MessagesRepository) {}

    async findOne(id: string) {
        return await this.messagesRepo.findOne(id);
    }

    async findAll() {
        const messages = await this.messagesRepo.findAll();
        return messages;
    }

    async create(message: string) {
        return await this.messagesRepo.create(message);
    }
}
