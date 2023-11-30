import { posts } from "../store";
import { AppPost } from "./AppPost";

export function AppPostList() {
  return (
    <div className="container pt-10 flex flex-wrap">
      {posts.map((post) => {
        return <AppPost {...post}></AppPost>;
      })}
    </div>
  );
}
