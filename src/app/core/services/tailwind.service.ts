import { Injectable } from '@angular/core';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

@Injectable({ providedIn: 'root' })
export default class TailwindService {
  merge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
}
