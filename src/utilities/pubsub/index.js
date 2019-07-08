function createPubSub() {
  const listeners = new Set();

  return {
    subscribe(cb) {
      listeners.add(cb);
      return () => {
        listeners.delete(cb);
      };
    },

    publish(...args) {
      for (const cb of listeners) {
        cb(...args);
      }
    },
  };
}

export default createPubSub;
