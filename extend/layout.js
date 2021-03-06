import React from 'react';
import vw from '../lib/vw.js';
import flex from '../lib/flex.js';

export default ({ config }) => {
  const mobileHD = {
    content: [
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        key={'mf-01'}
      />,
      <meta name="apple-mobile-web-app-capable" content="yes" key={'mf-02'} />,
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black"
        key={'mf-03'}
      />,
      <meta
        name="format-detection"
        content="telephone=no, email=no"
        key={'mf-04'}
      />,
      <meta name="renderer" content="webkit" key={'mf-05'} />,
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
        key={'mf-06'}
      />,
      <meta name="HandheldFriendly" content="true" key={'mf-07'} />,
      <meta name="MobileOptimized" content="320" key={'mf-08'} />,
      <meta name="screen-orientation" content="portrait" key={'mf-09'} />,
      <meta name="x5-orientation" content="portrait" key={'mf-10'} />,
      <meta name="msapplication-tap-highlight" content="no" key={'mf-11'} />,
      <meta name="format-detection" content="telephone=no" key={'mf-12'} />,
      <meta name="HandheldFriendly" content="true" key={'mf-13'} />,
      <script
        key={'mf-14'}
        dangerouslySetInnerHTML={{
          __html: `
          !function(){var e="@charset \'utf-8\';html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",t=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch(o){t.innerText=e}}();
          `,
        }}
      />,
      <script
        key={'mf-15'}
        dangerouslySetInnerHTML={{
          __html: `!function() {if (document.documentElement.clientWidth >= 750) {!${vw}(100, 750);} else {!${flex}();}document.documentElement.setAttribute('data-scale', true);}();
        `,
        }}
      />,
    ],
  };

  if (config.mobileHD.pageCenter) {
    mobileHD.content.push(
      <style
        key={'mf-center'}
        dangerouslySetInnerHTML={{
          __html: `
            body {
              width: 10rem;
              margin: 0 auto;
              background: #efefef;
              box-shadow: 0 2px 3px #aaa;
            }
          `,
        }}
      />
    );
  }

  return {
    head: mobileHD,
  };
};
