export type LoginResult =
  | { ok: true; policyNumber: string }
  | { ok: false; reason: "ACCOUNT_NOT_FOUND" | "INCORRECT_PASSWORD" };