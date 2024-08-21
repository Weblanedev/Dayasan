import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.jqBzdF1bwSfaVX6gN2KBKwHaHa?rs=1&pid=ImgDetMain',
    title: 'Paper',
    description: '100 sheets per order',
      price: '75'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.LRKRxorir7dZ1IwdtG_8vgHaFL?rs=1&pid=ImgDetMain',
    title: 'Paperboard',
    description: '20 sheets per order',
    price: '90'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.bc14d8f9c43016eafbabb3cca6e227b9?rik=l89SwTVJGoitAQ&pid=ImgRaw&r=0',
    title: 'Millboard',
    description: '30 sheets per order',
      price: '105'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.ca1e5ad751363b816babb6f9884b1ae1?rik=uwKU471P10F9CA&pid=ImgRaw&r=0',
    title: 'Pasteboard',
    description: '25 sheets per order',
      price: '155'
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.f115671c2b9345ccc12050b20a66edcd?rik=DezgbvoW7sLhqg&pid=ImgRaw&r=0',
    title: 'Strawboard',
    description: '30 sheets per order',
      price: '185'
  },
];

export default function PricingPage() {
  return (
    <Page title="Products" description="Our experienced team of contractors deals in a variety of products.">
      <Wrapper>
      {/* <ImageContainer>
        <NextImage src={"https://images.pexels.com/photos/14845870/pexels-photo-14845870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"IMage"} layout="fill" objectFit="cover" />
      </ImageContainer> */}
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;