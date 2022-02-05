import React from 'react';
import './index.css';
// eslint-disable-next-line
import {_Redaktirovanie} from './Redaktirovanie/Redaktirovanie';
// eslint-disable-next-line
import {_Uvedomlenie} from './Uvedomlenie/Uvedomlenie';






function App() {
  const newLocal = <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:'17',left:'146'}}> 
    <g filter="url(#filter0_d_0_1036)">
      <mask id="path-1-outside-1_0_1036" maskUnits="userSpaceOnUse" x="3.00391" y="2.00391" width="19" height="22" fill="black">
        <rect fill="white" x="3.00391" y="2.00391" width="19" height="22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.3815 14.9461L8.36959 13.4638C7.67865 12.4516 6.2069 12.0824 5.08114 12.6372L5.34345 12.508C5.06408 12.6457 4.93011 12.9889 5.04514 13.2743L6.44585 16.7487C6.6679 17.2995 7.23502 18.0785 7.70497 18.4698C7.70497 18.4698 10.5228 20.7059 10.5228 21.5442V22.6056H15.0881H17.3707H18.5121V21.5442C18.5121 20.7059 20.2341 18.0653 20.2341 18.0653C20.5511 17.5521 20.8153 16.6478 20.8153 16.0475V11.6326C20.7947 10.6551 19.9281 9.86293 18.8587 9.86293C18.3237 9.86293 17.8904 10.259 17.8904 10.748V11.1016C17.8904 10.1242 17.0238 9.33199 15.9544 9.33199C15.4194 9.33199 14.9861 9.72807 14.9861 10.2171V10.5707C14.9861 9.59321 14.1195 8.80105 13.0501 8.80105C12.5151 8.80105 12.0818 9.19713 12.0818 9.68613V10.0397C12.0818 9.88265 12.0643 9.75777 12.0305 9.65881L11.7351 5.09945C11.6952 4.48291 11.1531 4.00391 10.5228 4.00391C9.88809 4.00391 9.3815 4.49371 9.3815 5.09791V9.47499L9.3815 14.9461ZM18.5359 13.8516V18.2284L17.3945 18.2284V13.8516H18.5359ZM16.2507 13.8516V18.2284L15.1094 18.2284V13.8516H16.2507ZM13.9694 13.8516V18.2284L12.8281 18.2284V13.8516H13.9694Z" />
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.3815 14.9461L8.36959 13.4638C7.67865 12.4516 6.2069 12.0824 5.08114 12.6372L5.34345 12.508C5.06408 12.6457 4.93011 12.9889 5.04514 13.2743L6.44585 16.7487C6.6679 17.2995 7.23502 18.0785 7.70497 18.4698C7.70497 18.4698 10.5228 20.7059 10.5228 21.5442V22.6056H15.0881H17.3707H18.5121V21.5442C18.5121 20.7059 20.2341 18.0653 20.2341 18.0653C20.5511 17.5521 20.8153 16.6478 20.8153 16.0475V11.6326C20.7947 10.6551 19.9281 9.86293 18.8587 9.86293C18.3237 9.86293 17.8904 10.259 17.8904 10.748V11.1016C17.8904 10.1242 17.0238 9.33199 15.9544 9.33199C15.4194 9.33199 14.9861 9.72807 14.9861 10.2171V10.5707C14.9861 9.59321 14.1195 8.80105 13.0501 8.80105C12.5151 8.80105 12.0818 9.19713 12.0818 9.68613V10.0397C12.0818 9.88265 12.0643 9.75777 12.0305 9.65881L11.7351 5.09945C11.6952 4.48291 11.1531 4.00391 10.5228 4.00391C9.88809 4.00391 9.3815 4.49371 9.3815 5.09791V9.47499L9.3815 14.9461ZM18.5359 13.8516V18.2284L17.3945 18.2284V13.8516H18.5359ZM16.2507 13.8516V18.2284L15.1094 18.2284V13.8516H16.2507ZM13.9694 13.8516V18.2284L12.8281 18.2284V13.8516H13.9694Z" fill="white" />
      <path d="M9.3815 14.9461L8.50053 15.5475L10.4482 18.4005L10.4482 14.9461H9.3815ZM8.36959 13.4638L7.48862 14.0652L8.36959 13.4638ZM5.04514 13.2743L6.03444 12.8754L5.04514 13.2743ZM6.44585 16.7487L5.45655 17.1475L6.44585 16.7487ZM7.70497 18.4698L7.02242 19.2895L7.03208 19.2975L7.04192 19.3054L7.70497 18.4698ZM10.5228 22.6056H9.45615V23.6723H10.5228V22.6056ZM18.5121 22.6056V23.6723H19.5787V22.6056H18.5121ZM20.2341 18.0653L21.1276 18.648L21.1348 18.637L21.1417 18.6258L20.2341 18.0653ZM20.8153 11.6326H21.882V11.6213L21.8818 11.61L20.8153 11.6326ZM12.0305 9.65881L10.966 9.72776L10.9752 9.8695L11.0211 10.0039L12.0305 9.65881ZM11.7351 5.09945L10.6707 5.1684L11.7351 5.09945ZM9.3815 5.09791H8.31483H9.3815ZM9.3815 9.47499H8.31483H9.3815ZM18.5359 13.8516H19.6025V12.7849H18.5359V13.8516ZM18.5359 18.2284V19.2951H19.6025V18.2284H18.5359ZM17.3945 18.2284H16.3279V19.2951H17.3945V18.2284ZM17.3945 13.8516V12.7849H16.3279V13.8516H17.3945ZM16.2507 13.8516H17.3174V12.7849H16.2507V13.8516ZM16.2507 18.2284V19.2951H17.3174V18.2284H16.2507ZM15.1094 18.2284H14.0427V19.2951H15.1094V18.2284ZM15.1094 13.8516V12.7849H14.0427V13.8516H15.1094ZM13.9694 13.8516H15.0361V12.7849H13.9694V13.8516ZM13.9694 18.2284V19.2951H15.0361V18.2284H13.9694ZM12.8281 18.2284H11.7615V19.2951H12.8281L12.8281 18.2284ZM12.8281 13.8516V12.7849H11.7615V13.8516H12.8281ZM10.2625 14.3447L9.25055 12.8624L7.48862 14.0652L8.50053 15.5475L10.2625 14.3447ZM9.25055 12.8624C8.24872 11.3948 6.19338 10.8998 4.60957 11.6805L5.55272 13.594C6.22042 13.2649 7.10858 13.5085 7.48862 14.0652L9.25055 12.8624ZM5.55272 13.594L5.81503 13.4647L4.87188 11.5512L4.60957 11.6805L5.55272 13.594ZM4.87188 11.5512C4.10345 11.9299 3.72727 12.8581 4.05584 13.6731L6.03444 12.8754C6.08739 13.0068 6.07583 13.1318 6.0403 13.223C6.00479 13.3141 5.93186 13.4071 5.81503 13.4647L4.87188 11.5512ZM4.05584 13.6731L5.45655 17.1475L7.43515 16.3499L6.03444 12.8754L4.05584 13.6731ZM5.45655 17.1475C5.61167 17.5323 5.86192 17.9434 6.12111 18.2982C6.38074 18.6537 6.69824 19.0196 7.02242 19.2895L8.38752 17.6501C8.24175 17.5287 8.04072 17.3095 7.84379 17.0399C7.64642 16.7697 7.50208 16.5159 7.43515 16.3499L5.45655 17.1475ZM7.70497 18.4698C7.04192 19.3054 7.04186 19.3053 7.04181 19.3053C7.0418 19.3053 7.04176 19.3052 7.04175 19.3052C7.04174 19.3052 7.04177 19.3052 7.04184 19.3053C7.04198 19.3054 7.04228 19.3056 7.04276 19.306C7.0437 19.3068 7.04531 19.3081 7.04755 19.3098C7.05205 19.3134 7.05909 19.3191 7.06852 19.3266C7.08738 19.3418 7.11575 19.3647 7.15227 19.3944C7.22537 19.454 7.33079 19.5408 7.45769 19.6478C7.71262 19.8627 8.04903 20.1548 8.38237 20.4689C8.72066 20.7877 9.03264 21.1075 9.25227 21.3798C9.36273 21.5168 9.43015 21.6177 9.46514 21.6819C9.51252 21.7688 9.45615 21.7061 9.45615 21.5442H11.5895C11.5895 21.1728 11.4451 20.8568 11.3383 20.661C11.2192 20.4424 11.0665 20.2311 10.9128 20.0405C10.6041 19.6578 10.2116 19.2614 9.84541 18.9163C9.4743 18.5666 9.10624 18.2473 8.83282 18.0168C8.69555 17.9011 8.58083 17.8066 8.49982 17.7406C8.45929 17.7076 8.42712 17.6816 8.40471 17.6636C8.3935 17.6546 8.38472 17.6476 8.37855 17.6426C8.37546 17.6402 8.37303 17.6382 8.37126 17.6368C8.37038 17.6361 8.36967 17.6356 8.36913 17.6351C8.36885 17.6349 8.36863 17.6347 8.36844 17.6346C8.36835 17.6345 8.36824 17.6344 8.36819 17.6344C8.3681 17.6343 8.36801 17.6342 7.70497 18.4698ZM9.45615 21.5442V22.6056H11.5895V21.5442H9.45615ZM10.5228 23.6723H15.0881V21.5389H10.5228V23.6723ZM15.0881 23.6723H17.3707V21.5389H15.0881V23.6723ZM17.3707 23.6723H18.5121V21.5389H17.3707V23.6723ZM19.5787 22.6056V21.5442H17.4454V22.6056H19.5787ZM19.5787 21.5442C19.5787 21.5968 19.57 21.5829 19.6052 21.4689C19.6359 21.3694 19.686 21.2384 19.7568 21.078C19.8984 20.7575 20.095 20.3826 20.3026 20.0136C20.5084 19.648 20.7155 19.3052 20.8719 19.0527C20.9498 18.9268 21.0146 18.8244 21.0595 18.754C21.0819 18.7188 21.0994 18.6916 21.111 18.6736C21.1168 18.6646 21.1212 18.6578 21.124 18.6535C21.1254 18.6514 21.1264 18.6498 21.127 18.6489C21.1273 18.6484 21.1275 18.6481 21.1276 18.648C21.1276 18.6479 21.1277 18.6479 21.1277 18.6479C21.1277 18.6479 21.1276 18.6479 21.1276 18.6479C21.1276 18.648 21.1276 18.648 20.2341 18.0653C19.3407 17.4827 19.3406 17.4827 19.3406 17.4828C19.3405 17.4829 19.3405 17.4829 19.3404 17.483C19.3403 17.4832 19.3402 17.4834 19.34 17.4836C19.3397 17.4841 19.3393 17.4848 19.3388 17.4856C19.3377 17.4872 19.3362 17.4895 19.3344 17.4923C19.3307 17.4981 19.3253 17.5063 19.3185 17.5168C19.305 17.5379 19.2854 17.5683 19.2608 17.6069C19.2115 17.6841 19.1417 17.7945 19.0582 17.9294C18.8918 18.1981 18.6683 18.5678 18.4435 18.9672C18.2207 19.3632 17.9867 19.8055 17.8054 20.2159C17.7149 20.421 17.6304 20.6338 17.5669 20.8392C17.5079 21.0301 17.4454 21.282 17.4454 21.5442H19.5787ZM21.1417 18.6258C21.3665 18.2618 21.5454 17.8102 21.6683 17.3855C21.7908 16.962 21.882 16.4811 21.882 16.0475H19.7487C19.7487 16.2142 19.7078 16.4856 19.619 16.7926C19.5305 17.0984 19.4187 17.3556 19.3266 17.5048L21.1417 18.6258ZM21.882 16.0475V11.6326H19.7487V16.0475H21.882ZM21.8818 11.61C21.8473 9.97832 20.4314 8.79627 18.8587 8.79627V10.9296C19.4247 10.9296 19.7421 11.3319 19.7489 11.6551L21.8818 11.61ZM18.8587 8.79627C17.8268 8.79627 16.8237 9.58173 16.8237 10.748H18.9571C18.9571 10.8306 18.9183 10.8869 18.8936 10.9094C18.8705 10.9305 18.8553 10.9296 18.8587 10.9296V8.79627ZM16.8237 10.748V11.1016H18.9571V10.748H16.8237ZM18.9571 11.1016C18.9571 9.44687 17.5206 8.26532 15.9544 8.26532V10.3987C16.5269 10.3987 16.8237 10.8014 16.8237 11.1016H18.9571ZM15.9544 8.26532C14.9226 8.26532 13.9194 9.05078 13.9194 10.2171H16.0528C16.0528 10.2997 16.014 10.3559 15.9893 10.3785C15.9662 10.3996 15.951 10.3987 15.9544 10.3987V8.26532ZM13.9194 10.2171V10.5707H16.0528V10.2171H13.9194ZM16.0528 10.5707C16.0528 8.91593 14.6163 7.73438 13.0501 7.73438V9.86771C13.6226 9.86771 13.9194 10.2705 13.9194 10.5707H16.0528ZM13.0501 7.73438C12.0183 7.73438 11.0151 8.51984 11.0151 9.68613H13.1485C13.1485 9.76871 13.1097 9.82497 13.085 9.84753C13.0619 9.86861 13.0467 9.86771 13.0501 9.86771V7.73438ZM11.0151 9.68613V10.0397H13.1485V9.68613H11.0151ZM13.1485 10.0397C13.1485 9.8114 13.1241 9.56035 13.0398 9.31373L11.0211 10.0039C11.0121 9.9773 11.0109 9.96438 11.0119 9.97137C11.0129 9.97839 11.0151 9.99989 11.0151 10.0397H13.1485ZM13.0949 9.58986L12.7995 5.0305L10.6707 5.1684L10.966 9.72776L13.0949 9.58986ZM12.7995 5.0305C12.7206 3.81127 11.6729 2.93724 10.5228 2.93724V5.07057C10.5666 5.07057 10.608 5.08745 10.6379 5.1143C10.6665 5.13996 10.6701 5.16033 10.6707 5.1684L12.7995 5.0305ZM10.5228 2.93724C9.33927 2.93724 8.31483 3.86511 8.31483 5.09791H10.4482C10.4482 5.09746 10.448 5.09922 10.4474 5.10055C10.4472 5.10106 10.4483 5.09812 10.4533 5.09339C10.4626 5.08438 10.4839 5.07057 10.5228 5.07057V2.93724ZM8.31483 5.09791V9.47499H10.4482V5.09791H8.31483ZM8.31483 9.47499L8.31483 14.9461H10.4482L10.4482 9.47499H8.31483ZM17.4692 13.8516V18.2284H19.6025V13.8516H17.4692ZM18.5359 17.1618H17.3945V19.2951L18.5359 19.2951L18.5359 17.1618ZM18.4612 18.2284V13.8516H16.3279V18.2284H18.4612ZM17.3945 14.9182H18.5359V12.7849H17.3945V14.9182ZM15.184 13.8516V18.2284H17.3174V13.8516H15.184ZM16.2507 17.1618H15.1094V19.2951L16.2507 19.2951L16.2507 17.1618ZM16.176 18.2284V13.8516H14.0427V18.2284H16.176ZM15.1094 14.9182H16.2507V12.7849H15.1094V14.9182ZM12.9028 13.8516V18.2284H15.0361V13.8516H12.9028ZM13.9694 17.1618H12.8281L12.8281 19.2951L13.9694 19.2951L13.9694 17.1618ZM13.8948 18.2284V13.8516H11.7615V18.2284H13.8948ZM12.8281 14.9182H13.9694V12.7849H12.8281V14.9182Z" fill="#1A1A1A" mask="url(#path-1-outside-1_0_1036)" />
    </g>
    <defs>
      <filter id="filter0_d_0_1036" x="0.381096" y="0.270574" width="25.0565" height="27.8461" filterUnits="userSpaceOnUse" colorInterpolation="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="0.888889" />
        <feGaussianBlur stdDeviation="1.77778" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1036" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1036" result="shape" />
      </filter>
    </defs>
  </svg>;
  return (
    <div className="container-center">
      <div className="spravochnik-istochniki a-a">
        <div className="frame81512811">
          <div className="atom-large">
            <SearchMedium
              src="vector.svg"
            />
            <div className="value">
              Поиск
            </div>
          </div>
          <div className="frame2511">
            <Y1Oozr>СМИ</Y1Oozr>
            <div className="primary-2">
              <div className="p-13 roboto-medium-plump-purple-10px">
                Соцсети
              </div>
            </div>
            <div className="primary-3">
              <div className="p-14 roboto-medium-white-10px">
                Телеграм
              </div>
            </div>
            <div className="primary-4">
              <div className="p-15 roboto-medium-plump-purple-10px">
                Оппозиция
              </div>
            </div>
            <div className="primary-5">
              <div className="p-16 roboto-medium-topaz-10px">
                Отобразить все
              </div>
            </div>
          </div>
        </div>
        <X0gfyXL {...x0gfyXLData} />
        <div className="frame81512815">
          <Frame81512813 {...frame81512813Data} />
          <Frame81512813 {...frame815128132Data} />
          <Frame81512813 {...frame815128133Data} />
          <Frame81512813 {...frame815128134Data} />
          <Frame81512813 {...frame815128135Data} />
          <Frame81512813 {...frame815128136Data} />
          <Frame81512813 {...frame815128137Data} />
          <Frame81512813 {...frame815128138Data} />
          <Frame81512813 {...frame815128139Data} />
          <Frame81512813 {...frame8151281310Data} />
        </div>
        <div className="overlap-group2">
          <div className="pagination">
            <div className="pages">
              <X2Items1PageNumber2Selected>1</X2Items1PageNumber2Selected>
              <div className="items-1-page-number-1-default">
                <div className="overlap-group-2">
                  <div className="p-number-2 valign-text-middle roboto-medium-white-10px">
                    2
                  </div>
                </div>
              </div>
              <X2Items1PageNumber2Selected
                className="items-1-page-number-1-default-2"
              >
                3
              </X2Items1PageNumber2Selected>
              <X2Items1PageNumber2Selected
                className="items-1-page-number-1-default-3"
              >
                4
              </X2Items1PageNumber2Selected>
              <div className="items-1-page-number-1-default-4">
                <div className="p-number-5 valign-text-middle roboto-medium-eerie-black-10px">
                  ...
                </div>
              </div>
              <div className="items-1-page-number-1-default-5">
                <div className="p-number-6 valign-text-middle roboto-medium-eerie-black-10px">
                  20
                </div>
              </div>
            </div>
          </div>
          {newLocal}
        </div>
      </div>
    </div>
  );
}


