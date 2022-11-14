import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { bindActionCreators } from "@reduxjs/toolkit";
import { Component } from "react";


// const dispatch = useDispatch();

// const {add, calculate } = bindActionCreators(surfaceCalculatorActions, dispatch);

// const state = useSelector((state) => state);

// interface Props {
// }

export default function BoltConstructor(){
          return  <>
                <h4>BoltBuilder</h4>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <><TextField
                        type="number"
                        // hiddenLabel
                        // id="filled-hidden-label-small"
                        defaultValue="0"
                        label="Diameter"
                        variant="standard"
                        size="medium"
                        autoComplete="off"
                        value="0" />
                        <TextField
                            // hiddenLabel
                            // id="filled-hidden-label-small"
                            type="number"

                            label="Length"
                            defaultValue="0"
                            variant="standard"
                            value="0"
                            autoComplete="off" />
                        <Button variant="contained">Add</Button>
                    </>


                </Box>
            </>
        }
                



