import React from "react";
import {Storage} from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const AdminListProperty = ({properties}) =>{
console.log(properties)
const propertyList =  properties.map(  (p, idx)=>{
/*    const coverFilePath = p.cover
    try{
        const fileAccessURL = await Storage.get(coverFilePath, {expires:60})
        console.log('access url', fileAccessURL)

    }catch(error){ console.log('error accessing file ', error)}
*/
    return(
    <ListItem key={`p${idx}`}>
        {p.id} {p.prn} {p.location} {p.size}ft {p.bedrooms}bedrooms {p.bathrooms}bathrooms {p.price}HKD
        </ListItem>)
})

    return(
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Properties 
        </ListSubheader>}>
            {propertyList}
    
    </List >
    )
}


export default AdminListProperty


