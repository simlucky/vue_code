import { observe } from "./observe";

export function defineReactiveData(data, key, value) {
    observe(value);
    Object.defineProperty(data, key, {
        get() {
            console.log('数据劫持，获取', value);
            return value;
        },
        set(newValue) {
            console.log('数据劫持，设置', newValue);
            if (value === newValue) return;
            value = newValue;
            return value;
        }
    })

}