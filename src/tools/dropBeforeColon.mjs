const dropBeforeColon = (obj) => {
  if (typeof (obj) !== 'object') return obj;

  // eslint-disable-next-line
  for (const oldName in obj) {
    // Camel to underscore
    const newName = oldName.split(':')[1];
    // Only process if names are different
    if (newName && newName !== oldName) {
      // Check for the old property name to avoid a ReferenceError in strict mode.
      const hasProperty = Object.prototype.hasOwnProperty.call(obj, oldName);
      if (hasProperty) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
    }

    // Recursion
    if (typeof (obj[newName]) === 'object') {
      obj[newName] = dropBeforeColon(obj[newName]);
    }
  }
  return obj;
};

export default dropBeforeColon;