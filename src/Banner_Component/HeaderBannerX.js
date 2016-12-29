import {h} from 'preact';
import MobPlatformCheck from '../Module/MobPlatformCheck';
import BlazyBannerXImg from '../Banner_Component/BlazyBannerXImg';

const HeaderBannerX = ({webImgUrl, mobImgUrl, Alt}) => {
  let ImgUrl;
  if(MobPlatformCheck()){
    ImgUrl = mobImgUrl;
  }
  else {
    ImgUrl = webImgUrl;
  }
  return (
    <div className="headerBannerX">
      <BlazyBannerXImg ImgUrl={ImgUrl} Alt={Alt}/>
    </div>
  )
}



export default HeaderBannerX;
