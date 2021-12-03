import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Typography,
} from "@mui/material";
import { useOlympicImages } from "../../service/hooks/useOlympicImages";

export function Body() {
  const { data = [] } = useOlympicImages();

  return (
    <Container>
      <Typography variant="h2" color="primary.main" align="center">
        <Box fontFamily="Roboto" padding="20px">
          Some memories of our olympics
        </Box>

        <Box sx={{ width: "90vw", height: "100vh" }}>
          <ImageList cols={3} gap={8}>
            {data.map((data, index) => (
              <ImageListItem key={index}>
                <img
                  onError={(event: any) => {
                    event.target.src =
                      "https://randomwordgenerator.com/img/picture-generator/57e9dd464a5aa414f1dc8460962e33791c3ad6e04e50744172297bd59445c7_640.jpg";
                  }}
                  src={`${data.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${data.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={data.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={data.name}
                  subtitle={data.id}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${data.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Pagination count={3} shape="rounded" />
        </Box>
      </Typography>
    </Container>
  );
}
