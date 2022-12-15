import React, { useState, useEffect } from "react";
import axios from "axios"
const PlantContext = React.createContext();


function PlantContextProvider(props) {
    const [authToken, setAuthToken] = useState('');
    const [collection, setCollection] = useState([]);
    const [newComment, setNewComment] = useState({});

    function addNewComment(plantId) {
        axios.put(``)
    
    }
    
    // const soil_humidity_selected = false
    // const min = 1
    // const max = 3
    // const queryString = ""

    useEffect(() => {
        // Request authToken from server-side
        const getAuthToken = async () => {
            axios.get('/auth')
                .then(res => setAuthToken(res.data.token))
                .catch(err => console.log(err));
        };
        getAuthToken();

    },[]);

    useEffect(() => {
        function getAll() { 
            const api = 'https://trefle.io/api/v1/plants'
            axios({
                method: 'get',
                url: api,
                withCredentials: false,
                params: {
                    token: authToken,
                },
            })
                .then(res => console.log(res.body))
                .catch(error => console.log(error))
        }
        // Condition true if string is not empty
        if(authToken) { getAll()};
    }, [authToken]);

    return (
        <PlantContext.Provider value={{
            collection:collection,
            newComment: newComment,
            setNewComment: setNewComment,
            addNewComment: addNewComment
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}


export { PlantContextProvider, PlantContext };