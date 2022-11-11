import { AddShoppingCartRounded } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { render } from "@testing-library/react";
import { Component } from "react";
import BoltModel from "../models/bolt-model";
import CylinderModel from "../models/cylinder-model";
import { Shape } from "../models/Shape";



class Bolts{
  private bolt: BoltModel = new BoltModel();
  

  render(){
    <Container maxWidth="sm">
      <h1>Bolts</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
         {this.bolt.getShape().map((item:CylinderModel) => 
        <><TextField
             type="number"
             // hiddenLabel
             // id="filled-hidden-label-small"
             defaultValue="0"
             label="Diameter"
             variant="standard"
             size="medium"
             autoComplete="off" value={item.diameter} />
            <TextField
               // hiddenLabel
               // id="filled-hidden-label-small"
               type="number"

               label="Length"
               defaultValue="0"
               variant="standard"
               value={item.height}
               autoComplete="off" />
               <Button variant="contained" onClick={this.addShape}>Add</Button>
               </>
         )
        }
      </Box>
      <Button variant="outlined">Calculate</Button>
    </Container>;
  
  
}
  addShape() {
    console.log("HAHA");
return true;
  }
}
    

export default Bolts;
