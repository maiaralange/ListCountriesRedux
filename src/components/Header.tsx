import { AppBar, Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          backgroundColor: "#22136B"
        }}>
        <Typography variant="h6" align="center" sx={{ marginBottom: 1 }}>
          Country List
        </Typography>
        <Typography variant="caption" align="center" >
          Shows a list of all the countries.
        </Typography>
        <Typography variant="caption" align="center" sx={{ marginBottom: 2 }}>
          Use the inputs below to filter the countries per continent or per currency.
        </Typography>
      </AppBar>
    </Box>
  );
}
