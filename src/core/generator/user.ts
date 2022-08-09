import { faker } from "@faker-js/faker"
import { appendSuffix, Meta } from "./shared"

export type User = {
  email: string
  password: string
} & Meta

export const build = (patch?: Partial<User>): User => {
  const { tuid, ...data } = patch

  return {
    email: faker.internet.email("user", tuid),
    password: faker.internet.password(),
    ...data,
  }
}
