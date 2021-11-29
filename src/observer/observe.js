import Observer from './Observer'

export function observe(data) {
    if (typeof data !== 'object' || data === null) return;

    new Observer(data);
}

export function observeArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        observe(arr[i]);
    }
}