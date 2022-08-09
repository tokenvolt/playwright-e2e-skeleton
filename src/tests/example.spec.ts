import { expect } from "@playwright/test"
import { test } from "core/test"
import { LoginPage } from "poms/login"

test("login page", async ({ page, tuid, gen }) => {
  const user = gen.build("user", {})

  const loginPage = new LoginPage(page)
  await loginPage.navigate()

  await expect(page).toHaveTitle(/Sign In/)
})
