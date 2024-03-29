export function isMono(obj: any) {
  return (
    typeof obj === 'object' && 
    '_id' in obj && 
    'category_id' in obj &&
    'icon' in obj &&
    'name' in obj &&
    (obj.reason === undefined || typeof obj.reason === 'string')
  );
}

export function isCategory(obj: any) {
  return (
    typeof obj === 'object' && 
    '_id' in obj && 
    'icon' in obj &&
    'name' in obj &&
    'upper_limit' in obj
  );
}