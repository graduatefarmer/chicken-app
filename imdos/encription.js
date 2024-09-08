import CryptoJS from "crypto-js";
import toast from "react-hot-toast";

const encryptionKey = ">Z~$m;9^.yRNW(";

export function encryptJSON(jsonData) {
  try {
    const jsonString = JSON.stringify(jsonData);
    const encrypted = CryptoJS.AES.encrypt(
      jsonString,
      encryptionKey
    ).toString();
    return encrypted;
  } catch (error) {
    toast.error("Error encrypting data. Please check your input.");
    return null;
  }
}

export function decryptJSON(encryptedData) {
  try {
    const decrypted = CryptoJS?.AES?.decrypt(
      encryptedData?.data,
      encryptionKey
    ).toString(CryptoJS.enc.Utf8);
    const decryptedJSON = JSON.parse(decrypted);
    return decryptedJSON;
  } catch (error) {
    toast.error("Slow network connection. Please try again.");
    return null;
  }
}
