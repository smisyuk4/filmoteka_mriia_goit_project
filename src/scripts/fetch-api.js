import axios from "axios";

export class Filmoteka {
    constructor() {
        this.searchQuery = 'test query';
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}