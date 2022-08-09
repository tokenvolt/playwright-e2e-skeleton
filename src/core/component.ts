import { Locator, Page } from "@playwright/test"

export class Component {
  readonly page: Page
  locator: Locator

  constructor(page: Page) {
    this.page = page
  }
}
