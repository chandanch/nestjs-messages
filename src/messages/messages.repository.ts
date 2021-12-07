import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
    async findOne(id: string) {
        const content = await readFile('messages.josn', { encoding: 'utf-8' });
        const messages = JSON.parse(content);

        return messages[id];
    }

    async findAll() {
        const content = await readFile('messages.josn', { encoding: 'utf-8' });
        const messages = JSON.parse(content);

        return messages;
    }

    async create(message: string) {
        const content = await readFile('messages.josn', { encoding: 'utf-8' });
        const messages = JSON.parse(content);

        const id = Math.floor(Math.random() * 10000);
        messages[id] = { id, message };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}
