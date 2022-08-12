import { test as base } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { createDataGenerator } from "core/data-generator"
import "entities/_loader"

// console.log("G2", G)

export const test = base.extend<{ tuid: string; gen: ReturnType<typeof createDataGenerator> }>({
  /**
   *
   * Test Unique IDentifier
   *
   */
  tuid: async ({}, use) => {
    await use(uuidv4())
  },

  /**
   *
   * Fake data generator. Is aware of tuid fixture.
   *
   */
  gen: async ({ tuid }, use) => {
    await use(createDataGenerator({ tuid, useTUID: true }))
  },
})
