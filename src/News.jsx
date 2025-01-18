import React from "react";
import {useState , useEffect} from "react"
const News = () => {
  const [news, setNews] = useState([]);
  const [ newsCount ,setNewsCount] = useState(10)

  async function fetchNews() {
    const url = `https://crypto-news16.p.rapidapi.com/news/top/${newsCount}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5746b3ee16msh8ad6ef3a1df473fp1850acjsn64a08673d84a",
        "x-rapidapi-host": "crypto-news16.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
   
      setNews(result)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
   
    fetchNews()
  } , [newsCount])

  return (
    <>
    <h1>Latest Crypto News</h1>
    <div className="newsContainer">
      


      {news && news.map((item) => (
        <div key={item.title}>
             <img className="thumbnail" src={item.thumbnail} alt="" />
            <p><strong>{item.title}</strong></p>
          
            <p>{item.date}</p>
            <a target="_blank" href={item.url}>Read more</a>
           
        </div>
      )) }
    
    </div>
    <button className="news-count" onClick={() => setNewsCount((prev) => prev + 10)}>Show more</button>
    </>
    
  );
};

export default News;
