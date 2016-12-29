import {h} from 'preact';
import MobPlatformCheck from '../Module/MobPlatformCheck';
import BlazyBannerXImg from '../Banner_Component/BlazyBannerXImg';

const OfferUnitListBannerX = ({item}) => {
  let ImgUrl;
  if(MobPlatformCheck()){
    ImgUrl = item.mobileOfferImageUrl;
  }
  else {
    ImgUrl = item.webOfferImageUrl;
  }
  return (
    <li className="OfferUnitX99 BannerX99_unit responsiveFontSizeX99 pad06_vertical">
      <BlazyBannerXImg ImgUrl={ImgUrl} Alt={item.offerName}/>
    </li>
  )
}



export default OfferUnitListBannerX;
