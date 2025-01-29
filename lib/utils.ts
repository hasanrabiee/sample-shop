import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Convert prisma object to plain object

export function convertToPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

// Format Price

export function formatPrice(price: number) {
  const [int,decimal] = price.toString().split(".")
  return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`
}