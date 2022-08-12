import { Page } from "@playwright/test"

const buildURL = (path: string) => `${process.env.HOST}${path}`

export class POM {
  readonly page: Page
  readonly url: string

  constructor(page: Page, path: string) {
    this.page = page
    this.url = buildURL(path)
  }

  async navigate() {
    await this.page.goto(this.url)
    await this.page.waitForURL(this.url)
  }
}
