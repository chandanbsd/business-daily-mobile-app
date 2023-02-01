import { NEWS_API_KEY } from "@env";

const url =
  "https://newsapi.org/v2/everything?q=microsoft&apiKey=" +
  "***REMOVED***";
console.log(url);

export async function getNews(companyName) {
  console.log(companyName);
  let result = await fetch(
    "https://newsapi.org/v2/everything?q=" +
      companyName +
      "&apiKey=" +
      "***REMOVED***"
  ).then((response) => response.json());
  return result.articles;
}
