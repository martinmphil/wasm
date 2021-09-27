async function main() {
  const prob = await WebAssembly.instantiateStreaming(
    fetch("optimized.wasm")
  ).then((obj) => obj.instance.exports.versus);

  const state = new Map();

  function instruct() {
    document.querySelector("output").innerText = prob(
      state.get("us"),
      state.get("them"),
      state.get("advUs"),
      state.get("advThem")
    ).toPrecision(3);
  }

  const usInput = document.querySelector("#usInput");
  const themInput = document.querySelector("#themInput");
  const advUsInput = document.querySelector("#advUsInput");
  const advThemInput = document.querySelector("#advThemInput");

  function reset() {
    state.set("us", 10);
    state.set("them", 10);
    state.set("advUs", 0);
    state.set("advThem", 0);
    usInput.value = state.get("us");
    themInput.value = state.get("them");
    advUsInput.value = state.get("advUs");
    advThemInput.value = state.get("advThem");
  }
  document.querySelector("#resetBttn").addEventListener("click", () => {
    reset();
    instruct();
  });
  reset();
  instruct();

  // We
  usInput.addEventListener("input", () => {
    state.set("us", parseFloat(usInput.value));
    instruct();
  });
  document.querySelector("#minus1Us").addEventListener("click", () => {
    const x = state.get("us");
    state.set("us", x - 1);
    usInput.value = state.get("us");
    instruct();
  });
  document.querySelector("#plus1Us").addEventListener("click", () => {
    const x = state.get("us");
    state.set("us", x + 1);
    usInput.value = state.get("us");
    instruct();
  });
  advUsInput.addEventListener("input", () => {
    state.set("advUs", parseFloat(advUsInput.value));
    instruct();
  });
  document.querySelector("#minus1AdvUs").addEventListener("click", () => {
    const x = state.get("advUs");
    state.set("advUs", x - 1);
    advUsInput.value = state.get("advUs");
    instruct();
  });
  document.querySelector("#plus1AdvUs").addEventListener("click", () => {
    const x = state.get("advUs");
    state.set("advUs", x + 1);
    advUsInput.value = state.get("advUs");
    instruct();
  });

  // They
  themInput.addEventListener("input", () => {
    state.set("them", parseFloat(themInput.value));
    instruct();
  });
  document.querySelector("#minus1Them").addEventListener("click", () => {
    const x = state.get("them");
    state.set("them", x - 1);
    themInput.value = state.get("them");
    instruct();
  });
  document.querySelector("#plus1Them").addEventListener("click", () => {
    const x = state.get("them");
    state.set("them", x + 1);
    themInput.value = state.get("them");
    instruct();
  });
  advThemInput.addEventListener("input", () => {
    state.set("advThem", parseFloat(advThemInput.value));
    instruct();
  });
  document.querySelector("#minus1AdvThem").addEventListener("click", () => {
    const x = state.get("advThem");
    state.set("advThem", x - 1);
    advThemInput.value = state.get("advThem");
    instruct();
  });
  document.querySelector("#plus1AdvThem").addEventListener("click", () => {
    const x = state.get("advThem");
    state.set("advThem", x + 1);
    advThemInput.value = state.get("advThem");
    instruct();
  });
}

main();
