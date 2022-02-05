import React,{Component} from "react";


// eslint-disable-next-line
class Redaktirovanie extends Component {

render() {
  return (
  <Screen3
      frame81512689Props={screen3Data.frame81512689Props}
      frame81512689Props2={screen3Data.frame81512689Props2}
      frame815126892Props={screen3Data.frame815126892Props}
      frame81512687Props={screen3Data.frame81512687Props}
      frame815126872Props={screen3Data.frame815126872Props}
      layoutAutowidthTypePrimaryStateDefa={screen3Data.layoutAutowidthTypePrimaryStateDefa}
  />
);
  }
}

export default Redaktirovanie;

function Screen3(props) {
  const {
    frame81512689Props,
    frame81512689Props2,
    frame815126892Props,
    frame81512687Props,
    frame815126872Props,
    layoutAutowidthTypePrimaryStateDefa,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="redaktirovanie-istochnika screen">
        <G0CEtL text1={frame81512689Props.text1} />
        <div className="frame-81512688">
          <Frame81512689
            spanText={frame81512689Props2.spanText}
            atomLargeProps={frame81512689Props2.atomLargeProps}
          />
          <Frame81512689
            spanText={frame815126892Props.spanText}
            className={frame815126892Props.className}
            atomLargeProps={frame815126892Props.atomLargeProps}
          />
          <Frame81512687 text5={frame81512687Props.text5} />
          <Frame81512687 text5={frame815126872Props.text5} />
        </div>
        <LayoutAutowidthTypePrimaryStateDefa>
          {layoutAutowidthTypePrimaryStateDefa.children}
        </LayoutAutowidthTypePrimaryStateDefa>
      </div>
    </div>
  );
}


function G0CEtL(props) {
  const { text1 } = props;

  return (
    <div className="frame-2384">
      <div className="text-1 roboto-medium-mine-shaft-20px">
        {text1}
      </div>
      <div className="x-1">
        <div className="overlap-group-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', width:'24', height:'24', right:'32', top:'24'}}>
<path d="M20 4L4 20" stroke="#7A7C8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4L20 20" stroke="#7A7C8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </div>
      </div>
    </div>
  );
}


function Frame81512689(props) {
  const { spanText, className, atomLargeProps } = props;

  return (
    <div className={`frame-81512689 ${className || ""}`}>
      <div className="text roboto-medium-white-14px">
        <span className="span roboto-medium-black-14px">{spanText}</span>
        <span className="span roboto-medium-cinnabar-14px"> *</span>
      </div>
      <AtomLarge3
        content40pxiconLeftrightTypeSeconda={atomLargeProps.content40pxiconLeftrightTypeSeconda}
      />
    </div>
  );
}


function AtomLarge3(props) {
  const { content40pxiconLeftrightTypeSeconda } = props;

  return (
    <div className="atom-large-3 border-1px-gray-suit">
      <Content40pxiconLeftrightTypeSeconda>
        {content40pxiconLeftrightTypeSeconda.children}
      </Content40pxiconLeftrightTypeSeconda>
    </div>
  );
}


function Content40pxiconLeftrightTypeSeconda(props) {
  const { children } = props;

  return (
    <div className="placeholder">
      <div className="value-1 roboto-normal-eerie-black-14px">
        {children}
      </div>
    </div>
  );
}


function Frame81512687(props) {
  const { text5 } = props;

  return (
    <div className="frame-8151268">
      <div className="text-2 roboto-medium-black-14px">
        {text5}
      </div>
      <MediumSelected />
    </div>
  );
}


function MediumSelected() {
  return (
    <div className="medium-selected">
      <div className="toggle">
      <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', marginLeft:'15px'}}>
<g filter="url(#filter0_dd_231_12)">
<circle cx="21" cy="12" r="7" fill="white"/>
</g>
<defs>
<filter id="filter0_dd_231_12" x="0.285713" y="-4.14286" width="41.4286" height="41.4286" filterUnits="userSpaceOnUse" colorInterpolation="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.14286"/>
<feGaussianBlur stdDeviation="1.14286"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_12"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.57143"/>
<feGaussianBlur stdDeviation="6.85714"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_231_12" result="effect2_dropShadow_231_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_12" result="shape"/>
</filter>
</defs>
</svg>
      </div>
    </div>
  );
}


function LayoutAutowidthTypePrimaryStateDefa(props) {
  const { children } = props;

  return (
    <div className="primary-7">
      <div className="default">
        {children}
      </div>
    </div>
  );
}

const g0CEtLData = {
    text1: "Редактировать источник",
};

const content40pxiconLeftrightTypeSeconda1Data = {
    children: "MosDay.ru",
};

const atomLarge31Data = {
    content40pxiconLeftrightTypeSeconda: content40pxiconLeftrightTypeSeconda1Data,
};

const frame815126891Data = {
    spanText: "Название источника",
    atomLargeProps: atomLarge31Data,
};

const content40pxiconLeftrightTypeSeconda2Data = {
    children: "1 348 094",
};

const atomLarge32Data = {
    content40pxiconLeftrightTypeSeconda: content40pxiconLeftrightTypeSeconda2Data,
};

const frame815126892Data = {
    spanText: "Редакционный охват",
    className: "frame-81512690",
    atomLargeProps: atomLarge32Data,
};

const frame815126871Data = {
    text5: "Оппозиция",
};

const frame815126872Data = {
    text5: "Первоисточник",
};

const layoutAutowidthTypePrimaryStateDefaData = {
    children: "Сохранить",
};

const screen3Data = {
    frame81512689Props: g0CEtLData,
    frame81512689Props2: frame815126891Data,
    frame815126892Props: frame815126892Data,
    frame81512687Props: frame815126871Data,
    frame815126872Props: frame815126872Data,
    layoutAutowidthTypePrimaryStateDefa: layoutAutowidthTypePrimaryStateDefaData,
};