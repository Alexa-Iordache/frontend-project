import React from "react";
import { useState } from "react";
import './themed-parties.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { AppBar } from "@mui/material";
import Halloween from "../halloween";
import Christmas from "../christmas";

function ThemedParties() {
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }
    return (
        <div className="themed-parties__main-container">
            <Box sx={{ width: '100%'}}>
                <AppBar position="static"
                    className="themed-parties__appbar"
                    style={{ backgroundColor: "rgb(207, 174, 221)", display: "flex", flexFlow: "row", paddingLeft: 20 }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value={0} label="Craciun" className="themed-parties__tab"/>
                        <Tab value={1} label="Halloween" className="themed-parties__tab"/>
                        <Tab value={2} label="Item 3"className="themed-parties__tab" />
                    </Tabs>
                </AppBar>
                {value === 0 ? <Christmas/> : null}
                {value === 1 ? <Halloween/> : null}
            </Box>
        </div>
    );
}

export default ThemedParties;