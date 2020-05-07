import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/Emart.css'


// const useStyles = makeStyles({
//   root: {
//     width: 50,
    
//   },
// });



export default function RangeSlider() {
//   const className = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      
      <Slider
        className="slider"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={500}
      /><br />
      <p>${value[0]} - ${value[1]}</p>
       
     

    </div>
  );
}
