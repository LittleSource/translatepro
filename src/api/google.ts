import axios from "axios";
import { translationReq } from "./types";

const googleLanguageCodes = new Map([
	["中文", "zh-CN"],
	["英文", "en"],
	["日文", "ja"],
]);
export const tranlate = async (req: translationReq, key: string): Promise<string> => {
	const url = `https://translation.googleapis.com/language/translate/v2?key=${key}`;

	const headers = {
		"content-type": "application/json",
	};
	const payload = {
		key,
		q: req.text,
		source: googleLanguageCodes.get(req.from),
		target: googleLanguageCodes.get(req.to),
	};
	const result = await axios.post(url, payload, { headers: headers });
	console.log(result);
	return new Promise((resolve, reject) => {
		if (result.status === 200) {
			resolve(result.data.data.translations[0].translatedText);
		} else {
			reject();
		}
	});
};
