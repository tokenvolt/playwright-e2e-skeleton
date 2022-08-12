import { expect } from "@playwright/test"
import { test } from "core/test"
import { Admin } from "poms/admin"
import { LoginPage } from "poms/login"

test("admin clients page", async ({ page, gen, storageState }) => {
  const loginPage = new LoginPage(page)
  await loginPage.navigate()
  console.log("loginPage.url", loginPage.url)
  await loginPage.signIn({ email: "test.admin@pSapient.onmicrosoft.com", password: "1q2w3e4rAAA++!!!" })
  await expect(page).toHaveTitle(/Clients/)

  const adminClientsPage = new Admin.Clients.IndexPage(page)
  await adminClientsPage.navigate()
  await expect(page).toHaveTitle(/Clients/)
})

// /admin/clients
// /admin/clients/123
