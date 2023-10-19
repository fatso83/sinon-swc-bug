export let toBeMocked = function _toBeMocked() {
  return "I am the original function";
}


export const mock = {
    get toBeMocked(){ return toBeMocked; },
    set toBeMocked(mockValue){ toBeMocked = mockValue; }
}
