import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "./world";

setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: true,
    args: [
      "--disable-extensions",
      "--disable-features=Translate,TranslateUI",
      "--disable-translate"
    ]
  });

  this.context = await this.browser.newContext({
    locale: "en-US",
    viewport: { width: 1440, height: 900 }
  });

  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === "FAILED") {
    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true
    });

    this.attach(screenshot, "image/png");
  }

  await this.page.close();
  await this.context.close();
  await this.browser.close();
});