"use server";

import { signIn } from "next-auth/react";

export async function googleSignIn() {
	await signIn("google");
}