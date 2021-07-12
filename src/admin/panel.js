import React, {useEffect, useState} from "react";
import API, {graphqlOperation} from '@aws-amplify/api'
import { listPropertys } from "../graphql/queries";
import Container from '@material-ui/core/Container';
//imports {listPropertys}
//import ReactDOM from 'react-dom';
// fetch properties and auctions
//list properties and auction results

//new property drop down
import AddProperty from "./addproperty";
// new auction drop down

const Panel = () => {
    const [isLoadingProperties, setIsLoadingProperties] = useState(true)

    useEffect(()=>{
        fetchProperties();
    },[]);

    const fetchProperties = async ()=>{

        try{
            setIsLoadingProperties(true)
            await API.graphql(graphqlOperation(listPropertys)).then((response)=>{
                console.log(response)

            })
            
        } catch (error){ console.log(error)}
    }
    

    return(
        <Container>
        <div>admin panel
            <hr/>
            <AddProperty />
        </div>
        </Container>
    )
}

export default Panel



