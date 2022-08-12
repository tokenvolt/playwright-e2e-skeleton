import { faker } from "@faker-js/faker"
import { appendTUID } from "entities/shared"
import { register } from "core/data-generator"

declare module "core/data-generator" {
  interface RegisteredDataGenerators {
    user: { email: string; password: string }
  }
}

register("user", (patch, options) => {
  return {
    email: appendTUID(faker.internet.email("user"), options.tuid),
    password: faker.internet.password(),
    ...patch,
  }
})
