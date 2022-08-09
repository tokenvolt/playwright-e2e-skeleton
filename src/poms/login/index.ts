import { Page } from "@playwright/test"
import { POM } from "core/pom"
import { LoginForm } from "poms/login/LoginForm"

export class LoginPage extends POM {
  readonly form: LoginForm

  constructor(page: Page) {
    super(page, "/login")
    this.form = new LoginForm(page)
  }

  async navigate() {
    await this.page.goto(this.url)
  }

  async signIn({ email, password }: { email: string; password: string }) {
    await this.form.fill({ email, password })
    await this.form.submit()
  }
}
