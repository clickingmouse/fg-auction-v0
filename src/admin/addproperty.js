import React, {useState} from "react";

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import API, {graphqlOperation} from '@aws-amplify/api'
import { listPropertys, createProperty } from "../graphql/mutations";
// get fields and call graphql
const AddProperty = ()=>{
    const classes = useStyles();
    const [propertyInfo, setPropertyInfo] = useState({
        prn:'',
        codeName:'',
        district:'',
        location:'',
        size:'',
        bedrooms:'',
        bathrooms:'',
        price:'',
        residential:false,
        publicHousing:false,
        commercial:false,
        industrial:false,
        parking:'',


    })

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {

        const value = event.target.type === "checkbox"? event.target.checked : event.target.value
        console.log(event.target.name)
        setPropertyInfo({ ...propertyInfo, [event.target.name]: value });
      };
    
      const { residential, commercial, publicHousing,industrial } = state;
      const error = [residential, commercial, publicHousing,industrial].filter((v) => v).length !== 2;
      /////////////
      const [value, setValue] = React.useState('female');

      const handlePropertyTypeChange = (event) => {
        setValue(event.target.value);
      };

      const handleSubmit = (event) =>{
          event.preventDefault();
          console.log(propertyInfo)
      }

      const addDummy = async ()=>{
        await API.graphql(graphqlOperation(createProperty,{input:dummyData})).then((response)=>{
            console.log(response)
      })
    }
    return(
        <div className={classes.root}>
        Add new property
        
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>

        <Grid item xs={2}>

        <TextField id="codename" label="codeName" helperText="PRN" variant="filled"/>
        </Grid>

        <Grid item xs={2}>
        <TextField id="prn" name='prn' label="PRN" helperText="PRN" variant="filled" fullWidth onChange={handleChange}/>
        </Grid>
        <Grid item xs={2}>
        <TextField id="location" label="location" helperText="PRN" variant="filled"/></Grid>



        <Grid item xs={2}>
        <TextField id="district" label="district" helperText="PRN" variant="filled"/>
        </Grid>

        <Grid item xs={2}>
        <TextField id="price" label="price" helperText="PRN" variant="filled"/>
</Grid>
        
<Grid item xs={2}>
        <FormControl className={classes.selectControl}>
        <InputLabel id="bedrooms">Bedrooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={propertyInfo.bedrooms}
          onChange={handleChange}
          name='bedrooms'
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl >
      </Grid>
      <Grid item xs={2}>
      <FormControl className={classes.selectControl}>
        <InputLabel id="bathrooms">Bathrooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={propertyInfo.bathrooms}
          onChange={handleChange}
          name='bathrooms'
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>

        </Select>
      </FormControl>
      </Grid>
     
        


        
        


    <FormControl component="fieldset">
      <FormLabel component="legend">PropertyType</FormLabel>
      <RadioGroup row aria-label="propertyType" name="propertyType" value={value} onChange={handlePropertyTypeChange}>
        <FormControlLabel value="residential" labelPlacement="bottom" control={<Radio />} label="Residential" />
        <FormControlLabel value="publicHousing" labelPlacement="bottom" control={<Radio />} label="Public Housing" />
        <FormControlLabel value="commercial" labelPlacement="bottom" control={<Radio />} label="Commercial" />
        <FormControlLabel value="industrial" labelPlacement="bottom" control={<Radio />} label="Industrial" />
       
      </RadioGroup>
    </FormControl>
   
</Grid>
<Button variant="contained">Add</Button>
<Button variant="contained">Update</Button>
<Button variant="contained" onClick={addDummy}>Add dummy</Button>
<Button variant="contained">Update dummy</Button>
    </form  >
       </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    selectControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


export default AddProperty


const dummyData = {
    prn:'prn-dummy-0',
    codeName:'dummy 0',
    district:'',
    location:'dummy land',
    size:'50',
    bedrooms:'0',
    bathrooms:'0',
    price:'1000000',
    residential:true,
    publicHousing:true,
    commercial:false,
    industrial:false,
    parking:'',
}