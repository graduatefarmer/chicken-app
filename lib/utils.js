export function getEnvVariable(key) {
  const value = process.env[key];

  if (!value || value.length === 0) {
    throw new Error(`The environment variable ${key} is not set.`);
  }

  return value;
}

export function htmlEncode(value) {
  if (typeof value === "string") {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/:/g, "&#58;")
      .replace(/;/g, "&#59;");
  } else {
    return value;
  }
}

export function htmlDecode(value) {
  if (typeof value === "string") {
    return value
      .replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
      })
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&#58;/g, ":")
      .replace(/&#59;/g, ";");
  } else {
    return value;
  }
}
