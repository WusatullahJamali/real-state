import Image from "next/image";

export default function HomePage() {
  const collections = [
    {
      title: "Recommended Homes",
      count: 17,
      img: "/img1.webp",
      href: "/recommended",
    },
    // hhhhh
    {
      title: "New Listings",
      count: 7,
      img: "/img2.avif",
      href: "/new-listings",
    },
    {
      title: "Price Reduced",
      count: 14,
      img: "/img3.webp",
      href: "/price-reduced",
    },
    {
      title: "Open Houses",
      count: 3,
      img: "/img4.jpeg",
      href: "/open-houses",
    },
    {
      title: "Recently Sold",
      count: 168,
      img: "/img5.jpg",
      href: "/open-houses",
    },
    {
      title: "New Constructions",
      count: 32,
      img: "/img6.webp",
      href: "/open-houses",
    },
    {
      title: "New Home Communities",
      count: 2,
      img: "/img7.jpg",
      href: "/open-houses",
    },
    {
      title: "Land",
      count: 29,
      img: "/img8.jpg",
      href: "/open-houses",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <main className="max-w-7xl h-full bg-white mx-auto px-4 py-10">
          <h2 className="text-2xl text-black font-bold mb-6">Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collections.map((item, i) => (
              <ListingCard key={i} {...item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
