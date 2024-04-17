export function act(action: string): boolean {
  const actIndex = action.toLowerCase().indexOf("act");
  const thinkIndex = action.toLowerCase().indexOf("think");
  return actIndex < thinkIndex;
}

if (import.meta.main) {
  const text = Deno.args.join() ?? "act first, think later";
  console.log(act(text) ? "🤩" : "😭");
}
