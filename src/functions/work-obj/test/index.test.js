import expect from 'expect';

test('obj', () => {
    const arr = [1, 2, 124];
    expect(arr).toContain(124);
    const set = new Set(arr);
    expect(set).toContain(1);
})