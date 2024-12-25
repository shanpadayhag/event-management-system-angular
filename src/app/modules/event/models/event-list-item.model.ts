export default class EventListItem {
  public id: number;
  public title: string;
  public start: Date;
  public end: Date;
  public color: string;

  constructor(data: {
    id: number;
    title: string;
    start: Date;
    end: Date;
    color?: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.start = data.start;
    this.end = data.end;
    this.color = data.color || 'e11d48';
  }

  static fromJson(json: any): EventListItem {
    return new EventListItem({
      id: json.id,
      title: json.title,
      start: new Date(json.start),
      end: new Date(json.end),
      color: json.color || 'e11d48',
    });
  }
}
