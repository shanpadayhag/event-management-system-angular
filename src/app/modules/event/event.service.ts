import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import environment from 'environments/environment';
import { map, Observable } from 'rxjs';

type FetchEventByMonthAndYearParams = {
  month: number;
  year: number;
};

@Injectable({
  providedIn: 'root',
})
export default class EventService {
  private http = inject(HttpClient);

  fetchEventByMonthAndYear(
    params: FetchEventByMonthAndYearParams
  ): Observable<EventListItem[]> {
    return this.http.get<any[]>(`${environment.eventServiceUrl}/api/v1/events?month=${params.month}&year=${params.year}`)
      .pipe(map((eventsData) => {
        return eventsData.map(EventListItem.fromJson);
      }));
  }
}
