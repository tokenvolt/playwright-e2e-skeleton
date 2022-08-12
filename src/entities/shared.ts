export const appendTUID = (origin: string, suffix?: string) =>
  suffix === undefined || suffix === null || suffix === "" ? origin : `${origin} [tuid:${suffix}]`
