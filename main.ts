/**
 * @module
 *
 * This module contains a function to check if you are acting first and thinking later
 *
 *    *
 * ```ts
 * import { act } from "jsr:@act/act";
 *
 * act("act first, think later") // true
 * act("think first, act later") // false
 * act("don't act") // false
 * ```
 */

/**
 * This function receives a text and literally check if you are act first and think later
 *
 * ```ts
 * import { act } from "jsr:@act/act";
 *
 * act("act first, think later") // true
 * act("think first, act later") // false
 * act("don't act") // false
 * ````
 */
export function act(action: string): boolean {
  const actIndex = action.toLowerCase().indexOf("act");
  const thinkIndex = action.toLowerCase().indexOf("think");
  return actIndex < thinkIndex;
}

if (import.meta.main) {
  const text = Deno.args.join() ?? "act first, think later";
  console.log(act(text) ? "🤩" : "😭");
}
