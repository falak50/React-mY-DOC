import Country from "./Country";
import useDataFetch from "./useDataFetch";

function Check1() {
    const  { data, isLoading, error } = useDataFetch('https://restcountries.com/v3.1/all?fields=name,flags');
   console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return null; 
    }
    return (
        <div>
        
            <h1>Data fetch By custoom hook  </h1>
            <p>data lenght  {data.length}</p>
            <div>
              {
               data.map((x,i)=>{
               return <Country
               key={i}
               country={x}
               ></Country>
               })
              }
            </div>

           
            
        </div>
    );
}

export default Check1;