export default  App;

function SearchMedium(_props) {
  return (
    <div className="search-medium">
        {newFunction()}
    </div>
  );
  function newFunction() {
    return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Vector">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.41905 8.68333C7.22318 8.68333 8.68571 7.2208 8.68571 5.41667C8.68571 3.61254 7.22318 2.15 5.41905 2.15C3.61492 2.15 2.15238 3.61254 2.15238 5.41667C2.15238 7.2208 3.61492 8.68333 5.41905 8.68333ZM5.41905 10.0833C7.99638 10.0833 10.0857 7.994 10.0857 5.41667C10.0857 2.83934 7.99638 0.75 5.41905 0.75C2.84172 0.75 0.75238 2.83934 0.75238 5.41667C0.75238 7.994 2.84172 10.0833 5.41905 10.0833Z" fill="#BABDCD" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.83839 7.83601C8.11176 7.56264 8.55497 7.56264 8.82834 7.83601L11.5472 10.5549C11.8206 10.8282 11.8206 11.2714 11.5472 11.5448C11.2738 11.8182 10.8306 11.8182 10.5572 11.5448L7.83839 8.82596C7.56502 8.55259 7.56502 8.10938 7.83839 7.83601Z" fill="#BABDCD" />
      </g>
    </svg>;
  }
}

