import {h} from 'preact';
import MobPlatformCheck from '../Module/MobPlatformCheck';
import {isLegit_pogId_item} from '../Module/ValidateData';

import SdPlusLogo from '../SubComponent/SdPlusLogo';
import BlazyImg from '../SubComponent/BlazyImg';

const ImgOfferUnit = ({item}) => {
  let offerImageUrl, userDefined_offerImageUrl, sdgold, offerName;
      offerName = item.offerName? item.offerName: '';
      if(MobPlatformCheck()){
        userDefined_offerImageUrl = item.mobileOfferImageUrl;
      }
      else {
        userDefined_offerImageUrl = item.webOfferImageUrl;
      }
      if(isLegit_pogId_item(item)){
          offerImageUrl = userDefined_offerImageUrl?userDefined_offerImageUrl:item.commonMinProductDetailsDTO.imgs[0];
          sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
      }
      else {
          offerImageUrl = userDefined_offerImageUrl;
      }
      if(sdgold){
        return (
          <div className="offerUnit_imgWrap_sdPlusInc_rel">
            <SdPlusLogo/>
            <BlazyImg offerImageUrl={offerImageUrl} offerName={offerName}/>
          </div>
        );
      }
      else {
        return (
          <div className="offerUnit_imgWrap_sdPlusInc_rel">
            <BlazyImg offerImageUrl={offerImageUrl} offerName={offerName}/>
          </div>
        );
      }
}


export default ImgOfferUnit;
