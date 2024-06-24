
const getDataFromAPI = async(address) =>  {
  const url = await fetch(`${address}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }    
  })
  const response = await url.json();
  return response;  
}

export default getDataFromAPI;