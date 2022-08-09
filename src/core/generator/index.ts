import { TUID } from "./shared"
import { build as buildProject, Project } from "./project"
import { build as buildUser, User } from "./user"

type ModelName = "user" | "project"
type Model = Project | User
type GeneratorOptions = {
  tuid: string
}

const defaultOptions = { useTUID: false }

export class Generator {
  readonly tuid: string

  constructor(options: GeneratorOptions) {
    this.tuid = options.tuid
  }

  public build(key: "user", data?: Partial<User>, options?: { useTUID: boolean }): User
  public build(key: "project", data?: Partial<Project>, options?: { useTUID: boolean }): Project
  public build(key: ModelName, data?: Partial<Model>, options?: { useTUID: boolean }): Model {
    const computedOptions = {
      ...defaultOptions,
      ...options,
    }

    // console.log("computedOptions", computedOptions)

    switch (key) {
      case "project": {
        if (computedOptions.useTUID) {
          return buildProject({ ...data, tuid: this.tuid } as Project)
        }

        return buildProject({ ...data, tuid: null } as Project)
      }
      case "user": {
        if (computedOptions.useTUID) {
          return buildUser({ ...data, tuid: this.tuid } as User)
        }

        return buildUser({ ...data, tuid: null } as User)
      }
    }
  }
}
