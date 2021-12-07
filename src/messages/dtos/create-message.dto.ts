import { IsBoolean, IsString } from 'class-validator';

export class CreateMessageDTO {
    @IsString()
    content: string;

    @IsBoolean()
    status: boolean;
}
