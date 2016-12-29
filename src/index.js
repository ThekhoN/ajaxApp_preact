import { h, render } from 'preact';
//import OfferContainer from './Container/OfferContainer';
import MainOfferContainer from './Container/MainOfferContainer';
import './stylesheets/screen.css';

const eventIds=['bankOfferBannerX99', 'superDod', 'DealofDayOffers', 'BlockbusterDeals', 'NGOFooterBannerX99'];
const captions = {superDod: 'Super Deals', DealofDayOffers: 'Deals of the Day',BlockbusterDeals: 'Blockbuster Deals'};
render(
  <MainOfferContainer eventIds={eventIds} captions={captions}/>,
  document.getElementById('root')
);
