import { Api, RequestParams } from "@/api/api";
import { apiUrl } from "@/constant/env";

export const request = new Api({
	baseUrl: apiUrl,
	securityWorker: async (token: string | null) =>
		({
			headers: {
				Authorization: token ? `Bearer ${token}` : "",
			},
		}) as RequestParams,
});

export const setApiAccessToken = (token: string | null) => {
	request.setSecurityData(token);
};
