import { styled } from "@mui/system";
import { Button } from "@mui/material";

const CunstomButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px'
  },
}));

export default CunstomButton;