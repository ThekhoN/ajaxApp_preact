import {h} from 'preact';
import OfferUnitLi from '../Component/OfferUnitLi';
import SectionX from '../Component/SectionX';
import InnerCard_sectionXWrap from '../Component/InnerCard_sectionXWrap';
import CaptionWrapper from '../Component/CaptionWrapper';

import OfferUnitListBannerX from '../Banner_Component/OfferUnitListBannerX';
import OfferContainerWrapperDoD from '../Component/OfferContainerWrapperDoD';
import OfferContainerWrapperNormal from '../Component/OfferContainerWrapperNormal';

const OfferContainer = ({eventIds, data, captions}) => {
  console.log('eventIds: ', eventIds);
  return (
    <div className="OfferContainer">
        {eventIds.map(eventId=>{
          if(eventId.indexOf('BannerX99') > -1){
            return (
              <SectionX id={eventId}>
                <InnerCard_sectionXWrap>
                  <ul className="offers_WrapperX99 footerBannerX99_Wrapper">
                    {data.filter(offer=>(
                      offer.eventId === eventId))
                      .map((thisOffer, i) => (<OfferUnitListBannerX item={thisOffer} i={i}/>))
                    }
                  </ul>
                </InnerCard_sectionXWrap>
              </SectionX>
            )
          }
          if(eventId.indexOf('superDod') > -1){
            return (
              <SectionX id={eventId}>
                <InnerCard_sectionXWrap>
                <CaptionWrapper caption={captions[eventId]} eventId={eventId} stylingClass="gradient_orangeToRed"/>
                <OfferContainerWrapperDoD>
                  <ul className="offers_WrapperX99 relFontSize_util ">
                    {data.filter(offer=>(
                      offer.eventId === eventId))
                      .map((thisOffer, i) => (<OfferUnitLi item={thisOffer} i={i}/>))
                    }
                  </ul>
                </OfferContainerWrapperDoD>
                </InnerCard_sectionXWrap>
              </SectionX>
            )
          }
          else {
            return (
              <SectionX id={eventId}>
                <InnerCard_sectionXWrap>
                <CaptionWrapper caption={captions[eventId]} eventId={eventId} stylingClass="gradient_greenToBlue"/>
                <OfferContainerWrapperNormal>
                  <ul className="offers_WrapperX99 relFontSize_util ">
                    {data.filter(offer=>(
                      offer.eventId === eventId))
                      .map((thisOffer, i) => (<OfferUnitLi item={thisOffer} i={i}/>))
                    }
                  </ul>
                </OfferContainerWrapperNormal>
                </InnerCard_sectionXWrap>
              </SectionX>
            )
          }
        }

          )}
      </div>
  )
}

export default OfferContainer;
