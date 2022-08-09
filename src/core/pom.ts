import { Page } from "@playwright/test"

const buildURL = (path: string) => `${process.env.URL}${path}`

export class POM {
  readonly page: Page
  readonly url: string

  constructor(page: Page, path: string) {
    this.page = page
    this.url = buildURL(path)
  }

  async navigate() {
    this.page.goto(this.url)
  }
}
