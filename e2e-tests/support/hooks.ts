import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "./world";

setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
  headless: false,
  args: ["--disable-extensions"]
});

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});