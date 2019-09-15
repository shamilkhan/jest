

export default async function increment(number) {
    const result = await new Promise((res, rej) => {
        setTimeout(() => res(number + 1), 10);
    });
    return result;
}