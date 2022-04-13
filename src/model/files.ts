
import * as J from './..';

export interface FileEntry {
    path: string;
    name: string;
    scope: string;
    updateAt: number;
    createdAt: number;
    type: J.Model.JournalPageType;
}