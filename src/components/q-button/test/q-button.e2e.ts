import { newE2EPage } from "@stencil/core/testing";

describe("q-button", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<q-button></q-button>");

    const element = await page.find("q-button");
    expect(element).toHaveClass("hydrated");
  });
});
