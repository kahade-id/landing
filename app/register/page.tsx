import { redirect } from "next/navigation";

/**
 * /register?ref=<code> — format referral lama.
 * Teruskan ke format baru /r/<code>. Tanpa ref → ke beranda.
 */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  if (ref && /^[a-zA-Z0-9_-]{1,64}$/.test(ref)) {
    redirect(`/r/${encodeURIComponent(ref)}`);
  }
  redirect("/");
}
