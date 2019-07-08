import createPubSub from './index';

test('createPubSub', () => {
  const pubsub = createPubSub();
  pubsub.subscribe((arg) => {
    expect(arg).toEqual([1, 2, 3]);
  });
  pubsub.publish([1, 2, 3]);
});
