import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bulma/css/bulma.min.css";
import { Router } from "next/router";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../layouts/Header/Header";
import { Hero } from "../layouts/Hero/Hero";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>GitHub Search</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

      <Hero />
      <main className={styles.main}>

        <div className="columns is-align-items-center">
          <button
            className="column button"
            onClick={() => router.push("/repositories")}
          >
            Search Repositories
          </button>
          <button
            className="column button"
            onClick={() => router.push("/users")}
          >
            Search Users
          </button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
