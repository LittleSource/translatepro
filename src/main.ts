import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
import "@varlet/touch-emulator";
// import './samples/node-api'
import pinia from "./store/index";

const app = createApp(App);
app.use(pinia)
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
