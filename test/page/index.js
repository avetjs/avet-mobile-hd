export default () => (
  <div>
    <div className="index-wrap index-friend" />
    <div className="nav-bar">
      <a href="index-plan.html" className="nav nav-plan" />
      <a className="nav nav-friend nav-selected" />
      <a href="index-my.html" className="nav nav-my">
        <span className="icon icon-red">3</span>
      </a>
    </div>
    <style jsx global>
      {`
        .fn-clear:after {
          visibility: hidden;
          display: block;
          font-size: 0;
          content: ' ';
          clear: both;
          height: 0;
        }

        .fn-hide {
          display: none;
        }

        .fn-left {
          float: left;
        }

        .fn-right {
          float: right;
        }

        .am-content {
          margin-left: 0.2rem;
          margin-right: 0.2rem;
        }

        .am-content h5 {
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 1.5;
        }

        .am-fixed {
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          width: 100%;
        }

        .am-fixed-bottom {
          top: inherit;
          bottom: 0;
        }

        .user-select {
          -webkit-user-select: auto;
          -moz-user-select: auto;
          -ms-user-select: auto;
          user-select: auto;
        }

        .nav-bar {
          width: 100%;
          height: 0.98rem;
          border-top: 1px solid #ddd;
          background-color: #fff;
          box-sizing: border-box;
          position: fixed;
          left: 0;
          bottom: 0;
          display: -webkit-box;
          display: -webkit-flex;
        }

        .nav-bar .nav {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          text-align: center;
          color: #666;
          position: relative;
        }

        .nav-bar .nav:before {
          width: 100%;
          height: 0.44rem;
          position: absolute;
          left: 0;
          top: 0.14rem;
          content: '';
          background: center -0.01rem no-repeat;
          background-size: 0.44rem;
        }

        .nav-bar .nav:after {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0.46rem;
          font-size: 0.4rem;
          text-align: center;
          -webkit-transform: scale(0.5);
          color: #666;
        }

        .nav-bar .nav-selected:before {
          background-position: center -0.45rem;
        }

        .nav-bar .nav-selected:after {
          color: #ff6a00;
        }

        .nav-bar .nav-plan:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNEMDE2MkZGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNEMDE2MzBGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDM0QwMTYyREZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDM0QwMTYyRUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PviXKroAAAFHUExURf////9qAGZmZry8vKmpqXl5ef/Qr4yMjP+rb/+0f//jz//27/+FL3t7e/+ELP+iX/98H/Ly8oCAgNnZ2e7u7qurq//z6mdnZ+Li4v/Qrs7Ozv9uBmpqav+tc//+/omJif90Eezs7NjY2P/38WhoaKqqqv99IKampnR0dP/gyv+ye5CQkODg4Kenp//v49vb2/+WS/9+I5WVlf+BKMPDw//l0v/8+v+MO//Lpubm5v/Gnf93F/+MOv+3g/+4hujo6nbw1v/EmpeXl//Xu3Z2dv/s3/9/JHd3d7i4uP+pa/+RQ4ODg8jIyKysrP92FH9/f97e3v/bwm1tbf95Gv+GMP+7im5ubv/y6enp6e/v79HR0d/f34iIiHV1df/w5fX19f/+/f/cw/39/f++kP7+/v/p2f/07Lm5uXx8fK+vr/+rcP95Gba2tsHtuEIAAAHMSURBVHja5NXnc4IwHIDhgNraWm21Ulute1s77N577733Xv//53JHQhIkBHp6p+f7SbnnIEeAHwAABKO9IqNbP6CTRIPctA6KonkdFcVA1qaboq8ILK+3h+innNvnpY7YDDGpjbHkprQxtvkpzcGA0jxMaYgltwPlluiLKvoBHylSO3Gj4r1uuetz+dcmxvEUYVNx6tYp2YlrJdJ2VDoBlxFgYb2WreDnw05Yjo9xjprEo33NmoYHWXhK543KVQRbWkZd3ufqYeLhh31dsjD1WsE+Wbios4PHzGUQnwLYwW4DbcoGxAZjQs0rf5t+OQMI9eGTL79oYrShdl75QxN1t4DGJnscw1azXvCfemZDgm4uACIaGxZYyXhugD6vYITbS5SeMMZC6Z7AIQ4WPF0YCzxMaj4mtAmMtRmsalMYafjPmW9F5Z3lWPC4MM6Q+xrJqDjcgVrCOJYkcDKmYk3oMoUWVMEDj72zsF4vVrCw3oY742EyZ+3hockmtdmjldwzxv4ij1uew1pgxd7n6mhi4yef91myeq1gtyyciztjneyyie8b7gi7stblmzmmqoy5a4hqhtpaye4fouot6oenn47vtryula/5pwegacg6nrivbfr0aaaaaelftksuqmcc');
        }

        .nav-bar .nav-plan:after {
          content: '\\9996\\9875';
        }

        .nav-bar .nav-friend:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJEQjI1RDRGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJEQjI1RDVGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkRCMjVEMkZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkRCMjVEM0ZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqrYN3AAAAMAUExURf/p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');
        }

        .nav-bar .nav-friend:after {
          content: '\\670B\\53CB';
        }

        .nav-bar .nav-my:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNEMDE2MkJGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNEMDE2MkNGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDM0QwMTYyOUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDM0QwMTYyQUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgmInGYAAAMAUExURcLC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');
        }

        .nav-bar .nav-my:after {
          content: '我的';
        }

        .nav-bar .icon-red {
          width: 0.6rem;
          height: 0.6rem;
          line-height: 0.6rem;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJEQjI1RDhGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJEQjI1RDlGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkRCMjVENkZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkRCMjVEN0ZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuW0zzIAAALxSURBVHja7Js/bBoxFMbf3dbCVCli6ZB2KVKWlkjZQlUpC4Il83WssiUbI1NHtrJFHZuZhShLF+iGFMgSCZa0QxYUKROUrfR75Vm60OOAC3/Odj7pi4dwh3/YPvvZ7xxakUa7uy9QZOEMnIbfwCk4CSfkYwO4D/fgLtyBW3DDuby8X0W9nCVDbqPw4EP4HexGvNUfuA1X4TPA/4oNMCD5Hjm4CL9f9o/IXwHX4TJ8AfjRxoABW0DxGX5L69EVXAJ0ba3AAH2FogLnaTM6h48B/nPRC90IsJ9QXG8QluS7r6Uuq2lh3Pw5ilN5KMVJZ/ARWvv30oABu4WCx80exVNNuADou0cDA/Yliu8yj8ZZPI8fAPo2MrC07A8NYP3Q+2et7c4yszwnyenqwpo6l/yUPo3xmA3TntR9fmB53Hukr7xpU5YzZVHB8+wz0ltDeGdycRLUwhUDYEkYKqFdWtbGeTJHeWH6v0tL1NNaYyCwLnHAkVFRlr+FcwbCkjDlgrp0kcxV8UGXlp2KmxUE73ERd+fXvHOiWtgzGFY1rOfv0odkvv4xOrK7eEfRN9x0EW8MbjFk1gJY1Zuz/CdD9ijDwGmLgNOuZvHuo+NlBk5ZBJxi4KRFwEkGTlgEnHDJMjHwwCLeAQP3LQLuM3DPIuAeA3ctAu4ycMci4A4DtywCbjFwQ0In08WMDVeyZdoWALeZVS08qhYAV8kX+PMp+shg2JEwjoElD6puMHBd5Xr519Jlg4HL/rW00gWNjyVM05WwPQSWs5eSgcAlf/Ze0PkwpzmYcoJ4DtjCZHg4qWMaHybrrqGwUCiwnJifGAB8EpSaOPU8CV37G+mb58Epxx+D/hG2xXNE4ww33dSUugfqKTFtYjzzhQeabBKo1MPQfMuZu5aSu7gf8+7dlja9nfxbubzp5vf7obbgcxtacd3myasdoyanjgvocptcm8/lGsrU83WRi6x7BeDpJY8I0Pa8xhMAv02mv6gVAh/LV/H+CjAAMcb20EEOFo4AAAAASUVORK5CYII=');
          background-size: 0.6rem;
          background-color: red;
          border-radius: 50%;
          position: absolute;
          font-size: 0.4rem;
          text-align: center;
          -webkit-transform: scale(0.5);
          left: 50%;
          top: -0.08rem;
          margin-left: -0.06rem;
          color: #fff;
        }

        .nav-bar-px {
          width: 100%;
          height: 49px;
          border-top: 1px solid #ddd;
          background-color: #fff;
          box-sizing: border-box;
          position: fixed;
          left: 0;
          top: 0;
          display: -webkit-box;
          display: -webkit-flex;
        }

        .nav-bar-px .nav {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          text-align: center;
          color: #666;
          position: relative;
        }

        .nav-bar-px .nav:before {
          width: 100%;
          height: 22px;
          position: absolute;
          left: 0;
          top: 7px;
          content: '';
          background: center -0.5px no-repeat;
          background-size: 22px;
        }

        .nav-bar-px .nav:after {
          width: 100%;
          position: absolute;
          left: 0;
          top: 23px;
          font-size: 20px;
          text-align: center;
          -webkit-transform: scale(0.5);
          color: #666;
        }

        .nav-bar-px .nav-selected:before {
          background-position: center -22.5px;
        }

        .nav-bar-px .nav-selected:after {
          color: #ff6a00;
        }

        .nav-bar-px .nav-plan:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNEMDE2MkZGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNEMDE2MzBGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDM0QwMTYyREZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDM0QwMTYyRUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PviXKroAAAFHUExURf////9qAGZmZry8vKmpqXl5ef/Qr4yMjP+rb/+0f//jz//27/+FL3t7e/+ELP+iX/98H/Ly8oCAgNnZ2e7u7qurq//z6mdnZ+Li4v/Qrs7Ozv9uBmpqav+tc//+/omJif90Eezs7NjY2P/38WhoaKqqqv99IKampnR0dP/gyv+ye5CQkODg4Kenp//v49vb2/+WS/9+I5WVlf+BKMPDw//l0v/8+v+MO//Lpubm5v/Gnf93F/+MOv+3g/+4hujo6nbw1v/EmpeXl//Xu3Z2dv/s3/9/JHd3d7i4uP+pa/+RQ4ODg8jIyKysrP92FH9/f97e3v/bwm1tbf95Gv+GMP+7im5ubv/y6enp6e/v79HR0d/f34iIiHV1df/w5fX19f/+/f/cw/39/f++kP7+/v/p2f/07Lm5uXx8fK+vr/+rcP95Gba2tsHtuEIAAAHMSURBVHja5NXnc4IwHIDhgNraWm21Ulute1s77N577733Xv//53JHQhIkBHp6p+f7SbnnIEeAHwAABKO9IqNbP6CTRIPctA6KonkdFcVA1qaboq8ILK+3h+innNvnpY7YDDGpjbHkprQxtvkpzcGA0jxMaYgltwPlluiLKvoBHylSO3Gj4r1uuetz+dcmxvEUYVNx6tYp2YlrJdJ2VDoBlxFgYb2WreDnw05Yjo9xjprEo33NmoYHWXhK543KVQRbWkZd3ufqYeLhh31dsjD1WsE+Wbios4PHzGUQnwLYwW4DbcoGxAZjQs0rf5t+OQMI9eGTL79oYrShdl75QxN1t4DGJnscw1azXvCfemZDgm4uACIaGxZYyXhugD6vYITbS5SeMMZC6Z7AIQ4WPF0YCzxMaj4mtAmMtRmsalMYafjPmW9F5Z3lWPC4MM6Q+xrJqDjcgVrCOJYkcDKmYk3oMoUWVMEDj72zsF4vVrCw3oY742EyZ+3hockmtdmjldwzxv4ij1uew1pgxd7n6mhi4yef91myeq1gtyyciztjneyyie8b7gi7stblmzmmqoy5a4hqhtpaye4fouot6oenn47vtryula/5pwegacg6nrivbfr0aaaaaelftksuqmcc');
        }

        .nav-bar-px .nav-plan:after {
          content: '\\9996\\9875';
        }

        .nav-bar-px .nav-friend:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJEQjI1RDRGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJEQjI1RDVGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkRCMjVEMkZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkRCMjVEM0ZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqrYN3AAAAMAUExURf/p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');
        }

        .nav-bar-px .nav-friend:after {
          content: '\\670B\\53CB';
        }

        .nav-bar-px .nav-my:before {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABaCAMAAAD0IUTvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNEMDE2MkJGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNEMDE2MkNGQUVEMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDM0QwMTYyOUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDM0QwMTYyQUZBRUQxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgmInGYAAAMAUExURcLC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');
        }

        .nav-bar-px .nav-my:after {
          content: '\\6211\\7684';
        }

        .nav-bar-px .icon-red {
          width: 30px;
          height: 30px;
          line-height: 30px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJEQjI1RDhGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJEQjI1RDlGQUVFMTFFNUFDODU5NkZBQzIwMTRDRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkRCMjVENkZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkRCMjVEN0ZBRUUxMUU1QUM4NTk2RkFDMjAxNENGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuW0zzIAAALxSURBVHja7Js/bBoxFMbf3dbCVCli6ZB2KVKWlkjZQlUpC4Il83WssiUbI1NHtrJFHZuZhShLF+iGFMgSCZa0QxYUKROUrfR75Vm60OOAC3/Odj7pi4dwh3/YPvvZ7xxakUa7uy9QZOEMnIbfwCk4CSfkYwO4D/fgLtyBW3DDuby8X0W9nCVDbqPw4EP4HexGvNUfuA1X4TPA/4oNMCD5Hjm4CL9f9o/IXwHX4TJ8AfjRxoABW0DxGX5L69EVXAJ0ba3AAH2FogLnaTM6h48B/nPRC90IsJ9QXG8QluS7r6Uuq2lh3Pw5ilN5KMVJZ/ARWvv30oABu4WCx80exVNNuADou0cDA/Yliu8yj8ZZPI8fAPo2MrC07A8NYP3Q+2et7c4yszwnyenqwpo6l/yUPo3xmA3TntR9fmB53Hukr7xpU5YzZVHB8+wz0ltDeGdycRLUwhUDYEkYKqFdWtbGeTJHeWH6v0tL1NNaYyCwLnHAkVFRlr+FcwbCkjDlgrp0kcxV8UGXlp2KmxUE73ERd+fXvHOiWtgzGFY1rOfv0odkvv4xOrK7eEfRN9x0EW8MbjFk1gJY1Zuz/CdD9ijDwGmLgNOuZvHuo+NlBk5ZBJxi4KRFwEkGTlgEnHDJMjHwwCLeAQP3LQLuM3DPIuAeA3ctAu4ycMci4A4DtywCbjFwQ0In08WMDVeyZdoWALeZVS08qhYAV8kX+PMp+shg2JEwjoElD6puMHBd5Xr519Jlg4HL/rW00gWNjyVM05WwPQSWs5eSgcAlf/Ze0PkwpzmYcoJ4DtjCZHg4qWMaHybrrqGwUCiwnJifGAB8EpSaOPU8CV37G+mb58Epxx+D/hG2xXNE4ww33dSUugfqKTFtYjzzhQeabBKo1MPQfMuZu5aSu7gf8+7dlja9nfxbubzp5vf7obbgcxtacd3myasdoyanjgvocptcm8/lGsrU83WRi6x7BeDpJY8I0Pa8xhMAv02mv6gVAh/LV/H+CjAAMcb20EEOFo4AAAAASUVORK5CYII=');
          background-size: 30px;
          background-color: red;
          border-radius: 50%;
          position: absolute;
          font-size: 20px;
          text-align: center;
          -webkit-transform: scale(0.5);
          left: 50%;
          top: -4px;
          margin-left: -3px;
          color: #fff;
        }
      `}
    </style>
  </div>
);
