export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '0b6d508a99mshcc234e5560b861bp120642jsn08e243b8cd70',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, exerciseOptions)=>{
    const response = await fetch(url, exerciseOptions);
    const data = await response.json();

    return data ;
}