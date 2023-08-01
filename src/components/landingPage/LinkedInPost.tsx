import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
declare const window: Window &
  typeof globalThis & {
    curator_embed: any;
  };
export default function LinkedInPosts() {
  useEffect(() => {
    // Load the Curator.io script
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/72190a90-6bf4-446d-a2c3-8c4b42d91c64.js";
    document.body.appendChild(script);

    // Load the Instagram post using the Instagram Basic Display API
    const accessToken = "your_access_token";
    const mediaId = "your_media_id";
    fetch(
      `https://graph.instagram.com/${mediaId}?fields=id,media_type,media_url,caption&access_token=${accessToken}`
    )
      .then((response: any) => response.json())
      .then((data) => {
        // Embed the Instagram post using Curator.io
        window.curator_embed.createPost({
          post_id: data.id,
          post_url: data.media_url,
          post_caption: data.caption,
          post_type: data.media_type,
          provider: "instagram",
          layout: "default-feed-layout",
          style: "masonry",
          size: "large",
          show_author: false,
          show_date: false,
          show_likes: false,
          show_comments: false,
          show_caption: true,
        });
      });
  }, []);

  return (
    <>
      <section className="w-full main-container  my-24">
        <h2 className="text-bold text-4xl font-bold w-full text-center my-4 uppercase">
          our <span className="text-red-600"> posts</span>
        </h2>
        <div
          id="curator-feed-default-feed-layout"
          className="main-container "
        ></div>
      </section>
    </>
  );
}
