"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-2xl flex-col gap-5 md:gap-6">
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#6f6257]">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-0 border-b border-[#171310]/30 bg-transparent px-0 pb-3 pt-1 text-base font-light outline-none transition placeholder:text-[#6f6257]/55 focus:border-[#171310]"
          placeholder={t("namePlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#6f6257]">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-0 border-b border-[#171310]/30 bg-transparent px-0 pb-3 pt-1 text-base font-light outline-none transition placeholder:text-[#6f6257]/55 focus:border-[#171310]"
          placeholder={t("emailPlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#6f6257]">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className="resize-none border-0 border-b border-[#171310]/30 bg-transparent px-0 pb-3 pt-1 text-base font-light outline-none transition placeholder:text-[#6f6257]/55 focus:border-[#171310]"
          placeholder={t("messagePlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="mt-1 inline-flex w-fit items-center justify-center border border-[#171310] bg-[#171310] px-7 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-white transition-colors hover:opacity-80 disabled:opacity-50"
      >
        {status === "loading" && t("sending")}
        {status === "success" && t("sent")}
        {(status === "idle" || status === "error") && t("send")}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-sm text-green-600">
          {t("thankYou")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
