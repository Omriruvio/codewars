// kata - https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

const loop_size = (node) => {
  let list = { ...node };
  let cache = new Map();
  let plomba = null;
  let count = 0;
  while (list.next && !cache.has(list.next)) {
    list = list.next;
    cache.set(list, count++);
  }
  plomba = list.next || null;
  const plombaIndex = cache.get(plomba) || 0;
  const result = count - plombaIndex;
  return result;
};
