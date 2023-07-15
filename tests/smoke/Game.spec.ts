import { App } from "@/App";
import VueApp from "@/VueApp.vue";

import { mount } from "@vue/test-utils";

import { describe, test, expect } from "vitest";
import Notifications from "notiwind";

import { dateFormat, humanizeString, numberFormat } from "@/VueFilters";
import { createPinia } from "pinia";

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
                dateFormat,
                humanizeString,
                numberFormat
              },
              $pinia: createPinia()
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
