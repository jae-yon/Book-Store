import { Banner } from "@/models/banner.model";
import { http, HttpResponse } from "msw";

const bannerData: Banner[] = [
  {
    id: 1,
    title: "배너 1 제목",
    description: "Banner 1 description",
    image: "http://picsum.photos/id/11/1200/400",
    url: "http://some.url",
    target: "_blank",
  },
  {
    id: 2,
    title: "배너 2 제목",
    description: "Banner 2 description",
    image: "http://picsum.photos/id/22/1200/400",
    url: "http://some.url",
    target: "_self",
  },
  {
    id: 3,
    title: "배너 3 제목",
    description: "Banner 3 description",
    image: "http://picsum.photos/id/33/1200/400",
    url: "http://some.url",
    target: "_blank",
  },
];

export const banners = http.get("http://localhost:9999/banners", () => {
  return HttpResponse.json(bannerData, {
    status: 200,
  });
});