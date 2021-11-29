import { ARR_METHODS } from "./arrConfig";
import { observe } from "./observe";

const originMethods = Array.prototype,
    arr_methods = Object.create(originMethods);

ARR_METHODS.map(m => {
    arr_methods[m] = function (...params) {
        const ct = originMethods[m].apply(this, [...params]);

        let newArray;
        switch (m) {
            case 'push':
            case 'unshift':
                newArray = [...params];
                break;
            case 'splice':
                newArray = [...params].slice(2);
                break;
            default:
                break;
        }

        observe(newArray);

        return ct;
    }
});

export { arr_methods };

