export type GeneratorOptions = {
  tuid?: boolean
}

export type TUID = string
export type Meta = { tuid?: TUID }

export const appendSuffix = (origin: string, suffix?: string) =>
  suffix === undefined || suffix === null || suffix === "" ? origin : `${origin} ${suffix}`
