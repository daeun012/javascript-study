let truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.substr(0, 20) + '...';
  }
  return str;
};
