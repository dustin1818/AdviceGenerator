const Card = ({ quote,setGenerate }) => {
    const number = quote.slip?.id
    const advice = quote.slip?.advice
    const generateQuote = () => {
        setGenerate(quote)
    }
  return (
    <div className="bg-zinc-900 p-12 px-6 w-96 text-center shadow-2xl rounded-md mt-10">
      <div className="mb-3">
        <p className="uppercasemb-3 text-slate-300 text-md mb-3">
          Advice <span className="font-semibold">#{number}</span>
        </p>
        <h2 className="text-slate-100 text-3xl">
            {advice}</h2>
      </div>
      <hr className="my-6 border-1" />
      <button className="bg-zinc-950 text-slate-200 rounded p-3 font-bold " onClick={generateQuote}  >
        Generate
      </button>
    </div>
  );
};

export default Card;
