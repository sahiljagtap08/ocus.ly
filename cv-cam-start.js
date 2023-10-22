import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const CVCamStart = (props) => {
  return (
    <>
      <div className="cv-cam-start-container">
        <Head>
          <title>CVCamStart</title>
          <meta
            property="og:title"
            content="CVCamStart"
          />
        </Head>
        <div className="cv-cam-start-container1">
          <header data-thq="thq-navbar" className="cv-cam-start-navbar">
            <span className="cv-cam-start-logo">ocus.ly</span>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="cv-cam-start-desktop-menu"
            ></div>
            <div
              data-thq="thq-navbar-btn-group"
              className="cv-cam-start-btn-group"
            >
              <div className="cv-cam-start-socials"></div>
              <button className="button">Log out</button>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="cv-cam-start-burger-menu"
            >
              <button className="button cv-cam-start-button">
                <svg viewBox="0 0 1024 1024" className="cv-cam-start-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </button>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="cv-cam-start-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="cv-cam-start-nav"
              >
                <div className="cv-cam-start-container2">
                  <span className="cv-cam-start-logo1">ocus.ly</span>
                  <div
                    data-thq="thq-close-menu"
                    className="cv-cam-start-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cv-cam-start-icon02"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="cv-cam-start-nav1"
                >
                  <span className="cv-cam-start-text">About</span>
        
                </nav>
                <div className="cv-cam-start-container3">
                  <button className="cv-cam-start-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="cv-cam-start-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="cv-cam-start-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="cv-cam-start-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="cv-cam-start-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <section className="cv-cam-start-video-space">
            <div className="cv-cam-start-row">
              <div className="cv-cam-start-column"></div>
            </div>
          </section>
          <footer className="cv-cam-start-footer">
            <div className="cv-cam-start-main">
              <div className="cv-cam-start-branding">
                <div className="cv-cam-start-heading">
                  <h2 className="cv-cam-start-logo2">ocus.ly</h2>
                  <p className="cv-cam-start-caption">Thank you!</p>
                </div>
                <div className="cv-cam-start-socials1">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cv-cam-start-twitter social button"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter.svg"
                      className="cv-cam-start-image"
                    />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cv-cam-start-discord social button"
                  >
                    <img
                      alt="image"
                      src="/Icons/discord.svg"
                      className="cv-cam-start-image1"
                    />
                  </a>
                </div>
              </div>
              <div className="cv-cam-start-links"></div>
              <div className="cv-cam-start-socials2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cv-cam-start-twitter1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="cv-cam-start-image2"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cv-cam-start-discord1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="cv-cam-start-image3"
                  />
                </a>
              </div>
            </div>
            <span className="cv-cam-start-copyright">
              © 2023 ocus.ly All Rights Reserved.
            </span>
          </footer>
          <div>
            <div className="cv-cam-start-container5">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cv-cam-start-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cv-cam-start-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .cv-cam-start-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .cv-cam-start-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .cv-cam-start-desktop-menu {
            display: flex;
          }
          .cv-cam-start-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .cv-cam-start-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .cv-cam-start-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .cv-cam-start-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .cv-cam-start-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .cv-cam-start-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cv-cam-start-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .cv-cam-start-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .cv-cam-start-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cv-cam-start-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .cv-cam-start-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cv-cam-start-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .cv-cam-start-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .cv-cam-start-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .cv-cam-start-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .cv-cam-start-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .cv-cam-start-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .cv-cam-start-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .cv-cam-start-icon-group {
            display: flex;
          }
          .cv-cam-start-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .cv-cam-start-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .cv-cam-start-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .cv-cam-start-video-space {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 836px;
            display: flex;
            max-width: 1440px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .cv-cam-start-row {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .cv-cam-start-column {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cv-cam-start-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .cv-cam-start-main {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .cv-cam-start-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .cv-cam-start-heading {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cv-cam-start-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .cv-cam-start-caption {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .cv-cam-start-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .cv-cam-start-twitter {
            text-decoration: none;
          }
          .cv-cam-start-image {
            width: 100px;
            object-fit: cover;
          }
          .cv-cam-start-discord {
            text-decoration: none;
          }
          .cv-cam-start-image1 {
            width: 100px;
            object-fit: cover;
          }
          .cv-cam-start-links {
            gap: 120px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .cv-cam-start-socials2 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .cv-cam-start-twitter1 {
            text-decoration: none;
          }
          .cv-cam-start-image2 {
            width: 100px;
            object-fit: cover;
          }
          .cv-cam-start-discord1 {
            text-decoration: none;
          }
          .cv-cam-start-image3 {
            width: 100px;
            object-fit: cover;
          }
          .cv-cam-start-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .cv-cam-start-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .cv-cam-start-desktop-menu {
              display: none;
            }
            .cv-cam-start-btn-group {
              display: none;
            }
            .cv-cam-start-burger-menu {
              display: flex;
            }
            .cv-cam-start-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .cv-cam-start-logo1 {
              color: #000000;
            }
            .cv-cam-start-video-space {
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .cv-cam-start-row {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 555px;
              align-items: center;
              justify-content: center;
            }
            .cv-cam-start-column {
              flex: 1;
              align-items: flex-start;
            }
          }
          @media (max-width: 767px) {
            .cv-cam-start-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .cv-cam-start-video-space {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .cv-cam-start-row {
              gap: var(--dl-space-space-oneandhalfunits);
              height: 555px;
            }
            .cv-cam-start-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .cv-cam-start-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .cv-cam-start-heading {
              gap: var(--dl-space-space-unit);
            }
            .cv-cam-start-logo2 {
              font-size: 20px;
              line-height: 24px;
            }
            .cv-cam-start-caption {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .cv-cam-start-socials1 {
              display: none;
            }
            .cv-cam-start-links {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .cv-cam-start-socials2 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .cv-cam-start-navbar {
              padding: var(--dl-space-space-unit);
            }
            .cv-cam-start-mobile-menu {
              padding: 16px;
            }
            .cv-cam-start-row {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default CVCamStart