function Y1Oozr(props) {
  const { children } = props;
  return (
    <div className="primary">
      <div className="p-33 roboto-medium-white-10px">
        {children}
      </div>
    </div>
  );
}

function X0gfyXL(props) {
  const { p, p2, p3, p4, p5, p6, p7, p22, p8 } = props;

  return (
    <div className="table-header-new">
      <div className="columns-name-8">
        <div className="p-1 valign-text-middle roboto-medium-topaz-10px">
          {p}
        </div>
      </div>
      <div className="columns-name-9">
        <div className="p-2 valign-text-middle roboto-medium-topaz-10px">
          {p2}
        </div>
      </div>
      <div className="columns-name">
        <div className="p-3 valign-text-middle roboto-medium-topaz-10px">
          {p3}
        </div>
      </div>
      <div className="columns-name-2">
        <div className="p-4 valign-text-middle roboto-medium-topaz-10px">
          {p4}
        </div>
      </div>
      <div className="columns-name-3">
        <div className="p-5 valign-text-middle roboto-medium-topaz-10px">
          {p5}
        </div>
      </div>
      <div className="columns-name-4">
        <div className="p-6 valign-text-middle roboto-medium-topaz-10px">
          {p6}
        </div>
      </div>
      <div className="columns-name-5">
        <div className="p-7 valign-text-middle roboto-medium-topaz-10px">
          {p7}
        </div>
      </div>
      <div className="columns-name-6">
        <div className="p-2-1 valign-text-middle roboto-medium-topaz-10px">
          {p22}
        </div>
      </div>
      <div className="columns-name-7">
        <div className="p-8 valign-text-middle roboto-medium-topaz-10px">
          {p8}
        </div>
      </div>
    </div>
  );
}

