"use server";

import { redirect } from "next/navigation";

export async function getProductId(link) {
  const url = new URL(link);
  const path = url.pathname.split("/");

  return path[3];
}
export async function postToResult(formData) {
  await getProductId(formData.get("link")).then((productId) => {
    redirect(`/result/${productId}`);
  });
}
