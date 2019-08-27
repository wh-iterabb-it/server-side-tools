const urlRegex = require('./urlRegex');

/**
 * detectURL
 * @param {string} str - a string to check for a url in it
 */
function detectURL(str) {
  if (str.length < 2083 && (str.match(urlRegex))) {
    const match = str.match(urlRegex);
    return match[0];
  }
  return false;
}

/**
   * detectHostName
   * @param {string} url - a url parsed from a message to get a host name from
   * @return {string} a hostname
   */
function detectHostName(url) {
  let hostname;

  // find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  // find & remove port number
  hostname = hostname.split(':')[0];

  // find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}
/**
 * detectRootDomain
 * @param {string} url - a url parsed from a message to get a host name from
 * @return {string} a domain
 */
function detectRootDomain(url) {
  let domain = detectHostName(url);
  const splitArr = domain.split('.');
  const arrLen = splitArr.length;

  // extracting the root domain here
  // if there is a subdomain
  if (arrLen > 2) {
    domain = `${splitArr[arrLen - 2]}.${splitArr[arrLen - 1]}`;
    // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
    if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
      // this is using a ccTLD
      domain = `${splitArr[arrLen - 3]}.${domain}`;
    }
  }

  return domain;
}

module.exports = {
  detectURL, detectHostName, detectRootDomain
};