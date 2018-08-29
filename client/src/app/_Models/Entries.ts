export interface Entry {
    id: string;
    account: User;
    title: string;
    summary: string;
    entry_text: string;
    publisher: User;
    emojis: Emoji[];
}

interface Emoji {
    id: string;
    name: string;
    url: string;
}

interface Follower {
    id: string;
    account: User;
}
