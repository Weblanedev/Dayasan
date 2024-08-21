import NextLink from 'next/link';
import Image from "next/image";
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <Heading>Welcome to Daysan Prints</Heading>
        <Description>
          At Daysan, we are dedicated to providing high-quality paper products tailored for the bookbinding industry. From paper and paperboard to millboard and pasteboard, we offer a comprehensive range of materials designed to meet the needs of bookbinders and related professionals. Explore our extensive product lineup and discover how we can support your paper needs.
        </Description>
      </Contents>
      <ImageContainer>
        <Image
          src={"https://images.pexels.com/photos/3729179/pexels-photo-3729179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          width={800}
          height={450}
          alt="features"
          className="w-full rounded-xl"
        />
      </ImageContainer>
      
      <CustomButtonGroup>
          {/* <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button> */}
          <NextLink href="/services" passHref>
            <Button>
              Our Services <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
  }
`;

const Contents = styled.div`
  text-align: center;
  max-width: 100%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  margin: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  width: 80%;
  margin:0 auto;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
    width: 90%;
    margin:0 auto;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
