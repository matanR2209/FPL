export interface Data {
    web_name: string;
    now_cost: number;
    selected_by_percent: string;
    value_season: string;
    total_points: number;
}

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export type Order = 'asc' | 'desc';

export interface IPaginationControl {
    rowsPerPage: number
}