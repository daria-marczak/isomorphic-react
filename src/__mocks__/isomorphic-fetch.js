let __value = 42;
const isomorphicFetch = jest.fn(() => __value) // This creates the spy

isomorphicFetch.__setValue = v => __value = v;

export default isomorphicFetch