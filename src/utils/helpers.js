export const isTouchDevice = () => {
  if (typeof window === `undefined`) return null

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}
