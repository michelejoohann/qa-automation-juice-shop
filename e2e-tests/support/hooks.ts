import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "./world";

Before(async function (this: CustomWorld) {
  const headless = process.env.HEADLESS !== "false";
  this.browser = await chromium.launch({ headless });
  this.context = await this.browser.newContext({
    viewport: { width: 1366, height: 768 },
    recordVideo: { dir: "../evidences/videos" }
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.context?.close();
  await this.browser?.close();
});
