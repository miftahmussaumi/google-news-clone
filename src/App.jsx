
import {useEffect, useState} from "react"
import Navbar from "./components/navbar"
import Menubar from "./components/Menubar"
import axios from "axios"

function App() {
  const [news,setNews] = useState([]);
  console.log('news: ', news);

  useEffect(() => {
    getNews();
  },[]);

  const getNews = async () => {
    try {
      const reponse = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-07-28&sortBy=publishedAt&apiKey=5ab960ca3f2b4eb4b8c2fef17221f5e2');
      setNews(reponse.data.articles);
    } catch (error) {
      console.error(error);
    }
  }

  // const [count, setCount] = useState(0)
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/> 
      <Menubar/>
      <div className="pt-5 pb-28">
        <div className="bg-white p-4 rounded-lg mx-28">
          {news.map((item,index) => (
            <a key={index} href={item?.url} target="_blank">
              <div className="flex space-x-4 p-4 border-b border-gray-300">
                <img src={item?.urlToImage} alt={item?.title} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-lg">{item?.title}</h3>
                  <p className="text-sm text-gray-600">{item?.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
