import AES from "crypto-js/aes";
import { enc } from "crypto-js";

export const encryptId = (str) => {
	const ciphertext = AES.encrypt(str, "secretPassphrase");
	return encodeURIComponent(ciphertext.toString());
};

export const getUrl = (id) => {
	const encryptedId = encryptId(id);
	return `/orden/encuesta1/${encryptedId}`;
};

export const decryptId = (str) => {
	const decodedStr = decodeURIComponent(str);
	return AES.decrypt(decodedStr, "secretPassphrase").toString(enc.Utf8);
};
