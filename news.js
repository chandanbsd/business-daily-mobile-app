import { NEWS_API_KEY } from "@env";

const url =
  "https://newsapi.org/v2/everything?q=microsoft&apiKey=" +
  "28a52b771dcf4c6684e0736ccee2b882";
console.log(url);

export async function getNews(companyName) {
  console.log(companyName);
  let result = await fetch(
    "https://newsapi.org/v2/everything?q=" +
      companyName +
      "&apiKey=" +
      "28a52b771dcf4c6684e0736ccee2b882"
  ).then((response) => response.json());
  return result.articles;
}
