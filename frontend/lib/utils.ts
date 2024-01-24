import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(durationSeconds: number) {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = Math.floor(durationSeconds % 60);
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${formattedSeconds}`;
}

export function formatTimeHMS(milliseconds: number) {
  // Convert milliseconds to seconds
  let seconds = Math.floor(milliseconds / 1000);

  // Calculate hours, minutes, and remaining seconds
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  // Format the result
  let formattedResult = `${hours ? hours + " hr" : ""} ${
    minutes ? minutes + " min" : ""
  } ${seconds ? seconds + " sec" : ""}`;

  return formattedResult;
}

export function formatTimeMS(milliseconds: number) {
  // Convert milliseconds to seconds
  let seconds = Math.floor(milliseconds / 1000);

  // Calculate hours, minutes, and remaining seconds
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  // Format the result
  let formattedResult = `${minutes}:${seconds || "00"}`;

  return formattedResult;
}
