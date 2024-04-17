import { assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { act } from "./main.ts";

Deno.test("act", async (t) => {
  await t.step("act first", () => {
    assertEquals(act("act first, think later"), true);
  });

  await t.step("act later", () => {
    assertEquals(act("think first, act later"), false);
  });

  await t.step("don't action", () => {
    assertEquals(act("don't action"), false);
  });

  await t.step("react 🤮", () => {
    assertEquals(act("react"), false);
  });
});
