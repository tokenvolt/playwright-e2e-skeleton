import { faker } from "@faker-js/faker"
import { appendSuffix, Meta, TUID } from "./shared"

export type Project = {
  name: string
} & Meta

export const build = (patch?: Partial<Project>): Project => {
  const { tuid, ...data } = patch

  return {
    name: appendSuffix(faker.company.catchPhrase(), tuid),
    ...data,
  }
}
