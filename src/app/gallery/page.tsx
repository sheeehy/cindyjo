import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { client } from "../lib/sanity";

export const revalidate = 0; // revalidate at most every hour

async function getData() {
  const query = `*[_type == "imagetype"]{
    _id,
    name,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    }
  }
`;

  const data = await client.fetch(query);
  return data;
}

export default async function GalleryPage() {
  const data = await getData();

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-24">
        <Gallery images={data} />
      </main>
    </>
  );
}
