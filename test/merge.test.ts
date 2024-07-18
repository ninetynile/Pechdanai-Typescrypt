import { merge } from '../src/merge';

test('merge function with sorted arrays', () => {
  const collection_1 = [1, 3, 5];
  const collection_2 = [6, 4, 2];
  const collection_3 = [0, 7, 8];
  const result = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

test('merge function with empty arrays', () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [];
  const collection_3: number[] = [];
  const result = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([]);
});

test('merge function with one empty array', () => {
  const collection_1 = [1, 2, 3];
  const collection_2: number[] = [];
  const collection_3 = [4, 5, 6];
  const result = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

test('merge function with arrays containing negative numbers', () => {
  const collection_1 = [-5, -3, -1];
  const collection_2 = [2, 0, -2];
  const collection_3 = [1, 3, 5];
  const result = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([-5, -3, -2, -1, 0, 1, 2, 3, 5]);
});
