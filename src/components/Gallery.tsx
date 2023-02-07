import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Props = {
  images: string[];
};

const Gallery = ({ images }: Props) => {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [lightboxImage, setLightboxImage] = React.useState("");

  const { siteConfig } = useDocusaurusContext();

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
    setShowLightbox(true);
  };

  const location = useLocation();

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowLightbox(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
      {showLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur p-2 cursor-zoom-out"
          style={{ zIndex: "100000" }}
          onClick={() => setShowLightbox(false)}
        >
          <div className="relative">
            <img src={lightboxImage} alt={``} />
          </div>
        </div>
      )}

      <Swiper
        slidesPerView={1.5}
        spaceBetween={8}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="pb-8">
              <img
                src={useBaseUrl(
                  `${siteConfig.customFields.projectsImagesPath}${location.pathname}${image}`
                )}
                className="aspect-video object-cover shadow-sm cursor-zoom-in"
                alt={``}
                onClick={() =>
                  handleImageClick(
                    require(`@site/static/projects${location.pathname}${image}`)
                      .default
                  )
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
