import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../service/api";

interface PostsProps {
  id: string;
  name: string;
  img: string;
}

export function Body() {
  const [post, setPost] = useState([]);
  function HandlePesquisa() {
    useEffect(() => {
      api
        .get("/teste")
        .then((response) => setPost(response.data))
        .catch((err) => {
          console.error("Erro na requisição dos dados" + err);
        });
    }, []);
  }
  return (
    <Container>
      <Typography variant="h2" color="primary.main" align="center">
        <Box fontFamily="Roboto" padding="26px">
          Some memories from our Olympic
        </Box>
        {post.map(data)}
      </Typography>
    </Container>
  );
}
