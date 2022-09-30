import axios from "axios";
export const tranlate = (source: string | string[], direction: string) => {
	let url = "http://api.interpreter.caiyunai.com/v1/translator";
	const token = "3975l6lr5pcbvidl6jl2";
	const payload = {
		source: source,
		trans_type: direction,
		request_id: "demo",
		detect: true,
	};
	const headers = {
		"content-type": "application/json",
		"x-authorization": "token " + token,
	};
	return axios.post(url, payload, { headers: headers }).then((res) => {
		console.log(res);
	});
};
