import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
import "@varlet/touch-emulator";
// import './samples/node-api'

createApp(App)
	.mount("#app")
	.$nextTick(() => {
		postMessage({ payload: "removeLoading" }, "*");
	});
