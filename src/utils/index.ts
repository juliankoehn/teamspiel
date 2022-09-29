export const __DEV__ = process.env.NODE_ENV !== "production";

export const cx = (...args: any[]) => {
  return args.filter(Boolean).join(" ");
}