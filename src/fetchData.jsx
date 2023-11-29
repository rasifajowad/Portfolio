import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

// client
//   .getEntries({ content_type: "projects" })
//   .then((response) => console.log(response.items));

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const data = response.items?.map((item) => {
        const { github, image, text, title, url } = item.fields;
        const id = item.sys.id;
        const img = image.fields.file.url;
        return { id, img, github, text, title, url };
      });
      console.log(data);
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects };
};
