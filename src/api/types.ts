export interface translationReq {
	from: string;
	to: string;
	text: string;
}

export type Translate = (req: translationReq) => void;
