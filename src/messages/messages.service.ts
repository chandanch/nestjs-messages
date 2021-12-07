import { MessagesRepository } from './messages.repository';

export class MessageService {
    messagesRepository: MessagesRepository;

    constructor() {
        this.messagesRepository = new MessagesRepository();
    }

    async findOne(id: string) {
        return await this.messagesRepository.findOne(id);
    }

    async findAll() {
        const messages = await this.messagesRepository.findAll();
        return messages;
    }

    async create(message: string) {
        return await this.messagesRepository.create(message);
    }
}
