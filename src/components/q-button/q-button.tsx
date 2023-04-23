import { Component, h, Fragment } from "@stencil/core";

@Component({
  tag: "q-button",
  styleUrl: "q-button.css",
  shadow: true,
})
export class QButton {
  render() {
    return (
      <>
        <p style={{ "background-color": "blue", "color": "white" }}>text</p>
        <button class="rounded-xl bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
          <slot></slot>
        </button>
      </>
    );
  }
}
