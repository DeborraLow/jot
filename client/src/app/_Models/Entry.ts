import {User} from './User';
import {Emoji} from './Emoji';

export interface Entry {
    id: string;
    account: User;
    title: string;
    summary: string;
    entry_text: string;
    publisher: User;
    emojis: Emoji[];
}
