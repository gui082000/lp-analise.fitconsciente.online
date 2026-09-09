export type CheckoutPlan = "basico" | "premium" | "premiumDownsell";

/**
 * URL de checkout de cada plano, vinda de variável de ambiente. Sem valor
 * definido, cai em "#" (link inofensivo, fácil de notar em teste manual).
 */
export function getCheckoutUrl(plan: CheckoutPlan): string {
  const urls: Record<CheckoutPlan, string | undefined> = {
    basico: process.env.NEXT_PUBLIC_CHECKOUT_URL_BASICO,
    premium: process.env.NEXT_PUBLIC_CHECKOUT_URL_PREMIUM,
    premiumDownsell: process.env.NEXT_PUBLIC_CHECKOUT_URL_PREMIUM_DOWNSELL,
  };
  return urls[plan] || "#";
}
