const createRamdomCode = (length = 6) => {
  const output = [];
  for (let i = 0; i < length; i++) {
    const r = Math.floor(Math.random() * 26);
    output.push(String.fromCharCode(97 + r));
  }
  return output.join('');
};

const state = {};
const urlPrefix = 'http://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  const key = createRamdomCode();
  state[key] = longUrl;
  return `${urlPrefix}${key}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const results = shortUrl.split(urlPrefix);
  return state[results[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
