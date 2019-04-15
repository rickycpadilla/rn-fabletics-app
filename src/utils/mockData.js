// @flow

import type { FeaturedSectionType, ProductPreviewType } from '../types'

const mockTopPreviews: Array<ProductPreviewType> = [

  {
    id: 'T00001',
    name: 'Cashel Oversized Hoodie',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/LS1828416-0001/LS1828416-0001-1_327x491.jpg',
    originalPrice: 44.95,
    salePrice: 22.47,
    saleDescription: 'NEW VIP PRICE',
    stars: 5,
    colors: ['#000000']
  },
  {
    id: 'T00002',
    name: 'Alecia Performance Pullover',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/LS1828804-0923/LS1828804-0923-1_327x491.jpg',
    originalPrice: 44.95,
    salePrice: 22.47,
    saleDescription: 'NEW VIP PRICE',
    stars: 4,
    colors: ['#000000']
  },
  {
    id: 'T00003',
    name: 'Kathie Seamless Ruched L/S Top',
    previewImageUrl: 'http://fabletics-us-cdn.justfab.com/media/images/products/LS1828152-0001/LS1828152-0001-1_327x491.jpg',
    originalPrice: 44.95,
    salePrice: 22.47,
    saleDescription: 'NEW VIP PRICE',
    stars: 5,
    colors: ['#000000']
  },
  {
    id: 'T00004',
    name: 'Sedona Fleece Vest',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/JT1828720-1492/JT1828720-1492-1_327x491.jpg',
    originalPrice: 54.95,
    salePrice: 27.47,
    saleDescription: 'NEW VIP PRICE',
    stars: 5,
    colors: ['#000000']
  },
  {
    id: 'T00005',
    name: 'Corrine SculpKnit Tank',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/TK1828199-6948/TK1828199-6948-1_327x491.jpg',
    originalPrice: 34.95,
    salePrice: 17.47,
    saleDescription: 'NEW VIP PRICE',
    stars: 4,
    colors: ['#000000']
  },
  {
    id: 'T00006',
    name: 'Musetta Seamless Openwork Tank',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/TK1828764-5710/TK1828764-5710-1_327x491.jpg',
    originalPrice: 29.95,
    salePrice: 14.97,
    saleDescription: 'NEW VIP PRICE',
    stars: 4,
    colors: ['#000000']
  },
]

const mockBottomPreviews: Array<ProductPreviewType> = [
  {
    id: 'B00001',
    name: 'Trinity Mid-Rise Pocket Crop',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/CS1933984-0919/CS1933984-0919-1_327x491.jpg',
    originalPrice: 49.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 4,
    colors: ['#5B4855', '#685160']
  },
  {
    id: 'B00002',
    name: 'Trinity Mid-Rise Pocket Crop',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/CS1934382-7815/CS1934382-7815-1_327x491.jpg',
    originalPrice: 49.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 4,
    colors: ['#FFC8BD']
  },
  {
    id: 'B00003',
    name: 'High-Waisted Solid PowerHold® Crop',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/CS1931715-0001/CS1931715-0001-1_327x491.jpg',
    originalPrice: 39.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 5,
    colors: ['#000000']
  },
  {
    id: 'B00004',
    name: 'Salar Solid PowerHold® Capri',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/CS1510254-0001/CS1510254-0001-1_327x491.jpg',
    originalPrice: 34.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 5,
    colors: ['#000000', '#40305B', '#E77361', '#E36A7A', '#C06BA8', '#5D22AE']
  },
  {
    id: 'B00005',
    name: 'Salar Solid PowerHold® Legging',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/PT1510471-0001/PT1510471-0001-1_327x491.jpg',
    originalPrice: 34.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 5,
    colors: ['#000000', '#40305B', '#E77361', '#E36A7A', '#C06BA8', '#5D22AE']
  },
  {
    id: 'B00006',
    name: 'High-Waisted Solid PowerHold® 7/8',
    previewImageUrl: 'https://fabletics-us-cdn.justfab.com/media/images/products/CS1719629-7815/CS1719629-7815-1_327x491.jpg',
    originalPrice: 44.95,
    salePrice: null,
    saleDescription: 'NEW VIP OFFER: 2 FOR $24',
    stars: 5,
    colors: ['#D32425', '#CFE5DD', '#ECBFBA', '#211C21', '#00848D', '#00424C']
  }
]

export const mockFeaturedSections: Array<FeaturedSectionType> = [
  {
    id: 'tops',
    title: 'Tops',
    productPreviews: mockTopPreviews
  },
  {
    id: 'bottoms',
    title: 'Bottoms',
    productPreviews: mockBottomPreviews
  },
  {
    id: 'outfits',
    title: 'Outfits',
    productPreviews: mockTopPreviews
  }
]