function Frame81512813(props) {
const {
text15,
httpsTelegramMeVyzvon179641,
address,
address2,
address3,
phone,
text16,
className,
} = props;
  return (
    <div className={`frame81512813 ${className || ""}`}>
      <div className="frame81512819">
        <div className="overlap-group">
          <div className="p-9 roboto-normal-eerie-black-12px">
            {text15}
          </div>
          <div className="httpstelegrammevyzvon179641 roboto-normal-blueberry-12px">
            {httpsTelegramMeVyzvon179641}
          </div>
        </div>
        <div className="overlap-group-1 roboto-normal-eerie-black-12px">
          <div className="p12-099">
            {address}
          </div>
          <div className="p1-348-094">
            {address2}
          </div>
        </div>
        <div className="p1-348-094-1 roboto-normal-eerie-black-12px">
          {address3}
        </div>
        <div className="p-218-464-443 roboto-normal-slimy-green-12px">
          {phone}
        </div>
        <div className="p-3-1 roboto-normal-eerie-black-12px">
          {text16}
        </div>
        <div className="edit">
          {newFunction()}
        </div>
      </div>
      
      {newFunction_1()}
    </div>
  );
  function newFunction() {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.33331 0.333313C1.22874 0.333313 0.333313 1.22874 0.333313 2.33331V11.3333C0.333313 12.4379 1.22874 13.3333 2.33331 13.3333H11C12.1045 13.3333 13 12.4379 13 11.3333V8.99998C13 8.63179 12.7015 8.33331 12.3333 8.33331C11.9651 8.33331 11.6666 8.63179 11.6666 8.99998V11.3333C11.6666 11.7015 11.3682 12 11 12H2.33331C1.96512 12 1.66665 11.7015 1.66665 11.3333V2.33331C1.66665 1.96512 1.96512 1.66665 2.33331 1.66665H7.66665C8.03484 1.66665 8.33331 1.36817 8.33331 0.99998C8.33331 0.63179 8.03484 0.333313 7.66665 0.333313H2.33331ZM3.66659 9.27181L3.88128 7.47932L9.80113 2.82585L11.3789 4.83303L5.45908 9.4865L3.66659 9.27181ZM13.0119 2.93889C13.176 3.14764 13.1399 3.44878 12.9312 3.61287L11.9517 4.38284L10.3738 2.37565L11.3534 1.60568C11.5621 1.44159 11.8632 1.47766 12.0273 1.68641L13.0119 2.93889Z" fill="#5E35B1" />
    </svg>;
  }
}

