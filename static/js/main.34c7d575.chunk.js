(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var i,r,a,c,o,s,l,d=n(1),p=n.n(d),b=n(50),u=n.n(b),j=n(20),h=n(5),x=n(12),g=n.n(x),v=n(19),O=n(14),m=n(15),f=n(17),w=n(16),y=n(3),k=n(2),S=n(23),T=n(4),_=n.n(T),z=n(0),M=k.c.div(i||(i=Object(y.a)(["\n  padding: 15px;\n  font-size: 12px;\n"]))),R=k.c.div(r||(r=Object(y.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),C=k.c.span(a||(a=Object(y.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),P=k.c.span(c||(c=Object(y.a)(["\n  font-size: 15px;\n  position: absolute;\n  bottom: 50%;\n  right: 30px;\n  opacity: 0;\n"]))),U=k.c.div(o||(o=Object(y.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),R,C,P),N=k.c.span(s||(s=Object(y.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),A=k.c.span(l||(l=Object(y.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),F=function(e){var t=e.id,i=e.imageUrl,r=e.title,a=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(z.jsxs)(M,{children:[Object(z.jsxs)(U,{children:[Object(z.jsx)(R,{bgUrl:i?"https://image.tmdb.org/t/p/w300".concat(i):n(31).default}),Object(z.jsxs)(C,{children:[Object(z.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",a,"/10"]}),Object(z.jsx)(j.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(z.jsx)(P,{children:"View detail"})})]}),Object(z.jsx)(N,{children:r.length>18?"".concat(r.substring(0,18),"..."):r}),Object(z.jsx)(A,{children:c})]})};F.prototype={id:_.a.number,imageUrl:_.a.string,title:_.a.string.isRequired,rating:_.a.number,year:_.a.string.isRequired,isMovie:_.a.bool};var I,q,V=F,D=n(21),H=n.n(D),B=(n(38),n(39),k.c.div(I||(I=Object(y.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"])))),L=k.c.span(q||(q=Object(y.a)(["\n  font-size: 25px;\n  font-weight: 600;\n"])));function J(e){var t=e.onClick;return Object(z.jsx)("span",{className:"priv_arrow",style:{position:"absolute",bottom:"58%",right:"-15px",color:"#fff",width:"25px",height:"25px",textAlign:"center",lineHeight:"40px",display:"inline-block",fontSize:"40px",cursor:"pointer"},onClick:t,children:Object(z.jsx)("i",{children:">"})})}function E(e){var t=e.onClick;return Object(z.jsx)("span",{className:"priv_arrow",style:{position:"absolute",bottom:"58%",left:"-15px",color:"#fff",width:"25px",height:"25px",textAlign:"center",lineHeight:"40px",display:"inline-block",fontSize:"40px",cursor:"pointer"},onClick:t,children:Object(z.jsx)("i",{children:"<"})})}var G={className:"center",infinite:!0,centerPadding:"60px",slidesToShow:13,swipeToSlide:!0,nextArrow:Object(z.jsx)(J,{}),prevArrow:Object(z.jsx)(E,{}),responsive:[{breakpoint:1300,settings:{slidesToShow:10,slidesToScroll:10}},{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:7}},{breakpoint:600,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]},K=function(e){var t=e.title,n=e.nowPlaying,i=e.isMovie;return Object(z.jsxs)(B,{children:[Object(z.jsx)(L,{children:t}),n&&n.length>0&&Object(z.jsx)(H.a,Object(S.a)(Object(S.a)({},G),{},{children:n.map((function(e){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(V,{id:e.id,title:i?e.original_title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,isMovie:i,year:function(){return i?e.release_date.substring(0,4):e.first_air_date.substring(0,4)}},e.id)})}))}))]})};K.prototyps={title:_.a.string.isRequired};var Q,W,X,Y=K,Z=k.c.div(Q||(Q=Object(y.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]))),$=function(){return Object(z.jsx)(Z,{children:Object(z.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},ee=k.c.div(W||(W=Object(y.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),te=k.c.span(X||(X=Object(y.a)(["\n  color: ",";\n  font-weight: 600;\n"])),(function(e){return e.color})),ne=function(e){var t=e.text,n=e.color;return Object(z.jsx)(ee,{children:Object(z.jsx)(te,{color:n,children:t})})};ne.prototype={text:_.a.string.isRequired,color:_.a.string.isRequired};var ie,re,ae,ce,oe,se,le,de,pe,be,ue,je,he,xe,ge,ve,Oe,me,fe,we,ye,ke,Se,Te,_e,ze,Me,Re,Ce,Pe,Ue,Ne,Ae,Fe,Ie,qe,Ve,De,He,Be,Le,Je,Ee,Ge,Ke=ne,Qe=k.c.div(ie||(ie=Object(y.a)(["\n  margin: 0px;\n  padding: 0px;\n  padding-bottom: 30px;\n"]))),We=k.c.div(re||(re=Object(y.a)(["\n  position: relative;\n"]))),Xe=k.c.div(ae||(ae=Object(y.a)(["\n  position: absolute;\n  bottom: 1%;\n  width: 100%;\n  z-index: 1;\n"]))),Ye=k.c.div(ce||(ce=Object(y.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  height: ",";\n  z-index: -1;\n  padding: 0px 70px;\n  padding-top: 50px;\n"])),(function(e){return e.bgUrl}),(function(e){return e.thumb?"20vh":"calc(100vh - 50px);"})),Ze=k.c.div(oe||(oe=Object(y.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 15px;\n  width: 100%;\n  height: 200px;\n  &:hover {\n    border: 5px solid white;\n  }\n"])),(function(e){return e.bgUrl})),$e=k.c.div(se||(se=Object(y.a)(["\n  position: relative;\n  top: 40%;\n  width: 50%;\n  font-size: 72px;\n"]))),et=k.c.span(le||(le=Object(y.a)(["\n  position: relative;\n  top: 45%;\n  width: 50%;\n  font-size: 40px;\n"]))),tt=k.c.div(de||(de=Object(y.a)(["\n  position: relative;\n  top: 50%;\n  width: 50%;\n  font-size: 20px;\n"]))),nt=k.c.div(pe||(pe=Object(y.a)(["\n  position: relative;\n  font-size: 24px;\n  top: 80%;\n  left: 5%;\n"]))),it=k.c.div(be||(be=Object(y.a)(["\n  padding: ",";\n  margin: 0px;\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.thumb})),rt=k.c.div(ue||(ue=Object(y.a)(["\n  position: relative;\n  padding-left: 5px;\n  font-size: 65px;\n  left: 90%;\n  top: 40%;\n  background-color: gray;\n  opacity: 0.65;\n  border-radius: 50%;\n  height: 70px;\n  width: 70px;\n  text-align: center;\n  line-height: 60px;\n"]))),at=function(e){Object(f.a)(n,e);var t=Object(w.a)(n);function n(e){var i;return Object(O.a)(this,n),(i=t.call(this,e)).state={nav1:null,nav2:null},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({nav1:this.slider1,nav2:this.slider2})}},{key:"render",value:function(){var e=this;return Object(z.jsxs)(Qe,{children:[Object(z.jsx)(We,{children:Object(z.jsx)(H.a,{asNavFor:this.state.nav2,ref:function(t){return e.slider1=t},arrows:!1,children:this.props.nowPlaying.map((function(t,n){return Object(z.jsx)(it,{thumb:"0",children:Object(z.jsxs)(Ye,{thumb:!1,bgUrl:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),children:[Object(z.jsx)($e,{children:e.props.isMovie?t.title:t.name}),Object(z.jsx)(et,{children:e.props.isMovie?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(z.jsx)(et,{children:" \u2022 \ud83c\udf1f ".concat(t.vote_average,"/10")}),Object(z.jsx)(tt,{children:t.overview}),Object(z.jsx)(j.b,{to:e.props.isMovie?"/movie/".concat(t.id):"/tv/".concat(t.id),children:Object(z.jsx)(rt,{children:">"})})]})},n)}))})}),Object(z.jsx)(Xe,{children:Object(z.jsx)(H.a,{asNavFor:this.state.nav1,ref:function(t){return e.slider2=t},slidesToShow:5,swipeToSlide:!0,focusOnSelect:!0,arrows:!1,centerMode:!0,autoplay:!1,autoplaySpeed:5e3,responsive:[{breakpoint:960,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}}],children:this.props.nowPlaying.map((function(t,n){return Object(z.jsx)(it,{thumb:"10px",children:Object(z.jsx)(Ze,{thumb:!0,bgUrl:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),children:Object(z.jsx)(nt,{children:e.props.isMovie?t.title.slice(0,30):t.name.slice(0,30)})},t.id)},n)}))})})]})}}]),n}(d.Component),ct=n(18),ot=k.c.div(je||(je=Object(y.a)([""]))),st=k.c.div(he||(he=Object(y.a)([""]))),lt=k.c.div(xe||(xe=Object(y.a)(["\n  padding-left: 30px;\n  padding-right: 30px;\n"]))),dt=function(e){var t=e.nowPlaying,n=e.upComing,i=e.popular,r=e.loading,a=e.error;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ct.b,{children:Object(z.jsx)("title",{children:"Movies | Songfilx"})}),r?Object(z.jsx)($,{}):Object(z.jsxs)(ot,{children:[Object(z.jsx)(st,{children:Object(z.jsx)(at,{nowPlaying:t,isMovie:!0})}),Object(z.jsxs)(lt,{children:[t&&t.length>0&&Object(z.jsx)(Y,{title:"Now Playing",nowPlaying:t,isMovie:!0}),i&&i.length>0&&Object(z.jsx)(Y,{title:"Popular Movies",nowPlaying:i,isMovie:!0}),n&&n.length>0&&Object(z.jsx)(Y,{title:"Upcoming Movies",nowPlaying:n,isMovie:!0}),a&&Object(z.jsx)(Ke,{color:"#e74c3c",text:a})]})]})]})},pt=n(55),bt=n.n(pt).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"975b0f546150de58620140a530874329",language:"en-US"}}),ut=function(){return bt.get("tv/top_rated")},jt=function(){return bt.get("tv/popular")},ht=function(){return bt.get("tv/airing_today")},xt=function(e){return bt.get("tv/".concat(e),{params:{append_to_response:"videos"}})},gt=function(e){return bt.get("search/tv",{params:{query:encodeURIComponent(e)}})},vt=function(e){return bt.get("tv/".concat(e,"/videos?"))},Ot=function(e){return bt.get("tv/".concat(e,"/credits?"))},mt=function(){return bt.get("movie/now_playing")},ft=function(){return bt.get("movie/upcoming")},wt=function(){return bt.get("movie/popular")},yt=function(e){return bt.get("movie/".concat(e),{params:{append_to_response:"vidoes"}})},kt=function(e){return bt.get("search/movie",{params:{query:encodeURIComponent(e)}})},St=function(e){return bt.get("movie/".concat(e,"/videos?"))},Tt=function(e){return bt.get("movie/".concat(e,"/credits?"))},_t=function(e){Object(f.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upComing:null,popular:null,error:null,loading:!0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,i,r,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt();case 3:return t=e.sent,n=t.data.results,e.next=7,ft();case 7:return i=e.sent,r=i.data.results,e.next=11,wt();case 11:a=e.sent,c=a.data.results,this.setState({nowPlaying:n,upComing:r,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,i=e.popular,r=e.error,a=e.loading;return Object(z.jsx)(dt,{nowPlaying:t,upComing:n,popular:i,error:r,loading:a})}}]),n}(p.a.Component),zt=k.c.div(ge||(ge=Object(y.a)(["\n  padding: 20px;\n"]))),Mt=k.c.div(ve||(ve=Object(y.a)([""]))),Rt=k.c.div(Oe||(Oe=Object(y.a)([""]))),Ct=function(e){var t=e.topRated,n=e.popular,i=e.airingToday,r=e.loading,a=e.error;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ct.a,{children:Object(z.jsx)("title",{children:"TV Shows | Songfilx"})}),r?Object(z.jsx)($,{}):Object(z.jsxs)(zt,{children:[Object(z.jsx)(Mt,{children:Object(z.jsx)(at,{nowPlaying:t,isMovie:!1})}),Object(z.jsxs)(Rt,{children:[t&&t.length>0&&Object(z.jsx)(Y,{title:"Top Rated Shows",nowPlaying:t,isMovie:!1}),n&&n.length>0&&Object(z.jsx)(Y,{title:"Popular Show",nowPlaying:n,isMovie:!1}),i&&i.length>0&&Object(z.jsx)(Y,{title:"Airing Today",nowPlaying:i,isMovie:!1}),a&&Object(z.jsx)(Ke,{color:"#e74c3c",text:a})]})]})]})},Pt=function(e){Object(f.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,i,r,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ut();case 3:return t=e.sent,n=t.data.results,e.next=7,jt();case 7:return i=e.sent,r=i.data.results,e.next=11,ht();case 11:a=e.sent,c=a.data.results,this.setState({topRated:n,popular:r,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,i=e.airingToday,r=e.error,a=e.loading;return Object(z.jsx)(Ct,{topRated:t,popular:n,airingToday:i,error:r,loading:a})}}]),n}(p.a.Component),Ut=k.c.div(me||(me=Object(y.a)(["\n  padding: 0px 20px;\n"]))),Nt=k.c.form(fe||(fe=Object(y.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),At=k.c.input(we||(we=Object(y.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Ft=function(e){var t=e.movieResult,n=e.tvResult,i=e.loading,r=e.searchTerm,a=e.handleSubmit,c=e.error,o=e.updateTerm;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ct.a,{children:Object(z.jsx)("title",{children:"Search | Songfilx"})}),Object(z.jsxs)(Ut,{children:[Object(z.jsx)(Nt,{onSubmit:a,children:Object(z.jsx)(At,{placeholder:"Search Movies or TV Shows...",value:r,onChange:o})}),i?Object(z.jsx)($,{}):Object(z.jsxs)(z.Fragment,{children:[t&&t.length>0&&Object(z.jsx)(Y,{title:"Movie Result",nowPlaying:t,isMovie:!0}),n&&n.length>0&&Object(z.jsx)(Y,{title:"TV Show Result",nowPlaying:n,isMovie:!1}),c&&Object(z.jsx)(Ke,{color:"#e74c3c",text:c}),n&&t&&0===n.length&&0===t.length&&Object(z.jsx)(Ke,{text:"Nothing found for",color:"#95a5a6"})]})]})]})},It=function(e){Object(f.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={movieResult:null,tvResult:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(v.a)(g.a.mark((function t(){var n,i,r,a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,t.next=4,kt(n);case 4:return i=t.sent,r=i.data.results,t.next=8,gt(n);case 8:a=t.sent,c=a.data.results,e.setState({movieResult:r,tvResult:c,loading:!0}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.setState({error:"Can't find results."});case 16:return t.prev=16,e.setState({loading:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResult,n=e.tvResult,i=e.searchTerm,r=e.error,a=e.loading;return Object(z.jsx)(Ft,{movieResult:t,tvResult:n,searchTerm:i,error:r,loading:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(p.a.Component),qt=k.c.header(ye||(ye=Object(y.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.7);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Vt=k.c.ul(ke||(ke=Object(y.a)(["\n  display: flex;\n"]))),Dt=k.c.li(Se||(Se=Object(y.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Ht=Object(k.c)(j.b)(Te||(Te=Object(y.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Bt=Object(h.g)((function(e){var t=e.location.pathname;return Object(z.jsx)(qt,{children:Object(z.jsxs)(Vt,{children:[Object(z.jsx)(Dt,{current:"/"===t,children:Object(z.jsx)(Ht,{to:"/",children:"Movies"})}),Object(z.jsx)(Dt,{current:"/tv"===t,children:Object(z.jsx)(Ht,{to:"/tv",children:"TV"})}),Object(z.jsx)(Dt,{current:"/search"===t,children:Object(z.jsx)(Ht,{to:"/search",children:"Search"})})]})})})),Lt=n(56),Jt=n.n(Lt),Et=k.c.div(_e||(_e=Object(y.a)(["\n  padding: 15px;\n"]))),Gt=k.c.div(ze||(ze=Object(y.a)(["\n  background-image: url(",");\n  height: 180px;\n  width: 160px;\n  background-size: cover;\n  background-position: center center;\n  border-radius: 4px;\n"])),(function(e){return e.bgUrl})),Kt=k.c.div(Me||(Me=Object(y.a)(["\n  margin-bottom: 5px;\n  position: relative;\n"]))),Qt=k.c.span(Re||(Re=Object(y.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),Wt=k.c.span(Ce||(Ce=Object(y.a)(["\n  font-size: 10px;\n"]))),Xt=function(e){var t=e.character,i=e.original_name,r=e.profile_path;return Object(z.jsxs)(Et,{children:[Object(z.jsx)(Kt,{children:Object(z.jsx)(Gt,{bgUrl:r?"https://image.tmdb.org/t/p/w200".concat(r):n(31).default})}),Object(z.jsx)(Wt,{children:t}),Object(z.jsx)(Qt,{children:i})]})},Yt=k.c.div(Pe||(Pe=Object(y.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Zt=k.c.div(Ue||(Ue=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),$t=k.c.div(Ne||(Ne=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),en=k.c.div(Ae||(Ae=Object(y.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),tn=k.c.div(Fe||(Fe=Object(y.a)(["\n  width: 70%;\n  height: 20%;\n  margin-left: 50px;\n"]))),nn=k.c.h3(Ie||(Ie=Object(y.a)(["\n  font-size: 64px;\n"]))),rn=k.c.div(qe||(qe=Object(y.a)(["\n  margin: 20px 0px;\n"]))),an=k.c.span(Ve||(Ve=Object(y.a)(["\n  margin-left: 10px;\n  font-size: 24px;\n"]))),cn=k.c.span(De||(De=Object(y.a)(["\n  margin: 0 10px;\n"]))),on=k.c.p(He||(He=Object(y.a)(["\n  font-size: 20px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 70%;\n  margin-left: 10px;\n"]))),sn=k.c.div(Be||(Be=Object(y.a)(["\n  position: relative;\n  display: flex;\n  bottom: -20%;\n  margin-left: 45px;\n  padding: 10px;\n  height: 300px;\n  bottom: -11%;\n"]))),ln=k.c.div(Le||(Le=Object(y.a)(["\n  position: relative;\n  bottom: -70px;\n  left: -8%;\n  display: flex;\n"]))),dn=k.c.div(Je||(Je=Object(y.a)([""])));function pn(e){var t=e.onClick;return Object(z.jsx)("span",{className:"priv_arrow",style:{position:"absolute",bottom:"58%",right:"-15px",color:"#fff",width:"25px",height:"25px",textAlign:"center",lineHeight:"40px",display:"inline-block",fontSize:"40px",cursor:"pointer"},onClick:t,children:Object(z.jsx)("i",{children:">"})})}function bn(e){var t=e.onClick;return Object(z.jsx)("span",{className:"priv_arrow",style:{position:"absolute",bottom:"58%",left:"-15px",color:"#fff",width:"25px",height:"25px",textAlign:"center",lineHeight:"40px",display:"inline-block",fontSize:"40px",cursor:"pointer"},onClick:t,children:Object(z.jsx)("i",{children:"<"})})}var un,jn={className:"center",infinite:!0,centerPadding:"60px",slidesToShow:8,swipeToSlide:!0,nextArrow:Object(z.jsx)(pn,{}),prevArrow:Object(z.jsx)(bn,{}),responsive:[{breakpoint:1300,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]},hn=k.c.p(Ee||(Ee=Object(y.a)(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-size: 50px;\n"]))),xn=k.c.div(Ge||(Ge=Object(y.a)(["\n  position: relative;\n  overflow: hidden;\n  bottom: -20%;\n  margin-left: 45px;\n  padding: 10px;\n  width: 1500px;\n  height: 300px;\n  @media screen and (max-width: 1300px) {\n    width: 1300px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 1024px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 600px;\n  }\n  @media screen and (max-width: 480px) {\n    width: 480px;\n  }\n"]))),gn=function(e){var t=e.cast,i=e.videos,r=e.result,a=e.loading;e.error;return a?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ct.a,{children:Object(z.jsx)("title",{children:"Loading | Songfilx"})}),Object(z.jsx)($,{})]}):Object(z.jsxs)(Yt,{children:[Object(z.jsx)(ct.a,{children:Object(z.jsxs)("title",{children:[r.original_title?r.original_title:r.original_name,"| Songfilx"]})}),Object(z.jsx)(Zt,{bgImage:"https://image.tmdb.org/t/p/original".concat(r.backdrop_path)}),Object(z.jsxs)($t,{children:[Object(z.jsx)(en,{bgImage:r.poster_path?"https://image.tmdb.org/t/p/original".concat(r.poster_path):n(31)}),Object(z.jsxs)(dn,{children:[Object(z.jsxs)(tn,{children:[Object(z.jsxs)(nn,{children:[console.log({videos:i}),r.original_title?r.original_title:r.original_name]}),Object(z.jsxs)(rn,{children:[Object(z.jsx)(an,{children:r.release_date?r.release_date.substring(0,4):r.first_air_date.substring(0,4)}),Object(z.jsx)(cn,{children:"\u2022"}),Object(z.jsx)(an,{children:r.runtime?"".concat(r.runtime," min"):"".concat(r.episode_run_time," min")}),Object(z.jsx)(cn,{children:"\u2022"}),Object(z.jsx)(an,{children:r.genres&&r.genres.map((function(e,t){return t===r.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(z.jsx)(on,{children:r.overview})]}),Object(z.jsxs)(sn,{children:[Object(z.jsx)(hn,{children:"Trailer"}),Object(z.jsx)(ln,{children:i.map((function(e,t){return Object(z.jsx)(Jt.a,{url:"https://www.youtube.com/watch?v=".concat(e.key),width:"100%",height:"100%"},t)}))})]}),Object(z.jsxs)(xn,{children:[Object(z.jsx)(hn,{children:"Actors"}),Object(z.jsx)(H.a,Object(S.a)(Object(S.a)({},jn),{},{children:t.map((function(e,t){return Object(z.jsx)(Xt,{character:e.character,original_name:e.original_name,profile_path:e.profile_path},t)}))}))]})]})]})]})},vn=function(e){Object(f.a)(n,e);var t=Object(w.a)(n);function n(e){var i;Object(O.a)(this,n),i=t.call(this,e);var r=e.location.pathname;return i.state={result:null,vidoes:null,error:null,loading:!0,isMovie:r.includes("/movie/")},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,i,r,a,c,o,s,l,d,p,b,u,j;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,i=t.history.push,r=this.state.isMovie,a=Number(n),!isNaN(a)){e.next=5;break}return e.abrupt("return",i("/"));case 5:if(c=null,o=null,s=null,e.prev=8,!r){e.next=24;break}return e.next=12,yt(a);case 12:return l=e.sent,c=l.data,e.next=16,St(a);case 16:return d=e.sent,o=d.data.results,e.next=20,Tt(a);case 20:p=e.sent,s=p.data.cast,e.next=36;break;case 24:return e.next=26,xt(a);case 26:return b=e.sent,c=b.data,e.next=30,vt(a);case 30:return u=e.sent,o=u.data.results,e.next=34,Ot(a);case 34:j=e.sent,s=j.data.cast;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(8),this.setState({error:"Can't find anything."});case 41:return e.prev=41,this.setState({loading:!1,result:c,vidoes:o,cast:s}),e.finish(41);case 44:case"end":return e.stop()}}),e,this,[[8,38,41,44]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.cast,n=e.vidoes,i=e.result,r=e.error,a=e.loading;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(gn,{cast:t,videos:n,result:i,error:r,loading:a})})}}]),n}(p.a.Component),On=function(){return Object(z.jsxs)(j.a,{children:[Object(z.jsx)(Bt,{}),Object(z.jsxs)(h.d,{children:[Object(z.jsx)(h.b,{path:"/",exact:!0,component:_t}),Object(z.jsx)(h.b,{path:"/tv",exact:!0,component:Pt}),Object(z.jsx)(h.b,{path:"/search",component:It}),Object(z.jsx)(h.b,{path:"/movie/:id",component:vn}),Object(z.jsx)(h.b,{path:"/tv/:id",component:vn}),Object(z.jsx)(h.a,{from:"*",to:"/"})]})]})},mn=n(57),fn=Object(k.a)(un||(un=Object(y.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),mn.a);var wn=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(On,{}),Object(z.jsx)(fn,{})]})};u.a.render(Object(z.jsx)(p.a.StrictMode,{children:Object(z.jsx)(wn,{})}),document.getElementById("root"))},31:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.a2f288dd.png"}},[[122,1,2]]]);
//# sourceMappingURL=main.34c7d575.chunk.js.map