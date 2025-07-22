import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { ImageProperties } from "../components/GifGrid";

export const useFetchGifs = ({ category }: { category: string }) => {
  const [images, setImages] = useState<ImageProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
