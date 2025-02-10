import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
