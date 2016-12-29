import {h} from 'preact';
import OfferUnitLi from '../Component/OfferUnitLi';
import SectionX from '../Component/SectionX';
import InnerCard_sectionXWrap from '../Component/InnerCard_sectionXWrap';
import CaptionWrapper from '../Component/CaptionWrapper';

const OfferContainer = ({eventIds, data}) => {
  return (
    <div>
      <h2>Main OfferContainer</h2>
      <div>
        {eventIds.map(eventId=>(
          <SectionX>
          <InnerCard_sectionXWrap>
          <CaptionWrapper caption={eventId} eventId={eventId}/>
            <ul id={eventId} className="ListOfferContainer">
              {data.filter(offer=>(
                offer.eventId == eventId))
                .map((thisOffer, i) => (
                <OfferUnitLi item={thisOffer} i={i}/>
              ))}
            </ul>
          </InnerCard_sectionXWrap>
          </SectionX>
        ))}
      </div>
    </div>
  )
}

export default OfferContainer;
