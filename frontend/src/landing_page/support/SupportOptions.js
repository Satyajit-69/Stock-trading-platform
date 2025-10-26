import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SupportOptions({ heading, options = [] }) {
  return (
    <Accordion className="m-3 ">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        
      >
        <h5 style={{fontFamily : "Nunito",   fontWeight: '500'}}>{heading}</h5>
      </AccordionSummary>
      <AccordionDetails>
        <ul style={{ color:'#387ED1' }}>
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default SupportOptions;
