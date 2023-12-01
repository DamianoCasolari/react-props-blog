import { posts } from "../store";
import { AppPost } from "./AppPost";

export function AppPostList() {
  function createPostList() {
    return posts.map((post) => {
      return <AppPost {...post}></AppPost>;
    });
  }

  return (
    <div className="container pt-10 flex flex-wrap">
      {createPostList().length > 0 ? (
        createPostList()
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <div className="card p-4 flex justify-center items-center text-[30px] h-full bg_carbon shadow-black shadow-xl rounded-2xl text-slate-50">
            Nessun post Disponibile
          </div>
        </div>
      )}
    </div>
  );
}
