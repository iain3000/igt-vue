import { App } from "@/App";
import VueApp from "@/VueApp.vue";

// import '@/VueFilters';
import { mount } from "@vue/test-utils";

import { describe, test, expect } from "vitest";
import Notifications from "notiwind";

/**
 * This smoke test starts the game and runs 100 game ticks.
 * It will also mount the Vue instance.
 * It fails if any exceptions are thrown.
 */
describe("Game launch smoke test", () => {
  test("smoke test", () => {
    expect(() => {
      App.start();

      mount(VueApp, {
        global: {
          plugins: [Notifications],
          config: {
            globalProperties: {
              $filters: {
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

                  const year = new Intl.DateTimeFormat("en", { year: "numeric", }).format(date);
                  const month = new Intl.DateTimeFormat("en", { month: "long", }).format(date);
                  const day = new Intl.DateTimeFormat("en", { day: "2-digit", }).format(date);

                  const hours = date.getHours();
                  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
                  const minutes = date.getMinutes();
                  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

                  return `${day} ${month} ${year} ${hoursString}:${minutesString}`;
                },
              },
            },
          },
        },
      });

      for (let i = 0; i < 100; i++) {
        App.game.update();
      }
    }).not.toThrow();
  });
});
