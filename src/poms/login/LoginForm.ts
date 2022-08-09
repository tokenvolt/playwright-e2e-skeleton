import { Locator, Page } from "@playwright/test"
import { Component } from "core/component"
import { Input } from "components/input"

export class LoginForm extends Component {
  readonly emailInput: Input
  readonly passwordInput: Input
  readonly signInButton: Locator

  constructor(page: Page) {
    super(page)
    this.emailInput = new Input(page, 'input[name="login"]')
    this.passwordInput = new Input(page, 'input[name="password"]')
    this.signInButton = page.locator("text=Sign In")
  }

  async fill({ email, password }: { email: string; password: string }) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
  }

  async submit() {
    await this.signInButton.click()
  }
}
