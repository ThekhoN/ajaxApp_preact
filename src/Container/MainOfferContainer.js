import {h, Component} from 'preact';

import HeaderBannerX from '../Banner_Component/HeaderBannerX';
import BackToTop from '../SD_Component/BackToTop';
import BtcContainer from '../Component/BtcContainer';
import OfferContainer from '../Component/OfferContainer';

import queryUrl from '../Module/queryUrl';

//plugins & utils
import Blazy from 'blazy';



//global
//const _preLoader_Wrapper = document.getElementsByClassName('preLoader_Wrapper')[0];
//const url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=0&count=150';
//test-preact
//const url = (window.admin && window.admin === 'true' ? '/admin' : '') + "csvData_mobileapi7.json";
const url = queryUrl();
console.log('url: ', url);
const eventIds=['bankOfferBannerX99', 'superDod', 'DealofDayOffers', 'BlockbusterDeals', 'NGOFooterBannerX99'];

class MainOfferContainer extends Component {
  constructor(props){
    super(props);
    //settingState
    const eventIds = this.props.eventIds;
    const captions = this.props.captions;
    const _captions = captions ? captions: {};
    const _eventIds = eventIds? eventIds: [];
    this.state = {
      eventIds:_eventIds,
      captions: _captions,
      data: []
    }
    console.log('currentState: ', this.state);
  }
  componentDidMount(){
      // +++++ fetchStart +++++ //
    fetch(url)
      .then((response) => {
      return response.json();
    }).then((responseData) => {
      const _data = responseData.genericOfferItems;
      console.log('consume data: ', _data);
      this.setState({data: _data});
      console.log('updatedState: ', this.state);
    }).catch((err) => {
      console.log('fetch error', err);
    });
    // +++++ /fetchStart +++++ //
  }
  render(){
    const {eventIds, data, captions} = this.state;
    //run lazyLoad
    setTimeout(function(){
      const blazy = new Blazy({
        loadInvisible: true
      });
    }, 100);

    return (
      <div id="mainWrapperX_newX999" className="inHouseDevs_pageWrapper">
        <HeaderBannerX
        Alt="Deal of the Day Offers Snapdeal"
        webImgUrl="https://i1.sdlcdn.com/static/img/marketing-mailers/mailer/2016/Ankita/12thsept_header_DOD_web.jpg"
        mobImgUrl="https://i1.sdlcdn.com/static/img/marketing-mailers/mailer/2016/Ankita/12thsept_header_DOD_app.jpg" />
        <BackToTop/>
        <div className="x99bgWrap"></div>
        <BtcContainer>
          <OfferContainer eventIds={eventIds} data={data} captions={captions}/>
        </BtcContainer>
      </div>
    )
  }
}

export default MainOfferContainer;
