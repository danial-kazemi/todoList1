

const addDataToApi = async(address, data) => {
    const response = await fetch(address, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({title: data})
    });
        const jsoneResponse = await response.json();
        return jsoneResponse;
}

export default addDataToApi