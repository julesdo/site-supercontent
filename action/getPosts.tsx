
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/posts`;

export interface Post {
    url: string | undefined;
    createdAt: string | undefined;
    id: number;
    title: string;
    content: string;
    image:  {
        url: string;
    }[];
}


const getPosts = async (): Promise<Post[]> => {
  const url = qs.stringifyUrl({
    url: URL,
  });

  const res = await fetch(url);

  return res.json();
};

export default getPosts;
