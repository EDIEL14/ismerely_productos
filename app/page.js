    import Head from "next/head";
    import HeroSection from "../components/HeroSection";
    import ProductList from "../components/ProductList";

    export default function Home() {
      return (
        <>
          <Head>
            <title>Ismerely</title>
            <meta name="description" content="Catálogo de productos de Ismerely" />
          </Head>

          <main>
            <HeroSection />
            <ProductList />
          </main>
        </>
      );
    }
