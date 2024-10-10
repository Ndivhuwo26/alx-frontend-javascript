/*
 * Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.
 */
export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of items) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return items;
}
