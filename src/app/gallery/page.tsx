import fs from "fs";
import path from "path";
import GalleryClient from "../components/GalleryClient";

export const dynamic = "force-static";

async function getImages() {
  const dir = path.join(process.cwd(), "public", "photos");
  const files = await fs.promises.readdir(dir);
  return files
    .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/photos/${f}`);
}

export default async function GalleryPage() {
  const images = await getImages();
  return <GalleryClient images={images} />;
}
