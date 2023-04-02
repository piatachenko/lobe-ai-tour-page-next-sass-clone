import DownloadBtn from "@/components/DownloadBtn";
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
        <meta name="generator" content="React Static" />
        <title>Lobe Tour | Machine Learning Made Easy</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta data-react-helmet="true" charSet="utf-8" />

        <meta
          data-react-helmet="true"
          name="keywords"
          content="machine learning, ai, artificial intelligence, ML, free, easy to use, lobe, Lobe, learn, model, neural network, computer vision, image classification, tool, visual programming, visualization, bounding boxes, object detection, data classification, tabular data, regression, convolution, education, design, developer, development, labeling, training, evaluate, tryout, models, TensorFlow, CoreML, ONNX TF.js, TFLite, Tensor Flow, drag and drop"
        />
        <meta
          data-react-helmet="true"
          property="og:image:width"
          content="2400"
        />
        <meta
          data-react-helmet="true"
          property="og:image:height"
          content="1260"
        />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta data-react-helmet="true" name="twitter:site" content="@lobe_ai" />
        <meta
          data-react-helmet="true"
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <meta
          data-react-helmet="true"
          property="fb:app_id"
          content="1627242127371964"
        />
        <link rel="preload" as="script" href="/templates/styles.edae3859.js" />
        <link
          rel="preload"
          as="script"
          href="/templates/vendors~main.32c90239.js"
        />
        <link rel="preload" as="script" href="/main.33f1daca.js" />
        <link rel="preload" as="style" href="/styles.a852eacd.css" />
        <link rel="stylesheet" href="/styles.a852eacd.css" />
        <link
          data-react-helmet="true"
          rel="shortcut icon"
          type="image/x-icon"
          href="favicon.ico"
        />
        <link
          rel="canonical"
          href="https://www.lobe.ai/tour"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Learn how to train your first custom machine learning model in under ten minutes using Lobe. No code or experience required."
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://www.lobe.ai/tour"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="Lobe Tour | Machine Learning Made Easy"
          data-react-helmet="true"
        />
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
                <div>
                  <iframe
                    src="https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : null}
            <div className={styles.downloadSection}>
              <h2>Train your app with Lobe</h2>
              <DownloadBtn />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
