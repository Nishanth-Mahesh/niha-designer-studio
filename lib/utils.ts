import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "8971545654"; // Replace with actual number
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a consultation with NIHA DESIGNER STUDIO."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const INSTAGRAM_URL = "https://www.instagram.com/niha_designer_studioo";
