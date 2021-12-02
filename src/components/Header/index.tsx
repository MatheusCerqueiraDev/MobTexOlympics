import { Box, Container, Typography } from "@mui/material";

export function Header() {
  return (
    <Container>
      <Typography variant="h1" color="primary.main" align="center">
        <Box fontFamily="Poppins" padding="26px">
          Welcome to the Mobtex Olympics
        </Box>
      </Typography>
    </Container>
  );
}
