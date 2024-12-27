import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import environment from 'environments/environment';
import { map, Observable } from 'rxjs';

type FetchEventsByMonthAndYearParams = {
  month: number;
  year: number;
};

@Injectable({
  providedIn: 'root',
})
export default class EventService {
  private http = inject(HttpClient);
  private readonly eventApiURL = `${environment.eventServiceUrl}/api/v1/events`;

  fetchEventsByMonthAndYear(
    params: FetchEventsByMonthAndYearParams
  ): Observable<EventListItem[]> {
    const httpParams = new HttpParams()
      .set('month', params.month)
      .set('year', params.year);

    return this.http.get<any[]>(`${this.eventApiURL}`, { params: httpParams })
      .pipe(map((eventsData) => eventsData.map(EventListItem.fromJson)));
  }
}
