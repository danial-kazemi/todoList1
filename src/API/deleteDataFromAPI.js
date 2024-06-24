
const deleteDataFromAPI= async (address, id) => {
    await fetch(`${address}/${id}`,{
        method: "DELETE",
    })
}

export default deleteDataFromAPI