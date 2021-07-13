import React, {useEffect, useState} from "react";
import API, {graphqlOperation} from '@aws-amplify/api'
import Amplify, {Storage} from 'aws-amplify'
import { listPropertys } from "../graphql/queries";
import Container from '@material-ui/core/Container';
//imports {listPropertys}
//import ReactDOM from 'react-dom';
// fetch properties and auctions
//list properties and auction results

//new property drop down
import AddProperty from "./addproperty";
import AdminListProperty from "./adminListProperty"
// new auction drop down

const Panel = () => {
    const [isLoadingProperties, setIsLoadingProperties] = useState(true)

    const [properties, setProperties] = useState();

    useEffect(()=>{
        fetchProperties();
    },[]);

    const onAddProperty= () =>{
        //useEffect(()=>{
            fetchProperties();
        //},[]);
    } 
    const fetchProperties = async ()=>{

        try{
            setIsLoadingProperties(true)
            await API.graphql(graphqlOperation(listPropertys)).then((response)=>{
                console.log(response)
                let propertiesData = response.data.listPropertys.items
                propertiesData.forEach(async(property)=>{
                    const coverFilePath = property.cover
                    try{
                        const fileAccessURL = await Storage.get(coverFilePath, {expires:60})
                        console.log('access url', fileAccessURL)
                        property.coverUrl = fileAccessURL
                    }catch(error){ 
                        console.log('error accessing file ', error)
                        property.coverUrl = ''
                    
                    }
                        //setProperties(response.data.listPropertys)
                })
                setProperties(propertiesData)
                console.log(propertiesData)
                setIsLoadingProperties(false)

                // get photo here


            })
            
        } catch (error){ console.log(error)}
    }
    

    return(
        <Container>
        <div>admin panel
            <hr/>
            {isLoadingProperties?'':
<AdminListProperty properties={properties}  />
}
            <hr/>
            <AddProperty onAddProperty ={onAddProperty} fetchProperties={fetchProperties}/>
        </div>
        </Container>
    )
}

export default Panel



