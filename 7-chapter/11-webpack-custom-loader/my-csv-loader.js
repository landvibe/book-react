module.exports = function(source) {
  const result = { header: undefined, rows: [] };
  const rows = source.split('\n');
  for (const row of rows) {
    const cols = row.split(',');
    if (!result.header) {
      result.header = cols;
    } else {
      result.rows.push(cols);
    }
  }
  return `export default ${JSON.stringify(result)}`;
};