function newFunction_1() {
  return <svg width="1280" height="1" viewBox="0 0 1280 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="0.683594" x2="1280" y2="0.683594" stroke="#E8E8EF" strokeWidth="0.632812" />
  </svg>;
}

function X2Items1PageNumber2Selected(props) {
  const { children, className } = props;
  return (
    <div className={`items-1-page-number-2-selected ${className || ""}`}>
      <div className="p-number valign-text-middle roboto-medium-eerie-black-10px">
        {children}
      </div>
    </div>
  );
}

const x0gfyXLData = {
  p: "Название источника",
  p2: "Ссылка",
  p3: "Охват",
  p4: "Редакционный охват",
  p5: "Кол-во публикаций",
  p6: "Кол-во инфоповодов",
  p7: "Тип источника",
  p22: "Оппозиция",
  p8: "Первоисточник",
};


const frame81512813Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union.svg",
    Border_line: "border-line.svg",
};

const frame815128132Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128133Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128134Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128135Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128136Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union-6.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128137Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union-6.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128138Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union-6.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame815128139Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union-6.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};

const frame8151281310Data = {
    text15: "Прямой эфир Эха Москвы",
    httpsTelegramMeVyzvon179641: "https://telegram.me/vyzvon/179641",
    address: "12 099",
    address2: "1 348 094",
    address3: "1 348 094",
    phone: "218 464 443",
    text16: "Оппозиция",
    Union: "union-10.svg",
    Border_line: "border-line.svg",
    className: "frame815128",
};



