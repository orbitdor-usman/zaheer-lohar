import Image from "next/image";
import "./gallery-section.css";

const GALLERY_ITEMS = [
  { src: "gallery-01.jpeg", alt: "Zaheer Lohar and a guest in a television studio", caption: "In the studio" },
  { src: "gallery-02.jpeg", alt: "Zaheer Lohar standing near the Museum of the Future in Dubai", caption: "On the road" },
  { src: "gallery-03.jpeg", alt: "Zaheer Lohar at an anniversary celebration", caption: "A moment to remember" },
  { src: "gallery-04.jpeg", alt: "Zaheer Lohar posing with a guest", caption: "Shared moments" },
  { src: "gallery-05.jpeg", alt: "Zaheer Lohar in Dubai at night", caption: "After hours" },
  { src: "gallery-06.jpeg", alt: "Zaheer Lohar beside the water in traditional dress", caption: "Along the way" },
  { src: "gallery-07.jpeg", alt: "Zaheer Lohar by the waterfront at night", caption: "Beyond the stage" },
];

export function GallerySection() {
  return <section className="artist-gallery page-shell" aria-labelledby="artist-gallery-title">
    <div className="artist-gallery__heading"><div><p className="eyebrow">In pictures</p><h2 id="artist-gallery-title">Moments along the way.</h2></div><p>A glimpse of the people, places and memories around the music.</p></div>
    <div className="artist-gallery__grid">
      {GALLERY_ITEMS.map(({ src, alt, caption }, index) => <figure className={`artist-gallery__item${index === 0 ? " artist-gallery__item--feature" : ""}`} key={src}>
        <Image src={`/images/gallery/${src}`} alt={alt} fill sizes={index === 0 ? "(max-width: 700px) 92vw, 48vw" : "(max-width: 700px) 46vw, 24vw"} />
        <figcaption><span>{caption}</span><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></figcaption>
      </figure>)}
    </div>
  </section>;
}
