import axios from "axios";
import { translationReq } from "./types";

const caiyunLang = new Map([
	["中文", "zh"],
	["英文", "en"],
	["日文", "ja"],
]);

export const tranlate = async (req: translationReq): Promise<string> => {
	let url = "http://api.interpreter.caiyunai.com/v1/translator";
	const token = "3975l6lr5pcbvidl6jl2";
	const payload = {
		source: req.text,
		trans_type: `${caiyunLang.get(req.from)}2${caiyunLang.get(req.to)}`,
		request_id: "demo",
		detect: true,
	};
	const headers = {
		"content-type": "application/json",
		"x-authorization": "token " + token,
	};
	const result = await axios.post(url, payload, { headers: headers });
	return new Promise((resolve, reject) => {
		if (result.status === 200) {
			resolve(result.data.target);
		} else {
			reject();
		}
	});
};
