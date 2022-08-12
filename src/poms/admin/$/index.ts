import { Page } from "@playwright/test"
import { POM } from "core/pom"

export namespace $ {
  type IndexPageParams = { id: string }

  export class IndexPage extends POM {
    constructor(page: Page, params: IndexPageParams) {
      super(page, `/admin/${params.id}`)
    }
  }
}
