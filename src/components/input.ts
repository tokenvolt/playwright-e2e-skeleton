import { Locator, Page } from "@playwright/test"
import { Component } from "core/component"

export class Input extends Component {
  constructor(page: Page, selector: string) {
    super(page)
    this.locator = this.page.locator(selector)
  }

  async fill(data: string) {
    await this.locator.fill(data)
  }
}
