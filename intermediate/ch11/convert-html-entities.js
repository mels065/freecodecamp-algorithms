function convertHTML(str) {
  // &colon;&rpar;
  const lookup = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '\'': 'apos'
  };
  return str.replace(/[&<>"']/g, (match) => `&${lookup[match]};`);
}

convertHTML("Dolce & Gabbana");
