import React from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory
import Head from 'next/head';
import Script from 'dangerous-html/react';
import { useRouter } from 'next/router'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import firebase from '../firebase'; // Import firebaseApp

// Initialize Firebase
const auth = getAuth(firebase);

const SignInPage = (props) => {

  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // You can handle the user's sign-in here, for example, by updating your UI.
      console.log("Successfully signed in with Google", result.user);

      // Redirect to the home page (index.js) after successful sign-in
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
    router.push('/')
  };
  return (
    <>
      <div className="sign-in-page-container">
        <Head>
          <title>SignInPage</title>
          <meta
            property="og:title"
            content="SignInPage"
          />
        </Head>
        <div className="sign-in-page-container1">
          <header data-thq="thq-navbar" className="sign-in-page-navbar">
            <span className="sign-in-page-logo">ocus.ly</span>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="sign-in-page-desktop-menu"
            ></div>
            <div
              data-thq="thq-navbar-btn-group"
              className="sign-in-page-btn-group"
            >
              <div className="sign-in-page-socials"></div>
              <button onClick={handleGoogleSignIn} className="button">Sign In with Google</button>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="sign-in-page-burger-menu"
            >
              <button className="button sign-in-page-button">
                <svg viewBox="0 0 1024 1024" className="sign-in-page-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </button>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="sign-in-page-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="sign-in-page-nav"
              >
                <div className="sign-in-page-container2">
                  <span className="sign-in-page-logo1">ocus.ly</span>
                  <div
                    data-thq="thq-close-menu"
                    className="sign-in-page-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="sign-in-page-icon02"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="sign-in-page-nav1"
                >
                  <span className="sign-in-page-text">About</span>

                </nav>
                <div className="sign-in-page-container3">
                  <button onClick={handleGoogleSignIn} className="button">
Sign In with Google</button>
                </div>
              </div>
              <div className="sign-in-page-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="sign-in-page-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-in-page-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="sign-in-page-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <section className="sign-in-page-hero">
            <div className="sign-in-page-heading">
              <h1 className="sign-in-page-header">Focus without a F</h1>
              <p className="sign-in-page-caption">
                Improve Your Focus with Binaural Beats
              </p>
            </div>
            <div className="sign-in-page-buttons">
            <button onClick={handleGoogleSignIn} className="button">
Sign In RIGHT NOW!!</button>
            </div>
          </section>
          <section className="sign-in-page-get-yours">
            <div className="sign-in-page-row">
              <div className="sign-in-page-column">
                <div className="sign-in-page-card">
                  <img
                    alt="image"
                    src="/group%202262.svg"
                    className="sign-in-page-image"
                  />
                </div>
              </div>
              <div className="sign-in-page-column1">
                <div className="sign-in-page-card1">
                  <img
                    alt="image"
                    src="/Characters/character-10.svg"
                    className="sign-in-page-image1"
                  />
                </div>
              </div>
            </div>
            <div className="sign-in-page-column2">
              <div className="sign-in-page-card2">
                <div className="sign-in-page-content">
                  <h2 className="sign-in-page-header1">Sign In</h2>
                  <p className="sign-in-page-description">
                    To try ocus.ly and check your focus levels.
                  </p>
                </div>
                <button onClick={handleGoogleSignIn} className="button">
Doing it</button>
              </div>
            </div>
          </section>
          <footer className="sign-in-page-footer">
            <div className="sign-in-page-main">
              <div className="sign-in-page-branding">
                <div className="sign-in-page-heading1">
                  <h2 className="sign-in-page-logo2">ocus.ly</h2>
                  <p className="sign-in-page-caption1">Thank you!</p>
                </div>
                <div className="sign-in-page-socials1">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-in-page-twitter social button"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter.svg"
                      className="sign-in-page-image2"
                    />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-in-page-discord social button"
                  >
                    <img
                      alt="image"
                      src="/Icons/discord.svg"
                      className="sign-in-page-image3"
                    />
                  </a>
                </div>
              </div>
              <div className="sign-in-page-links"></div>
              <div className="sign-in-page-socials2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in-page-twitter1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="sign-in-page-image4"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in-page-discord1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="sign-in-page-image5"
                  />
                </a>
              </div>
            </div>
            <span className="sign-in-page-copyright">
              © 2023 ocus.ly All Rights Reserved.
            </span>
          </footer>
          <div>
            <div className="sign-in-page-container5">
              <Script
                html={`<script>
 
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-in-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-page-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .sign-in-page-navbar {
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
          .sign-in-page-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .sign-in-page-desktop-menu {
            display: flex;
          }
          .sign-in-page-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .sign-in-page-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .sign-in-page-mobile-menu {
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
          .sign-in-page-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-page-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .sign-in-page-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .sign-in-page-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sign-in-page-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .sign-in-page-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-page-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-in-page-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-in-page-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-in-page-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-in-page-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-in-page-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .sign-in-page-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-in-page-icon-group {
            display: flex;
          }
          .sign-in-page-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-in-page-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .sign-in-page-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .sign-in-page-hero {
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
          .sign-in-page-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-page-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .sign-in-page-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .sign-in-page-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .sign-in-page-view1 {
            transition: 0.3s;
          }

          .sign-in-page-get-yours {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 555px;
            display: flex;
            max-width: 1440px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .sign-in-page-row {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .sign-in-page-column {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-page-card {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .sign-in-page-image {
            width: 325px;
            object-fit: cover;
          }
          .sign-in-page-column1 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in-page-card1 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .sign-in-page-image1 {
            width: 240px;
            object-fit: cover;
          }
          .sign-in-page-column2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-page-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: #8fa7df;
          }
          .sign-in-page-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-page-header1 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .sign-in-page-description {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 500px;
            line-height: 27px;
          }
          .sign-in-page-button1 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .sign-in-page-footer {
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
          .sign-in-page-main {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-in-page-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-page-heading1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-page-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .sign-in-page-caption1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .sign-in-page-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-twitter {
            text-decoration: none;
          }
          .sign-in-page-image2 {
            width: 100px;
            object-fit: cover;
          }
          .sign-in-page-discord {
            text-decoration: none;
          }
          .sign-in-page-image3 {
            width: 100px;
            object-fit: cover;
          }
          .sign-in-page-links {
            gap: 120px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .sign-in-page-socials2 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sign-in-page-twitter1 {
            text-decoration: none;
          }
          .sign-in-page-image4 {
            width: 100px;
            object-fit: cover;
          }
          .sign-in-page-discord1 {
            text-decoration: none;
          }
          .sign-in-page-image5 {
            width: 100px;
            object-fit: cover;
          }
          .sign-in-page-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .sign-in-page-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .sign-in-page-desktop-menu {
              display: none;
            }
            .sign-in-page-btn-group {
              display: none;
            }
            .sign-in-page-burger-menu {
              display: flex;
            }
            .sign-in-page-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .sign-in-page-logo1 {
              color: #000000;
            }
            .sign-in-page-get-yours {
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .sign-in-page-row {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 555px;
              align-items: center;
              justify-content: center;
            }
            .sign-in-page-column {
              flex: 1;
              align-items: flex-start;
            }
            .sign-in-page-card {
              width: 100%;
              aspect-ratio: 0.85;
              justify-content: center;
            }
            .sign-in-page-column1 {
              flex: 1;
              align-items: flex-end;
            }
            .sign-in-page-card1 {
              width: 100%;
              aspect-ratio: 0.85;
            }
            .sign-in-page-column2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .sign-in-page-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .sign-in-page-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .sign-in-page-heading {
              gap: var(--dl-space-space-unit);
            }
            .sign-in-page-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .sign-in-page-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .sign-in-page-get-yours {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .sign-in-page-row {
              gap: var(--dl-space-space-oneandhalfunits);
              height: 555px;
            }
            .sign-in-page-card {
              padding: var(--dl-space-space-unit);
            }
            .sign-in-page-card1 {
              padding: var(--dl-space-space-unit);
            }
            .sign-in-page-image1 {
              width: 100%;
            }
            .sign-in-page-card2 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .sign-in-page-content {
              align-items: center;
            }
            .sign-in-page-header1 {
              font-size: 32px;
              text-align: center;
            }
            .sign-in-page-description {
              font-size: 14px;
              text-align: center;
              line-height: 21px;
            }
            .sign-in-page-button1 {
              margin-top: 0px;
            }
            .sign-in-page-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .sign-in-page-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .sign-in-page-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .sign-in-page-logo2 {
              font-size: 20px;
              line-height: 24px;
            }
            .sign-in-page-caption1 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .sign-in-page-socials1 {
              display: none;
            }
            .sign-in-page-links {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .sign-in-page-socials2 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .sign-in-page-navbar {
              padding: var(--dl-space-space-unit);
            }
            .sign-in-page-mobile-menu {
              padding: 16px;
            }
            .sign-in-page-row {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignInPage;
