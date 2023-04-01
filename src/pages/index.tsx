import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [tourVideo, setTourVideo] = useState(false);

  function handleClick() {
    setTourVideo(!tourVideo);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar currentPage="tour" />
        <main className={styles.main}>
          <section className={styles.section}>
            <header className={styles.header}>
              <h1>
                Lobe <span>Tour</span>
              </h1>
              <p>
                Build your first machine learning model in ten minutes. No code
                or experience required.
              </p>
            </header>
            <div>
              <img
                src="https://www.lobe.ai/assets/tour/Video.jpg"
                alt="Learn more about Lobe by watching our tour video."
                className={styles.tourVideoPreviewImage}
                onClick={handleClick}
              />
            </div>
            {tourVideo ? (
              <div className={styles.tourVideoContainer}>
                <button onClick={handleClick}>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                  >
                    <g
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      opacity="0.699999988"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <g
                        id="Button-/-Close"
                        transform="translate(5.000000, 5.000000)"
                        stroke-width="2"
                      >
                        <g transform="translate(-5.000000, -5.000000)">
                          <line x1="27" y1="5" x2="5" y2="27"></line>
                          <line x1="5" y1="5" x2="27" y2="27"></line>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <iframe
                  width="1120"
                  height="699"
                  src="https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            <div className={styles.downloadSection}>
              <h2>Train your app with Lobe</h2>
              <button>Download</button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
