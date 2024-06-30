import { ApiService } from "../Api.service";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
    }),

    createContact: builder.mutation({
      query: (FormData) => ({
        url: "/contact",
        method: "POST",
        body: FormData,
      }),
    }),

    editContact: builder.mutation({
        query: (id,FormData) => ({
          url: `/contact/${id}`,
          method: "PUT",
          body: FormData,
        }),
      }),
  }),
});

export const { useGetContactQuery, useCreateContactMutation, useEditContactMutation } = contactEndpoint;

/*
query => GET
mutate => PUT,PATCH,DELETE,POST
*/
