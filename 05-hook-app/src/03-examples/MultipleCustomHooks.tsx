import { LoadingQuote, Quote } from "./components";
import { useCounter, useFetch } from "../hooks";

type QuotesResponse = {
    text: string;
    author: string;
}

export const MultipleCustomHooks = () => {

    const {data, isLoading} = useFetch<QuotesResponse>("https://type.fit/api/quotes");
    
    const{counter, increment, decrement} = useCounter(0);
    
    const {text = "", author = ""} = data?.[counter] ?? {};
    

    return (
    <>
        <h1>Random Famous Quotes</h1>
        <hr />

        {
            isLoading
            ?  <LoadingQuote />
            :  <Quote text = {text} author = {author}/>
        }

        <button 
            className="btn btn-primary"
            disabled={isLoading || counter === 15} 
            onClick={()=>increment() }>
            Next quote
        </button>

        <button 
            className="btn btn-primary"
            disabled={isLoading || counter === 0} 
            onClick={()=>decrement() }>
            Previous quote
        </button>


    </>
  )
}
