import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


//   code of api from rapid api

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//   params: {
//     url: 'https://time.com/6266679/musk-ai-open-letter/',
//     length: '3'
//   },
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '8a7a7af0eemsh98edfc878e0e981p151ce5jsn0623f087321b',
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

  ///////////////////////////////////////


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-HOST', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        } 
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery  } = articleApi;