export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const sortedCollection_2 = collection_2.slice().reverse();
    const merged = [];
    let i = 0, j = 0, k = 0;
  
    while (i < collection_1.length || j < sortedCollection_2.length || k < collection_3.length) {
      const val1 = i < collection_1.length ? collection_1[i] : Infinity;
      const val2 = j < sortedCollection_2.length ? sortedCollection_2[j] : Infinity;
      const val3 = k < collection_3.length ? collection_3[k] : Infinity;
  
      if (val1 <= val2 && val1 <= val3) {
        merged.push(val1);
        i++;
      } else if (val2 <= val1 && val2 <= val3) {
        merged.push(val2);
        j++;
      } else {
        merged.push(val3);
        k++;
      }
    }
  
    return merged;
  }
  