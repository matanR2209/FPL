import { SLResponse } from "./common";

export default class ResponseFactory {
    public static successfullResponse = <T>(
        data?: T,
        message?: string
    ): SLResponse<T> => ({
        ok: true,
        data,
        message
    });

    public static failureResponse = <T>(
        message?: string,
        errorCode?: number | string,
        data?: T
    ): SLResponse<T> => {
        const error = {
            ok: false,
            error: {
                code: errorCode,
                message
            },
            data
        };

        if (data) {
            error.data = data;
        }

        return error;
    };
}
