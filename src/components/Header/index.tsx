import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Stack
      alignItems="center"
      bgcolor="#181B23"
      direction="row"
      justifyContent="space-between"
      padding={4}
      spacing={6}
    >
      <Typography variant="h1" color="secondary.main">
        <Box fontFamily="Poppins" padding="10">
          Mobtex Olympics
        </Box>
      </Typography>
      <Logo />
    </Stack>
  );
}
