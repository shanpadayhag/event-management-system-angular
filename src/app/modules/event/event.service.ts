import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import DateService from '@app/core/services/date.service';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import environment from 'environments/environment';
import { map, Observable } from 'rxjs';

type FetchEventsByMonthAndYearParams = {
  month: number;
  year: number;
};

type StoreEventParams = {
  title: string;
  start: Date;
  end: Date;
  color: string;
};

type GetEventDetailsParams = {
  id: number;
};

type UpdateEventParams = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  color: string;
};

@Injectable({
  providedIn: 'root',
})
export default class EventService {
  private http = inject(HttpClient);
  private dateService = inject(DateService);
  private readonly eventApiURL = `${environment.eventServiceUrl}/api/v1/events`;

  getEventsByMonthAndYear(
    params: FetchEventsByMonthAndYearParams
  ): Observable<EventListItem[]> {
    const httpParams = new HttpParams()
      .set('month', params.month)
      .set('year', params.year);

    return this.http.get<any[]>(`${this.eventApiURL}`, { params: httpParams })
      .pipe(map((eventsData) => eventsData.map(EventListItem.fromJson)));
  }

  storeEvent(params: StoreEventParams) {
    return this.http.post(`${this.eventApiURL}`, {
      title: params.title,
      start: this.dateService.sortableFormat(params.start),
      end: this.dateService.sortableFormat(params.end),
      color: params.color,
    }, { headers: { 'Content-Type': 'application/json' } });
  }

  getEventDetails(params: GetEventDetailsParams) {
    return this.http.get(`${this.eventApiURL}/${params.id}`)
      .pipe(map(EventListItem.fromJson));
  }

  updateEvent(params: UpdateEventParams) {
    return this.http.put(`${this.eventApiURL}/${params.id}`, {
      title: params.title,
      start: this.dateService.sortableFormat(params.start),
      end: this.dateService.sortableFormat(params.end),
      color: params.color,
    }, { headers: { 'Content-Type': 'application/json' } });
  }
}
