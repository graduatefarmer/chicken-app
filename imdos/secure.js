"use server";
import crypto from "crypto";

export async function generateServerAuthKey() {
  const secret = process.env.SERVER_SECRET;
  const secretEncoded = crypto
    .createHash("sha256")
    .update(secret)
    .digest("hex");

  const buffer = crypto.randomBytes(50);
  const token =
    buffer.toString("hex").slice(0, 100) +
    secretEncoded +
    buffer.toString("hex").slice(0, 10);
  return token;
}

export async function generateServerSignature() {
  const signature = process.env.SERVER_SIGNATURE;
  return crypto.createHash("sha256").update(signature).digest("hex");
}

export async function fetchData(query, params, first) {
  try {
    const request = await fetch(process.env.API_ENDPOINT + "main.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": await generateServerSignature(),
        "X-AUTH-KEY": await generateServerAuthKey(),
      },
      body: JSON.stringify({
        query: query,
        params: params,
      }),
    });

    const response = await request.json();
    if (first) {
      return response[0];
    }
    return response;
  } catch (error) {
    throw new Error("Your token has expired.");
  }
}
