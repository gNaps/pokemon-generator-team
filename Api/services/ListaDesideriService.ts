import useSWR, { mutate } from "swr"
import { ListaDesideri } from "../../models/ListaDesideri"

const getAll = () => {
    // const fetcher = (url: string) => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${cookie.get('jwt')}`, 
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(res => res.json())
      
    //   const { data: listadesideri, error } = useSWR(`${API_URL}/desideriolists`, fetcher)
}

const createNewLista = (newLista: ListaDesideri) => {
    // const request = {
    //     method: 'POST',
    //     body: JSON.stringify(newDesiderio),
    //     headers: {
    //         'Authorization': `Bearer ${cookie.get('jwt')}`, 
    //         'Content-Type': 'application/json'
    //     }
    // };

    // const response_res = await fetch(`${API_URL}/desiderioitems/${list.id}`, request)
    // const response = await response_res.json()
    
    // if(response.statusCode) {
    //     setErrorAlert(true)
    //     setMessage(response.message)

    //     setTimeout(() => {
    //         setErrorAlert(false)
    //         setMessage('')
    //     }, 1500);
    // } else {
    //     setSuccessAlert(true)
    //     setShowInsert(false)
    //     setSuccessMessage("Your desiderio was registry succesfully.")

    //     setTimeout(() => {
    //         setSuccessAlert(false)
    //         setSuccessMessage("");
    //     }, 1500)
        
    //     const newDesiderioitems = [ ... list.desiderioitems ]
    //     newDesiderioitems.push(response)
    //     mutate(`${API_URL}/desideriolists/?slug=${slug}`, { ...list, desiderioitems: newDesiderioitems })
    // }

    return false;
}

export const listaDesideriService = {
    getAll,
    createNewLista
}



