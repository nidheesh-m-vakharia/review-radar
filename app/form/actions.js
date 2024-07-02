"use server";

import { redirect } from "next/navigation";

export async function postToResult(formData) {
  redirect(`/result/${formData.get("link")}`);
}
