import { useQuery } from "@tanstack/react-query";
import { api } from "./services/api";

type PostProps = {
  userId: number;
  title: string;
  id: number;
};

async function getPosts() {
  const res = await api.get<PostProps[] | null>("/posts");
  return res.data;
}

function App() {
  const { data, isLoading: loading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div>
      <h1>hello</h1>

      {loading
        ? "Carregando..."
        : data?.map((post) => (
            <ul key={post.id}>
              <li>{post.title}</li>
            </ul>
          ))}
    </div>
  );
}

export default App;
