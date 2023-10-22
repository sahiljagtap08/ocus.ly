import React from 'react'
import Head from 'next/head'
import Script from 'dangerous-html/react';
import { getAuth, signOut } from "firebase/auth"; // Updated import for signOut
import firebase from '../firebase'; // Import firebaseApp

// Initialize Firebase


const Home = (props) => {
  const handleLogout = () => {
    const auth = getAuth(firebase);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.href = '/SignInPage'; // Redirect to the login page after logout.
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - ocus.ly</title>
          <meta property="og:title" content="ocus.ly" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">ocus.ly</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          ></div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials"></div>
            <button onClick={handleLogout} className="button">
              Logout
            </button>

          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <span className="home-logo1">ocus.ly</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
  
              <div className="home-container2">
                <button onClick={handleLogout} className="button">
              Logout
            </button>
                
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">Focus without a F</h1>
            <p className="home-caption">
              Improve Your Focus with Binaural Beats
            </p>
          </div>
          <div className="home-buttons">
            <button className="button">Start</button>
          </div>
        </section>
        <section className="home-cards">
          <div className="home-row"></div>
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/Avatars/light-avatar.svg"
                className="home-avatar1"
              />
            </div>
            <div className="home-row1">
              <div className="home-main">
                <div className="home-content">
                  <h2 className="home-header01">Help Focus Elderly People</h2>
                  <p className="home-description">
                    {' '}
                    ocus.ly, and its aim is to improve focus and reduce stress
                    in elderly people using Computer Vision.
                  </p>
                </div>
                <button className="home-learn button">
                  <span className="home-text05">Try Now</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image"
                  />
                </button>
              </div>
              <img
                alt="image"
                src="/group%202262.svg"
                className="home-image01"
              />
            </div>
          </div>
        </section>
        <section className="home-project">
          <div className="home-understand">
            <div className="home-content1">
              <span className="home-caption1">Project</span>
              <div className="home-heading1">
                <h2 className="home-header02">Understand the project</h2>
                <p className="home-header03">
                  <span className="home-text06">
                    Imagine a world where technology not only improves our lives
                    but also enhances our well-being, especially for our beloved
                    elderly. In a fast-paced world, it&apos;s easy for our
                    seniors to feel overwhelmed and lose their focus, which can
                    lead to stress and anxiety
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    At OCUS.LY, we&apos;re on a mission to change that.
                    We&apos;ve created a project that combines cutting-edge
                    technology with the wisdom of age. Using advanced computer
                    vision, we track eye movements and blink patterns, helping
                    our elderly users understand their focus levels and detect
                    drowsiness. But we go beyond that; we use their stress data,
                    acquired through Terra-API, to tailor a personalized
                    solution.
                  </span>
                  <br></br>
                </p>
              </div>
              <button className="home-view2 button-link button">
                <span>Learn More</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image02"
                />
              </button>
            </div>
            <img alt="image" src="/group%202415.svg" className="home-image03" />
          </div>
        </section>
        <section className="home-middle-content">
          <div className="home-heading2">
            <h2 className="home-header04">HackHarvard is Fun btw.</h2>
          </div>
          <div className="home-list">
            <div className="home-step">
              <div className="home-heading3">
                <h2 className="home-header05">Project Launch</h2>
                <p className="home-header06">
                  We thought about this idea, while participating in HackHarvard
                  &apos;23 at Harvard University.
                </p>
              </div>
              <button className="home-button1 button">View on Devpost</button>
            </div>
            <div className="home-step1">
              <div className="home-heading4">
                <h2 className="home-header07">So Join ocus.ly</h2>
                <p className="home-header08">
                  Our platform provides not just data, but hope and empowerment.
                  When our elderly users need a boost in focus or a moment of
                  relaxation, we suggest binaural beats and soothing music,
                  carefully chosen to reduce stress and enhance their well-being
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="home-benefits">
                  <div className="home-item">
                    <img
                      alt="image"
                      src="/Icons/people.svg"
                      className="home-image04"
                    />
                    <p className="home-header09">Connect with devs</p>
                  </div>
                  <div className="home-item1">
                    <img
                      alt="image"
                      src="/Icons/paper.svg"
                      className="home-image05"
                    />
                    <p className="home-header10">Github repo</p>
                  </div>
                  <div className="home-item2">
                    <img
                      alt="image"
                      src="/Icons/checklist.svg"
                      className="home-image06"
                    />
                    <p className="home-header11">Email us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-join-us">
          <div className="home-content2">
            <div className="home-main1">
              <div className="home-heading5">
                <h2 className="home-header12">ocus.ly</h2>
                <p className="home-caption2">
                  Join us in this journey of technology and compassion.
                  Let&apos;s make OCUS.LY the bridge between the digital world
                  and a happier, more focused life for our elders
                </p>
              </div>
              <button className="home-view3 button">View Github Repo</button>
            </div>
            <img alt="image" src="/group%202273.svg" className="home-image07" />
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading6">
                <h2 className="home-logo2">ocus.ly</h2>
                <p className="home-caption3">Thank you!</p>
              </div>
              <div className="home-socials1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-twitter social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image08"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="home-image09"
                  />
                </a>
              </div>
            </div>
            <div className="home-links"></div>
            <div className="home-socials2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image10"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image11"
                />
              </a>
            </div>
          </div>
          <span className="home-copyright">
            © 2023 ocus.ly All Rights Reserved.
          </span>
        </footer>
        <div>
          <div className="home-container4">
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
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
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
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #8fa7df;
          }
          .home-avatar {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .home-avatar1 {
            width: 22px;
            object-fit: cover;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text05 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image {
            width: 16px;
            object-fit: cover;
          }
          .home-image01 {
            width: 100%;
            object-fit: cover;
          }
          .home-project {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-understand {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header03 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-view2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-image02 {
            width: 25px;
            object-fit: cover;
          }
          .home-image03 {
            width: 480px;
            object-fit: cover;
          }
          .home-middle-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: column;
          }
          .home-header04 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 500;
            line-height: 108px;
          }
          .home-list {
            gap: 106px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-left-width: 1px;
          }
          .home-step {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header06 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button1 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-benefits {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-item {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image04 {
            width: 16px;
            object-fit: cover;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image05 {
            width: 16px;
            object-fit: cover;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image06 {
            width: 20px;
            object-fit: cover;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-join-us {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header12 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption2 {
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-view3 {
            background-color: #9ddadb;
          }
          .home-image07 {
            width: 100%;
            object-fit: cover;
          }
          .home-footer {
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
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption3 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter {
            text-decoration: none;
          }
          .home-image08 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord {
            text-decoration: none;
          }
          .home-image09 {
            width: 100px;
            object-fit: cover;
          }
          .home-links {
            gap: 120px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-socials2 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter1 {
            text-decoration: none;
          }
          .home-image10 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord1 {
            text-decoration: none;
          }
          .home-image11 {
            width: 100px;
            object-fit: cover;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-container4 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo1 {
              color: #000000;
            }
            .home-row {
              flex-direction: column;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-project {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              align-items: center;
              flex-direction: column;
            }
            .home-heading5 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption2 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header01 {
              font-size: 24px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-project {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header03 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-view2 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-image03 {
              width: 100%;
            }
            .home-middle-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header04 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-list {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header05 {
              font-size: 32px;
            }
            .home-header06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-button1 {
              margin-top: 0px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header07 {
              font-size: 32px;
            }
            .home-header08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header10 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image06 {
              width: 17px;
            }
            .home-header11 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-join-us {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content2 {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-header12 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-caption2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image07 {
              width: 150%;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
            }
            .home-logo2 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption3 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials1 {
              display: none;
            }
            .home-links {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .home-socials2 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-image07 {
              width: 200%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
