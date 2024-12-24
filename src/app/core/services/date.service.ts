import { Injectable } from '@angular/core';
import { format, isSameDay, isSameMonth, isSameYear } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export default class DateService {
  /**
   * Formats a date range into a long, human-readable string.
   *
   * @param startDate The start date of the range.
   * @param endDate The end date of the range.
   * @returns A formatted date range string (e.g., "January 1-5, 2024").
   */
  formatDateRange(startDate: Date | string, endDate: Date | string): string {
    const start = this.ensureDate(startDate);
    const end = this.ensureDate(endDate);

    const startFormatted = format(start, 'MMMM d');
    const endFormatted = format(end, 'MMMM d');
    const year = format(start, 'yyyy');

    if (format(start, 'yyyy-MM') === format(end, 'yyyy-MM'))
      return `${startFormatted}-${end.getDate()}, ${year}`;
    else if (format(start, 'yyyy') === format(end, 'yyyy'))
      return `${startFormatted} - ${endFormatted}, ${year}`;
    else
      return `${startFormatted}, ${year} - ${endFormatted}, ${format(end, 'yyyy')}`;
  }

  /**
   * Formats a date range into a short string.
   *
   * @param startDate The start date of the range.
   * @param endDate The end date of the range.
   * @returns A formatted short date range string (e.g., "Jan 1-5, 2024").
   */
  formatShortDateRange(startDate: Date | string, endDate: Date | string): string {
    return this.formatDateRange(startDate, endDate).replace(/(\w{3})\w+/, '$1');
  }

  /**
   * Formats a date into a timestamp string.
   *
   * @param date The date to format.
   * @returns A formatted timestamp string (e.g., "January 1, 2024 @ 10:00 AM").
   */
  formatTimestamp(date: Date | string): string {
    return format(this.ensureDate(date), 'MMMM d, yyyy @ h:mm a');
  }

  /**
   * Ensures the input is a Date object.
   *
   * @param date The date to format.
   * @returns A sortable date string (e.g., "2024-01-01 10:00:00").
   */
  sortableFormat(date: Date | string): string {
    return format(this.ensureDate(date), 'yyyy-MM-dd HH:mm:ss');
  }

  /**
   * Formats a date-time range based on various conditions, handling cases where the start and end dates fall
   * within the same day, year, or different years. It appropriately formats the time, omitting minutes if they are zero.
   *
   * @param start The start date of the range.
   * @param end Optional end date of the range. If not provided, only the start date is formatted as a time.
   * @returns A formatted string representing the date-time range (e.g., "1:32 pm", "10 am - 11 am", "December 1 @ 10 am - December 2 @ 3 pm", etc.).
   */
  formatDateTimeRange(start: Date, end?: Date): string {
    if (!end) return this.formatTime(start);
    if (isSameDay(start, end)) return this.formatSameDayRange(start, end);
    if (isSameYear(start, end)) return this.formatSameYearRange(start, end);
    return this.formatDifferentYearRange(start, end);
  }

  /**
   * Formats the time part of a date, omitting minutes if they are zero.
   *
   * @param date The date to format.
   * @returns A formatted time string (e.g., "1 pm" or "1:32 pm").
   */
  private formatTime(date: Date): string {
    return format(date, date.getMinutes() === 0 ? 'h aaa' : 'h:mm aaa');
  }

  /**
   * Formats a date range that falls on the same day.
   *
   * @param start The start date of the range.
   * @param end The end date of the range.
   * @returns A formatted time range string for the same day (e.g., "10 am - 11 am").
   */
  private formatSameDayRange(start: Date, end: Date): string {
    return `${this.formatTime(start)} - ${this.formatTime(end)}`;
  }

  /**
   * Formats a date range that falls within the same year.
   *
   * @param start The start date of the range.
   * @param end The end date of the range.
   * @returns A formatted date and time range string for the same year (e.g., "January 31 @ 10:31 am to February 1 @ 3 pm").
   */
  private formatSameYearRange(start: Date, end: Date): string {
    const startFormatted = format(start, 'MMMM d');
    const endFormatted = format(end, 'MMMM d');
    const startHasTime = !(
      start.getHours() === 0 &&
      start.getMinutes() === 0 &&
      start.getSeconds() === 0
    );
    const endHasTime = !(
      end.getHours() === 23 &&
      end.getMinutes() === 59 &&
      end.getSeconds() === 59
    );

    const startTime = startHasTime ? ` @ ${this.formatTime(start)}` : '';
    const endTime = endHasTime ? ` @ ${this.formatTime(end)}` : '';

    if (startHasTime && endHasTime) return `${startFormatted}${startTime} to ${endFormatted}${endTime}`;
    else if (startHasTime) return `${startFormatted}${startTime} to ${endFormatted}`;
    else if (endHasTime) return `${startFormatted} to ${endFormatted}${endTime}`;
    else return `${startFormatted} to ${endFormatted}`;
  }

  /**
   * Formats a date range that spans across different years.
   *
   * @param start The start date of the range.
   * @param end The end date of the range.
   * @returns A formatted date and time range string for different years (e.g., "December 31, 2023 @ 10 am to January 1, 2024 @ 3 pm").
   */
  private formatDifferentYearRange(start: Date, end: Date): string {
    const startFormatted = format(start, 'MMMM d, yyyy');
    const endFormatted = format(end, 'MMMM d, yyyy');

    const startHasTime = !(
      start.getHours() === 0 &&
      start.getMinutes() === 0 &&
      start.getSeconds() === 0
    );
    const endHasTime = !(
      end.getHours() === 23 &&
      end.getMinutes() === 59 &&
      end.getSeconds() === 59
    );

    const startTime = startHasTime ? ` @ ${this.formatTime(start)}` : '';
    const endTime = endHasTime ? ` @ ${this.formatTime(end)}` : '';

    if (startHasTime && endHasTime) return `${startFormatted}${startTime} to ${endFormatted}${endTime}`;
    else if (startHasTime) return `${startFormatted}${startTime} to ${endFormatted}`;
    else if (endHasTime) return `${startFormatted} to ${endFormatted}${endTime}`;
    else return `${startFormatted} to ${endFormatted}`;
  }

  /**
   * Parses a date string or returns the Date object if already provided.
   *
   * @param date The date to parse, either a Date object or a string.
   * @returns A Date object.
   */
  private ensureDate(date: Date | string): Date {
    return typeof date === 'string' ? new Date(date) : date;
  }
}
