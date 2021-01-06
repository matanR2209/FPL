export interface SLResponse<T = any> {
    ok: boolean;
    error?: {
        code?: number | string;
        message?: string;
    };
    data?: T;
    message?: string;
}