import React from "react";
import { useRouter } from "next/router";

export default function article() {
  const router = useRouter();
  const { article } = router.query;

  return (
    <div>
      <h1>Blog Title</h1>
      <h2>{article}</h2>
    </div>
  );
}
