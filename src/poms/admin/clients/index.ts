import { Page } from "@playwright/test"
import { POM } from "core/pom"

export namespace Clients {
  export class IndexPage extends POM {
    constructor(page: Page) {
      super(page, "/admin/clients")
    }
  }
}
