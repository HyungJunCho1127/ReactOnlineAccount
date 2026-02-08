import { policies, credentialsByEmail } from "../data/mockData";
import type { LoginResult } from "../types/auth";

export class AuthService {

  static login(email: string, password: string): LoginResult {
    const checkEmail = email.trim().toLowerCase();
    const pw = password.trim();

    const entry = Object.values(policies).find(
      (p) => p.user.email.toLowerCase() === checkEmail
    );

    if (!entry) {
      return { ok: false, reason: "ACCOUNT_NOT_FOUND" };
    }

    const expectedPassword = credentialsByEmail[checkEmail];

    if (!expectedPassword || pw !== expectedPassword) {
      return { ok: false, reason: "INCORRECT_PASSWORD" };
    }

    return { ok: true, policyNumber: entry.policy.policyNumber };
  }
}