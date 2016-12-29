import {h} from 'preact';
const BlazyBannerXImg = ({ImgUrl, Alt}) => {
  return (
  <img
    className="offerUnit_img OfferImg b-lazy"
    data-src={ImgUrl}
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    alt={Alt} />
)}

export default BlazyBannerXImg;
