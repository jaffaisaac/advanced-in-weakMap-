

let wMap = new WeakMap();
wMap.set('a', 'b');
// Uncaught TypeError: Invalid value used as weak map key
const o1 = {},
 o2 = () => {},
 o3 = window;
wMap.set(o1, 42);
wMap.set(o2, "hello");
wMap.set(o3, undefined);
wMap.get(o3); // undefined, because that is the set value
wMap.has(o1); // true
wMap.delete(o1);
wMap.has(o1); 