import { defineReactiveData } from './reactive';
import { arr_methods } from './array';
import { observeArr } from './observe';

export default class Observer {
    constructor(data) {
        this.data = data;
        this.init();
    }
    init() {
        if (Array.isArray(this.data)) {
            this.data.__proto__ = arr_methods;
            observeArr(this.data);
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