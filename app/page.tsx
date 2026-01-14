import Image from "next/image";
import { getPosts, getPostsByUserId } from "./api/post";
import { getID } from "./_lib/id";
import PostsList from "./_components/PostsList";
import BoxPost from "./_components/BoxPost";
import { COLLECTION_TYPE, POSTTYPE } from "./_types/types";
import { createPostAction } from "./actions/Post.actions";
import { getAllCollectionsByUserId, getCollectionById } from "./api/collections";

export default async function Home() {

  const posts: POSTTYPE[] = await getPosts();
  console.log("posts:", posts);
  //const user_posts = await getPostsByUserId();
  //console.log("user_posts:", user_posts);

  const userId = await getID();
  console.log("userId:", userId);

  const user_collections: COLLECTION_TYPE[] = await getAllCollectionsByUserId(userId);
  console.log("user_collections:", user_collections)
  

  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center mx-auto flex flex-col justify-center">
        <BoxPost action={createPostAction} />

        <div className="mx-auto mt-10 ">
          <PostsList posts={posts} userId={userId} collections={user_collections!!} />
        </div>
      </div>
    </div>
  );
}
