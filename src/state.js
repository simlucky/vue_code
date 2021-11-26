
import { proxyData } from './observer/proxy';
import { observe } from './observer/observe';

function initState(vm) {
    const options = vm.$options;

    if (options.data) {
        initData(vm);
    }
}

function initComputed() { }

function initWatch() { }

function initData(vm) {
    let data = vm.$options.data;
    vm._data = data = typeof data === 'function' ? data() : data || {};
    for (const key in data) {
        proxyData(vm, '_data', key);
    }

    observe(data);
}

export {
    initState
}
