/**
 * @param {string[]} emails
 * @return {number}
 */

const normalize = (str) => {
  const [localName, domainName] = str.split('@');
  return localName.split('+')[0].replace(/\./g, '') + domainName;
};

var numUniqueEmails = function(emails) {
  const cache = {};
  let count = 0;
  for (let i = 0; i < emails.length; i++) {
    const email = normalize(emails[i]);
    if (!cache[email]) {
      cache[email] = true;
      count += 1;
    }
  }
  return count;
};
