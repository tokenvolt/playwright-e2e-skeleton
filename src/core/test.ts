import { test as base } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { Generator } from "core/generator"

export const test = base.extend<{ tuid: string; gen: Generator }>({
  /**
   *
   * Test unique identifier
   *
   */
  tuid: async ({}, use) => {
    await use(uuidv4())
  },

  /**
   *
   * Fake data generator. Is aware of idx fixture.
   *
   */
  gen: async ({ tuid }, use) => {
    await use(new Generator({ tuid }))
  },
})
