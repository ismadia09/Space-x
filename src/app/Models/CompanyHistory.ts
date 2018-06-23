export interface Links {
    reddit: string;
    article: string;
    wikipedia: string;
}

export interface CompanyHistory {
    title: string;
    event_date_utc: Date;
    event_date_unix: number;
    flight_number?: number;
    details: string;
    links: Links;
}