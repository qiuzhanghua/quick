import { newSpecPage } from "@stencil/core/testing";
import { QButton } from "../q-button";

describe("q-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [QButton],
      html: "<q-button></q-button>",
    });
    expect(page.root).toEqualHtml(`
      <q-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </q-button>
    `);
  });
});
