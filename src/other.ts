function _toBeMocked() {
  return "I am the original function";
}

export let toBeMocked = _toBeMocked

export function _setToBeMocked(mockImplementation){
    toBeMocked = mockImplementation
}
