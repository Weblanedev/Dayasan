import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';

const FEATURES = [
  {
    // imageUrl: '/grid-icons/asset-1.svg',
    title: 'Custom Manufacturing.',
    description:
      'Work with us to create bespoke paper products tailored to your specific needs.',
      price: '200'
  },
  {
    // imageUrl: '/grid-icons/asset-2.svg',
    title: 'Consultation',
    description:
      'Our experts are available to provide guidance and advice on the best materials and solutions for your projects.',
      price: '115'
  },
  {
    // imageUrl: '/grid-icons/asset-3.svg',
    title: 'Delivery and Logistics',
    description:
      'Reliable and timely delivery services to ensure your products arrive when you need them.',
      price: '280'
  },
  {
    // imageUrl: '/grid-icons/asset-4.svg',
    title: 'Bookbinding Workshops:',
    description:
      'We offer training sessions and workshops to help bookbinders and related professionals stay updated on the latest techniques, materials, and industry trends.',
      price: '165'
  },
  // {
  //   // imageUrl: '/grid-icons/asset-5.svg',
  //   title: 'Drain Cleaning and Unclogging',
  //   description:
  //     'Professional drain cleaning services to remove clogs, blockages, and buildup from drains, sewer lines, and drainpipes using hydro-jetting, snaking, and other specialized equipment.',
  //     price: '342'
  // },
  {
    // imageUrl: '/grid-icons/asset-6.svg',
    title: 'Private Labeling',
    description:
      'For clients looking to establish their own brand, we provide private labeling services, allowing you to offer our high-quality products under your own brand name.',
      price: '470'
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Services" description="At Daysan, we offer more than just products. We provide a range of services designed to support and enhance your bookbinding projects.">
      <Wrapper>
      <ImageContainer>
        <NextImage src={"https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"IMage"} layout="fill" objectFit="cover" />
      </ImageContainer>
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