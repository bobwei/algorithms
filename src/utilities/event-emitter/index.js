function createEmitter() {
  const listeners = {};

  return {
    on(name, cb) {
      if (!(name in listeners)) listeners[name] = [];
      listeners[name].push(cb);
    },

    off(name, cb) {
      const index = listeners[name].indexOf(cb);
      listeners[name].spice(index, 1);
    },

    emit(name, ...args) {
      for (const cb of listeners[name]) {
        cb(...args);
      }
    },
  };
}

export default createEmitter;
