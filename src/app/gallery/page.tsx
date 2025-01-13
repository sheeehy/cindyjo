import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import FadeInAnimation from "../components/FadeInAnimation";
import { client } from "../lib/sanity";
import { imagetype } from "../lib/interface";
import Image from "next/image";

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
  const data: imagetype[] = await getData();

  return (
    <div>
      <Navbar />
      <div className="sm:mx-24 mx-4 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-32 mb-24">
          {data.map((item) => (
            <div key={item._id} className="max-w-sm  overflow-hidden ">
              <Image src={item.image.url} alt={item.name} width={300} height={500} priority={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
