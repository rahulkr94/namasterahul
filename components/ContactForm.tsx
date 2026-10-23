"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\nFrom: ${form.get("name")} (${form.get("email")})`);
    setSent(true);
    window.location.href = `mailto:rahulmca94@gmail.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label></div>
      <label>Message<textarea name="message" rows={5} placeholder="Tell me about the role or project..." required /></label>
      <button className="button button-light" type="submit">Send message</button>
      {sent && <p className="form-note" role="status">Opening your email app…</p>}
    </form>
  );
}
