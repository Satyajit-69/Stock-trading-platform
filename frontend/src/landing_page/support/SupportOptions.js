import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SupportOptions({ heading, options = [] }) {
  return (
    <Accordion 
      className="m-3"
      sx={{
        borderRadius: '16px !important',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        '&:before': {
          display: 'none',
        },
        '&:hover': {
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transform: 'translateY(-4px)',
          borderColor: '#387ED1',
        },
        '&.Mui-expanded': {
          margin: '12px',
          boxShadow: '0 20px 25px -5px rgba(56, 126, 209, 0.15), 0 10px 10px -5px rgba(56, 126, 209, 0.1)',
        }
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon 
            sx={{ 
              color: '#387ED1',
              transition: 'transform 0.3s ease',
            }} 
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
          borderRadius: '16px',
          minHeight: '72px',
          '&:hover': {
            background: 'linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)',
          },
          '& .MuiAccordionSummary-content': {
            margin: '20px 0',
          },
          '&.Mui-expanded': {
            borderBottom: '2px solid #e0f2fe',
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '6px',
              height: '32px',
              background: 'linear-gradient(180deg, #387ED1 0%, #60a5fa 100%)',
              borderRadius: '4px',
            }}
          />
          <h5 
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: '700',
              fontSize: '19px',
              color: '#1e293b',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {heading}
          </h5>
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: '24px 28px',
          backgroundColor: '#ffffff',
        }}
      >
        <ul 
          style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {options.map((item, index) => (
            <li 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                marginBottom: index !== options.length - 1 ? '18px' : '0',
                padding: '12px',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f9ff';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <CheckCircleIcon 
                sx={{ 
                  color: '#387ED1',
                  fontSize: '22px',
                  marginTop: '1px',
                  flexShrink: 0,
                  filter: 'drop-shadow(0 2px 4px rgba(56, 126, 209, 0.2))',
                }} 
              />
              <span
                style={{
                  color: '#334155',
                  fontSize: '15px',
                  fontFamily: 'Nunito, sans-serif',
                  lineHeight: '1.7',
                  fontWeight: '500',
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default SupportOptions;