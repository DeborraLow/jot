import {User} from './User';
import {Emoji} from './Emoji';

export interface Entry {
    id?: string;
    account?: User;
    title?: string;
    summary?: string;
    entry_text?: string;
    image?: string;
    publisher?: User;
    publish_date: Date;
    created_at: Date;
    emojis?: Emoji[];
    isPublic?:boolean;
}
