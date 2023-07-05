// import Vue from 'vue'
import VueApp from './VueApp.vue'
import {App} from "./App";

import Notifications from "notiwind";

import { dateFormat, humanizeString, numberFormat } from "@/VueFilters";


import "./index.css";

import { createApp } from 'vue'

// const localApp = createApp(VueApp)

// Vue.config.productionTip = false;



// localApp.use(Notifications);

declare global {
    interface Window {
        App: App;
    }
}


/**
 * Start the application when all html elements are loaded.
 */
window.onload = function () {
    App.start();

    // Expose the App class to the window (and the console)
    if (!App.inProduction && typeof window !== undefined) {
        console.log('Exposing App to console');
        window.App = App;
    }


    console.log("Launched");

    // new Vue({
    //     render: h => h(VueApp),
    // }).$mount('#app')

    const localApp = createApp(VueApp);

    localApp.config.globalProperties.$filters = {
        dateFormat,
        humanizeString,
        numberFormat
      }

      localApp.use(Notifications).mount('#app');
};


