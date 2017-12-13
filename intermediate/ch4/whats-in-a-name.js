function whatIsInAName(collection, source) {
  // What's in a name?
  return collection.filter(obj => {
    let valid = true;
    Object.keys(source).forEach(key => {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) valid = false;
    })
    return valid;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
