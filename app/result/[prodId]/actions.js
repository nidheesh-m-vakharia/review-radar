"use server";
import axios from "axios";
import jsdom from "jsdom";
export async function getProductUrl(prodId) {
  return `https://www.amazon.com/gp/product/ajax/ref=dp_aod_pn?asin=${prodId}&m=&qid=1719979792&smid=&sourcecustomerorglistid=&sourcecustomerorglistitemid=&sr=8-7&pc=dp&experienceId=aodAjaxMain`;
}
export async function getProductName(prodId) {
  return await getProductUrl(prodId)
    .then((res) =>
      axios.get(res, {
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          Host: "www.amazon.com",
          "User-Agen":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          Pragma: "no-cache",
          TE: "Trailers",
          "Upgrade-Insecure-Requests": 1,
        },
      }),
    )
    .then((res) => {
      const { JSDOM } = jsdom;
      const dom = new JSDOM(res.data);
      return dom.window.document.querySelector("#aod-asin-title-text")
        .textContent;
    });
}
