/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface QButton {
    }
}
declare global {
    interface HTMLQButtonElement extends Components.QButton, HTMLStencilElement {
    }
    var HTMLQButtonElement: {
        prototype: HTMLQButtonElement;
        new (): HTMLQButtonElement;
    };
    interface HTMLElementTagNameMap {
        "q-button": HTMLQButtonElement;
    }
}
declare namespace LocalJSX {
    interface QButton {
    }
    interface IntrinsicElements {
        "q-button": QButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "q-button": LocalJSX.QButton & JSXBase.HTMLAttributes<HTMLQButtonElement>;
        }
    }
}
