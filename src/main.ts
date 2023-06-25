// import Vue from 'vue'
import VueApp from './VueApp.vue'
import {App} from "./App";

import Notifications from "notiwind";

// import './VueFilters';

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
        // currencyUSD(value) {
        //   return '$' + value
        // },
        humanizeString(string: string) {
            if (string == undefined) {
                return "";
            }
            string = string.charAt(0).toUpperCase() + string.slice(1);
            string.replace("_", " ").replace("-", " ");
            return string;
        },
        numberFormat(value: number) {
            if (value == undefined) {
                return "";
            }
            return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        dateFormat(date: Date) {
            if (date == undefined) {
                return "";
            }
        
            const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
            const month = new Intl.DateTimeFormat('en', {month: 'long'}).format(date);
            const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
        
            const hours = date.getHours();
            const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
            const minutes = date.getMinutes();
            const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        
            return `${day} ${month} ${year} ${hoursString}:${minutesString}`;
        
        }
      }

      localApp.use(Notifications).mount('#app');
};


