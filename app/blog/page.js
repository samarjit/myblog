"use client";
import { useState } from "react";
import { allBlogs } from 'contentlayer/generated'
import ListLayout from "@/layouts/ListLayoutWithTags";
import { sortPosts } from "pliny/utils/contentlayer";

export default function Page() {
    const [apiResp, setApiResp] =  useState();
    const posts = sortPosts(allBlogs); // .sort((a, b) => new Date(b.date) - new Date(a.date));
    const initialDisplayPosts = allBlogs.slice(0, 5);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / 5),
      }
    async function callApi() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .catch(error => console.error(error));
        setApiResp (data);
    }
    return (
        <div>
            <h1>Blog Page</h1>
            <button onClick={() => callApi()}>Call API</button>
            {apiResp && <pre>{JSON.stringify(apiResp, null, 2)}</pre>}
            <ListLayout
                  posts={posts}
                  initialDisplayPosts={initialDisplayPosts}
                  pagination={pagination}
                  title="All Posts"
            />
        </div>
    );
}