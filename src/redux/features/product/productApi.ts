import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ sort, page }: { sort: string; page: string }) => {
                const params = new URLSearchParams();
                if (sort) {
                    params.append("sort", sort);
                }

                if (page) {
                    params.append("page", page);
                }

                params.append("limit", "2");

                return {
                    url: "products",
                    method: "GET",
                    params: params,
                };
            },
        }),
    }),
});

export default productApi;
