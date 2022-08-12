import { faker } from "@faker-js/faker"
import { appendTUID } from "entities/shared"
import { register } from "core/data-generator"

declare module "core/data-generator" {
  interface RegisteredDataGenerators {
    expert: { name: string }
  }
}

register("expert", (patch, options) => {
  return {
    name: appendTUID(faker.company.catchPhrase(), options.tuid),
    ...patch,
  }
})
