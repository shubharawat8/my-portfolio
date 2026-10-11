"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { ClayButton } from "./ClayButton";

/** Copies an email address to the clipboard with brief visual + screen-reader feedback. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <ClayButton variant="surface" size="lg" onClick={copy}>
      {copied ? <Check className="size-5 text-mint-ink" aria-hidden="true" /> : <Copy className="size-5" aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
    </ClayButton>
  );
}
