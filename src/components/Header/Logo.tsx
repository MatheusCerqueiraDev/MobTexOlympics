import { Box, Stack } from "@mui/material";

export function Logo() {
  return (
    <Box>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={5}
      >
        <img src="/logo.svg" alt="Mobtex Logo" />

        <img src="/olympic.png" alt="Olympic Logo" />
      </Stack>
    </Box>
  );
}
