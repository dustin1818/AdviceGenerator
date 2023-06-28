import { useEffect,useState } from "react";
import Card from "./Card"

function App() {
  const [quote,setQuote] = useState('');
  const [generate, setGenerate] = useState('');

  useEffect(() => {
    const fetchQuote = async ()  => {
      try{
        const API_URL = 'https://api.adviceslip.com/advice';
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Data fetched failed..');
        const data = await response.json();
        setQuote(data);
      }catch(err){
        console.log(err);
      }
    }
    fetchQuote();
  },[generate])


  return (
    <div className='App bg-zinc-950 h-fit min-h-screen flex flex-col items-center justify-center'>
    <h1 className="mt-3 text-3xl text-center font-bold  ">Advice Generator</h1>
    <Card 
    quote = {quote}
    setQuote = {setQuote}
    generate={generate}
    setGenerate={setGenerate}
    />

    </div>
  )
}

export default App
