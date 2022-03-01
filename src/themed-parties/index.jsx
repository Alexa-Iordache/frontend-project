import React from "react";
import { useState } from "react";
import './themed-parties.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { AppBar } from "@mui/material";
import Halloween from "../halloween";
import Christmas from "../christmas";
import FirstDec from "../1dec";
import PjParty from "../pjParty";
import DiscoParty from "../discoParty";
import FirstMarch from "../1march";
import MagicShow from "../magicShow";

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
                    style={{ backgroundColor: "rgb(207, 174, 221)", display: "flex", flexFlow: "row", paddingLeft: 20}}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value={0} label="Mos Craciun si Mos Nicolae" className="themed-parties__tab" />
                        <Tab value={1} label="Halloween" className="themed-parties__tab"/>
                        <Tab value={2} label="1 Decembrie"className="themed-parties__tab"/>
                        <Tab value={3} label="Petrecere in pijamale"className="themed-parties__tab"/>
                        <Tab value={4} label="Petrecere disco"className="themed-parties__tab"/>
                        <Tab value={5} label="1 Martie"className="themed-parties__tab"/>
                        <Tab value={6} label="Spectacol de magie"className="themed-parties__tab"/>
                    </Tabs>
                </AppBar>
                {value === 0 ? <Christmas/> : null}
                {value === 1 ? <Halloween/> : null}
                {value === 2 ? <FirstDec/> : null}
                {value === 3 ? <PjParty/> : null}
                {value === 4 ? <DiscoParty/> : null}
                {value === 5 ? <FirstMarch/> : null}
                {value === 6 ? <MagicShow/> : null}
            </Box>
        </div>
    );
}

export default ThemedParties;