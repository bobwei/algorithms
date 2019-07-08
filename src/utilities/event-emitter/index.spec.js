import createEmitter from './index';

test('createEmitter', () => {
  const emitter = createEmitter();
  emitter.on('test', (arg) => {
    expect(arg).toEqual([1, 2, 3]);
  });
  emitter.emit('test', [1, 2, 3]);
});
