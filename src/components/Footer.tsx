import styles from "@/styles/Footer.module.scss";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.footerCategories}>
          <li>
            <ul className={styles.product}>
              <li>
                <Logo width="4.25rem" height="auto" />
              </li>
              <li>A product by Microsoft.</li>
              <li>All rights reserved.</li>
              <li>© Microsoft 2021</li>
            </ul>
          </li>
          <li>
            <ul className={styles.about}>
              <li>About</li>
              <li>
                <a href="https://www.lobe.ai/tour#signup">Download</a>
              </li>
              <li>
                <a href="https://www.lobe.ai/">Overview</a>
              </li>
              <li>
                <a href="https://www.lobe.ai/examples">Examples</a>
              </li>
              <li>
                <a href="https://www.lobe.ai/blog">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.general}>
              <li>General</li>
              <li>
                <a href="/NOTICE.txt" download>
                  Notice
                </a>
              </li>
              <li>
                <a href="https://www.lobe.ai/license">License</a>
              </li>
              <li>
                <a href="https://news.microsoft.com/microsoft-public-relations-contacts/">
                  Press Inquiry
                </a>
              </li>
              <li>
                <a href="https://www.lobe.ai/assets/press/lobe-press-images.zip">
                  Press Images
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.resources}>
              <li>Resources</li>
              <li>
                <a href="https://www.lobe.ai/docs/welcome/welcome">Help</a>
              </li>
              <li>
                <a href="https://www.lobe.ai/tour">Tour</a>
              </li>
              <li>
                <a href="mailto:lobeai@microsoft.com">Contact</a>
              </li>
              <li>
                <a href="https://go.microsoft.com/fwlink/?LinkId=521839">
                  Privacy
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.links}>
              <li>
                <a href="https://reddit.com/r/lobe">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 27 26"
                    version="1.1"
                  >
                    <title>Lobe Reddit</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1121.000000, -112.000000)"
                        fill="#FFFFFF"
                      >
                        <g transform="translate(60.000000, 0.000000)">
                          <g transform="translate(107.500000, 105.000000)">
                            <g transform="translate(947.000000, 0.000000)">
                              <g transform="translate(7.000000, 7.000000)">
                                <path d="M22,12.500015 C22.0034128,13.8198808 21.6950409,15.1218955 21.0999729,16.300009 C19.6609343,19.1793322 16.7188874,20.998756 13.499985,21 C12.1801192,21.0034428 10.8781045,20.6950709 9.69999098,20.100003 L4,22 L5.89999699,16.300009 C5.30492907,15.1218955 4.99655717,13.8198808 5,12.500015 C5.00124397,9.28111262 6.82066775,6.33906566 9.69999098,4.90002706 C10.8781045,4.30495915 12.1801192,3.99658724 13.499985,4 L13.9999842,4 C18.3157868,4.2381278 21.7618722,7.68421323 22,12.0000158 L22,12.500015 L22,12.500015 Z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/lobe_ai">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 32 32"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-524.000000, -7107.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(143.000000, 7050.000000)">
                          <g transform="translate(307.000000, 0.000000)">
                            <g transform="translate(0.000000, 49.000000)">
                              <g transform="translate(66.000000, 0.000000)">
                                <g transform="translate(8.000000, 7.200000)">
                                  <path d="M25.7411765,10.345436 C26.9325321,9.73758177 27.8241551,8.67572361 28.2117647,7.403145 C27.2235294,8.38390865 25.1235294,8.70878661 25.1235294,8.70878661 C23.625633,6.88211914 21.0308099,6.37020781 18.9428502,7.48945119 C16.8548905,8.60869456 15.8635169,11.0429739 16.5814706,13.2877269 L16.3529412,13.2877269 C12.2830949,13.0198802 8.51568539,11.0613953 5.97647059,7.89352683 C5.97647059,7.89352683 3.01176471,11.8165814 7.45882353,14.7588724 C7.45882353,14.7588724 5.48235294,14.7588724 4.98823529,14.2684906 C4.98823529,14.2684906 4.49411765,17.2107815 8.94117647,19.1723088 C8.31338045,19.4560955 7.5925019,19.4560955 6.96470588,19.1723088 C6.96470588,21.0664086 8.95352941,22.6049816 11.4117647,22.6049816 C11.4117647,23.9596614 8.095,25.0568907 4,25.0568907 C10.4235294,29.4703272 25.7411765,28.4895635 26.7294118,11.8165814 L29.2,9.3646723 L25.7411765,10.345436 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw">
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 27 26"
                    version="1.1"
                  >
                    <title>Lobe YouTube</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1233.000000, -112.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(60.000000, 0.000000)">
                          <g transform="translate(107.500000, 105.000000)">
                            <g transform="translate(947.000000, 0.000000)">
                              <g transform="translate(112.000000, 0.000000)">
                                <g transform="translate(6.500000, 7.000000)">
                                  <path d="M13.5,5.5 C15.5067016,5.5 17.5879746,5.57457132 19.7438189,5.72371397 L20.827954,5.80451586 C22.1698207,5.91158438 23.2760796,6.89936592 23.5338217,8.22059218 C23.8446072,9.81372812 24,11.4068641 24,13 C24,14.3939966 23.8810269,15.7879932 23.6430808,17.1819898 L23.5338165,17.7794162 C23.2760729,19.1006479 22.1698092,20.0884332 20.8279369,20.1955019 C18.2837919,20.3985006 15.8411463,20.5 13.5,20.5 C11.4932984,20.5 9.41202538,20.4254287 7.25618109,20.276286 L6.17204597,20.1954841 C4.83017932,20.0884156 3.72392035,19.1006341 3.46617835,17.7794078 C3.15539278,16.1862719 3,14.5931359 3,13 C3,11.6060034 3.11897305,10.2120068 3.35691915,8.81801022 L3.46618353,8.22058378 C3.72392707,6.89935214 4.83019085,5.91156683 6.17206307,5.8044981 C8.71620808,5.60149937 11.1588537,5.5 13.5,5.5 Z M12.5,9.86851709 C11.9477153,9.86851709 11.5,10.3162323 11.5,10.8685171 L11.5,10.8685171 L11.5,15.1314829 C11.5,15.3289079 11.558438,15.5219156 11.6679497,15.6861831 C11.9743022,16.1457118 12.5951715,16.2698857 13.0547002,15.9635332 L13.0547002,15.9635332 L16.2519246,13.8320503 C16.3617768,13.7588154 16.4560398,13.6645525 16.5292747,13.5547002 C16.8356271,13.0951715 16.7114532,12.4743022 16.2519246,12.1679497 L16.2519246,12.1679497 L13.0547002,10.0364668 C12.8904327,9.92695512 12.697425,9.86851709 12.5,9.86851709 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
