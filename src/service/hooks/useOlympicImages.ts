import { useQuery } from "react-query";
import api from "../../service/api";

type OlympicImages = {
  id: string;
  name: string;
  img: string;
};

export async function getOlympicImages(): Promise<OlympicImages[]> {
  const { data } = await api.get("teste");
  const olympicImages = data.data.map((olympicImages: OlympicImages) => {
    return {
      id: olympicImages.id,
      name: olympicImages.name,
      img: olympicImages.img,
    };
  });
  return olympicImages;
}

export function useOlympicImages() {
  return useQuery("olympicImages", getOlympicImages, {
    staleTime: 1000 * 5,
  });
}
