import xior from "xior";
import cachePlugin from "xior/plugins/cache";
import dedupePlugin from "xior/plugins/dedupe";

export const http = xior.create({
  //   baseURL: "api", // '/api'
  credentials: "include",
});

http.plugins.use(dedupePlugin({ enableDedupe: false }));
http.plugins.use(
  cachePlugin({
    enableCache: false,
    cacheItems: 1000,
  }),
);
