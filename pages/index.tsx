import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Daysan"
          content="At Daysan, we are dedicated to providing high-quality paper products tailored for the bookbinding industry."
        />
            <link rel="icon" type="image/svg+xml" href="https://th.bing.com/th/id/R.4789c26e848fb37faa2ad05e8f4ecc31?rik=cu82XOb7OCgl6w&pid=ImgRaw&r=0" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="https://images.pexels.com/photos/14805033/pexels-photo-14805033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Mission" overTitle="">
            <p>
            Our mission is to support the bookbinding community by providing reliable, high-quality materials that enhance the craftsmanship and durability of bound works. We are committed to innovation, sustainability, and excellence in every product we offer.
            </p>
          </BasicSection>
          <BasicSection imageUrl="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Our Vision" overTitle="" reversed>
            <p>
            At Daysan, our vision is to be the leading provider of premium paper products, driving innovation and sustainability in the bookbinding industry. We aspire to empower bookbinders and related professionals by offering materials that not only enhance the quality and durability of their work but also contribute to a more sustainable and environmentally responsible future. 
            </p>
           
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
