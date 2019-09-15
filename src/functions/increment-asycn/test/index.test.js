import fn from '../index';
import expect from 'expect';

test("Inc 3: expect 4", async () => {
    const res = await fn(3);
    expect(res).toBe(4);
});

test("Inc 5 expect 6", () => {
    fn(5).then(res => expect(res).toBe(6));
})