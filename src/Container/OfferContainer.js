import { h, Component } from 'preact';
import OfferUnitLi from '../Component/OfferUnitLi';

//plugins & utils
import Blazy from 'blazy';

//global
const _preLoader_Wrapper = document.getElementsByClassName('preLoader_Wrapper')[0];
//const url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=0&count=150';
const url = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_mobileapi7.json";

const eventIds=['bankOfferBannerX99', 'superDod', 'DealofDayOffers', 'BlockbusterDeals', 'NGOFooterBannerX99'];

class OfferContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  }
  componentWillMount(){
    //lifeCycle
    console.log('component will mount.. . .');
  }
  componentDidMount(){
    //lifeCycle
    console.log('component did mount. . .');
    fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
      const _data = data.genericOfferItems;
      console.log('consume data: ', _data);
      this.setState({data: _data});
      //console.log('updated container state: ', this.state.data);
    }).catch((err) => {
      console.log('fetch error', err);
    });
  }
  render(){
    //_contentX99_Wrapper.style.opacity = 1;
    //lifeCycle
    console.log('component is rendering. . .');
    //run lazyLoad
    setTimeout(function(){
      const blazy = new Blazy({
        loadInvisible: true
      });
    }, 100);

    document.getElementById('mainWrapperX_newX999').style.opacity = 1;

    return (
      <ul className="offers_WrapperX99 relFontSize_util">
        {this.state.data.map((item, i) => {
          return (
              <OfferUnitLi item={item} key={i}/>
          );
        })}
      </ul>

    )
  }
  componentDidUpdate(){
    //lifeCycle
    console.log('component did update. . .');
    _preLoader_Wrapper.style.opacity = 0;
    _preLoader_Wrapper.style.height = '0px';
  }
}

export default OfferContainer;
