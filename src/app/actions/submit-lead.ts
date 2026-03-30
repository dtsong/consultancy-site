"use server";

const PORTAL_API_URL = process.env.PORTAL_API_URL || "http://localhost:3001";

interface LeadSubmission {
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
  message?: string;
  source?: "CONTACT_FORM" | "ASSESSMENT";
  metadata?: Record<string, unknown>;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

export async function submitLead(data: LeadSubmission): Promise<SubmitResult> {
  try {
    const response = await fetch(`${PORTAL_API_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      return {
        success: false,
        error: body?.error || "Something went wrong. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to submit at this time. Please try again later.",
    };
  }
}
