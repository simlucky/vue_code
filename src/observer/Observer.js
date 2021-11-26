import { defineReactiveData } from './reactive';

export default class Observer {
    constructor(data) {
        this.data = data;
        this.init();
    }
    init() {
        if (Array.isArray(this.data)) {

        } else {
            this.walk(this.data);
        }
    }
    walk(data) {
        const keys = Object.keys(data);
        for (const key of keys) {
            const value = data[key]
            defineReactiveData(data, key, value);
        }
    }
}