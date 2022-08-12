type DataGeneratorOptions = {
  tuid: string
  useTUID?: boolean
}

export interface RegisteredDataGenerators {}

type RegisteredGeneratorPayloads = {
  [K in keyof RegisteredDataGenerators]: RegisteredDataGenerators[K]
}

const generators: Record<string, Function> = {}

export const register = <K extends keyof RegisteredGeneratorPayloads>(
  key: K,
  generatorF: (
    patch?: Partial<RegisteredGeneratorPayloads[K]>,
    options?: { tuid: string }
  ) => Partial<RegisteredGeneratorPayloads[K]>
): void => {
  generators[key] = generatorF
}

export const createDataGenerator = ({ tuid, useTUID }: DataGeneratorOptions) => {
  return {
    build: <K extends keyof RegisteredGeneratorPayloads>(
      x: K,
      patch?: Partial<RegisteredGeneratorPayloads[K]>,
      options?: { useTUID: boolean }
    ): Partial<RegisteredGeneratorPayloads[K]> => {
      const generatorF = generators[x]
      const computedUseTUID = useTUID ?? options?.useTUID

      if (generatorF) {
        return generatorF(patch, { tuid: computedUseTUID ? tuid : null })
      } else {
        throw `There is no generator related to "${x}". You need to call "register("${x}", generatorF)" to define it.`
      }
    },
  }
}
