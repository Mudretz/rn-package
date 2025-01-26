import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

export const FetchData = () => {
  const [data, setData] = useState<
    {
      id: string;
      url: string;
      title: string;
      description: string;
      user: string;
    }[]
  >([]);
  useEffect(() => {
    axios
      .get<{
        photos: {
          id: string;
          url: string;
          title: string;
          description: string;
          user: string;
        }[];
      }>("https://api.slingacademy.com/v1/sample-data/photos")
      .then((data) => {
        setData(data.data.photos);
      });
  }, []);
  return (
    <View>
      {data.map((item) => (
        <Text>{item.title}</Text>
      ))}
    </View>
  );
};
