/** Pako GZIP */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pako=t()}}(function(){return function t(e,a,n){function r(s,h){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!h&&l)return l(s,!0);if(i)return i(s,!0);var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}var _=a[s]={exports:{}};e[s][0].call(_.exports,function(t){var a=e[s][1][t];return r(a||t)},_,_.exports,t,e,a,n)}return a[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,a){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var r in a)n(a,r)&&(t[r]=a[r])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,a,n,r){if(e.subarray&&t.subarray)t.set(e.subarray(a,a+n),r);else for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){var e,a,n,r,i,s;for(n=0,e=0,a=t.length;e<a;e++)n+=t[e].length;for(s=new Uint8Array(n),r=0,e=0,a=t.length;e<a;e++)i=t[e],s.set(i,r),r+=i.length;return s}},s={arraySet:function(t,e,a,n,r){for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,i)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,s))},a.setTyped(r)},{}],2:[function(t,e,a){"use strict";function n(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(t,e));for(var a="",n=0;n<e;n++)a+=String.fromCharCode(t[n]);return a}var r=t("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var h=new r.Buf8(256),l=0;l<256;l++)h[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;h[254]=h[254]=1,a.string2buf=function(t){var e,a,n,i,s,h=t.length,l=0;for(i=0;i<h;i++)55296==(64512&(a=t.charCodeAt(i)))&&i+1<h&&56320==(64512&(n=t.charCodeAt(i+1)))&&(a=65536+(a-55296<<10)+(n-56320),i++),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new r.Buf8(l),s=0,i=0;s<l;i++)55296==(64512&(a=t.charCodeAt(i)))&&i+1<h&&56320==(64512&(n=t.charCodeAt(i+1)))&&(a=65536+(a-55296<<10)+(n-56320),i++),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return n(t,t.length)},a.binstring2buf=function(t){for(var e=new r.Buf8(t.length),a=0,n=e.length;a<n;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,r,i,s,l=e||t.length,o=new Array(2*l);for(r=0,a=0;a<l;)if((i=t[a++])<128)o[r++]=i;else if((s=h[i])>4)o[r++]=65533,a+=s-1;else{for(i&=2===s?31:3===s?15:7;s>1&&a<l;)i=i<<6|63&t[a++],s--;s>1?o[r++]=65533:i<65536?o[r++]=i:(i-=65536,o[r++]=55296|i>>10&1023,o[r++]=56320|1023&i)}return n(o,r)},a.utf8border=function(t,e){var a;for((e=e||t.length)>t.length&&(e=t.length),a=e-1;a>=0&&128==(192&t[a]);)a--;return a<0?e:0===a?e:a+h[t[a]]>e?a:e}},{"./common":1}],3:[function(t,e,a){"use strict";e.exports=function(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16|0}},{}],4:[function(t,e,a){"use strict";var n=function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}();e.exports=function(t,e,a,r){var i=n,s=r+a;t^=-1;for(var h=r;h<s;h++)t=t>>>8^i[255&(t^e[h])];return-1^t}},{}],5:[function(t,e,a){"use strict";function n(t,e){return t.msg=S[e],e}function r(t){return(t<<1)-(t>4?9:0)}function i(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(x.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function h(t,e){B._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function o(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function _(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,x.arraySet(e,t.input,t.next_in,r,a),1===t.state.wrap?t.adler=A(t.adler,e,r,a):2===t.state.wrap&&(t.adler=C(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)}function d(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-nt?t.strstart-(t.w_size-nt):0,o=t.window,_=t.w_mask,d=t.prev,u=t.strstart+at,f=o[i+s-1],c=o[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(a=e,o[a+s]===c&&o[a+s-1]===f&&o[a]===o[i]&&o[++a]===o[i+1]){i+=2,a++;do{}while(o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&i<u);if(n=at-(u-i),i=u-at,n>s){if(t.match_start=e,s=n,n>=h)break;f=o[i+s-1],c=o[i+s]}}}while((e=d[e&_])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead}function u(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-nt)){x.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=s?n-s:0}while(--a);e=a=s;do{n=t.prev[--e],t.prev[e]=n>=s?n-s:0}while(--a);r+=s}if(0===t.strm.avail_in)break;if(a=_(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=et)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+et-1])&t.hash_mask,t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<et)););}while(t.lookahead<nt&&0!==t.strm.avail_in)}function f(t,e){for(var a,n;;){if(t.lookahead<nt){if(u(t),t.lookahead<nt&&e===j)return ut;if(0===t.lookahead)break}if(a=0,t.lookahead>=et&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-nt&&(t.match_length=d(t,a)),t.match_length>=et)if(n=B._tr_tally(t,t.strstart-t.match_start,t.match_length-et),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=et){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else n=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(h(t,!1),0===t.strm.avail_out))return ut}return t.insert=t.strstart<et-1?t.strstart:et-1,e===D?(h(t,!0),0===t.strm.avail_out?ct:pt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?ut:ft}function c(t,e){for(var a,n,r;;){if(t.lookahead<nt){if(u(t),t.lookahead<nt&&e===j)return ut;if(0===t.lookahead)break}if(a=0,t.lookahead>=et&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=et-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-nt&&(t.match_length=d(t,a),t.match_length<=5&&(t.strategy===H||t.match_length===et&&t.strstart-t.match_start>4096)&&(t.match_length=et-1)),t.prev_length>=et&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-et,n=B._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-et),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+et-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=et-1,t.strstart++,n&&(h(t,!1),0===t.strm.avail_out))return ut}else if(t.match_available){if((n=B._tr_tally(t,0,t.window[t.strstart-1]))&&h(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return ut}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=B._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<et-1?t.strstart:et-1,e===D?(h(t,!0),0===t.strm.avail_out?ct:pt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?ut:ft}function p(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=at){if(u(t),t.lookahead<=at&&e===j)return ut;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=et&&t.strstart>0&&(r=t.strstart-1,(n=s[r])===s[++r]&&n===s[++r]&&n===s[++r])){i=t.strstart+at;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=at-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=et?(a=B._tr_tally(t,1,t.match_length-et),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(h(t,!1),0===t.strm.avail_out))return ut}return t.insert=0,e===D?(h(t,!0),0===t.strm.avail_out?ct:pt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?ut:ft}function g(t,e){for(var a;;){if(0===t.lookahead&&(u(t),0===t.lookahead)){if(e===j)return ut;break}if(t.match_length=0,a=B._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(h(t,!1),0===t.strm.avail_out))return ut}return t.insert=0,e===D?(h(t,!0),0===t.strm.avail_out?ct:pt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?ut:ft}function m(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}function b(t){t.window_size=2*t.w_size,i(t.head),t.max_lazy_match=z[t.level].max_lazy,t.good_match=z[t.level].good_length,t.nice_match=z[t.level].nice_length,t.max_chain_length=z[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=et-1,t.match_available=0,t.ins_h=0}function w(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=J,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new x.Buf16(2*$),this.dyn_dtree=new x.Buf16(2*(2*Y+1)),this.bl_tree=new x.Buf16(2*(2*Z+1)),i(this.dyn_ltree),i(this.dyn_dtree),i(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new x.Buf16(tt+1),this.heap=new x.Buf16(2*X+1),i(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new x.Buf16(2*X+1),i(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=G,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?it:_t,t.adler=2===e.wrap?0:1,e.last_flush=j,B._tr_init(e),O):n(t,T)}function y(t){var e=v(t);return e===O&&b(t.state),e}function k(t,e,a,r,i,s){if(!t)return T;var h=1;if(e===R&&(e=6),r<0?(h=0,r=-r):r>15&&(h=2,r-=16),i<1||i>Q||a!==J||r<8||r>15||e<0||e>9||s<0||s>M)return n(t,T);8===r&&(r=9);var l=new w;return t.state=l,l.strm=t,l.wrap=h,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+et-1)/et),l.window=new x.Buf8(2*l.w_size),l.head=new x.Buf16(l.hash_size),l.prev=new x.Buf16(l.w_size),l.lit_bufsize=1<<i+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new x.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,y(t)}var z,x=t("../utils/common"),B=t("./trees"),A=t("./adler32"),C=t("./crc32"),S=t("./messages"),j=0,E=1,U=3,D=4,I=5,O=0,q=1,T=-2,L=-3,N=-5,R=-1,H=1,F=2,K=3,M=4,P=0,G=2,J=8,Q=9,V=15,W=8,X=286,Y=30,Z=19,$=2*X+1,tt=15,et=3,at=258,nt=at+et+1,rt=32,it=42,st=69,ht=73,lt=91,ot=103,_t=113,dt=666,ut=1,ft=2,ct=3,pt=4,gt=3;z=[new m(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(u(t),0===t.lookahead&&e===j)return ut;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,h(t,!1),0===t.strm.avail_out))return ut;if(t.strstart-t.block_start>=t.w_size-nt&&(h(t,!1),0===t.strm.avail_out))return ut}return t.insert=0,e===D?(h(t,!0),0===t.strm.avail_out?ct:pt):(t.strstart>t.block_start&&(h(t,!1),t.strm.avail_out),ut)}),new m(4,4,8,4,f),new m(4,5,16,8,f),new m(4,6,32,32,f),new m(4,4,16,16,c),new m(8,16,32,32,c),new m(8,16,128,128,c),new m(8,32,128,256,c),new m(32,128,258,1024,c),new m(32,258,258,4096,c)],a.deflateInit=function(t,e){return k(t,e,J,V,W,P)},a.deflateInit2=k,a.deflateReset=y,a.deflateResetKeep=v,a.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?T:(t.state.gzhead=e,O):T},a.deflate=function(t,e){var a,h,_,d;if(!t||!t.state||e>I||e<0)return t?n(t,T):T;if(h=t.state,!t.output||!t.input&&0!==t.avail_in||h.status===dt&&e!==D)return n(t,0===t.avail_out?N:T);if(h.strm=t,a=h.last_flush,h.last_flush=e,h.status===it)if(2===h.wrap)t.adler=0,l(h,31),l(h,139),l(h,8),h.gzhead?(l(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),l(h,255&h.gzhead.time),l(h,h.gzhead.time>>8&255),l(h,h.gzhead.time>>16&255),l(h,h.gzhead.time>>24&255),l(h,9===h.level?2:h.strategy>=F||h.level<2?4:0),l(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(l(h,255&h.gzhead.extra.length),l(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(t.adler=C(t.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=st):(l(h,0),l(h,0),l(h,0),l(h,0),l(h,0),l(h,9===h.level?2:h.strategy>=F||h.level<2?4:0),l(h,gt),h.status=_t);else{var u=J+(h.w_bits-8<<4)<<8;u|=(h.strategy>=F||h.level<2?0:h.level<6?1:6===h.level?2:3)<<6,0!==h.strstart&&(u|=rt),u+=31-u%31,h.status=_t,o(h,u),0!==h.strstart&&(o(h,t.adler>>>16),o(h,65535&t.adler)),t.adler=1}if(h.status===st)if(h.gzhead.extra){for(_=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending!==h.pending_buf_size));)l(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=ht)}else h.status=ht;if(h.status===ht)if(h.gzhead.name){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}d=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.gzindex=0,h.status=lt)}else h.status=lt;if(h.status===lt)if(h.gzhead.comment){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}d=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=C(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.status=ot)}else h.status=ot;if(h.status===ot&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&s(t),h.pending+2<=h.pending_buf_size&&(l(h,255&t.adler),l(h,t.adler>>8&255),t.adler=0,h.status=_t)):h.status=_t),0!==h.pending){if(s(t),0===t.avail_out)return h.last_flush=-1,O}else if(0===t.avail_in&&r(e)<=r(a)&&e!==D)return n(t,N);if(h.status===dt&&0!==t.avail_in)return n(t,N);if(0!==t.avail_in||0!==h.lookahead||e!==j&&h.status!==dt){var f=h.strategy===F?g(h,e):h.strategy===K?p(h,e):z[h.level].func(h,e);if(f!==ct&&f!==pt||(h.status=dt),f===ut||f===ct)return 0===t.avail_out&&(h.last_flush=-1),O;if(f===ft&&(e===E?B._tr_align(h):e!==I&&(B._tr_stored_block(h,0,0,!1),e===U&&(i(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),s(t),0===t.avail_out))return h.last_flush=-1,O}return e!==D?O:h.wrap<=0?q:(2===h.wrap?(l(h,255&t.adler),l(h,t.adler>>8&255),l(h,t.adler>>16&255),l(h,t.adler>>24&255),l(h,255&t.total_in),l(h,t.total_in>>8&255),l(h,t.total_in>>16&255),l(h,t.total_in>>24&255)):(o(h,t.adler>>>16),o(h,65535&t.adler)),s(t),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?O:q)},a.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==it&&e!==st&&e!==ht&&e!==lt&&e!==ot&&e!==_t&&e!==dt?n(t,T):(t.state=null,e===_t?n(t,L):O):T},a.deflateSetDictionary=function(t,e){var a,n,r,s,h,l,o,_,d=e.length;if(!t||!t.state)return T;if(a=t.state,2===(s=a.wrap)||1===s&&a.status!==it||a.lookahead)return T;for(1===s&&(t.adler=A(t.adler,e,d,0)),a.wrap=0,d>=a.w_size&&(0===s&&(i(a.head),a.strstart=0,a.block_start=0,a.insert=0),_=new x.Buf8(a.w_size),x.arraySet(_,e,d-a.w_size,a.w_size,0),e=_,d=a.w_size),h=t.avail_in,l=t.next_in,o=t.input,t.avail_in=d,t.next_in=0,t.input=e,u(a);a.lookahead>=et;){n=a.strstart,r=a.lookahead-(et-1);do{a.ins_h=(a.ins_h<<a.hash_shift^a.window[n+et-1])&a.hash_mask,a.prev[n&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=n,n++}while(--r);a.strstart=n,a.lookahead=et-1,u(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=et-1,a.match_available=0,t.next_in=l,t.input=o,t.avail_in=h,a.wrap=s,O},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":4,"./messages":6,"./trees":7}],6:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],7:[function(t,e,a){"use strict";function n(t){for(var e=t.length;--e>=0;)t[e]=0}function r(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function i(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?et[t]:et[256+(t>>>7)]}function h(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,a){t.bi_valid>M-a?(t.bi_buf|=e<<t.bi_valid&65535,h(t,t.bi_buf),t.bi_buf=e>>M-t.bi_valid,t.bi_valid+=a-M):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function o(t,e,a){l(t,a[2*e],a[2*e+1])}function _(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1}function d(t){16===t.bi_valid?(h(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function u(t,e){var a,n,r,i,s,h,l=e.dyn_tree,o=e.max_code,_=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=K;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<F;a++)(i=l[2*l[2*(n=t.heap[a])+1]+1]+1)>c&&(i=c,p++),l[2*n+1]=i,n>o||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(_[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(p>0);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--a])>o||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}function f(t,e,a){var n,r,i=new Array(K+1),s=0;for(n=1;n<=K;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=_(i[h]++,h))}}function c(){var t,e,a,n,i,s=new Array(K+1);for(a=0,n=0;n<T-1;n++)for(nt[n]=a,t=0;t<1<<W[n];t++)at[a++]=n;for(at[a-1]=n,i=0,n=0;n<16;n++)for(rt[n]=i,t=0;t<1<<X[n];t++)et[i++]=n;for(i>>=7;n<R;n++)for(rt[n]=i<<7,t=0;t<1<<X[n]-7;t++)et[256+i++]=n;for(e=0;e<=K;e++)s[e]=0;for(t=0;t<=143;)$[2*t+1]=8,t++,s[8]++;for(;t<=255;)$[2*t+1]=9,t++,s[9]++;for(;t<=279;)$[2*t+1]=7,t++,s[7]++;for(;t<=287;)$[2*t+1]=8,t++,s[8]++;for(f($,N+1,s),t=0;t<R;t++)tt[2*t+1]=5,tt[2*t]=_(t,5);it=new r($,W,L+1,N,K),st=new r(tt,X,0,R,K),ht=new r(new Array(0),Y,0,H,P)}function p(t){var e;for(e=0;e<N;e++)t.dyn_ltree[2*e]=0;for(e=0;e<R;e++)t.dyn_dtree[2*e]=0;for(e=0;e<H;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*G]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function g(t){t.bi_valid>8?h(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function m(t,e,a,n){g(t),n&&(h(t,a),h(t,~a)),S.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function b(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]}function w(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&b(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!b(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n}function v(t,e,a){var n,r,i,h,_=0;if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*_]<<8|t.pending_buf[t.d_buf+2*_+1],r=t.pending_buf[t.l_buf+_],_++,0===n?o(t,r,e):(o(t,(i=at[r])+L+1,e),0!==(h=W[i])&&l(t,r-=nt[i],h),o(t,i=s(--n),a),0!==(h=X[i])&&l(t,n-=rt[i],h))}while(_<t.last_lit);o(t,G,e)}function y(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=F,a=0;a<l;a++)0!==i[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)w(t,i,a);r=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],w(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,w(t,i,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],u(t,e),f(i,o,t.bl_count)}function k(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,o=4;for(0===s&&(l=138,o=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<o?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[2*J]++):h<=10?t.bl_tree[2*Q]++:t.bl_tree[2*V]++,h=0,i=r,0===s?(l=138,o=3):r===s?(l=6,o=3):(l=7,o=4))}function z(t,e,a){var n,r,i=-1,s=e[1],h=0,_=7,d=4;for(0===s&&(_=138,d=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<_&&r===s)){if(h<d)do{o(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(o(t,r,t.bl_tree),h--),o(t,J,t.bl_tree),l(t,h-3,2)):h<=10?(o(t,Q,t.bl_tree),l(t,h-3,3)):(o(t,V,t.bl_tree),l(t,h-11,7));h=0,i=r,0===s?(_=138,d=3):r===s?(_=6,d=3):(_=7,d=4)}}function x(t){var e;for(k(t,t.dyn_ltree,t.l_desc.max_code),k(t,t.dyn_dtree,t.d_desc.max_code),y(t,t.bl_desc),e=H-1;e>=3&&0===t.bl_tree[2*Z[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function B(t,e,a,n){var r;for(l(t,e-257,5),l(t,a-1,5),l(t,n-4,4),r=0;r<n;r++)l(t,t.bl_tree[2*Z[r]+1],3);z(t,t.dyn_ltree,e-1),z(t,t.dyn_dtree,a-1)}function A(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return E;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return U;for(e=32;e<L;e++)if(0!==t.dyn_ltree[2*e])return U;return E}function C(t,e,a,n){l(t,(I<<1)+(n?1:0),3),m(t,e,a,!0)}var S=t("../utils/common"),j=4,E=0,U=1,D=2,I=0,O=1,q=2,T=29,L=256,N=L+1+T,R=30,H=19,F=2*N+1,K=15,M=16,P=7,G=256,J=16,Q=17,V=18,W=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],X=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$=new Array(2*(N+2));n($);var tt=new Array(2*R);n(tt);var et=new Array(512);n(et);var at=new Array(256);n(at);var nt=new Array(T);n(nt);var rt=new Array(R);n(rt);var it,st,ht,lt=!1;a._tr_init=function(t){lt||(c(),lt=!0),t.l_desc=new i(t.dyn_ltree,it),t.d_desc=new i(t.dyn_dtree,st),t.bl_desc=new i(t.bl_tree,ht),t.bi_buf=0,t.bi_valid=0,p(t)},a._tr_stored_block=C,a._tr_flush_block=function(t,e,a,n){var r,i,s=0;t.level>0?(t.strm.data_type===D&&(t.strm.data_type=A(t)),y(t,t.l_desc),y(t,t.d_desc),s=x(t),r=t.opt_len+3+7>>>3,(i=t.static_len+3+7>>>3)<=r&&(r=i)):r=i=a+5,a+4<=r&&-1!==e?C(t,e,a,n):t.strategy===j||i===r?(l(t,(O<<1)+(n?1:0),3),v(t,$,tt)):(l(t,(q<<1)+(n?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),p(t),n&&g(t)},a._tr_tally=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(at[a]+L+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1},a._tr_align=function(t){l(t,O<<1,3),o(t,G,$),d(t)}},{"../utils/common":1}],8:[function(t,e,a){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/deflate.js":[function(t,e,a){"use strict";function n(t){if(!(this instanceof n))return new n(t);this.options=s.assign({level:u,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var a=i.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==d)throw new Error(l[a]);if(e.header&&i.deflateSetHeader(this.strm,e.header),e.dictionary){var r;if(r="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===_.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(a=i.deflateSetDictionary(this.strm,r))!==d)throw new Error(l[a]);this._dict_set=!0}}function r(t,e){var a=new n(e);if(a.push(t,!0),a.err)throw a.msg||l[a.err];return a.result}var i=t("./zlib/deflate"),s=t("./utils/common"),h=t("./utils/strings"),l=t("./zlib/messages"),o=t("./zlib/zstream"),_=Object.prototype.toString,d=0,u=-1,f=0,c=8;n.prototype.push=function(t,e){var a,n,r=this.strm,l=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:!0===e?4:0,"string"==typeof t?r.input=h.string2buf(t):"[object ArrayBuffer]"===_.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new s.Buf8(l),r.next_out=0,r.avail_out=l),1!==(a=i.deflate(r,n))&&a!==d)return this.onEnd(a),this.ended=!0,!1;0!==r.avail_out&&(0!==r.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(s.shrinkBuf(r.output,r.next_out))):this.onData(s.shrinkBuf(r.output,r.next_out)))}while((r.avail_in>0||0===r.avail_out)&&1!==a);return 4===n?(a=i.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===d):2!==n||(this.onEnd(d),r.avail_out=0,!0)},n.prototype.onData=function(t){this.chunks.push(t)},n.prototype.onEnd=function(t){t===d&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=n,a.deflate=r,a.deflateRaw=function(t,e){return e=e||{},e.raw=!0,r(t,e)},a.gzip=function(t,e){return e=e||{},e.gzip=!0,r(t,e)}},{"./utils/common":1,"./utils/strings":2,"./zlib/deflate":5,"./zlib/messages":6,"./zlib/zstream":8}]},{},[])("/lib/deflate.js")});

/** Tealeaf SDK */
/*!
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 * @version 5.6.0.1818
 * @flags w3c,NDEBUG
 */

/**
 * @fileOverview Defines the core of the system, namely the TLT object.
 * @exports TLT
 */
/*global window,TLT,TLFExtensionNotify*/
/*jshint loopfunc:true*/
/**
 * TLT (short for Tealeaf Technology) is the top-level object for the system. All
 * objects and functions live under TLT to prevent polluting the global
 * scope. This object also manages the modules and services on the page,
 * controlling their lifecycle, manages inter-module communication.
 * @namespace
 */
// Sanity check
if (window.TLT) {
    throw "Attempting to recreate TLT. Library may be included more than once on the page.";
}
window.TLT = (function () {

    "use strict";

    /**
     * Create and add a screenview message to the default queue. Also
     * notifies any listeners of the screenview load/unload event.
     * @param {Enum} type "LOAD" or "UNLOAD" indicating the type
     * of screenview event.
     * @param {string} name User friendly name of the screenview.
     * @param {string} [referrerName] Name of the previous screenview that
     * is being replaced.
     * @param {object} [root] DOMNode which represents the root or
     * parent of this screenview. Usually this is a div container.
     * @returns {void}
     */
    function logScreenview(type, name, referrerName, root) {
        var dcid = null,
            screenviewMsg = null,
            queue = TLT.getService("queue"),
            replay = TLT.getModule("replay"),
            cookieModule = TLT.getModule("TLCookie"),
            webEvent = null,
            urlInfo = TLT.utils.getOriginAndPath();

        // Sanity checks
        if (!name || typeof name !== "string") {
            return;
        }
        if (!referrerName || typeof referrerName !== "string") {
            referrerName = "";
        }

        screenviewMsg = {
            type: 2,
            screenview: {
                type: type,
                name: name,
                url: urlInfo.path,
                host: urlInfo.origin,
                referrer: referrerName
            }
        };

        // TODO: Send a fully populated WebEvent object.
        // Ideally, want to use the publishEvent to route this to the correct modules.
        if (type === "LOAD") {
            webEvent = {
                type: "screenview_load",
                name: name
            };
        } else if (type === "UNLOAD") {
            webEvent = {
                type: "screenview_unload",
                name: name
            };
        }

        if (webEvent && replay) {
            dcid = replay.onevent(webEvent);
        }

        // If DOM Capture was triggered for this add it to the screenview message.
        if (dcid) {
            screenviewMsg.dcid = dcid;
        }

        if (type === "LOAD" || type === "UNLOAD") {
            queue.post("", screenviewMsg, "DEFAULT");
        }

        if (webEvent && cookieModule) {
            cookieModule.onevent(webEvent);
        }
    }

    /**
     * Create and add a geolocation message to the default queue based
     * on the position object.
     * @param {object} position W3C Geolocation API position object.
     * @returns {void}
     */
    function addGeolocationMsg(position) {
        var geolocationMsg,
            queue = TLT.getService("queue");

        if (!position || !position.coords) {
            return;
        }

        geolocationMsg = {
            type: 13,
            geolocation: {
                "lat": position.coords.latitude,
                "long": position.coords.longitude,
                "accuracy": Math.ceil(position.coords.accuracy)
            }
        };

        queue.post("", geolocationMsg, "DEFAULT");
    }

    function addGeolocationErrorMsg() {
        var geolocationMsg,
            queue = TLT.getService("queue");

        geolocationMsg = {
            type: 13,
            geolocation: {
                "errorCode": 201,
                "error": "Permission denied."
            }
        };

        queue.post("", geolocationMsg, "DEFAULT");
    }


    var tltStartTime = (new Date()).getTime(),
        tltPageId,

        /**
         * A collection of module information. The keys in this object are the
         * module names and the values are an object consisting of three pieces
         * of information: the creator function, the instance, and context object
         * for that module.
         * @private
         */
        modules = {},

        /**
         * A collection of service information. The keys in this object are the
         * service names and the values are an object consisting of two pieces
         * of information: the creator function and the service object.
         * @private
         */
        services = {},

        /**
         * Indicates if the core has been initialized or not.
         * @private
         */
        initialized = false,
        state = null,

        /**
         * Checks whether given frame is blacklisted (in the config) or not.
         * @function
         * @private
         * @param {DOMElement} iframe an element to examine
         * @return {boolean} true if given iframe is blacklisted, false otherwise
         */
        isFrameBlacklisted = (function () {
            var blacklistedFrames,
                checkedFrames = [];

            function prepareBlacklistedFrames(scope) {
                var browserService = core.getService("browser"),
                    blacklist = core.getCoreConfig().framesBlacklist,
                    foundFrames,
                    i;
                blacklistedFrames = blacklistedFrames || [];
                scope = scope || null;
                if (typeof blacklist !== "undefined" && blacklist.length > 0) {
                    for (i = 0; i < blacklist.length; i += 1) {
                        foundFrames = browserService.queryAll(blacklist[i], scope);
                        if (foundFrames && foundFrames.length > 0) {
                            blacklistedFrames = blacklistedFrames.concat(foundFrames);
                        }
                    }
                    checkedFrames = checkedFrames.concat(browserService.queryAll('iframe', scope));
                }
            }

            function isFrameBlacklisted(iframe) {
                if (core.utils.indexOf(checkedFrames, iframe) < 0) {
                    prepareBlacklistedFrames(iframe.ownerDocument);
                }
                return core.utils.indexOf(blacklistedFrames, iframe) > -1;
            }

            isFrameBlacklisted.clearCache = function () {
                blacklistedFrames = null;
            };

            return isFrameBlacklisted;
        }()),

        /**
         * Last clicked element, needed for IE and 'beforeunload'
         * @private
         */
        lastClickedElement = null,

        /**
         * List of service passthroughs. These are methods that are called
         * from TLT and simply pass through to the given service without
         * changing the arguments. Doing this dynamically keeps the code
         * smaller and easier to update.
         * @private
         */
        servicePassthroughs = {

            "config": [

                /**
                 * Returns the global configuration object (the one passed to init()).
                 * @name getConfig
                 * @memberOf TLT
                 * @function
                 * @returns {Object} The global configuration object.
                 */
                "getConfig",

                /**
                 * Updates the global configuration object (the one passed to init()).
                 * @name updateConfig
                 * @memberOf TLT
                 * @function
                 * @returns {void}
                 */
                "updateConfig",

                /**
                 * Returns the core configuration object.
                 * @name getCoreConfig
                 * @memberOf TLT
                 * @function
                 * @returns {Object} The core configuration object.
                 */
                "getCoreConfig",

                /**
                 * Updates the core configuration object.
                 * @name updateCoreConfig
                 * @memberOf TLT
                 * @function
                 * @param {Object} config The updated configuration object.
                 * @returns {void}
                 */
                "updateCoreConfig",

                /**
                 * Returns the configuration object for a module.
                 * @name getModuleConfig
                 * @memberOf TLT
                 * @function
                 * @param {String} moduleName The name of the module to retrieve config data for.
                 * @returns {Object} The configuration object for the given module.
                 */
                "getModuleConfig",

                /**
                 * Updates a configuration object for a module.
                 * @name updateModuleConfig
                 * @memberOf TLT
                 * @function
                 * @param {String} moduleName The name of the module to retrieve config data for.
                 * @param {Object} config The updated configuration object.
                 * @returns {void}
                 */
                "updateModuleConfig",

                /**
                 * Returns a configuration object for a service.
                 * @name getServiceConfig
                 * @memberOf TLT
                 * @function
                 * @param {String} serviceName The name of the service to retrieve config data for.
                 * @returns {Object} The configuration object for the given module.
                 */
                "getServiceConfig",

                /**
                 * Updates a configuration object for a service.
                 * @name updateServiceConfig
                 * @memberOf TLT
                 * @function
                 * @param {String} serviceName The name of the service to retrieve config data for.
                 * @param {Object} config The updated configuration object.
                 * @returns {void}
                 */
                "updateServiceConfig"

            ],

            "queue": [
                /**
                 * Send event information to the module's default queue.
                 * This doesn't necessarily force the event data to be sent to the server,
                 * as this behavior is defined by the queue itself.
                 * @name post
                 * @memberOf TLT
                 * @function
                 * @param  {String} moduleName The name of the module saving the event.
                 * @param  {Object} queueEvent The event information to be saved to the queue.
                 * @param  {String} [queueId]    Specifies the ID of the queue to receive the event.
                 * @returns {void}
                 */
                "post",
                /**
                 * Enable/disable the automatic flushing of all queues.
                 * Either periodically by a timer or whenever the queue threshold is reached.
                 * @name setAutoFlush
                 * @memberOf TLT
                 * @function
                 * @param {Boolean} flag Set this to false to disable flushing
                 *                 or set it to true to enable automatic flushing (default)
                 * @returns {void}
                 */
                "setAutoFlush",
                /**
                 * Forces all queues to send their data to the server.
                 * @name flushAll
                 * @memberOf TLT
                 * @function
                 */
                "flushAll"

            ],

            "browserBase": [
                /**
                 * Calculates the xpath of the given DOM Node.
                 * @name getXPathFromNode
                 * @memberOf TLT
                 * @function
                 * @param {DOMElement} node The DOM node who's xpath is to be calculated.
                 * @returns {String} The calculated xpath.
                 */
                "getXPathFromNode",

                /**
                 * Let the UIC library process a DOM event, which was prevented
                 * from bubbling by the application.
                 * @name processDOMEvent
                 * @memberOf TLT
                 * @function
                 * @param {Object} event The browsers event object which was prevented.
                 */
                "processDOMEvent"
            ]
        },

        /**
         * Provides methods for handling load/unload events to make sure that this
         * kind of events will be handled independently to browser caching mechanism
         * @namespace
         * @private
         */
        loadUnloadHandler = (function () {
            var status = {};

            return {

                /**
                 * Normalizes the events specified in the configuration in the following ways:
                 * - For each load/unload module event adds corresponding pageshow/pagehide event.
                 * - Adds beforeunload
                 * - Adds propertychange if W3C service is being used for correct operation on legacy IE.
                 * @param {String} moduleName Name of the module
                 * @param {Array} moduleEvents An array of module event configs
                 * @param {object} [localTop] Local window element
                 * @param {object} [documentScope] document element
                 */
                normalizeModuleEvents: function (moduleName, moduleEvents, localTop, documentScope) {
                    var modStatus = status[moduleName],
                        load = false,
                        unload = false,
                        browserService = core.getService("browser");

                    localTop = localTop || core._getLocalTop();
                    documentScope = documentScope || localTop.document;

                    if (modStatus) {
                        // Normalization has already occurred. This could be a call from rebind.
                        return;
                    }

                    status[moduleName] = {
                        loadFired: false,
                        pageHideFired: false
                    };

                    core.utils.forEach(moduleEvents, function (eventConfig) {
                        switch (eventConfig.name) {
                        case "load":
                            load = true;
                            moduleEvents.push(core.utils.mixin(core.utils.mixin({}, eventConfig), {
                                name: "pageshow"
                            }));
                            break;

                        case "unload":
                            unload = true;
                            moduleEvents.push(core.utils.mixin(core.utils.mixin({}, eventConfig), {
                                name: "pagehide"
                            }));
                            moduleEvents.push(core.utils.mixin(core.utils.mixin({}, eventConfig), {
                                name: "beforeunload"
                            }));
                            break;

                        // IE6, IE7 and IE8 - catching 'onpropertychange' event to
                        // simulate correct 'change' events on radio and checkbox.
                        // required for W3C only as jQuery normalizes it.
                        case "change":
                            if (core.utils.isLegacyIE && core.getFlavor() === "w3c") {
                                moduleEvents.push(core.utils.mixin(core.utils.mixin({}, eventConfig), {
                                    name: "propertychange"
                                }));
                            }
                            break;
                        }
                    });
                    if (!load && !unload) {
                        delete status[moduleName];
                        return;
                    }
                    status[moduleName].silentLoad = !load;
                    status[moduleName].silentUnload = !unload;
                    if (!load) {
                        moduleEvents.push({name: "load", target: localTop});
                    }
                    if (!unload) {
                        moduleEvents.push({name: "unload", target: localTop});
                    }
                },

                /**
                 * Checks if event can be published for the module(s) or not.
                 * The negative case can take place for load/unload events only, to avoid
                 * redundancy in handler execution. If as example load event was handled
                 * properly, the pageshow event will be ignored.
                 * @param {string} moduleName Name of the module
                 * @param {WebEvent} event An instance of WebEvent
                 * @return {boolean}
                 */
                canPublish: function (moduleName, event) {
                    var mod;
                    if (status.hasOwnProperty(moduleName) === false) {
                        return true;
                    }
                    mod = status[moduleName];
                    switch (event.type) {
                    case "load":
                        mod.pageHideFired = false;
                        mod.loadFired = true;
                        return !mod.silentLoad;
                    case "pageshow":
                        mod.pageHideFired = false;
                        event.type = "load";
                        return !mod.loadFired && !mod.silentLoad;
                    case "pagehide":
                        event.type = "unload";
                        mod.loadFired = false;
                        mod.pageHideFired = true;
                        return !mod.silentUnload;
                    case "unload":
                    case "beforeunload":
                        event.type = "unload";
                        mod.loadFired = false;
                        return !mod.pageHideFired && !mod.silentUnload;
                    }
                    return true;
                },

                /**
                 * Checks if event indicates the core context is unloading.
                 * @param {WebEvent} event An instance of WebEvent
                 * @return {boolean}
                 */
                isUnload: function (event) {
                    return typeof event === "object" ?
                            (event.type === "unload" || event.type === "beforeunload" || event.type === "pagehide") :
                            false;
                }
            };

        }()),

        /**
         * Keeps track of the events being handled.
         * @private
         */
        events = {},

        /**
         * Keeps track of callback functions registered by the iOS and Android native libraries.
         * These are used for communication with the native library.
         */
        bridgeCallbacks = {},

        /**
         * init implementation (defined later)
         * @private
         */
        _init = function () {},
        _callback = null,

        /**
         * Flag to track if TLT.init API can been called.
         * @private
         */
        okToCallInit = true,

        // Placeholder for the inactivity timeout setup function, defined after core.
        resetInactivityTimer = function () {},

        // Keeps track if the queue was flushed after the 1st full DOM capture.
        fullDOMFlushed = false,

        /**
         * Keeps track of the URL path and hash. If either value changes,
         * then logs the appropriate screenview unload/load message.
         */
        detectScreenviewChange = (function () {
            var location = window.location,
                prevPathname = location.pathname,
                prevHash = location.hash,
                prevScreenview = "";

            return function () {
                var currPathname = location.pathname,
                    currHash = location.hash,
                    currScreenview = prevScreenview;

                // Check if pathname or hash do not match previously saved values
                if (currPathname !== prevPathname) {
                    currScreenview = currPathname + currHash;
                } else if (currHash !== prevHash) {
                    currScreenview = currHash;
                }

                // Has the screenview changed?
                if (currScreenview !== prevScreenview) {
                    if (prevScreenview) {
                        // log UNLOAD of previous screenview
                        logScreenview("UNLOAD", prevScreenview);
                    }
                    // log LOAD of the current screenview
                    logScreenview("LOAD", currScreenview);
                    prevScreenview = currScreenview;
                    prevPathname = currPathname;
                    prevHash = currHash;
                }
            };
        }()),

        /**
         * Checks if the element is on the list of blocked elements.
         * @param {DOMElement} element The element to be checked.
         * @param {DOMElement} [scope] Optional scope for evaluating the CSS selectors in the block list.
         * @returns {Boolean} true if the element is on the list of blocked elements, false otherwise.
         */
        isElementBlocked = function (element, scope) {
            var i, j,
                len,
                isBlocked = false,
                browserService = core.getService("browser"),
                blockedList = core.getCoreConfig().blockedElements,
                blockedElem,
                blockedElems,
                blockedElemsLen;

            // Sanity check
            if (!blockedList || !blockedList.length) {
                // Self-rewrite to optimize for next time
                isElementBlocked = function () { return false; };
                return isBlocked;
            }

            // Sanity check
            if (!element || !element.nodeType) {
                return isBlocked;
            }

            scope = scope || core.utils.getDocument(element);
            for (i = 0, len = blockedList.length; i < len && !isBlocked; i += 1) {
                blockedElems = browserService.queryAll(blockedList[i], scope);
                for (j = 0, blockedElemsLen = blockedElems.length; j < blockedElemsLen && !isBlocked; j += 1) {
                    blockedElem = blockedElems[j];
                    isBlocked = blockedElem.contains ? blockedElem.contains(element) : blockedElem === element;
                }
            }

            return isBlocked;
        },

        /**
         * Checks if link has one of the blacklisted protocols.
         */
        hasExcludedProtocol = function (element) {
            var hasExcluded = false,
                list = ["intent:", "mailto:", "sms:", "tel:"];
            if (element && core.utils.getTagName(element) === "a" && list.indexOf(element.protocol) !== -1) {
                hasExcluded = true;
            }
            return hasExcluded;
        },

        // main interface for the core
        core = /**@lends TLT*/ {


            /**
             * @returns {integer} Returns the recorded timestamp in milliseconds corresponding to when the TLT object was created.
             */
            getStartTime: function () {
                return tltStartTime;
            },

            /**
             * @returns {String} Returns the unique page id corresponding to this page instance.
             */
            getPageId: function () {
                return tltPageId || "#";
            },

            /**
             * @returns {String} The library version string.
             */
            getLibraryVersion: function () {
                return "5.6.0.1818";
            },

            //---------------------------------------------------------------------
            // Core Lifecycle
            //---------------------------------------------------------------------

            /**
             * Initializes the system. The configuration information is passed to the
             * config service to management it. All modules are started (unless their
             * configuration information indicates they should be disabled), and web events
             * are hooked up.
             * @param {Object} config The global configuration object.
             * @param {function} [callback] function executed after initialization and destroy
                    the callback function takes one parameter which describes UIC state;
                    its value can be set to "initialized" or "destroyed"
             * @returns {void}
             */
            init: function (config, callback) {
                var timeoutCallback,
                    utils = this.utils;

                _callback = callback;
                if (!okToCallInit) {
                    throw "init must only be called once!";
                }

                // Set the page id.
                tltPageId = "P." + this.utils.getRandomString(28);

                okToCallInit = false;
                timeoutCallback = function (event) {
                    event = event || window.event || {};
                    if (event.type === "load" || document.readyState !== "loading") {
                        if (document.removeEventListener) {
                            document.removeEventListener("DOMContentLoaded", timeoutCallback, false);
                            window.removeEventListener("load", timeoutCallback, false);
                        } else {
                            document.detachEvent("onreadystatechange", timeoutCallback);
                            window.detachEvent("onload", timeoutCallback);
                        }
                        _init(config, callback);
                    }
                };

                // case when DOM already loaded (lazy-loaded UIC)
                if (document.readyState === "complete" || (document.readyState === "interactive" && !utils.isIE)) {
                    // Lets the current browser cycle to complete before calling init
                    setTimeout(timeoutCallback);
                } else if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", timeoutCallback, false);
                    // A fallback in case DOMContentLoaded is not supported
                    window.addEventListener("load", timeoutCallback, false);
                } else {
                    document.attachEvent("onreadystatechange", timeoutCallback);
                    // A fallback in case onreadystatechange is not supported
                    window.attachEvent("onload", timeoutCallback);
                }
            },

            /**
             * Indicates if the system has been initialized.
             * @returns {Boolean} True if init() has been called, false if not.
             */
            isInitialized: function () {
                return initialized;
            },

            getState: function () {
                return state;
            },

            /**
             * Shuts down the system. All modules are stopped and all web events
             * are unsubscribed.
             * @returns {void}
             */
            // destroy: function (skipEvents, callback) {
            destroy: function (skipEvents) {

                var token = "",
                    eventName = "",
                    target = null,
                    serviceName = null,
                    service = null,
                    browser = null,
                    delegateTarget = false;

                if (okToCallInit) { //nothing to do
                    return false;
                }

                this.stopAll();

                if (!skipEvents) {
                    browser = this.getService("browser");
                    // Unregister events
                    for (token in events) {
                        if (events.hasOwnProperty(token) && browser !== null) {
                            eventName = token.split("|")[0];
                            target = events[token].target;
                            delegateTarget = events[token].delegateTarget || undefined;
                            browser.unsubscribe(eventName, target, this._publishEvent, delegateTarget);
                        }
                    }
                }

                // call destroy on services that have it
                for (serviceName in services) {
                    if (services.hasOwnProperty(serviceName)) {
                        service = services[serviceName].instance;

                        if (service && typeof service.destroy === "function") {
                            service.destroy();
                        }

                        services[serviceName].instance = null;
                    }
                }

                isFrameBlacklisted.clearCache();
                events = {};
                initialized = false;

                // Reset to allow re-initialization.
                okToCallInit = true;

                state = "destroyed";

                if (typeof _callback === "function") {
                    // Protect against unexpected exceptions since _callback is 3rd party code.
                    try {
                        _callback("destroyed");
                    } catch (e) {
                        // Do nothing!
                    }
                }
            },

            /**
             * Iterates over each module and starts or stops it according to
             * configuration information.
             * @returns {Boolean} true if modules were successfully initialized, false otherwise.
             * @private
             */
            _updateModules: function (scope) {

                var config = this.getCoreConfig(),
                    browser = this.getService("browser"),
                    moduleConfig = null,
                    moduleName = null,
                    result = true;

                if (config && browser && config.modules) {
                    try {
                        for (moduleName in config.modules) {
                            if (config.modules.hasOwnProperty(moduleName)) {
                                moduleConfig = config.modules[moduleName];

                                if (modules.hasOwnProperty(moduleName)) {
                                    if (moduleConfig.enabled === false) {
                                        this.stop(moduleName);
                                        continue;
                                    }

                                    this.start(moduleName);

                                    // If the module has specified events in the configuration
                                    // register event handlers for them.
                                    if (moduleConfig.events) {
                                        this._registerModuleEvents(moduleName, moduleConfig.events, scope);
                                    }
                                }
                            }
                        }
                        this._registerModuleEvents.clearCache();
                    } catch (e) {
                        core.destroy();
                        result = false;
                    }
                } else {
                    result = false;
                }
                return result;
            },

            /**
             * Registers event handlers for all modules in a specific scope.
             * E.g. if the application changed the DOM via ajax and want to let
             * us rebind event handlers in this scope.
             * @param  {Object} scope A DOM element as a scope.
             */
            rebind: function (scope) {
                core._updateModules(scope);
            },

            /**
             * Public API which returns the Tealeaf session data that has been
             * configured to be shared with 3rd party scripts.
             * @returns {object} JSON object containing the session data as
             * name-value pairs. If no data is available then returns null.
             */
            getSessionData: function () {

                if (!core.isInitialized()) {
                    return;
                }

                var rv = null,
                    sessionData = null,
                    scName,
                    scValue,
                    config = core.getCoreConfig();

                if (!config || !config.sessionDataEnabled) {
                    return null;
                }

                sessionData = config.sessionData || {};

                // Add any session ID data
                scName = sessionData.sessionQueryName;
                if (scName) {
                    scValue = core.utils.getQueryStringValue(scName, sessionData.sessionQueryDelim);
                } else {
                    // Either the cookie name is configured or the default is assumed.
                    scName = sessionData.sessionCookieName || "TLTSID";
                    scValue = core.utils.getCookieValue(scName);
                }

                if (scName && scValue) {
                    rv = rv || {};
                    rv.tltSCN = scName;
                    rv.tltSCV = scValue;
                    rv.tltSCVNeedsHashing = !!sessionData.sessionValueNeedsHashing;
                }

                return rv;
            },

            /**
             * Public API to create and add a geolocation message to the default
             * queue. This API accepts an optional position object which is defined
             * by the W3C Geolocation API. If no position object is specified then
             * this API will query for location informatino using the W3C Geolocation API.
             * @param {object} [position] W3C Geolocation API position object.
             * @returns {void}
             */
            logGeolocation: function (position) {
                var replayConfig = core.getModuleConfig("replay") || {},
                    geolocationConfigOptions = core.utils.getValue(replayConfig, "geolocation.options", {
                        timeout: 30000,
                        enableHighAccuracy: true,
                        maximumAge: 0
                    }),
                    geolocationEnabled = core.utils.getValue(replayConfig, "geolocation.enabled", false),
                    navigator = window.navigator;

                if (!position) {
                    if (!geolocationEnabled || !navigator || !navigator.geolocation || !navigator.geolocation.getCurrentPosition) {
                        // Geolocation is not enabled or it is not supported by this browser
                        return;
                    }
                    navigator.geolocation.getCurrentPosition(addGeolocationMsg, addGeolocationErrorMsg, geolocationConfigOptions);
                } else {
                    addGeolocationMsg(position);
                }
            },

            /**
             * Public API to create and add a custom event message to the default
             * queue.
             * @param {string} name Name of the custom event.
             * @param {object} customObj Custom object which will be serialized
             * to JSON and included with the custom message.
             * @returns {void}
             */
            logCustomEvent: function (name, customMsgObj) {

                if (!core.isInitialized()) {
                    return;
                }

                var customMsg = null,
                    queue = this.getService("queue");

                // Sanity checks
                if (!name || typeof name !== "string") {
                    name = "CUSTOM";
                }
                customMsgObj = customMsgObj || {};

                customMsg = {
                    type: 5,
                    customEvent: {
                        name: name,
                        data: customMsgObj
                    }
                };
                queue.post("", customMsg, "DEFAULT");
            },

            /**
             * Public API to create and add an exception event message to the
             * default queue.
             * @param {string} msg Description of the error or exception.
             * @param {string} [url] URL related to the error or exception.
             * @param {integer} [line] Line number associated with the error or exception.
             * @returns {void}
             */
            logExceptionEvent: function (msg, url, line) {

                if (!core.isInitialized()) {
                    return;
                }

                var exceptionMsg = null,
                    queue = this.getService("queue");

                // Sanity checks
                if (!msg || typeof msg !== "string") {
                    return;
                }
                url = url || "";
                line = line || "";

                exceptionMsg = {
                    type: 6,
                    exception: {
                        description: msg,
                        url: url,
                        line: line
                    }
                };

                queue.post("", exceptionMsg);
            },

            /**
             * Public API to create and add a form completion message. Form completion indicates
             * if the user submitted a form (or form equivalent) and if the form was validated.
             * @param {boolean} submitted Indicates if the form (or form equivalent) was submitted.
             * For a standard form element this would be when the submit event is triggered.
             * For applications that use AJAX, a submission is defined as per the business logic.
             * @param {boolean} [valid] Indicates if the form fields were validated and the result
             * of the validation. True if validation was performed and successful, false if validation
             * was performed but failed.
             * @returns {void}
             */
            logFormCompletion: function (submitted, valid) {

                if (!core.isInitialized()) {
                    return;
                }

                var queue = this.getService("queue"),
                    formCompletionMsg = {
                        type: 15,
                        formCompletion: {
                            submitted: !!submitted,
                            valid: (typeof valid === "boolean" ? valid : null)
                        }
                    };

                queue.post("", formCompletionMsg);
            },

            /**
             * Public API to create and add a screenview LOAD message to the
             * default queue.
             * @param {string} name User friendly name of the screenview that is
             * being loaded. Note: The same name must be used when the screenview
             * UNLOAD API is called.
             * @param {string} [referrerName] Name of the previous screenview that
             * is being replaced.
             * @param {object} [root] DOMNode which represents the root or
             * parent of this screenview. Usually this is a div container.
             * @returns {void}
             */
            logScreenviewLoad: function (name, referrerName, root) {

                if (!core.isInitialized()) {
                    return;
                }

                logScreenview("LOAD", name, referrerName, root);
            },

            /**
             * Public API to create and add a screenview UNLOAD message to the
             * default queue.
             * @param {string} name User friendly name of the screenview that is
             * unloaded. Note: This should be the same name used in the screenview
             * LOAD API.
             * @returns {void}
             */
            logScreenviewUnload: function (name) {

                if (!core.isInitialized()) {
                    return;
                }

                logScreenview("UNLOAD", name);
            },

            /**
             * Public API to log a DOM Capture message to the default queue.
             * @param {DOMElement} [root] Parent element from which to start the capture.
             * @param {Object} [config] DOM Capture configuration options.
             * @returns {String} The unique string representing the DOM Capture id.
             * null if DOM Capture failed.
             */
            logDOMCapture: function (root, config) {
                var dcid = null,
                    domCaptureData,
                    domCaptureService,
                    domCaptureServiceConfig,
                    msg,
                    queue;

                if (!this.isInitialized()) {
                    return dcid;
                }

                // DOM Capture is not supported on IE 8 and below
                if (core.utils.isLegacyIE) {
                    return dcid;
                }

                domCaptureService = this.getService("domCapture");
                if (domCaptureService) {
                    root = root || window.document;
                    domCaptureServiceConfig = this.getServiceConfig("domCapture");
                    config = this.utils.mixin({}, domCaptureServiceConfig.options, config);
                    domCaptureData = domCaptureService.captureDOM(root, config);
                    if (domCaptureData) {
                        // Add the unique id for this DOM Capture message
                        dcid = config.dcid || ("dcid-" + this.utils.getSerialNumber() + "." + (new Date()).getTime());
                        domCaptureData.dcid = dcid;
                        // Copy the eventOn flag
                        domCaptureData.eventOn = !!config.eventOn;
                        // Create the message
                        msg = {
                            "type": 12,
                            "domCapture": domCaptureData
                        };
                        // POST it to the queue
                        queue = this.getService("queue");
                        queue.post("", msg, "DEFAULT");
                        if (config.qffd !== false && !fullDOMFlushed && msg.domCapture.fullDOM) {
                            // Flush queue on 1st full DOM
                            queue.flush();
                            fullDOMFlushed = true;
                        }
                    } else {
                        dcid = null;
                    }
                }
                return dcid;
            },

            /**
             * Function invoked by modules to log a DOM Capture message to the default queue.
             * @param {String} moduleName Name of the module which invoked this function.
             * @param {DOMElement} [root] Parent element from which to start the capture.
             * @param {Object} [config] DOM Capture configuration options.
             * @returns {String} The unique string representing the DOM Capture id.
             * null if DOM Capture failed.
             */
            performDOMCapture: function (moduleName, root, config) {
                return this.logDOMCapture(root, config);
            },

            /**
             * Function invoked by modules to log a Form Completion message.
             * @param {String} moduleName Name of the module which invoked this function.
             * @param {boolean} submitted Indicates if the form (or form equivalent) was submitted.
             * For a standard form element this would be when the submit event is triggered.
             * @param {boolean} [valid] Indicates if the form fields were validated and the result
             * of the validation. True if validation was performed and successful, false if validation
             * was performed but failed.
             * @see logFormCompletion
             */
            performFormCompletion: function (moduleName, submitted, valid) {
                return this.logFormCompletion(submitted, valid);
            },

            /**
             * Helper function for registerBridgeCallbacks
             * It checks if the call back type is valid and enabled.
             * @function
             * @private
             * @param {String}
             * @returns {boolean} Whether callback type is enabled.
             */
            _bridgeCallback: function (cbType) {
                var callBackType = bridgeCallbacks[cbType];

                if (callBackType && callBackType.enabled) {
                    return callBackType;
                }
                return null;
            },

            /**
             * Public API to add a screenshot capture. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @returns {void}
             */
            logScreenCapture: function () {
                if (!core.isInitialized()) {
                    return;
                }
                var bridgeCallback = core._bridgeCallback("screenCapture");
                if (bridgeCallback !== null) {
                    bridgeCallback.cbFunction();
                }
            },

            /**
             * Public API to enable Tealeaf framework. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @returns {void}
             */
            enableTealeafFramework: function () {
                if (!core.isInitialized()) {
                    return;
                }
                var bridgeCallback = core._bridgeCallback("enableTealeafFramework");

                if (bridgeCallback !== null) {
                    bridgeCallback.cbFunction();
                }
            },

            /**
             * Public API to disable Tealeaf framework. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @returns {void}
             */
            disableTealeafFramework: function () {
                if (!core.isInitialized()) {
                    return;
                }
                var bridgeCallback = core._bridgeCallback("disableTealeafFramework");

                if (bridgeCallback !== null) {
                    bridgeCallback.cbFunction();
                }
            },

            /**
             * Public API to start a new Tealeaf session. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @returns {void}
             */
            startNewTLFSession: function () {
                if (!core.isInitialized()) {
                    return;
                }
                var bridgeCallback = core._bridgeCallback("startNewTLFSession");

                if (bridgeCallback !== null) {
                    bridgeCallback.cbFunction();
                }
            },

            /**
             * Public API to start get current Tealeaf session Id. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @returns {String} Current session Id
             */
            currentSessionId: function () {
                if (!core.isInitialized()) {
                    return;
                }
                var sessionId,
                    bridgeCallback = core._bridgeCallback("currentSessionId");

                if (bridgeCallback !== null) {
                    sessionId = bridgeCallback.cbFunction();
                }
                return sessionId;
            },

            /**
             * Public API to get default value of a configurable item in
             * TLFConfigurableItems.properties file.  This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @param {String} configItem This is the name of the configurable item.
             * @returns {String} The value for the item.
             */
            defaultValueForConfigurableItem: function (configItem) {
                if (!core.isInitialized()) {
                    return;
                }
                var value,
                    bridgeCallback = core._bridgeCallback("defaultValueForConfigurableItem");

                if (bridgeCallback !== null) {
                    value = bridgeCallback.cbFunction(configItem);
                }
                return value;
            },

            /**
             * Public API to get the value of a configurable item either from TLFConfigurableItems.properties file
             * or in memory data structure. This needs to be implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @param {String} configItem This is the name of the configurable item.
             * @returns {String} The value for the item.
             */
            valueForConfigurableItem: function (configItem) {
                if (!core.isInitialized()) {
                    return;
                }
                var value,
                    bridgeCallback = core._bridgeCallback("valueForConfigurableItem");

                if (bridgeCallback !== null) {
                    value = bridgeCallback.cbFunction(configItem);
                }
                return value;
            },

            /**
             * Public API to set the value of a configurable item in TLFConfigurableItems.properties file.
             * This updates only in the memory value. This needs to be
             * implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @param {String} configItem This is the name of the configurable item.
             * @param {String} value The value assign to the configItem.
             * @returns {boolean} Whether item was set.
             */
            setConfigurableItem: function (configItem, value) {
                if (!core.isInitialized()) {
                    return;
                }
                var result = false,
                    bridgeCallback = core._bridgeCallback("setConfigurableItem");

                if (bridgeCallback !== null) {
                    result = bridgeCallback.cbFunction(configItem, value);
                }
                return result;
            },

            /**
             * Public API to add additional http header.
             * This needs to be implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @param {String} key This is the key of the configurable item.
             * @param {String} value The value assign to the configItem.
             * @returns {boolean} Whether item was set.
             */
            addAdditionalHttpHeader: function (key, value) {
                if (!core.isInitialized()) {
                    return;
                }
                var result = false,
                    bridgeCallback = core._bridgeCallback("addAdditionalHttpHeader");

                if (bridgeCallback !== null) {
                    result = bridgeCallback.cbFunction(key, value);
                }
                return result;
            },

            /**
             * Public API to log custom event.
             * This needs to be implemented and registered (see registerBridgeCallbacks)
             * If no callback has been registered, then a call to this API
             * does nothing.
             * @param {String} eventName A custom event name.
             * @param {String} jsonData JSON data string.
             * @param {int} logLevel Tealeaf library logging level for the event.
             * @returns {boolean} Whether item was set.
             */
            logCustomEventBridge: function (eventName, jsonData, logLevel) {
                if (!core.isInitialized()) {
                    return;
                }
                var result = false,
                    bridgeCallback = core._bridgeCallback("logCustomEventBridge");

                if (bridgeCallback !== null) {
                    result = bridgeCallback.cbFunction(eventName, jsonData, logLevel);
                }
                return result;
            },

            /**
             * Public API to allow registration of callback functions
             * These callback types are supported currently:
             * 1. screenCapture: Registering this type enables ability to
             *    take screenshots from script.
             * 2. messageRedirect: Registering this type will allow the
             *    callback function to process (and consume) the message
             *    instead of being handled by the default queue.
             * 3. addRequestHeaders: Registering this type will allow the
             *    callback function to return an array of HTTP request headers
             *    that will be set by the UIC in it's requests to the target.
             * @param {Array} callbacks Array of callback objects. Each object
             *                is of the format: {
             *                    {boolean}  enabled
             *                    {string}   cbType
             *                    {function} cbFunction
             *                    {integer}  [order]
             *                }
             *                If the callbacks array is empty then any previously
             *                registered callbacks would be removed.
             * @returns {boolean} true if callbacks were registered. false otherwise.
             */
            registerBridgeCallbacks: function (callbacks) {
                var i, j,
                    len,
                    cb = null,
                    cbEntry,
                    cbList,
                    cbListLen,
                    utils = this.utils;

                // Sanity check
                if (!callbacks) {
                    return false;
                }
                if (callbacks.length === 0) {
                    // Reset any previously registered callbacks.
                    bridgeCallbacks = {};
                    return false;
                }
                try {
                    for (i = 0, len = callbacks.length; i < len; i += 1) {
                        cb = callbacks[i];
                        if (typeof cb === "object" && cb.cbType && cb.cbFunction) {
                            cbEntry = {
                                enabled: cb.enabled,
                                cbFunction: cb.cbFunction,
                                cbOrder: cb.order || 0
                            };

                            if (utils.isUndefOrNull(bridgeCallbacks[cb.cbType])) {
                                // If this is the first callback then directly save it as an object.
                                bridgeCallbacks[cb.cbType] = cbEntry;
                            } else {
                                // If multiple callbacks of the same type are being registered then switch
                                // to using an array and storing them in the specified order.
                                if (!utils.isArray(bridgeCallbacks[cb.cbType])) {
                                    bridgeCallbacks[cb.cbType] = [ bridgeCallbacks[cb.cbType] ];
                                }
                                cbList = bridgeCallbacks[cb.cbType];
                                for (j = 0, cbListLen = cbList.length; j < cbListLen; j += 1) {
                                    if (cbList[j].cbOrder > cbEntry.cbOrder) {
                                        break;
                                    }
                                }
                                cbList.splice(j, 0, cbEntry);
                            }
                        }
                    }
                } catch (e) {
                    return false;
                }
                return true;
            },

            /**
             * Core function which is invoked by the queue service to allow
             * for the queue to be redirected if a messageRedirect callback
             * has been registered. (see registerBridgeCallbacks)
             * @param {array} queue The queue array containing the individual
             *                message objects.
             * @returns {array} The array that should replace the previously
             *                  passed queue.
             */
            redirectQueue: function (queue) {
                var i, j,
                    len,
                    cb,
                    cbList,
                    cbListLen,
                    retval,
                    utils = this.utils,
                    sS;

                // Sanity check
                if (!queue || !queue.length) {
                    return queue;
                }

                cb = bridgeCallbacks.messageRedirect;
                if (!cb) {
                    return queue;
                }

                if (!utils.isArray(cb)) {
                    cbList = [cb];
                } else {
                    cbList = cb;
                }
                sS = core.getService("serializer");
                for (j = 0, cbListLen = cbList.length; j < cbListLen; j += 1) {
                    cb = cbList[j];
                    if (cb && cb.enabled) {
                        for (i = 0, len = queue.length; i < len; i += 1) {
                            retval = cb.cbFunction(sS.serialize(queue[i]), queue[i]);
                            if (retval && typeof retval === "object") {
                                queue[i] = retval;
                            } else {
                                queue.splice(i, 1);
                                i -= 1;
                                len = queue.length;
                            }
                        }
                    }
                }
                return queue;
            },

            _hasSameOrigin: function (iframe) {
                try {
                    return iframe.document.location.host === document.location.host && iframe.document.location.protocol === document.location.protocol;
                } catch (e) {
                    // to be ignored. Error when iframe from different domain
                    //#ifdef DEBUG
                    //TODO add debug log
                    //#endif
                }
                return false;
            },

            /**
             * Core function which is invoked by the queue service to allow
             * for the addRequestHeaders callback (if registered) to be invoked.
             * (see registerBridgeCallbacks)
             * @returns {array} The array of request headers to be set. Each
             *                  object is of the format:
             *                  {
             *                      name: "header name",
             *                      value: "header value",
             *                      recurring: true
             *                  }
             */
            provideRequestHeaders: function () {
                var headers = null,
                    addHeadersCB = bridgeCallbacks.addRequestHeaders;

                if (addHeadersCB && addHeadersCB.enabled) {
                    headers = addHeadersCB.cbFunction();
                }

                return headers;
            },

            /**
             * Utility function used by core._updateModules.
             * It registers event listeners according to module configuration.
             * @name core._registerModuleEvents
             * @function
             * @param {string} moduleName name of the module
             * @param {Array} moduleEvents an array of all module-specific events (from UIC configuration)
             * @param {object} scope DOM element where event will be registered; points either to a main window
             *                 object or to IFrame's content window
             */
            _registerModuleEvents: (function () {

                /**
                 * An instance of core.utils.WeakMap us as a cache for mapping DOM elements with their IDs.
                 * Introduced to reduce number of expensive browserBase.ElementData.prototype.examineID calls.
                 * Object initialization in _registerModuleEvents function
                 * @private
                 * @type {object}
                 */
                var idCache,
                    /**
                     * Tracks the pending frame loads in order to trigger the loadWithFrames event.
                     */
                    frameLoadPending = 0,
                    /**
                     * Helper function that returns the localTop or documentScope object if the
                     * specified prop is "window" or "document" respectively.
                     * @private
                     * @function
                     * @param {string|object} prop
                     * @param {object} localTop
                     * @param {object} documentScope
                     * @returns {string|object} localTop if prop value is "window",
                     *                          documentScope if prop value is "document" else
                     *                          returns the prop value itself
                     */
                    normalizeToObject = function (prop, localTop, documentScope) {
                        if (prop === "window") {
                            return localTop;
                        }
                        if (prop === "document") {
                            return documentScope;
                        }
                        return prop;
                    };

                /**
                 * Helper function for core._registerModuleEvents
                 * It does actual event listeners registration, while the main function manages the scopes.
                 * @function
                 * @private
                 */
                function _registerModuleEventsOnScope(moduleName, moduleEvents, scope) {
                    var browserBase = core.getService("browserBase"),
                        browser = core.getService("browser"),
                        documentScope = core.utils.getDocument(scope),
                        localTop = core._getLocalTop(),
                        isFrame = core.utils.isIFrameDescendant(scope),
                        frameId,
                        e,
                        i;

                    scope = scope || documentScope;
                    loadUnloadHandler.normalizeModuleEvents(moduleName, moduleEvents, localTop, documentScope);

                    if (isFrame) {
                        frameId = browserBase.ElementData.prototype.examineID(scope).id;
                        // remove one closing ']'
                        if (typeof frameId === "string") {
                            frameId = frameId.slice(0, frameId.length - 1);
                            for (e in events) {
                                if (events.hasOwnProperty(e)) {
                                    for (i = 0; i < events[e].length; i += 1) {
                                        if (moduleName === events[e][i]) {
                                            if (e.indexOf(frameId) !== -1) {
                                                delete events[e];
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    core.utils.forEach(moduleEvents, function (eventConfig) {
                        var target = normalizeToObject(eventConfig.target, localTop, documentScope) || documentScope,
                            delegateTarget = normalizeToObject(eventConfig.delegateTarget, localTop, documentScope),
                            token = "";

                        if (eventConfig.recurseFrames !== true && isFrame) {
                            return;
                        }

                        // If the target is a string it is a CSS query selector, specified in the config.
                        if (typeof target === "string") {
                            if (eventConfig.delegateTarget && core.getFlavor() === "jQuery") {
                                token = core._buildToken4delegateTarget(eventConfig.name, target, eventConfig.delegateTarget);

                                if (!events.hasOwnProperty(token)) {
                                    events[token] = [moduleName];
                                    events[token].target = target;
                                    events[token].delegateTarget = delegateTarget;
                                    browser.subscribe(eventConfig.name, target, core._publishEvent, delegateTarget, token);
                                } else {
                                    events[token].push(moduleName);
                                }
                            } else {
                                core.utils.forEach(browser.queryAll(target, scope), function (element) {
                                    var idData = idCache.get(element);
                                    if (!idData) {
                                        idData = browserBase.ElementData.prototype.examineID(element);
                                        idCache.set(element, idData);
                                    }
                                    token = eventConfig.name + "|" + idData.id + idData.idType;
                                    // If the token already exists, do nothing
                                    if (core.utils.indexOf(events[token], moduleName) !== -1) {
                                        return;
                                    }
                                    events[token] = events[token] || [];
                                    events[token].push(moduleName);
                                    // Save a reference to the tokens target to be able to unregister it later.
                                    events[token].target = element;
                                    browser.subscribe(eventConfig.name, element, core._publishEvent);
                                });
                            }
                        // Else: The target, specified in the config, is an object or empty
                        // (defaults to document), generate a token for events which bubble up
                        // (to the window or document object).
                        } else {
                            token = core._buildToken4bubbleTarget(eventConfig.name, target, typeof eventConfig.target === "undefined");
                            if (!events.hasOwnProperty(token)) {
                                events[token] = [moduleName];
                                browser.subscribe(eventConfig.name, target, core._publishEvent);
                            } else {
                                /* XXX: Only add if module entry doesn't exist. */
                                if (core.utils.indexOf(events[token], moduleName) === -1) {
                                    events[token].push(moduleName);
                                }
                            }
                        }

                        if (token !== "") {
                            if (typeof target !== "string") {
                                events[token].target = target;
                            }
                        }
                    });
                }

                /**
                 * Helper function for core._registerModuleEvents. Checks load status of iframes.
                 * @function
                 * @private
                 * @returns {boolean} true when given frame is completely loaded; false otherwise
                 */
                function _isFrameLoaded(hIFrame) {
                    var iFrameWindow = core.utils.getIFrameWindow(hIFrame);
                    return (iFrameWindow !== null) &&
                            core._hasSameOrigin(iFrameWindow) &&
                            (iFrameWindow.document !== null) &&
                            iFrameWindow.document.readyState === "complete";
                }

                // actual implementation of core._registerModuleEvents
                function registerModuleEvents(moduleName, moduleEvents, scope) {
                    scope = scope || core._getLocalTop().document;
                    idCache = idCache || new core.utils.WeakMap();

                    _registerModuleEventsOnScope(moduleName, moduleEvents, scope);
                    if (moduleName !== "performance") {
                        var hIFrame = null,
                            hIFrameWindow = null,
                            browserService = core.getService("browser"),
                            dcService = core.getService("domCapture"),
                            cIFrames = browserService.queryAll("iframe, frame", scope),
                            i,
                            iLength;

                        for (i = 0, iLength = cIFrames.length; i < iLength; i += 1) {
                            hIFrame = cIFrames[i];
                            if (isFrameBlacklisted(hIFrame)) {
                                continue;
                            }
                            if (_isFrameLoaded(hIFrame)) {
                                hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                                core._registerModuleEvents(moduleName, moduleEvents, hIFrameWindow.document);
                                // Notify the domCapture service to observe this frame window
                                dcService.observeWindow(hIFrameWindow);
                                continue;
                            }

                            frameLoadPending += 1;

                            (function (moduleName, moduleEvents, hIFrame) {
                                var hIFrameWindow = null,
                                    _iframeContext = {
                                        moduleName: moduleName,
                                        moduleEvents: moduleEvents,
                                        hIFrame: hIFrame,

                                        _registerModuleEventsDelayed: function () {
                                            var hIFrameWindow = null;

                                            if (!isFrameBlacklisted(hIFrame)) {
                                                hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                                                if (core._hasSameOrigin(hIFrameWindow)) {
                                                    core._registerModuleEvents(moduleName, moduleEvents, hIFrameWindow.document);
                                                    // Notify the domCapture service to observe this frame window
                                                    dcService.observeWindow(hIFrameWindow);
                                                }
                                            }
                                            frameLoadPending -= 1;
                                            if (!frameLoadPending) {
                                                // Trigger the loadWithFrames event
                                                core._publishEvent({
                                                    type: "loadWithFrames",
                                                    custom: true
                                                });
                                            }
                                        }
                                    };

                                core.utils.addEventListener(hIFrame, "load", function () {
                                    _iframeContext._registerModuleEventsDelayed();
                                });

                                if (core.utils.isLegacyIE && _isFrameLoaded(hIFrame)) {
                                    hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                                    core.utils.addEventListener(hIFrameWindow.document, "readystatechange", function () {
                                        _iframeContext._registerModuleEventsDelayed();
                                    });
                                }

                            }(moduleName, moduleEvents, hIFrame));
                        }
                    }
                }

                registerModuleEvents.clearCache = function () {
                    if (idCache) {
                        idCache.clear();
                        idCache = null;
                    }
                };

                return registerModuleEvents;
            }()), // end of _registerModuleEvents factory


            /**
             * Build the token for an event using the currentTarget of the event
             * (only if the current browser supports currenTarget) Otherwise uses
             * the event.target
             * @param  {Object} event The WebEvent
             * @return {String}       Returns the token as a string, consist of:
             *         eventType | target id target idtype
             */
            _buildToken4currentTarget: function (event) {
                var target = event.nativeEvent ? event.nativeEvent.currentTarget : null,
                    idData = target ? this.getService("browserBase").ElementData.prototype.examineID(target) :
                            {
                                id: event.target ? event.target.id : null,
                                idType: event.target ? event.target.idType : -1
                            };
                return event.type + "|" + idData.id + idData.idType;
            },

            /**
             * Build the token for delegate targets
             * @param  {String} eventType The event.type property of the WebEvent
             * @param  {Object} target    The target or currentTarget of the event.
             * @param  {Object} delegateTarget    The delegated target of the event.
             * @return {String}           Returns the token as a string, consist of:
             *            eventType | target | delegateTarget
             */
            _buildToken4delegateTarget: function (eventType, target, delegateTarget) {
                return eventType + "|" + target + "|" + delegateTarget;
            },

            /**
             * Build the token for bubble targets (either window or document)
             * @param  {String} eventType The event.type property of the WebEvent
             * @param  {Object} target    The target or currentTarget of the event.
             * @param  {Object} delegateTarget    The delegated target of the event.
             * @return {String}           Returns the token as a string, consist of:
             *            eventType | null-2 | window or document
             */
            _buildToken4bubbleTarget: function (eventType, target, checkIframe, delegateTarget) {
                var localTop = core._getLocalTop(),
                    localWindow,
                    browserService = core.getService("browser"),
                    _getIframeElement = function (documentScope) {
                        var retVal = null;

                        if (core._hasSameOrigin(localWindow.parent)) {
                            core.utils.forEach(browserService.queryAll("iframe, frame", localWindow.parent.document), function (iframe) {
                                var iFrameWindow = null;

                                if (!isFrameBlacklisted(iframe)) {
                                    iFrameWindow = core.utils.getIFrameWindow(iframe);
                                    if (core._hasSameOrigin(iFrameWindow) && iFrameWindow.document === documentScope) {
                                        retVal = iframe;
                                    }
                                }
                            });
                        }
                        return retVal;
                    },
                    documentScope = core.utils.getDocument(target),
                    browserBase = this.getService("browserBase"),
                    iframeElement = null,
                    tmpTarget,
                    retVal = eventType,
                    idData;

                if (documentScope) {
                    localWindow = documentScope.defaultView || documentScope.parentWindow;
                }

                if (target === window || target === window.window) {
                    retVal += "|null-2|window";
                } else {
                    if (checkIframe && localWindow && core._hasSameOrigin(localWindow.parent) && typeof documentScope !== "undefined" && localTop.document !== documentScope) {
                        iframeElement = _getIframeElement(documentScope);
                        if (iframeElement) {
                            tmpTarget = browserBase.ElementData.prototype.examineID(iframeElement);
                            retVal += "|" + tmpTarget.xPath + "-2";
                        }
                    } else if (delegateTarget && delegateTarget !== document && core.getFlavor() === "jQuery") {
                        // NOTE: elegateTarget !== document  --- because simple jQuery.on has delegateTarget set to document
                        // for event defined without target e.g. { name: "click", recurseFrame: true }
                        retVal += "|null-2|" + core.utils.getTagName(target) + "|" + core.utils.getTagName(delegateTarget);
                    } else {
                        retVal += "|null-2|document";
                    }
                }

                return retVal;
            },

            /**
             * Event handler for when configuration gets updated.
             * @returns {void}
             * @private
             */
            _reinitConfig: function () {

                // NOTE: Don't use "this" in this method, only use "core" to preserve context.
                core._updateModules();
            },

            /**
             * Iterates over each module delivers the event object if the module
             * is interested in that event.
             * @param {Event} event An event object published by the browser service.
             * @returns {void}
             * @private
             */
            _publishEvent: function (event) {

                // NOTE: Don't use "this" in this method, only use "core" to preserve context.

                var moduleName = null,
                    module = null,
                    // generate the explicit token for the element which received the event
                    // if event is delegated it will have event.data set to the token
                    token = (event.delegateTarget && event.data) ? event.data : core._buildToken4currentTarget(event),
                    modules = null,
                    i,
                    len,
                    target,
                    modEvent = null,
                    canIgnore = false,
                    canPublish = false,
                    coreConfig = core.getCoreConfig(),
                    browserService = core.getService("browser"),
                    delegateTarget = event.delegateTarget || null,
                    screenviewAutoDetect,
                    clickedEl;

                // Only click, change, mouse* and touch* events reset the inactivity timer.
                if (event.type.match(/^(click|change|blur|mouse|touch)/)) {
                    resetInactivityTimer();
                }

                screenviewAutoDetect = core.utils.getValue(coreConfig, "screenviewAutoDetect", true);
                if (screenviewAutoDetect) {
                    // auto detect screenview changes on each event handling cycle
                    detectScreenviewChange();
                }

                // ignore native browser 'load' events
                if ((event.type === "load" || event.type === "pageshow") && !event.nativeEvent.customLoad) {
                    return;
                }

                // ignore 'beforeunload' fired by link placed in blacklist of excluded links
                if (event.type === "click") {
                    lastClickedElement = event.target.element;
                }
                if (event.type === "beforeunload") {
                    canIgnore = false;

                    // Chrome, FF, IE has anchor element on document.activeElement
                    // Safari has anchor element on lastClickedElement
                    clickedEl = (core.utils.getTagName(lastClickedElement) === "a") ? lastClickedElement : document.activeElement;

                    if (clickedEl) {
                        if (hasExcludedProtocol(clickedEl)) {
                            canIgnore = true;
                        } else {
                            core.utils.forEach(coreConfig.ieExcludedLinks, function (selector) {
                                var i,
                                    len,
                                    el = browserService.queryAll(selector);

                                for (i = 0, len = el ? el.length : 0; i < len; i += 1) {
                                    if (typeof el[i] !== undefined && el[i] === lastClickedElement) {
                                        // Last clicked element was in the blacklist. Set the ignore flag.
                                        canIgnore = true;
                                        return;
                                    }
                                }
                            });
                        }
                    }
                    if (canIgnore) {
                        // The beforeunload can be ignored.
                        return;
                    }
                }

                // if an unload event is triggered update the core's internal state to "unloading"
                if (loadUnloadHandler.isUnload(event)) {
                    state = "unloading";
                }

                // ignore native browser 'change' events on IE<9/W3C for radio buttons and checkboxes
                if (event.type === "change" && core.utils.isLegacyIE && core.getFlavor() === "w3c" &&
                        (event.target.element.type === "checkbox" || event.target.element.type === "radio")) {
                    return;
                }

                // use 'propertychange' event in IE<9 to simulate 'change' event on radio and checkbox
                if (event.type === "propertychange") {
                    if (event.nativeEvent.propertyName === "checked" && (event.target.element.type === "checkbox" || (event.target.element.type === "radio" && event.target.element.checked))) {
                        event.type = "change";
                        event.target.type = "INPUT";
                    } else {
                        return;
                    }
                }

                // Is the target element in the blocked list?
                if (event.target && isElementBlocked(event.target.element)) {
                    return;
                }

                // No module has registered the event for the currentTarget,
                // build token for bubble target (document or window)
                if (!events.hasOwnProperty(token)) {
                    if (event.hasOwnProperty("nativeEvent")) {
                        target = event.nativeEvent.currentTarget || event.nativeEvent.target;
                    }
                    token = core._buildToken4bubbleTarget(event.type, target, true, delegateTarget);
                }

                if (events.hasOwnProperty(token)) {
                    modules = events[token];
                    for (i = 0, len = modules.length; i < len; i += 1) {
                        moduleName = modules[i];
                        module = core.getModule(moduleName);
                        modEvent = core.utils.mixin({}, event);
                        if (module && core.isStarted(moduleName) && typeof module.onevent === "function") {
                            canPublish = loadUnloadHandler.canPublish(moduleName, modEvent);
                            if (canPublish) {
                                module.onevent(modEvent);
                            }
                        }
                    }
                }

                if (modEvent && modEvent.type === "unload" && canPublish) {
                    core.destroy();
                }

            },

            _getLocalTop: function () {
                // Return window.window instead of window due to an IE quirk where (window == top) is true but (window === top) is false
                // In such cases, (window.window == top) is true and so is (window.window === top)  Hence window.window is more reliable
                // to compare to see if the library is included in the top window.
                return window.window;
            },

            //---------------------------------------------------------------------
            // Module Registration and Lifecycle
            //---------------------------------------------------------------------

            /**
             * Registers a module creator with TLT.
             * @param {String} moduleName The name of the module that is created using
             *      the creator.
             * @param {Function} creator The function to call to create the module.
             * @returns {void}
             */
            addModule: function (moduleName, creator) {


                modules[moduleName] = {
                    creator: creator,
                    instance: null,
                    context: null,
                    messages: []
                };

                // If the core is initialized, then this module has been dynamically loaded. Start it.
                if (this.isInitialized()) {
                    this.start(moduleName);
                }
            },

            /**
             * Returns the module instance of the given module.
             * @param {String} moduleName The name of the module to retrieve.
             * @returns {Object} The module instance if it exists, null otherwise.
             */
            getModule: function (moduleName) {
                if (modules[moduleName] && modules[moduleName].instance) {
                    return modules[moduleName].instance;
                }
                return null;
            },

            /**
             * Unregisters a module and stops and destroys its instance.
             * @param {String} moduleName The name of the module to remove.
             * @returns {void}
             */
            removeModule: function (moduleName) {

                this.stop(moduleName);
                delete modules[moduleName];
            },

            /**
             * Determines if a module is started by looking for the instance.
             * @param {String} moduleName The name of the module to check.
             * @returns {void}
             */
            isStarted: function (moduleName) {
                return modules.hasOwnProperty(moduleName) && modules[moduleName].instance !== null;
            },

            /**
             * Creates a new module instance and calls it's init() method.
             * @param {String} moduleName The name of the module to start.
             * @returns {void}
             */
            start: function (moduleName) {

                var moduleData = modules[moduleName],
                    instance = null;


                // Only continue if the module data exists and there's not already an instance
                if (moduleData && moduleData.instance === null) {

                    // create the context and instance
                    moduleData.context = new TLT.ModuleContext(moduleName, this);
                    instance = moduleData.instance = moduleData.creator(moduleData.context);

                    // allow module to initialize itself
                    if (typeof instance.init === "function") {
                        instance.init();
                    }

                }
            },

            /**
             * Starts all registered modules, creating an instance and calling their
             * init() methods.
             * @returns {void}
             */
            startAll: function () {

                var moduleName = null;

                for (moduleName in modules) {
                    if (modules.hasOwnProperty(moduleName)) {
                        this.start(moduleName);
                    }
                }
            },

            /**
             * Stops a module, calls it's destroy() method, and deletes the instance.
             * @param {String} moduleName The name of the module to stop.
             * @returns {void}
             */
            stop: function (moduleName) {

                var moduleData = modules[moduleName],
                    instance = null;

                // Only continue if the module instance exists
                if (moduleData && moduleData.instance !== null) {

                    instance = moduleData.instance;

                    // allow module to clean up after itself
                    if (typeof instance.destroy === "function") {
                        instance.destroy();
                    }

                    moduleData.instance = moduleData.context = null;

                }
            },

            /**
             * Stops all registered modules, calling their destroy() methods,
             * and removing their instances.
             * @returns {void}
             */
            stopAll: function () {

                var moduleName = null;

                for (moduleName in modules) {
                    if (modules.hasOwnProperty(moduleName)) {
                        this.stop(moduleName);
                    }
                }
            },

            //---------------------------------------------------------------------
            // Service Registration and Lifecycle
            //---------------------------------------------------------------------

            /**
             * Registers a service creator with TLT.
             * @param {String} serviceName The name of the service that is created using
             *      the creator.
             * @param {Function} creator The function to call to create the service.
             * @returns {void}
             */
            addService: function (serviceName, creator) {


                services[serviceName] = {
                    creator: creator,
                    instance: null
                };
            },

            /**
             * Retrieves a service instance, creating it if one doesn't already exist.
             * @param {String} serviceName The name of the service to retrieve.
             * @returns {Object} The service object as returned from the service
             *      creator or null if the service doesn't exist.
             */
            getService: function (serviceName) {
                if (services.hasOwnProperty(serviceName)) {
                    if (!services[serviceName].instance) {
                        // If you want to have a separate ServiceContext, pass it here instead of "this"
                        try {
                            services[serviceName].instance = services[serviceName].creator(this);
                            if (typeof services[serviceName].instance.init === "function") {
                                services[serviceName].instance.init();
                            }
                        } catch (e) {
                            // shut the library down if jQuery or sizzle is not found / not supported
                            return null;
                        }
                        if (typeof services[serviceName].instance.getServiceName !== "function") {
                            services[serviceName].instance.getServiceName = function () {
                                return serviceName;
                            };
                        }
                    }
                    return services[serviceName].instance;
                }
                return null;
            },

            /**
             * Unregisters a service and destroys its instance.
             * @param {String} serviceName The name of the service to remove.
             * @returns {void}
             */
            removeService: function (serviceName) {
                delete services[serviceName];
            },

            //---------------------------------------------------------------------
            // Intermodule Communication
            //---------------------------------------------------------------------

            /**
             * Broadcasts a message throughout the system to all modules who are
             * interested.
             * @param {Object} message An object containing at least a type property
             *      indicating the message type.
             * @returns {void}
             */
            broadcast: function (message) {
                var i = 0,
                    len = 0,
                    prop = null,
                    module = null;

                if (message && typeof message === "object") {


                    for (prop in modules) {
                        if (modules.hasOwnProperty(prop)) {
                            module = modules[prop];

                            if (core.utils.indexOf(module.messages, message.type) > -1) {
                                if (typeof module.instance.onmessage === "function") {
                                    module.instance.onmessage(message);
                                }
                            }
                        }
                    }
                }
            },

            /**
             * Instructs a module to listen for a particular type of message.
             * @param {String} moduleName The module that's interested in the message.
             * @param {String} messageType The type of message to listen for.
             * @returns {void}
             */
            listen: function (moduleName, messageType) {
                var module = null;

                if (this.isStarted(moduleName)) {
                    module = modules[moduleName];

                    if (core.utils.indexOf(module.messages, messageType) === -1) {
                        module.messages.push(messageType);
                    }
                }
            },
            /**
             * Stops UIC and throws an error.
             * @function
             * @throws {UICError}
             */
            fail: function (message, failcode, skipEvents) {
                message = "UIC FAILED. " + message;
                try {
                    core.destroy(!!skipEvents);
                } finally {
                    core.utils.clog(message);
                    throw new core.UICError(message, failcode);
                }
            },

            /**
             * @constructor
             */
            UICError: (function () {
                function UICError(message, errorCode) {
                    this.message = message;
                    this.code = errorCode;
                }
                UICError.prototype = new Error();
                UICError.prototype.name = "UICError";
                UICError.prototype.constructor = UICError;
                return UICError;
            }()),


            /**
             * Return the name of UIC flavor ("w3c" or "jQuery")
             * @function
             */
            getFlavor: function () {
                // TODO: Use the existing browserService method here
                return "w3c";
            }
        };  // End of "core"


    /**
     * Inactivity timeout implementation.
     * We perform a one time initialization to setup the timeout value from the configuration and
     * define the callback function. The resetInactivityTimer() function is then re-written.
     */
    resetInactivityTimer = function () {
        // One time initialization
        var coreConfig = core.getCoreConfig(),
            // Tracks the inactivity timeout
            inactivityTimerId = null,
            // If no inactivityTimeout is configured, the built-in default is 10 minutes (600000 milliseconds)
            inactivityTimeout = core.utils.getValue(coreConfig, "inactivityTimeout", 600000);

        if (!inactivityTimeout) {
            // An inactivityTimeout value of 0 disables this feature.
            resetInactivityTimer = function () {};
            return;
        }

        /**
         * Inactivity timeout handler function. When the timer expires,
         * log a message on the console indicating the timeout and shutdown.
         * @private
         */
        function inactivityTimeoutHandler() {
            core.utils.clog("UIC self-terminated due to inactivity timeout.");
            core.destroy();
        }

        /**
         * Actual implementation of resetInactivityTimer
         */
        resetInactivityTimer = function () {
            // Clear the pending inactivity timer (if any)
            if (inactivityTimerId) {
                clearTimeout(inactivityTimerId);
                inactivityTimerId = null;
            }

            inactivityTimerId = setTimeout(inactivityTimeoutHandler, inactivityTimeout);
        };

        resetInactivityTimer();
    };

    /**
     * Actual init function called from TLT.init when the DOM is ready.
     * @private
     * @see TLT.init
     */
    _init = function (config, callback) {
        var configService,
            event,
            webEvent,
            baseBrowser,
            browserService,
            cookieModuleConfig,
            queueServiceConfig,
            ajaxService,
            queues,
            sessionCookieName,
            sessionCookieValue,
            endpointURL,
            killswitchURL,
            i;

        if (initialized) {
            core.utils.clog("TLT.init() called more than once. Ignoring.");
            return;
        }

        // Do not initialize if replay is enabled.
        if (TLT && TLT.replay) {
            return;
        }

        configService = core.getService("config");
        configService.updateConfig(config);

        // Check if sessionization cookie value is "DND" indicating kill switch is enabled.
        cookieModuleConfig = configService.getModuleConfig("TLCookie") || {};
        sessionCookieName = cookieModuleConfig.sessionizationCookieName || "TLTSID";
        sessionCookieValue = core.utils.getCookieValue(sessionCookieName);
        if (sessionCookieValue === "DND") {
            if (state !== "destroyed") {
                core.destroy();
            }
            return;
        }

        // Enable modules
        if (!core._updateModules()) {
            if (state !== "destroyed") {
                core.destroy();
            }
            return;
        }

        if (configService.subscribe) {
            configService.subscribe("configupdated", core._reinitConfig);
        }

        initialized = true;
        state = "loaded";

        // Invoke the Overstat Snapshot Extension callback (if any)
        try {
            if (typeof TLFExtensionNotify === "function") {
                TLFExtensionNotify("Initialized");
            }
        } catch (e1) {
        }

        //generate fake load event to send for modules
        event = {
            type: 'load',
            target: window.window,
            srcElement: window.window,
            currentTarget: window.window,
            bubbles: true,
            cancelBubble: false,
            cancelable: true,
            timeStamp: +new Date(),
            customLoad: true
        };

        baseBrowser = core.getService("browserBase");
        webEvent = new baseBrowser.WebEvent(event);
        core._publishEvent(webEvent);

        ajaxService = core.getService("ajax");
        queueServiceConfig = core.getServiceConfig("queue");
        queues = queueServiceConfig.queues || [];

        for (i = 0; i < queues.length; i += 1) {
            // Killswitch check only if session was newly created.
            if (!sessionCookieValue && cookieModuleConfig.tlAppKey) {
                endpointURL = queues[i].endpoint;
                killswitchURL = queues[i].killswitchURL || (endpointURL.match("collectorPost") ?
                        endpointURL.replace("collectorPost", "switch/" + cookieModuleConfig.tlAppKey) : null);
                if (killswitchURL) {
                    ajaxService.sendRequest({
                        type: "GET",
                        url: killswitchURL,
                        async: true,
                        timeout: 5000,
                        oncomplete: function (result) {
                            if (result.responseText === "0") {
                                core.setAutoFlush(false);
                                core.utils.setCookie(sessionCookieName, "DND");
                                core.destroy();
                            }
                        }
                    });
                }
            }
            // Endpoint check
            if (queues[i].checkEndpoint) {
                ajaxService.sendRequest({
                    oncomplete: function (result) {
                        //do nothing
                    },
                    timeout: queues[i].endpointCheckTimeout || 3000,
                    url: queues[i].endpoint,
                    headers: {
                        "X-PageId": tltPageId,
                        "X-Tealeaf-SaaS-AppKey": cookieModuleConfig.tlAppKey,
                        "X-Tealeaf-EndpointCheck": true
                    },
                    async: true,
                    error: function (result) {
                        if (result.success) {
                            return;
                        }
                        core.setAutoFlush(false);
                        core.destroy();
                    }
                });
            }
        }

        if (typeof _callback === "function") {
            // Protect against unexpected exceptions since _callback is 3rd party code.
            try {
                _callback("initialized");
            } catch (e2) {
                // Do nothing!
            }
        }
    };

    // Add methods that passthrough to services
    (function () {

        var name = null,
            i,
            len;

        for (name in servicePassthroughs) {
            if (servicePassthroughs.hasOwnProperty(name)) {
                for (i = 0, len = servicePassthroughs[name].length; i < len; i += 1) {
                    (function (serviceName, methodName) {
                        core[methodName] = function () {
                            var service = this.getService(serviceName);
                            if (service) {
                                return service[methodName].apply(service, arguments);
                            }
                        };
                    }(name, servicePassthroughs[name][i]));

                }
            }
        }

    }());

    return core;
}());

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview Defines utility functions available to all modules via context object or as TLT.utils
 * @exports TLT.utils
 */

/*global TLT, window*/
/*jshint loopfunc:true*/

(function () {

    "use strict";

    var ua = window.navigator.userAgent.toLowerCase(),

        // IE user-agent strings contain "MSIE" and/or "Trident" (code name for IE's rendering engine)
        _isIE = (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1),

        _isLegacyIE = (function () {
            // W3 Navigation timing spec. supported from IE 9 onwards.
            var isNavTimingSupported = !!window.performance;
            return (_isIE && (!isNavTimingSupported || document.documentMode < 9));
        }()),

        _isAndroid = (ua.indexOf("android") !== -1),

        _isiOS = /(ipad|iphone|ipod)/.test(ua),

        _isOperaMini = (ua.indexOf("opera mini") !== -1),

        tltUniqueIndex = 1,

        tlTypes = {
            // Keep these sorted for readability.
            "a:": "link",
            "button:button": "button",
            "button:submit": "button",
            "input:button": "button",
            "input:checkbox": "checkBox",
            "input:color": "colorPicker",
            "input:date": "datePicker",
            "input:datetime": "datetimePicker",
            "input:datetime-local": "datetime-local",
            "input:email": "emailInput",
            "input:file": "fileInput",
            "input:image": "button",
            "input:month": "month",
            "input:number": "numberPicker",
            "input:password": "textBox",
            "input:radio": "radioButton",
            "input:range": "slider",
            "input:reset": "button",
            "input:search": "searchBox",
            "input:submit": "button",
            "input:tel": "tel",
            "input:text": "textBox",
            "input:time": "timePicker",
            "input:url": "urlBox",
            "input:week": "week",
            "select:": "selectList",
            "select:select-one": "selectList",
            "textarea:": "textBox",
            "textarea:textarea": "textBox"
        },

        utils = {
            /**
             * Indicates if browser is IE.
             */
            isIE: _isIE,

            /**
             * Indicates if browser is IE<9 or IE 9+ running in
             * compatibility mode.
             */
            isLegacyIE: _isLegacyIE,

            /**
             * Indicates if the browser is based on an Android platform device.
             */
            isAndroid: _isAndroid,

            /**
             * Indicates if the device considers zero degrees to be landscape and 90 degrees to be portrait
             */
            isLandscapeZeroDegrees: false,

            /**
             * Indicates if the browser is based on an iOS platform device.
             */
            isiOS: _isiOS,

            /**
             * Indicates if the browser is Opera Mini.
             */
            isOperaMini: _isOperaMini,

            /**
             * Checks whether given parameter is null or undefined
             * @param {*} obj Any value
             * @returns {boolean} True if obj is null or undefined; false otherwise
             */
            isUndefOrNull: function (obj) {
                return typeof obj === "undefined" || obj === null;
            },

            /**
             * Checks if the given parameter is an Array.
             * @param {*} obj Any value
             * @returns {boolean} True if obj is an Array; false otherwise.
             */
            isArray: function (obj) {
                return !!(obj && Object.prototype.toString.call(obj) === "[object Array]");
            },

            /**
             * Returns a unique serial number
             * @returns {int} A number that can be used as a unique identifier.
             */
            getSerialNumber: function () {
                var id;

                id = tltUniqueIndex;
                tltUniqueIndex += 1;

                return id;
            },

            /**
             * Generates a random string of specified length and comprised of
             * characters from the specified data set or any alphanumeric.
             * @param {integer} length The required length of the random string.
             * @param {string}  [dataSet] Optional string specifying the set of characters
             *                  to be used for generating the random string.
             * @returns {String} A randomly generated string of specified length.
             */
            getRandomString: function (length, dataSet) {
                var i,
                    dataSetLength,
                    defaultDataSet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
                    randomString = "";

                // Sanity check
                if (!length) {
                    return randomString;
                }

                if (typeof dataSet !== "string") {
                    dataSet = defaultDataSet;
                }

                for (i = 0, dataSetLength = dataSet.length; i < length; i += 1) {
                    // AppScan: IGNORE (false flag) - Math.random is not used in a cryptographical context.
                    randomString += dataSet.charAt(Math.floor(Math.random() * dataSetLength));
                }

                return randomString;
            },

            /**
             * Used to test and get value from an object.
             * @private
             * @function
             * @name core.utils.getValue
             * @param {object} parentObj An object you want to get a value from.
             * @param {string} propertyAsStr A string that represents dot notation to get a value from object.
             * @param {object|String|Number} [defaultValue] The default value to be returned if the property is not found.
             * @return {object} If object is found, if not then default value will be returned. If the default value is
             * not defined then null will be returned.
             */
            getValue: function (parentObj, propertyAsStr, defaultValue) {
                var i,
                    len,
                    properties;

                defaultValue = typeof defaultValue === "undefined" ? null : defaultValue;

                // Sanity check
                if (!parentObj || typeof parentObj !== "object" || typeof propertyAsStr !== "string") {
                    return defaultValue;
                }

                properties = propertyAsStr.split(".");
                for (i = 0, len = properties.length; i < len; i += 1) {
                    if (this.isUndefOrNull(parentObj) || typeof parentObj[properties[i]] === "undefined") {
                        return defaultValue;
                    }
                    parentObj = parentObj[properties[i]];
                }
                return parentObj;
            },

            /**
             * Helper function to find an item in an array.
             * @param {Array} array The array to search.
             * @param {String} item The item to search for.
             * @returns {int} The index of the item if found, -1 if not.
             */
            indexOf: function (array, item) {
                var i,
                    len;

                if (array && array.indexOf) {
                    return array.indexOf(item);
                }

                if (array && array instanceof Array) {
                    for (i = 0, len = array.length; i < len; i += 1) {
                        if (array[i] === item) {
                            return i;
                        }
                    }
                }

                return -1;
            },

            /**
             * Invokes callback for each element of an array.
             * @param {Array} array The array (or any indexable object) to walk through
             * @param {function} callback Callback function
             * @param {object} [context] context object; if not provided global object will be considered
             */
            forEach: function (array, callback, context) {
                var i,
                    len;

                // Sanity checks
                if (!array || !array.length || !callback || !callback.call) {
                    return;
                }

                for (i = 0, len = array.length; i < len; i += 1) {
                    callback.call(context, array[i], i, array);
                }
            },

            /**
             * Returns true if callback returns true at least once. Callback is
             * called for each array element unless it reaches end of array or
             * returns true.
             * @param {object} array An Array or any indexable object to walk through
             * @param {function} callback A callback function
             * @returns {boolean} True if callback returned true at least once; false otherwise
             */
            some: function (array, callback) {
                var i,
                    len,
                    val = false;

                for (i = 0, len = array.length; i < len; i += 1) {
                    val = callback(array[i], i, array);
                    if (val) {
                        return val;
                    }
                }
                return val;
            },

            /**
             * Converts an arguments object into an array. This is used to augment
             * the arguments passed to the TLT methods used by the Module Context.
             * @param {Arguments} items An array-like collection.
             * @return {Array} An array containing the same items as the collection.
             */
            convertToArray: function (items) {
                var i = 0,
                    len = items.length,
                    result = [];

                while (i < len) {
                    result.push(items[i]);
                    i += 1;
                }

                return result;
            },

            mixin: function (dst) {
                var prop,
                    src,
                    srcId,
                    len;

                for (srcId = 1, len = arguments.length; srcId < len; srcId += 1) {
                    src = arguments[srcId];
                    for (prop in src) {
                        if (Object.prototype.hasOwnProperty.call(src, prop)) {
                            dst[prop] = src[prop];
                        }
                    }
                }
                return dst;
            },

            extend: function (deep, target, src) {
                var prop = "";

                for (prop in src) {
                    if (Object.prototype.hasOwnProperty.call(src, prop)) {
                        if (deep && Object.prototype.toString.call(src[prop]) === "[object Object]") {
                            if (typeof target[prop] === "undefined") {
                                target[prop] = {};
                            }
                            this.extend(deep, target[prop], src[prop]);
                        } else {
                            target[prop] = src[prop];
                        }
                    }
                }
                return target;
            },

            /**
             * Makes copy of an object.
             * @function
             * @name core.utils.clone
             * @param {object} obj A object that will be cloned.
             * @return {object} Object cloned.
             */
            clone: function (obj) {
                var copy,
                    attr;

                if (null === obj || "object" !== typeof obj) {
                    return obj;
                }

                if (obj instanceof Object) {
                    copy = (Object.prototype.toString.call(obj) === "[object Array]") ? [] : {};
                    for (attr in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, attr)) {
                            copy[attr] = this.clone(obj[attr]);
                        }
                    }
                    return copy;
                }
            },

            /**
             * Parses a version string of format e.g. "5.1.0" and returns an array
             * with individual version components [5, 1, 0]
             * @function
             * @param {String} version The version string
             * @returns {Array} The version components parsed as integers.
             */
            parseVersion: function (version) {
                var i,
                    len,
                    retval = [];

                // Sanity check
                if (!version || !version.length) {
                    return retval;
                }

                retval = version.split(".");
                for (i = 0, len = retval.length; i < len; i += 1) {
                    retval[i] = /^[0-9]+$/.test(retval[i]) ? parseInt(retval[i], 10) : retval[i];
                }

                return retval;
            },

            /**
             *
             */
            isEqual: function (a, b) {
                var i,
                    isEqual,
                    prop,
                    swap,
                    len;

                if (a === b) {
                    return true;
                }
                if (typeof a !== typeof b) {
                    return false;
                }
                if (a instanceof Object && b instanceof Object) {
                    // Array
                    if (Object.prototype.toString.call(a) === "[object Array]" &&
                            Object.prototype.toString.call(b) === "[object Array]") {
                        if (a.length !== b.length) {
                            return false;
                        }
                        for (i = 0, len = a.length; i < len; i += 1) {
                            if (!this.isEqual(a[i], b[i])) {
                                return false;
                            }
                        }
                        return true;
                    }
                    // Object
                    if (Object.prototype.toString.call(a) === "[object Object]" &&
                            Object.prototype.toString.call(b) === "[object Object]") {
                        for (i = 0; i < 2; i += 1) {
                            for (prop in a) {
                                if (a.hasOwnProperty(prop)) {
                                    if (!b.hasOwnProperty(prop)) {
                                        return false;
                                    }
                                    isEqual = this.isEqual(a[prop], b[prop]);
                                    if (!isEqual) {
                                        return false;
                                    }
                                }
                            }
                            swap = a;
                            a = b;
                            b = swap;
                        }
                        return true;
                    }
                }
                return false;
            },

            /**
             *
             */
            createObject: (function () {
                var fn = null,
                    F = null;
                if (typeof Object.create === "function") {
                    fn = Object.create;
                } else {
                    F = function () {};
                    fn = function (o) {
                        if (typeof o !== "object" && typeof o !== "function") {
                            throw new TypeError("Object prototype need to be an object!");
                        }
                        F.prototype = o;
                        return new F();
                    };
                }
                return fn;
            }()),

            /**
             * Method access the object element based on a string. By default it searches starting from window object.
             * @function
             * @example core.utils.access("document.getElementById");
             * @example core.utils.access("address.city", person);
             * @param {string} path Path to object element. Currently on dot separators are supported (no [] notation support)
             * @param {object} [rootObj=window] Root object where there search starts. window by default
             * @return {*} Object element or undefined if the path is not valid
             */
            access: function (path, rootObj) {
                var obj = rootObj || window,
                    arr,
                    i,
                    len;

                if (typeof path !== "string" || (typeof obj !== "object" && obj !== null)) {
                    return;
                }
                arr = path.split(".");
                for (i = 0, len = arr.length; i < len; i += 1) {
                    if (i === 0 && arr[i] === "window") {
                        continue;
                    }
                    if (!Object.prototype.hasOwnProperty.call(obj, arr[i])) {
                        return;
                    }
                    obj = obj[arr[i]];
                    if (i < (len - 1) && !(obj instanceof Object)) {
                        return;
                    }
                }
                return obj;
            },

            /**
             * Checks if a given character is numeric.
             * @param  {String}  character The character to test.
             * @return {Boolean} Returns true if the given character is a number.
             */
            isNumeric: function (character) {
                var retVal = false;

                // Sanity check
                if (utils.isUndefOrNull(character) || character === "") {
                    return retVal;
                }

                retVal = !isNaN(character * 2);
                return retVal;
            },

            /**
             * Checks if a given character is uppercase.
             * @param  {String}  character The character to test.
             * @return {Boolean} Returns true if the character is uppercase.
             *                   Otherwise false.
             */
            isUpperCase: function (character) {
                return character === character.toUpperCase() &&
                        character !== character.toLowerCase();
            },

            /**
             * Checks if a given character is lowercase.
             * @param  {String}  character The character to test.
             * @return {Boolean} Returns true if the character is lowercase.
             *                   Otherwise false.
             */
            isLowerCase: function (character) {
                return character === character.toLowerCase() &&
                        character !== character.toUpperCase();
            },

            /**
             * Builds an object of key => value pairs of HTTP headers from a string.
             * @param {String} headers The string of HTTP headers separated by newlines
             * (i.e.: "Content-Type: text/html\nLast-Modified: ..")
             * @return {Object} Returns an object where every key is a header and
             * every value it's corresponding value.
             */
            extractResponseHeaders: function (headers) {
                var headersObj = {},
                    i,
                    len,
                    header = null;

                // Sanity check
                if (!headers || !headers.length) {
                    headers = [];
                } else {
                    headers = headers.split('\n');
                }

                for (i = 0, len = headers.length; i < len; i += 1) {
                    header = headers[i].split(': ');
                    if (header.length === 2) {
                        headersObj[header[0]] = header[1];
                    }
                }
                return headersObj;
            },

            /**
             *
             */
            getTargetState: function (target) {
                var tagnames = {
                        "a": ["innerText", "href"],
                        "input": {
                            "range": ["maxValue:max", "value"],
                            "checkbox": ["value", "checked"],
                            "radio": ["value", "checked"],
                            "image": ["src"]
                        },
                        "select": ["value"],
                        "button": ["value", "innerText"],
                        "textarea": ["value"]
                    },
                    tagName = this.getTagName(target),
                    properties = tagnames[tagName] || null,
                    selectedOption = null,
                    state = null,
                    i = 0,
                    len = 0,
                    alias = null,
                    key = "";

                if (properties !== null) {
                    // For input elements, another level of indirection is required
                    if (Object.prototype.toString.call(properties) === "[object Object]") {
                        // default state for input elements is represented by the "value" property
                        properties = properties[target.type] || ["value"];
                    }
                    state = {};
                    for (key in properties) {
                        if (properties.hasOwnProperty(key)) {
                            if (properties[key].indexOf(":") !== -1) {
                                alias = properties[key].split(":");
                                state[alias[0]] = target[alias[1]];
                            } else if (properties[key] === "innerText") {
                                state[properties[key]] = this.trim(target.innerText || target.textContent);
                            } else {
                                state[properties[key]] = target[properties[key]];
                            }
                        }
                    }
                }

                // Special processing for select lists
                if (tagName === "select" && target.options && !isNaN(target.selectedIndex)) {
                    state.index = target.selectedIndex;
                    if (state.index >= 0 && state.index < target.options.length) {
                        selectedOption = target.options[target.selectedIndex];
                        /* Select list value is derived from the selected option's properties
                         * in the following order:
                         * 1. value
                         * 2. label
                         * 3. text
                         * 4. innerText
                         */
                        state.value = selectedOption.getAttribute("value") || selectedOption.getAttribute("label") || selectedOption.text || selectedOption.innerText;
                        state.text = selectedOption.text || selectedOption.innerText;
                    }
                }

                return state;
            },

            getDocument: function (node) {
                var doc = node;
                if (node && node.nodeType !== 9) {
                    if (node.getRootNode) {
                        doc = node.getRootNode();
                    } else {
                        doc = node.ownerDocument || node.document;
                    }
                }
                return doc;
            },

            getWindow: function (node) {
                try {
                    if (node.self !== node) {
                        var ownerDocument = utils.getDocument(node);
                        return (!utils.isUndefOrNull(ownerDocument.defaultView)) ? (ownerDocument.defaultView) : (ownerDocument.parentWindow);
                    }
                } catch (e) {
                    // node or it's ownerDocument may not be associated with any window
                    node = null;
                }
                return node;
            },

            /**
             * Given a window.location or document.location object, extract and return the
             * origin and pathname.
             * @param {Object} location The window.location or document.location Object
             * @return {Object} Return an object containing the normalized origin and the pathname.
             */
            getOriginAndPath: function (location) {
                var retObj = {},
                    temp;

                location = location || window.location;

                if (location.origin) {
                    retObj.origin = location.origin;
                } else {
                    retObj.origin = (location.protocol || "") + "//" + (location.host || "");
                }

                // Account for some applications using the ";" as the query separator
                retObj.path = (location.pathname || "").split(";", 1)[0];

                // This is needed for Native hybrid replay to get file path of webview assets used.
                if (retObj.origin.indexOf("file://") > -1) {
                    temp = retObj.path.match(/(.*)(\/.*app.*)/);
                    if (temp !== null) {
                        retObj.path = temp[2];
                    }
                }

                return retObj;
            },

            /**
             * Given a HTML frame element, returns the window object of the frame. Tries the contentWindow property
             * first. If contentWindow is not accessible, tries the contentDocument.parentWindow property instead.
             * @param {Object} iFrameElement The HTML frame element object.
             * @return {Object} Returns the window object of the frame element or null.
             */
            getIFrameWindow: function (iFrameElement) {
                var contentWindow = null;

                if (!iFrameElement) {
                    return contentWindow;
                }

                try {
                    contentWindow = iFrameElement.contentWindow ||
                        (iFrameElement.contentDocument ? iFrameElement.contentDocument.parentWindow : null);
                } catch (e) {
                    // Do nothing.
                }

                return contentWindow;
            },

            /**
             * Returns the tagName of the element in lowercase.
             * @param {Element} node DOM element
             * @return {String} The tagName of the element in lowercase.
             */
            getTagName: function (node) {
                var tagName = "";

                // Sanity check
                if (utils.isUndefOrNull(node)) {
                    return tagName;
                }

                if (node === document || node.nodeType === 9) {
                    tagName = "document";
                } else if (node === window || node === window.window) {
                    tagName = "window";
                } else if (typeof node === "string") {
                    tagName = node.toLowerCase();
                } else {
                    if (node.tagName) {
                        tagName = node.tagName.toLowerCase();
                    } else if (node.nodeName) {
                        tagName = node.nodeName.toLowerCase();
                    } else {
                        tagName = "";
                    }
                }
                return tagName;
            },

            /**
             * Returns the normalized type of the element.
             * @param {Element} node DOM element
             * @return {String} The normalized type of the element.
             */
            getTlType: function (node) {
                var elementType,
                    key,
                    tlType = "";

                // Sanity check
                if (utils.isUndefOrNull(node) || !node.type) {
                    return tlType;
                }

                elementType = node.type.toLowerCase();
                key = elementType + ":";
                if (node.subType) {
                    key += node.subType.toLowerCase();
                }

                tlType = tlTypes[key] || elementType;

                return tlType;
            },

            /**
             * Returns true if given node is element from a frame
             * @param {Element} node DOM element
             * @return {boolean} true if input element is element from a frame; false otherwise
             */
            isIFrameDescendant: function (node) {
                var nodeWindow = utils.getWindow(node);

                /*jshint eqeqeq:false, eqnull: false */
                /* The != operator below is on purpose due to legacy IE issues, where:
                   window === top returns false, but window == top returns true */
                return (nodeWindow ? (nodeWindow != TLT._getLocalTop()) : false);
            },

            /**
             * Takes the orientation in degrees and returns the orientation mode as a
             * text string. 0, 180 and 360 correspond to portrait mode while 90, -90
             * and 270 correspond to landscape.
             * @function
             * @name core.utils.getOrientationMode
             * @param {number} orientation A normalized orientation value such as
             *          0, -90, 90, 180, 270, 360.
             * @return {string} "PORTRAIT" or "LANDSCAPE" for known orientation values.
             * "UNKNOWN" for unrecognized values. "INVALID" in case of error.
             */
            getOrientationMode: function (orientation) {
                var mode = "INVALID";

                if (typeof orientation !== "number") {
                    return mode;
                }

                switch (orientation) {
                case 0:
                case 180:
                case 360:
                    mode = "PORTRAIT";
                    break;
                case 90:
                case -90:
                case 270:
                    mode = "LANDSCAPE";
                    break;
                default:
                    mode = "UNKNOWN";
                    break;
                }

                return mode;
            },

            clog: (function (window) {
                return function () {
                    // Do nothing!
                };
            }(window)),

            /**
             * Trims any whitespace and returns the trimmed string.
             * @function
             * @name core.utils.trim
             * @param {string} str The string to be trimmed.
             * @return {string} The trimmed string.
             */
            trim: function (str) {
                // Sanity check.
                if (!str || !str.toString) {
                    return str;
                }
                return str.toString().replace(/^\s+|\s+$/g, "");
            },

            /**
             * Trims any whitespace at the beginning of the string and returns the
             * trimmed string.
             * @function
             * @name core.utils.ltrim
             * @param {string} str The string to be trimmed.
             * @return {string} The trimmed string.
             */
            ltrim: function (str) {
                // Sanity check.
                if (!str || !str.toString) {
                    return str;
                }
                return str.toString().replace(/^\s+/, "");
            },

            /**
             * Trims any whitespace at the end of the string and returns the
             * trimmed string.
             * @function
             * @name core.utils.rtrim
             * @param {string} str The string to be trimmed.
             * @return {string} The trimmed string.
             */
            rtrim: function (str) {
                // Sanity check.
                if (!str || !str.toString) {
                    return str;
                }
                return str.toString().replace(/\s+$/, "");
            },

            /**
             * Sets the specified cookie.
             * @function
             * @param {string} cookieName The name of the cookie.
             * @param {string} cookieValue The value of the cookie.
             * @param {integer} [maxAge] The max age of the cookie in seconds. If none is specified, defaults to creating a session cookie.
             * @param {string} [path] The absolute path. If none is specified, defaults to "/"
             * @param {string} [domain] The domain on which to set the cookie. If none is specified, defaults to location.hostname
             */
            setCookie: function (cookieName, cookieValue, maxAge, path, domain) {
                var i,
                    len,
                    domainArray,
                    expiry,
                    maxAgeStr = "",
                    pathStr;

                // Sanity check
                if (!cookieName) {
                    return;
                }

                // Cookie name and value cannot contain unescaped whitespace, comma, semi-colon etc.
                cookieName = encodeURIComponent(cookieName);
                cookieValue = encodeURIComponent(cookieValue);

                domainArray = (domain || location.hostname).split('.');
                pathStr = ";path=" + (path || "/");
                if (typeof maxAge === "number") {
                    if (this.isIE) {
                        expiry = new Date();
                        expiry.setTime(expiry.getTime() + (maxAge * 1000));
                        // IE does not support max-age but instead uses Expires
                        maxAgeStr = ";expires=" + expiry.toUTCString();
                    } else {
                        maxAgeStr = ";max-age=" + maxAge;
                    }
                }

                // Try to set the cookie with two domain components. e.g. "ibm.com".
                // If not successful try with three domain components, e.g. "ibm.co.uk" and so on.
                for (len = domainArray.length, i = (len === 1 ? 1 : 2); i <= len; i += 1) {
                    document.cookie = cookieName + "=" + cookieValue + ";domain=" + domainArray.slice(-i).join('.') + pathStr + maxAgeStr;
                    if (this.getCookieValue(cookieName) === cookieValue) {
                        break;
                    }
                    if (len === 1) {
                        // Special case when trying to set cookie on single component domain fails.
                        // Try to set the cookie without explicitly specifying the domain.
                        document.cookie = cookieName + "=" + cookieValue + pathStr + maxAgeStr;
                    }
                }
            },

            /**
             * Finds and returns the named cookie's value.
             * @function
             * @name core.utils.getCookieValue
             * @param {string} cookieName The name of the cookie.
             * @param {string} [cookieString] Optional cookie string in which to search for cookieName.
             * If none is specified, then document.cookie is used by default.
             * @return {string} The cookie value if a match is found or null.
             */
            getCookieValue: function (cookieName, cookieString) {
                var i,
                    len,
                    cookie,
                    cookies,
                    cookieValue = null,
                    cookieNameLen;

                try {
                    cookieString = cookieString || document.cookie;

                    // Sanity check.
                    if (!cookieName || !cookieName.toString) {
                        return null;
                    }

                    // Append an '=' to the cookie name
                    cookieName += "=";
                    cookieNameLen = cookieName.length;

                    // Get the individual cookies into an array and look for a match
                    cookies = cookieString.split(';');
                    for (i = 0, len = cookies.length; i < len; i += 1) {
                        cookie = cookies[i];
                        cookie = utils.ltrim(cookie);

                        // Check if cookieName matches the current cookie prefix.
                        if (cookie.indexOf(cookieName) === 0) {
                            // Match found! Get the value (i.e. RHS of "=" sign)
                            cookieValue = cookie.substring(cookieNameLen, cookie.length);
                            break;
                        }
                    }
                } catch (e) {
                    cookieValue = null;
                }

                return cookieValue;
            },

            /**
             * Finds and returns the query parameter's value.
             * @function
             * @name core.utils.getQueryStringValue
             * @param {string} paramName The name of the query parameter.
             * @param {string} [queryDelim] The query string delimiter. Either ";" or "&"
             * @param {string} [queryString] Optional query string in which to search for the query parameter.
             * If none is specified, then document.location.search is used by default.
             * @return {string} The query parameter value if a match is found or null.
             */
            getQueryStringValue: function (paramName, queryDelim, queryString) {
                var i,
                    j,
                    queryStringLen,
                    paramValue = null,
                    valueStartIndex;

                try {
                    queryString = queryString || window.location.search;
                    queryStringLen = queryString.length;

                    // Sanity check.
                    if (!paramName || !paramName.toString || !queryStringLen) {
                        return null;
                    }

                    // Default delimiter is &
                    queryDelim = queryDelim || "&";
                    // Normalize for easy searching by replacing initial '?' with the delimiter
                    queryString = queryDelim + queryString.substring(1);
                    // Modify the parameter name to prefix the delimiter and append an '='
                    paramName = queryDelim + paramName + "=";

                    i = queryString.indexOf(paramName);
                    if (i !== -1) {
                        valueStartIndex = i + paramName.length;
                        // Match found! Get the value (i.e. RHS of "=" sign upto the delim or end of string)
                        j = queryString.indexOf(queryDelim, valueStartIndex);
                        if (j === -1) {
                            j = queryStringLen;
                        }
                        paramValue = decodeURIComponent(queryString.substring(valueStartIndex, j));
                    }
                } catch (e) {
                    // Do nothing!
                }

                return paramValue;
            },

            /**
             * Quick wrapper for addEventL:istener/attachEvent. Mainly to be used for core, before UIC is fully
             * initialized
             * @function
             * @name core.util.addEventListener
             */
            addEventListener: (function () {
                if (window.addEventListener) {
                    return function (element, eventName, listener) {
                        element.addEventListener(eventName, listener, false);
                    };
                }
                return function (element, eventName, listener) {
                    element.attachEvent("on" + eventName, listener);
                };
            }()),

            /**
             * Returns the index of the rule that is matched by the target object.
             * @function
             * @name core.utils.matchTarget
             * @param {Array} rules An array of match rules containing objects such as
             * {id, idType} or { { regex }, idType } or a string representing "CSS Selectors"
             * @param {Object} target  The normalized target object of the message.
             * @return {int} Returns the index of the matching rule. If none of the rules match then returns -1.
             */
            matchTarget: function (rules, target) {
                var i,
                    j,
                    domElement,
                    matchIndex = -1,
                    qr,
                    qrLen,
                    qrTarget,
                    len,
                    rule,
                    scope = document;

                // Sanity check
                if (!rules || !target) {
                    return matchIndex;
                }

                if (!this.browserService || !this.browserBaseService) {
                    this.browserService = TLT.getService("browser");
                    this.browserBaseService = TLT.getService("browserBase");
                }

                if (target.idType === -2) {
                    // Get the document scope of xpath ids since the elements could be inside a frame/iframe
                    domElement = this.browserBaseService.getNodeFromID(target.id, target.idType);
                    scope = this.getDocument(domElement);
                }

                for (i = 0, len = rules.length; i < len && matchIndex === -1; i += 1) {
                    rule = rules[i];

                    // Check if rule is a selector string.
                    if (typeof rule === "string") {
                        qr = this.browserService.queryAll(rule, scope);
                        for (j = 0, qrLen = qr ? qr.length : 0; j < qrLen; j += 1) {
                            if (qr[j]) {
                                qrTarget = this.browserBaseService.ElementData.prototype.examineID(qr[j]);
                                if (qrTarget.idType === target.idType && qrTarget.id === target.id) {
                                    matchIndex = i;
                                    break;
                                }
                            }
                        }
                    } else if (rule && rule.id && rule.idType && target.idType && target.idType.toString() === rule.idType.toString()) {
                        // Note: idType provided by wizard is a string so convert both to strings before comparing.

                        // An id in the rules list could be a direct match, in which case it will be a string OR
                        // it could be a regular expression in which case it would be an object like this:
                        // {regex: ".+private$", flags: "i"}
                        switch (typeof rule.id) {
                        case "string":
                            if (rule.id === target.id) {
                                matchIndex = i;
                            }
                            break;
                        case "object":
                            if (!rule.cRegex) {
                                // Cache the RegExp object for future use.
                                rule.cRegex = new RegExp(rule.id.regex, rule.id.flags);
                            }
                            // Reset and test
                            rule.cRegex.lastIndex = 0;
                            if (rule.cRegex.test(target.id)) {
                                matchIndex = i;
                            }
                            break;
                        }
                    }
                }
                return matchIndex;
            },

            /**
             * Basic WeakMap implementation - a map which can be indexed with objects.
             * In comparison to the original API 'delete' method has been replaced with 'remove'
             * due to compatibility with legacy IE
             * @constructor
             * @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/WeakMap
             */
            WeakMap: (function () {
                function index(data, key) {
                    var i,
                        len;
                    data = data || [];
                    for (i = 0, len = data.length; i < len; i += 1) {
                        if (data[i][0] === key) {
                            return i;
                        }
                    }
                    return -1;
                }
                return function () {
                    var data = [];
                    this.set = function (key, val) {
                        var idx = index(data, key);
                        data[idx > -1 ? idx : data.length] = [key, val];
                    };
                    this.get = function (key) {
                        var arr = data[index(data, key)];
                        return (arr ? arr[1] : undefined);
                    };
                    this.clear = function () {
                        data = [];
                    };
                    this.has = function (key) {
                        return (index(data, key) >= 0);
                    };
                    this.remove = function (key) {
                        var idx = index(data, key);
                        if (idx >= 0) {
                            data.splice(idx, 1);
                        }
                    };
                    this["delete"] = this.remove;
                };
            }())
        };


    if (typeof TLT === "undefined" || !TLT) {
        window.TLT = {};
    }

    TLT.utils = utils;

}());

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview Defines a simple event target interface that can be inherited
 *      from by other parts of the system.
 * @exports TLT.EventTarget
 */
/*global TLT*/

(function () {

    "use strict";

    /**
     * Abstract type that implements basic event handling capabilities.
     * Other types may inherit from this in order to provide custom
     * events.
     * @constructor
     */
    TLT.EventTarget = function () {

        /**
         * Holds all registered event handlers. Each property represents
         * a specific event, each property value is an array containing
         * the event handlers for that event.
         * @type Object
         */
        this._handlers = {};

    };

    TLT.EventTarget.prototype = {

        /**
         * Restores the constructor to the correct value.
         * @private
         */
        constructor: TLT.EventTarget,

        /**
         * Publishes an event with the given name, which causes all
         * event handlers for that event to be called.
         * @param {String} name The name of the event to publish.
         * @param {Variant} [data] The data to provide for the event.
         * @returns {void}
         */
        publish: function (name, data) {

            var i = 0,
                len = 0,
                handlers = this._handlers[name],
                event = {
                    type: name,
                    data: data
                };

            if (typeof handlers !== "undefined") {
                for (len = handlers.length; i < len; i += 1) {
                    handlers[i](event);
                }
            }

        },

        /**
         * Registers an event handler for the given event.
         * @param {String} name The name of the event to subscribe to.
         * @param {Function} handler The function to call when the event occurs.
         * @returns {void}
         */
        subscribe: function (name, handler) {

            if (!this._handlers.hasOwnProperty(name)) {
                this._handlers[name] = [];
            }


            this._handlers[name].push(handler);
        },

        /**
         * Unregisters an event handler for the given event.
         * @param {String} name The name of the event to unsubscribe from.
         * @param {Function} handler The event handler to remove.
         * @returns {void}
         */
        unsubscribe: function (name, handler) {

            var i = 0,
                len = 0,
                handlers = this._handlers[name];

            if (handlers) {
                for (len = handlers.length; i < len; i += 1) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                        return;
                    }
                }
            }
        }

    };

}());
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview Defines ModuleContext, which is used by all modules.
 * @exports TLT.ModuleContext
 */

/*global TLT*/
/*jshint loopfunc:true*/

/**
 * A layer that abstracts core functionality for each modules. Modules interact
 * with a ModuleContext object to ensure that they're not doing anything
 * they're not allowed to do.
 * @class
 * @param {String} moduleName The name of the module that will use this context.
 * @param {TLT} core The core object. This must be passed in to enable easier
 *        testing.
 */
TLT.ModuleContext = (function () {

    "use strict";

    /**
     * Methods to be exposed from the Core to ModuleContext. ModuleContext
     * simply passes through these methods to the Core. By listing the
     * methods here, the ModuleContext object can be dynamically created
     * to keep the code as small as possible. You can easily add new methods
     * to ModuleContext by adding them to this array. Just make sure the
     * method also exists on TLT and that the first argument for the method
     * on TLT is always the module name.
     *
     * If the method name on ModuleContext is different than on TLT, you can
     * specify that via "contextMethodName:coreMethodName", where contextMethodName
     * is the name of the method on ModuleContext and coreMethodName is
     * the name of the method on TLT.
     *
     * Because the methods aren't actually defined in the traditional sense,
     * the documentation comments are included within the array for proper
     * context.
     * @private
     * @type String[]
     */
    var methodsToExpose = [

        /**
         * Broadcasts a message to the entire system.
         * @name broadcast
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {String} messageName The name of the message to send.
         * @param {Variant} data The data to send along with the message.
         * @returns {void}
         */
        "broadcast",

        /**
         * Returns the configuration object for the module.
         * @name getConfig
         * @memberOf TLT.ModuleContext#
         * @function
         * @returns {Object} The configuration object for the module.
         */
        "getConfig:getModuleConfig",

        /**
         * Tells the system that the module wants to know when a particular
         * message occurs.
         * @name listen
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {String} messageName The name of the message to listen for.
         * @returns {void}
         */
        "listen",


        /**
         * Posts an event to the module's queue.
         * @name post
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {Object} event The event to put into the queue.
         * @param {String} [queueId] The ID of the queue to add the event to.
         * @returns {void}
         */
        "post",

        /**
         * Calculates the xpath of the given DOM Node.
         * @name getXPathFromNode
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {DOMElement} node The DOM node who's xpath is to be calculated.
         * @returns {String} The calculated xpath.
         */
        "getXPathFromNode",

        /**
         * Log a DOM Capture message to the default queue.
         * @name performDOMCapture
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {String} moduleName Name of the module which invoked this function.
         * @param {DOMElement} [root] Parent element from which to start the capture.
         * @param {Object} [config] DOM Capture configuration options.
         * @returns {String} The unique string representing the DOM Capture id.
         * null if DOM Capture failed.
         * @see logDOMCapture
         */
        "performDOMCapture",

        /**
         * Log a Form Completion message to the default queue.
         * @name performFormCompletion
         * @memberOf TLT.ModuleContext#
         * @function
         * @param {String} moduleName Name of the module which invoked this function.
         * @param {boolean} submitted Indicates if the form (or form equivalent) was submitted.
         * For a standard form element this would be when the submit event is triggered.
         * @param {boolean} [valid] Indicates if the form fields were validated and the result
         * of the validation. True if validation was performed and successful, false if validation
         * was performed but failed.
         * @see logFormCompletion
         */
        "performFormCompletion",

        /**
         * @name isInitialized
         * @memberOf TLT.ModuleContext#
         * @function
         * @returns {Boolean} Returns true if library is successfully initialized, false otherwise.
         */
        "isInitialized",

        /**
         * @name getStartTime
         * @memberOf TLT.ModuleContext#
         * @function
         * @returns {integer} Returns the recorded timestamp in milliseconds corresponding to when the TLT object was created.
         */
        "getStartTime"
    ];

    /**
     * Creates a new ModuleContext object. This function ends up at TLT.ModuleContext.
     * @private
     * @param {String} moduleName The name of the module that will use this context.
     * @param {TLT} core The core object. This must be passed in to enable easier
     *        testing.
     */
    return function (moduleName, core) {

        // If you want to add methods that aren't directly mapped from TLT, do it here
        var context = {},
            i = 0,
            len = methodsToExpose.length,
            parts = null,
            coreMethod = null,
            contextMethod = null;

        // Copy over all methods onto the context object
        for (i = 0; i < len; i += 1) {

            // Check to see if the method names are the same or not
            parts = methodsToExpose[i].split(":");
            if (parts.length > 1) {
                contextMethod = parts[0];
                coreMethod = parts[1];
            } else {
                contextMethod = parts[0];
                coreMethod = parts[0];
            }

            context[contextMethod] = (function (coreMethod) {

                return function () {

                    // Gather arguments and put moduleName as the first one
                    var args = core.utils.convertToArray(arguments);
                    args.unshift(moduleName);


                    // Pass through to the Core
                    return core[coreMethod].apply(core, args);
                };

            }(coreMethod));
        }

        context.utils = core.utils;

        return context;
    };

}());
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The ConfigService is responsible for managing global configuration settings.
 * This may include receiving dynamic configuration updates from the server at regular intervals.
 * The ConfigService fires a configupdated event when it receives updated configuration information.
 * @exports configService
 */

/*global TLT:true */

/**
 * @name configService
 * @namespace
 */
TLT.addService("config", function (core) {
    "use strict";

    /**
     * Merges a new configuration object/diff into the existing configuration by doing a deep copy.
     * @name configService-mergeConfig
     * @function
     * @private
     * @param  {Object} oldConf Existing configuration object.
     * @param  {Object} newConf New configuration object.
     */
    function mergeConfig(oldConf, newConf) {
        core.utils.extend(true, oldConf, newConf);
        configService.publish("configupdated", configService.getConfig());
    }



    /**
     * Holds the config for core and all services and modules.
     * @private
     * @name configService-config
     * @type {Object}
     */
    var config = {
            core: {},
            modules: {},
            services: {}
        },
        configService = core.utils.extend(false, core.utils.createObject(new TLT.EventTarget()), {
            /**
             * Returns the global configuration object.
             * @return {Object} The global configuration object.
             */
            getConfig: function () {
                return config;
            },
            /**
             * Assigns the global configuration for the system.
             * This is first called when Core.init() is called and also may be called later if new
             * configuration settings are returned from the server. After initial configuration is set,
             * all further calls are assumed to be diffs of settings that should be changed rather than
             * an entirely new configuration object.
             * @param  {Object} newConf The global configuration object.
             */
            updateConfig: function (newConf) {
                mergeConfig(config, newConf);
            },
            /**
             * Returns the configuration object for the core.
             * @return {Object} The core configuration object.
             */
            getCoreConfig: function () {
                return config.core;
            },
            /**
             * Assigns the configuration for the core. All calls are assumed to be diffs
             * of settings that should be changed rather than an entirely new configuration object.
             * @param  {Object} newConf     A partial or complete core configuration object.
             */
            updateCoreConfig: function (newConf) {
                mergeConfig(config.core, newConf);
            },
            /**
             * Returns the configuration object for a given service.
             * @param {String} serviceName The name of the service to retrieve configuration information for.
             * @return {Object} The service configuration object or an empty object if the named service doesn't exist.
             */
            getServiceConfig: function (serviceName) {
                return config.services[serviceName] || {};
            },
            /**
             * Assigns the configuration for the named service. All calls are assumed to be diffs
             * of settings that should be changed rather than an entirely new configuration object.
             * @param  {String} serviceName The name of the service to update configuration information for.
             * @param  {Object} newConf     A partial or complete service configuration object.
             */
            updateServiceConfig: function (serviceName, newConf) {
                if (typeof config.services[serviceName] === "undefined") {
                    config.services[serviceName] = {};
                }
                mergeConfig(config.services[serviceName], newConf);
            },
            /**
             * Returns the configuration object for a given module.
             * @param {String} moduleName The name of the module to retrieve configuration information for.
             * @return {Object} The module configuration object or empty object if the named module doesn't exist.
             */
            getModuleConfig: function (moduleName) {
                return config.modules[moduleName] || {};
            },
            /**
             * Assigns the configuration for the named module. All calls are assumed to be diffs
             * of settings that should be changed rather than an entirely new configuration object.
             * @param  {String} moduleName The name of the module to update configuration information for.
             * @param  {Object} newConf     A partial or complete module configuration object.
             */
            updateModuleConfig: function (moduleName, newConf) {
                if (typeof config.modules[moduleName] === "undefined") {
                    config.modules[moduleName] = {};
                }
                mergeConfig(config.modules[moduleName], newConf);
            },
            destroy: function () {
                config = {
                    core: {},
                    modules: {},
                    services: {}
                };
            }
        });

    return configService;

});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The QueueService manages all queues in the system.
 * @exports queueService
 */

/*global TLT:true */

/**
 * @name queueService
 * @namespace
 */
TLT.addService("queue", function (core) {
    "use strict";

    /**
     * queueMananger
     * @private
     * @static
     * @name queueService-queueManager
     * @namespace
     */
    var utils = core.utils,
        CONFIG       = null,    // queue configuration
        coreConfig   = {},
        inactivityTimeout = 600000,
        aS           = core.getService("ajax"),          // ajaxService
        bS           = core.getService("browser"),       // browserService
        eS           = core.getService("encoder"),       // encoderService
        sS           = core.getService("serializer"),    // serializerService
        cS           = core.getService("config"),        // configService
        mS           = core.getService("message"),       // messageService
        defaultQueue = null,    // config object for default queue
        queueTimers  = {},      // timer id for the queueTick
        autoFlushing = true,    // Bool, indicates whether to flush queues when
                                // threshold is reached or let the application control flushing.
        msgCounter   = {
            5: {
                limit: 300,
                count: 0
            },
            6: {
                limit: 400,
                count: 0
            }
        },
        xhrLog       = [],
        isInitialized = false,
        queueManager = (function () {
            var queues = {};

            /**
             * Checks if the specified queue exists.
             * @function
             * @name queueService-queueManager.exists
             * @param  {String} queueId The id of the queue to check for existence.
             * @return {Boolean}         Returns true if the queue exists, otherwise false.
             */
            function queueExists(queueId) {
                return typeof queues[queueId] !== "undefined";
            }

            /**
             * Adds a queue to the system.
             * @function
             * @name queueService-queueManager.add
             * @param {String} queueId The id of the queue to add.
             * @param {Object} opts    Some additional configuration options for this queue.
             * @param {String} opts.url  The endpoint URL to which the queue should be flushed.
             * @param {Number} opts.eventThreshold The maximal amount of messages to store
             * in the queue before it gets flushed.
             * @param {Number} opts.sizeThreshold The maximal size of the serialized queue before
             * it gets flushed.
             * @param {String} opts.serialzer The serializer which should be used to serialize
             * the data in the queue when sending it to the server.
             * @return {Object} Returns the newly created queue.
             */
            function addQueue(queueId, opts) {
                if (!queueExists(queueId)) {
                    queues[queueId] = {
                        lastOffset: 0,
                        data: [],
                        queueId: queueId,
                        url: opts.url,
                        eventThreshold: opts.eventThreshold,
                        sizeThreshold: opts.sizeThreshold || 0,
                        // Set the size to -1 so it doesn't trigger a flush if no sizeThreshold is specified
                        size: -1,
                        serializer: opts.serializer,
                        encoder: opts.encoder,
                        crossDomainEnabled: !!opts.crossDomainEnabled,
                        crossDomainIFrame: opts.crossDomainIFrame
                    };
                }
                return queues[queueId];
            }

            /**
             * Removes a queue from the system.
             * @function
             * @name queueService-queueManager.remove
             * @param  {String} queueId The id of the queue which should be deleted.
             */
            function removeQueue(queueId) {
                if (queueExists(queueId)) {
                    delete queues[queueId];
                }
            }

            /**
             * Returns the queue object associated with the given queueId.
             * @function
             * @name queueService-queueManager.get
             * @param  {String} queueId The id of the queue to return.
             * @return {Object}         Returns the queue object for the given id.
             */
            function getQueue(queueId) {
                if (queueExists(queueId)) {
                    return queues[queueId];
                }
                return null;
            }

            /**
             * Clears all items in the queue specified by the queue id.
             * @function
             * @name queueService-queueManager.clear
             * @param  {String} queueId The id of the queue which should be cleared.
             */
            function clearQueue(queueId) {
                var queue = getQueue(queueId);
                if (queue !== null) {
                    queue.data = [];
                }
            }

            /**
             * Returns the queue data and clears the queue.
             * @function
             * @name queueService-queueManager.flush
             * @param  {String} queueId The id of the queue to be flushed.
             * @return {Array}         Returns all items which were stored in the queue.
             */
            function flushQueue(queueId) {
                var data = null;
                if (queueExists(queueId)) {
                    data = getQueue(queueId).data;
                    clearQueue(queueId);
                }
                return data;
            }

            /**
             * Adds an item to a specific queue. Updates the queue size with the serialized value of the data.
             * @function
             * @name queueService-queueManager.push
             * @param  {String} queueId The id of the queue to which the item should be added.
             * @param  {Object} data    The message object which should be stored in the queue.
             * @return {Number}         Returns the current length of the queue.
             */
            function pushToQueue(queueId, data) {
                var queue = null,
                    dataStr = null,
                    bridgeAndroid = window.tlBridge,
                    bridgeiOS = window.iOSJSONShuttle;

                // Sanity check
                try {
                    dataStr = sS.serialize(data);
                } catch (e) {
                    dataStr = "Serialization failed: " + (e.name ? e.name + " - " : "") + e.message;
                    data = {
                        error: dataStr
                    };
                }

                // Send to Native Android Bridge
                if ((typeof bridgeAndroid !== "undefined") &&
                        (typeof bridgeAndroid.addMessage === "function")) {
                    bridgeAndroid.addMessage(dataStr);
                // Send to Native iOS Bridge
                } else if ((typeof bridgeiOS !== "undefined") &&
                        (typeof bridgeiOS === "function")) {
                    bridgeiOS(dataStr);
                // Send to normal library queue
                } else {
                    if (queueExists(queueId)) {
                        queue = getQueue(queueId);
                        queue.data.push(data);
                        /* Redirect the queue so any registered callback function
                         * can optionally modify it.
                         */
                        queue.data = core.redirectQueue(queue.data);

                        // Only measure and update the queue size if a non-zero sizeThreshold is set
                        if (queue.sizeThreshold) {
                            // Update the size of the queue with the length of the serialized data.
                            dataStr = sS.serialize(queue.data);
                            queue.size = dataStr.length;
                        }

                        // Return the number of entries in the queue (length)
                        return queue.data.length;
                    }
                }
                return 0;
            }

            /**
             * @scope queueManager
             */
            return {
                exists: queueExists,
                add: addQueue,
                remove: removeQueue,
                reset: function () {
                    // Delete all queues
                    queues = {};
                },
                get: getQueue,
                clear: clearQueue,
                flush: flushQueue,
                push: pushToQueue
            };

        }());


    /**
     * Handles the xhr response of the server call.
     * @function
     * @private
     * @name queueService-handleXhrCallback
     */
    function handleXhrCallback(result) {

        if (result && result.id) {
            // Diagnostic logging
            utils.extend(true, xhrLog[result.id - 1], {
                xhrRspEnd: mS.createMessage({type: 0}).offset,
                success: result.success,
                statusCode: result.statusCode,
                statusText: result.statusText
            });
        }
    }

    /**
    * Get the path relative to the host.
    * @addon
    */
    function getUrlPath() {
        return window.location.pathname;
    }

    /**
     * Adds a HTTP header (name,value) pair to the specified queue.
     * @function
     * @private
     * @name queueService-addHeaderToQueue
     * @param  {String} queueId The id of the queue which should be flushed.
     * @param  {String} headerName The name of the header to be added.
     * @param  {String} headerValue The value of the header to be added.
     * @param  {Boolean} [recurring] Flag specifying if header should be sent
     *                   once (false) or always (true). Default behavior is to
     *                   send the header once.
     */
    function addHeaderToQueue(queueId, headerName, headerValue, recurring) {
        var queue = queueManager.get(queueId),
            header = {
                name: headerName,
                value: headerValue
            },
            qHeadersList = null;

        // Sanity check
        if (typeof headerName !== "string" || typeof headerValue !== "string") {
            return;
        }

        if (!queue.headers) {
            // TODO: Add prototype functions to help add/copy/remove headers
            queue.headers = {
                once: [],
                always: []
            };
        }

        qHeadersList = !!recurring ? queue.headers.always : queue.headers.once;
        qHeadersList.push(header);
    }

    /**
     * Copies HTTP headers {name,value} from the specified queue to an
     * object.
     * @function
     * @private
     * @name queueService-copyHeaders
     * @param  {String} queueId The id of the queue whose headers are copied.
     * @param  {Object} [headerObj] The object to which headers are added. If no
     * object is specified then a new one is created.
     * @return {Object} The object containing the copied headers.
     */
    function copyHeaders(queueId, headerObj) {
        var i = 0,
            len = 0,
            queue = queueManager.get(queueId),
            qHeaders = queue.headers,
            headersList = null;

        headerObj = headerObj || {};

        function copy(l, o) {
            var i = 0,
                len = 0,
                header = null;

            for (i = 0, len = l.length; i < len; i += 1) {
                header = l[i];
                o[header.name] = header.value;
            }
        }

        if (qHeaders) {
            headersList = [qHeaders.always, qHeaders.once];

            for (i = 0, len = headersList.length; i < len; i += 1) {
                copy(headersList[i], headerObj);
            }
        }

        return headerObj;
    }

    /**
     * Clear HTTP headers {name,value} from the specified queue. Only headers
     * that are to be sent once are cleared.
     * @function
     * @private
     * @name queueService-clearHeaders
     * @param  {String} queueId The id of the queue whose headers are cleared.
     */
    function clearHeaders(queueId) {
        var queue = null,
            qHeaders = null;

        if (!queueManager.exists(queueId)) {
            throw new Error("Queue: " + queueId + " does not exist!");
        }

        queue = queueManager.get(queueId);
        qHeaders = queue ? queue.headers : null;
        if (qHeaders) {
            // Only reset headers that are sent once.
            qHeaders.once = [];
        }
    }

    /**
     * Invoke the core function to get any HTTP request headers from
     * external scripts and add these headers to the default queue.
     * @function
     * @private
     * @returns The number of external headers added to the queue.
     */
    function getExternalRequestHeaders() {
        var i = 0,
            len,
            header,
            headers = core.provideRequestHeaders();

        if (headers && headers.length) {
            for (i = 0, len = headers.length; i < len; i += 1) {
                header = headers[i];
                addHeaderToQueue("DEFAULT", header.name, header.value, header.recurring);
            }
        }
        return i;
    }

    /**
     * Takes the messages array and extracts the unique message types
     * which are returned as a comma separated list.
     * @function
     * @private
     * @param {Array} data An array of message objects with the "type" property.
     * @returns {String} CSV representing the different message types.
     */
    function getMessageTypes(data) {
        var i,
            len,
            types = [],
            typesString = "";

        // Sanity check
        if (!data || !data.length) {
            return typesString;
        }

        // Scan the messages and note the detected type values
        for (i = 0, len = data.length; i < len; i += 1) {
            types[data[i].type] = true;
        }

        // Translate the detected type values to a CSV string
        for (i = 0, len = types.length; i < len; i += 1) {
            if (types[i]) {
                if (typesString) {
                    typesString += ",";
                }
                typesString += i;
            }
        }

        return typesString;
    }

    /**
     * Clears a specific queue and sends its serialized content to the server.
     * @function
     * @private
     * @name queueService-flushQueue
     * @param  {String} queueId The id of the queue to be flushed.
     */
    function flushQueue(queueId, sync) {
        var queue = queueManager.get(queueId),
            data = queue.url ? queueManager.flush(queueId) : null,
            count = data ? data.length : 0,
            httpHeaders = {
                "Content-Type": "application/json",
                "X-PageId": core.getPageId(),
                "X-Tealeaf": "device (UIC) Lib/5.6.0.1818",
                "X-TealeafType": "GUI",
                "X-TeaLeaf-Page-Url": getUrlPath(),
                "X-Tealeaf-SyncXHR": (!!sync).toString()
            },
            messageId = null,
            currOffset = mS.createMessage({type: 0}).offset,
            serializer = queue.serializer || "json",
            contentEncoder = queue.encoder,
            requestData,
            retObj,
            timeDiff,
            xdomainFrameWindow = null;

        if (!count || !queue) {
            return;
        }

        // Safety check to ensure the data to be sent is not stale beyond the inactivity timeout
        timeDiff = currOffset - data[count - 1].offset;
        if (timeDiff > (inactivityTimeout + 60000)) {
            return;
        }
        queue.lastOffset = data[count - 1].offset;

        // Summarize all the message types in the data
        httpHeaders["X-Tealeaf-MessageTypes"] = getMessageTypes(data);

        // Wrap the messages with the header
        data = mS.wrapMessages(data);

        // Diagnostic logging if enabled
        if (CONFIG.xhrLogging) {
            // Set the XHR message id to the same as the serialNumber of this message
            messageId = data.serialNumber;

            xhrLog[messageId - 1] = {
                serialNumber: messageId,
                xhrReqStart: currOffset
            };

            // Send the xhr log as part of the message
            data.log = {
                xhr: xhrLog
            };
        }

        // Serialize the data
        if (serializer) {
            data = sS.serialize(data, serializer);
        }

        // Encode if specified
        if (contentEncoder) {
            retObj = eS.encode(data, contentEncoder);
            if (retObj) {
                if (retObj.data && !retObj.error) {
                    data = retObj.data;
                    httpHeaders["Content-Encoding"] = retObj.encoding;
                } else {
                    data = retObj.error;
                }
            }
        }

        getExternalRequestHeaders();
        copyHeaders(queueId, httpHeaders);

        if (queue.crossDomainEnabled) {
            xdomainFrameWindow = utils.getIFrameWindow(queue.crossDomainIFrame);
            if (!xdomainFrameWindow) {
                return;
            }
            requestData = {
                request: {
                    id: messageId,
                    url: queue.url,
                    async: !sync,
                    headers: httpHeaders,
                    data: data
                }
            };

            if (!utils.isIE && typeof window.postMessage === "function") {
                xdomainFrameWindow.postMessage(requestData, queue.crossDomainIFrame.src);
            } else {
                try {
                    xdomainFrameWindow.sendMessage(requestData);
                } catch (e) {
                    return;
                }
            }
        } else {
            aS.sendRequest({
                id: messageId,
                oncomplete: handleXhrCallback,
                url: queue.url,
                async: !sync,
                headers: httpHeaders,
                data: data
            });
        }
        clearHeaders(queueId);
    }

    /**
     * Iterates over all queues and sends their contents to the servers.
     * @function
     * @private
     * @name queueServive-flushAll
     */
    function flushAll(sync) {
        var conf = null,
            queues = CONFIG.queues,
            i = 0;
        for (i = 0; i < queues.length; i += 1) {
            conf = queues[i];
            flushQueue(conf.qid, sync);
        }
        return true;
    }


    /**
     * Adds a message event to the specified queue.
     * If the queue threshold is reached the queue gets flushed.
     * @function
     * @private
     * @name queueService-addToQueue
     * @param {String} queueId The id of the queue which should be flushed.
     * @param {Object} data    The message event which should be stored in the queue.
     */
    function addToQueue(queueId, data) {
        var len,
            msg = mS.createMessage(data),
            queue = queueManager.get(queueId),
            size,
            timeDiff;

        // Safety check to ensure the data to be added is not stale beyond the inactivity timeout
        len = queue.data.length;
        if (len) {
            timeDiff = msg.offset - queue.data[len - 1].offset;
            if (timeDiff > inactivityTimeout) {
                queueManager.flush(queueId);
                core.destroy();
                return;
            }
        }

        len = queueManager.push(queueId, msg);
        size = queue.size;

        if ((len >= queue.eventThreshold || size >= queue.sizeThreshold) &&
                autoFlushing && core.getState() !== "unloading") {
            flushQueue(queueId);
        }
    }

    function isMsgLimitReached(e) {
        var counter,
            retVal = false;

        // Sanity check
        if (!e || !e.type) {
            return true;
        }

        counter = msgCounter[e.type];
        if (counter) {
            counter.count += 1;
            if (counter.count > counter.limit) {
                retVal = true;
                if (counter.count === counter.limit + 1) {
                    // Log a message when limit is exceeded for the first time.
                    addToQueue("DEFAULT", {
                        type: 16,
                        dataLimit: {
                            messageType: e.type,
                            maxCount: counter.limit
                        }
                    });
                }
            }
        }

        return retVal;
    }

    /**
     * Returns the queue id for the queue which is responsible for the given module.
     * @function
     * @private
     * @name queueService-getQueueId
     * @param  {String} moduleName The name of the module for which the id should get looked up.
     * @return {String}            Returns the queue id for the corresponding queue or the default queue id.
     */
    function getQueueId(moduleName) {
        var conf = null,
            queues = CONFIG.queues,
            module = "",
            i = 0,
            j = 0;

        for (i = 0; i < queues.length; i += 1) {
            conf = queues[i];
            if (conf && conf.modules) {
                for (j = 0; j < conf.modules.length; j += 1) {
                    module = conf.modules[j];
                    if (module === moduleName) {
                        return conf.qid;
                    }
                }
            }
        }
        return defaultQueue.qid;
    }


    function setTimer(qid, interval) {
        queueTimers[qid] = window.setTimeout(function tick() {
            flushQueue(qid);
            queueTimers[qid] = window.setTimeout(tick, interval);
        }, interval);
    }


    function clearTimers() {
        var key = 0;

        for (key in queueTimers) {
            if (queueTimers.hasOwnProperty(key)) {
                window.clearTimeout(queueTimers[key]);
                delete queueTimers[key];
            }
        }

        queueTimers = {};
    }


    /**
     * Handles the configupdated event from the configService and reinitialize all queues.
     * @function
     * @private
     * @name queueService-handleConfigUpdated
     * @param  {Object} newConf The new configuration object diff.
     */
    function handleConfigUpdated(newConf) {
        // TODO: merge config
    }



    /**
     * Sets up all the needed queues and event handlers and start the queueTick.
     * @function
     * @private
     * @param  {Object} config The queueService configuration object.
     */
    function initQueueService(config) {
        CONFIG = config;
        coreConfig = core.getCoreConfig();
        inactivityTimeout = utils.getValue(coreConfig, "inactivityTimeout", 600000);

        utils.forEach(CONFIG.queues, function (conf, i) {
            var crossDomainIFrame = null;
            if (conf.qid === "DEFAULT") {
                defaultQueue = conf;
            }
            if (conf.crossDomainEnabled) {
                crossDomainIFrame = bS.query(conf.crossDomainFrameSelector);
                if (!crossDomainIFrame) {
                    core.fail("Cross domain iframe not found");
                }
            }

            queueManager.add(conf.qid, {
                url: conf.endpoint,
                eventThreshold: conf.maxEvents,
                sizeThreshold: conf.maxSize || 0,
                serializer: conf.serializer,
                encoder: conf.encoder,
                timerInterval: conf.timerInterval || 0,
                crossDomainEnabled: conf.crossDomainEnabled || false,
                crossDomainIFrame: crossDomainIFrame
            });

            if (typeof conf.timerInterval !== "undefined" && conf.timerInterval > 0) {
                setTimer(conf.qid, conf.timerInterval);
            }
        });

        cS.subscribe("configupdated", handleConfigUpdated);

        isInitialized = true;
    }

    function destroy() {
        if (autoFlushing) {
            flushAll(!CONFIG.asyncReqOnUnload);
        }
        cS.unsubscribe("configupdated", handleConfigUpdated);

        clearTimers();
        queueManager.reset();

        CONFIG = null;
        defaultQueue = null;
        isInitialized = false;
    }

    /**
     * @scope queueService
     */
    return {
        init: function () {
            if (!isInitialized) {
                initQueueService(cS.getServiceConfig("queue") || {});
            } else {
            }
        },

        /**
         * Get's called when the core shut's down.
         * Clean up everything.
         */
        destroy: function () {
            destroy();
        },

        // TODO: Need to expose for selenium functional tests
        _getQueue: function (qid) { return queueManager.get(qid).data; },


        /**
         * Enables/disables automatic flushing of queues so that the application
         * could decide on their own when to flush by calling flushAll.
         * @param {Boolean} flag Could be either true or false to enable or disable
         *                  auto flushing respectively.
         */
        setAutoFlush: function (flag) {
            if (flag === true) {
                autoFlushing = true;
            } else {
                autoFlushing = false;
            }
        },

        /**
         * Forces a particular queue to be flushed, sending its information to the server.
         * @param  {String} queueId The ID of the queue to be flushed.
         */
        flush: function (queueId) {
            queueId = queueId || defaultQueue.qid;
            if (!queueManager.exists(queueId)) {
                throw new Error("Queue: " + queueId + " does not exist!");
            }
            flushQueue(queueId);
        },

        /**
         * Forces all queues to be flushed, sending all queue information to the server.
         */
        flushAll: function (sync) {
            return flushAll(!!sync);
        },

        /**
         * Send event information to the module's default queue.
         * This doesn't necessarily force the event data to be sent to the server,
         * as this behavior is defined by the queue itself.
         * @param  {String} moduleName The name of the module saving the event.
         * @param  {Object} queueEvent The event information to be saved to the queue.
         * @param  {String} [queueId]    Specifies the ID of the queue to receive the event.
         */
        post: function (moduleName, queueEvent, queueId) {
            if (!core.isInitialized()) {
                return;
            }

            queueId = queueId || getQueueId(moduleName);

            if (!queueManager.exists(queueId)) {
                return;
            }
            if (!isMsgLimitReached(queueEvent)) {
                addToQueue(queueId, queueEvent);
            }
        }
    };

});

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The browserService implements some low-level methods for
 * modifying / accessing the DOM.
 * @exports browserService
 */

/*global TLT, XPathResult, document, ActiveXObject */

/**
 * @name browserService
 * @namespace
 */
TLT.addService("browserBase", function (core) {
    "use strict";

    var customEventList,
        utils = core.utils,
        nonClickableTags = {
            optgroup: true,
            option: true,
            nobr: true
        },
        queryDom = {},
        configService,
        serializerService = null,
        config,
        blacklist,
        customid,
        getXPathListFromNode,
        isInitialized = false;

    function updateConfig() {
        configService = core.getService("config");
        serializerService = core.getService("serializer");
        // Need to check for configService in unit testing scenario
        config = configService ? configService.getServiceConfig("browser") : {};
        blacklist = config.hasOwnProperty("blacklist") ? config.blacklist : [];
        customid = config.hasOwnProperty("customid") ? config.customid : [];
    }

    function initBrowserBase() {
        updateConfig();
        if (configService) {
            // Need to check for configService in unit testing scenario
            configService.subscribe("configupdated", updateConfig);
        }
        isInitialized = true;
    }

    function destroy() {
        if (configService) {
            // Need to check for configService in unit testing scenario
            configService.unsubscribe("configupdated", updateConfig);
        }
        isInitialized = false;
    }

    function checkId(node) {
        var i,
            len,
            re;

        if (!node || !node.id || typeof node.id !== "string") {
            return false;
        }

        for (i = 0, len = blacklist.length; i < len; i += 1) {
            if (typeof blacklist[i] === "string") {
                if (node.id === blacklist[i]) {
                    return false;
                }
            } else if (typeof blacklist[i] === "object") {
                // Cache the RegExp object
                if (!blacklist[i].cRegex) {
                    blacklist[i].cRegex = new RegExp(blacklist[i].regex, blacklist[i].flags);
                }
                // Reset and test
                blacklist[i].cRegex.lastIndex = 0;
                if (blacklist[i].cRegex.test(node.id)) {
                    return false;
                }
            }
        }
        return true;
    }

    function getEventType(event, target) {
        var returnObj = {
                type: null,
                // Event subtype is not used in the UIC
                subType: null
            },
            type;

        // Sanity check
        if (!event) {
            return returnObj;
        }

        // Normalize event type for jQuery events focusin, focusout
        type = event.type;
        switch (type) {
        case "focusin":
            type = "focus";
            break;
        case "focusout":
            type = "blur";
            break;
        default:
            break;
        }
        returnObj.type = type;

        return returnObj;
    }

    /**
     * Examines the type and subType of the target.
     * @function
     * @name browserService-getElementType
     * @param  {Object} element The normalized target element.
     * @return {Object} Returns an object which contains the type and subType of the target element.
     */
    function getElementType(element) {
        var returnObj = {
                type: null,
                subType: null
            };

        // Sanity check
        if (!element) {
            return returnObj;
        }

        returnObj.type = utils.getTagName(element);
        returnObj.subType = element.type || null;

        return returnObj;
    }

    /**
     * Returns an element by it's id and idType where id could be either an HTML id,
     *     attribute ID or XPath selector.
     * @param  {String} selector The selector. Either a single HTML ID or an attribute ID
     *                  example: "myid=customid" or a tealeaf XPath string.
     * @param  {Number} type     A number, indicating the type of the query
     *                           as in the object 'idTypes' below.
     *                           -1 for HTML ID, -2 for XPath and -3 for attribute ID.
     * @return {Object}          Returns the node, if found. Otherwise null.
     */
    function getNodeFromID(selector, type, scope) {
        var idTypes = {
                HTML_ID: "-1",
                XPATH_ID: "-2",
                ATTRIBUTE_ID: "-3"
            },
            doc,
            node = null,
            parts;

        // Sanity check
        if (!selector || !type) {
            return node;
        }

        doc = scope || window.document;
        type = type.toString();
        if (type === idTypes.HTML_ID) {
            if (doc.getElementById) {
                node = doc.getElementById(selector);
            } else if (doc.querySelector) {
                node = doc.querySelector("#" + selector);
            }
        } else if (type === idTypes.ATTRIBUTE_ID) {
            parts = selector.split("=");
            if (doc.querySelector) {
                node = doc.querySelector("[" + parts[0] + "=\"" + parts[1] + "\"]");
            }
        } else if (type === idTypes.XPATH_ID) {
            node = queryDom.xpath(selector, doc);
        }
        return node;
    }

    /**
     * Generates an XPath for a given node
     * @function
     */
    getXPathListFromNode = (function () {

        var specialChildNodes = {
                "nobr": true,
                "p": true
            };

        /**
         * Returns Xpath array for a node
         * @private
         * @param {Element} node DOM element
         * @param {Boolean} wantFullPath Return full xpath or truncate at parent with HTML ID.
         * @return {Array} xpath array
         */
        return function (node, wantFullPath) {
            var i,
                j,
                documentElement = document.documentElement,
                idValid = false,
                tmpChild = null,
                parentWindow = null,
                parentNode = null,
                xpath = [],
                xpathComponent,
                loop = true,
                localTop = core._getLocalTop(),
                tagName = "",
                setHost = false,
                shadowRoot;

            while (loop) {
                // Need to continue the loop incase of elements in frame/iframe and shadow trees.
                loop = false;

                tagName = utils.getTagName(node);
                if (tagName && !setHost) {
                    // Fix to handle tags that are not normally visual elements
                    if (specialChildNodes[tagName]) {
                        node = node.parentNode;
                        loop = true;
                        continue;
                    }
                }

                for (idValid = checkId(node);
                        node && node.nodeType === 1 && (wantFullPath || !idValid);
                        idValid = checkId(node)) {
                    parentNode = node.parentNode;

                    // If the node has no parent, check if it is a frame element
                    if (!parentNode) {
                        parentWindow = utils.getWindow(node);
                        if (!parentWindow) {
                            // node is not attached to any window
                            return xpath;
                        }
                        parentNode = (parentWindow !== localTop) ? parentWindow.frameElement : documentElement;
                    }

                    tmpChild = parentNode.firstChild;
                    // Sanity check: Parent has no children?
                    if (!tmpChild) {
                        xpath.push(["XPath Error(1)"]);
                        node = null;
                        break;
                    }

                    // Calculate the index of the node amongst its siblings
                    for (j = 0; tmpChild; tmpChild = tmpChild.nextSibling) {
                        if (tmpChild.nodeType === 1 && utils.getTagName(tmpChild) === tagName) {
                            if (tmpChild === node) {
                                xpathComponent = [tagName, j];
                                if (setHost) {
                                    xpathComponent.push("h");
                                    setHost = false;
                                }
                                xpath[xpath.length] = xpathComponent;
                                break;
                            }
                            j += 1;
                        }
                    }

                    if (parentNode.nodeType === 11) {
                        node = parentNode.host;
                        setHost = true;
                    } else {
                        node = parentNode;
                    }

                    tagName = utils.getTagName(node);
                }

                if (idValid && !wantFullPath) {
                    xpathComponent = [node.id];
                    if (setHost) {
                        xpathComponent.push("h");
                        setHost = false;
                    }
                    xpath[xpath.length] = xpathComponent;
                    // For elements within a frame/iframe continue the loop after resetting node to the frame element in the parent DOM
                    if (utils.isIFrameDescendant(node)) {
                        loop = true;
                        node = utils.getWindow(node).frameElement;
                    } else if (!documentElement.contains(node)) {
                        // For elements within a Shadow DOM tree, continue the loop after resetting node to the shadow host element.
                        loop = true;
                        shadowRoot = node.getRootNode();
                        node = shadowRoot.host;
                        setHost = true;
                    }
                }
            }

            return xpath.reverse();
        };
    }());

    /**
     *
     */
    function xpathListToString(list) {
        var str = "null";

        // Sanity check
        if (!list || !list.length) {
            return str;
        }

        str = serializerService.serialize(list, "json");

        return str;
    }

    /**
     * actual getXPathFromNode function
     */
    function getXPathFromNode(node, wantFullPath, wantObject) {
        var retVal,
            xpath;

        xpath = getXPathListFromNode(node, !!wantFullPath);

        if (wantObject) {
            retVal = xpath;
        } else {
            retVal = xpathListToString(xpath);
        }

        return retVal;
    }

    /**
     * Returns the scroll position (left, top) of the document
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollX
     * @private
     * @param {DOMObject} doc The document object.
     * @return {Object} An object specifying the document's scroll offset position {left, top}
     */
    function getDocScrollPosition(doc) {
        var scrollPos = {
                left: -1,
                top: -1
            },
            docElement;

        doc = doc || document;
        // Get the scrollLeft, scrollTop from documentElement or body.parentNode or body in that order.
        docElement = doc.documentElement || doc.body.parentNode || doc.body;

        // If window.pageXOffset exists, use it. Otherwise fallback to getting the scrollLeft position.
        scrollPos.left = Math.round((typeof window.pageXOffset === "number") ? window.pageXOffset : docElement.scrollLeft);
        scrollPos.top = Math.round((typeof window.pageYOffset === "number") ? window.pageYOffset : docElement.scrollTop);

        return scrollPos;
    }

    /**
     * Returns true if an event is a jQuery event wrpper object.
     * @private
     * @param {UIEvent} event Browser event to examine
     * @return {boolean} true if given event is jQuery event
     */
    function isJQueryEvent(event) {
        return event && typeof event.originalEvent !== "undefined" &&
            typeof event.isDefaultPrevented !== "undefined"  &&
            !event.isSimulated;
    }


    /**
     * Looks for event details. Usually it returns an event itself, but for touch events
     * function returns an element from one of the touch arrays.
     * @private
     * @param {UIEvent} event Browser event. If skipped function will look for window.event
     * @return {UIEvent} latest touch details for touch event or original event object
     *          for all other cases
     */
    function getEventDetails(event) {
        if (!event) {
            return null;
        }
        if (event.type && event.type.indexOf("touch") === 0) {
            if (isJQueryEvent(event)) {
                event = event.originalEvent;
            }
            if (event.type === "touchstart") {
                event = event.touches[event.touches.length - 1];
            } else if (event.type === "touchend") {
                event = event.changedTouches[0];
            }
        }
        return event;
    }


    /**
     * Normalizes the event object for InternetExplorer older than 9.
     * @return {HttpEvent} normalized event object
     */
    function normalizeEvent(event) {
        var e = event || window.event,
            doc = document.documentElement,
            body = document.body,
            found = false,
            foundElement = null,
            i = 0;

        // skip jQuery event wrapper
        if (isJQueryEvent(e)) {
            e = e.originalEvent;
        }

        // IE case
        if (typeof event === 'undefined' || typeof e.target === 'undefined') {
            e.target = e.srcElement || window.window;
            e.timeStamp = Number(new Date());
            if (e.pageX === null || typeof e.pageX === "undefined") {
                e.pageX = e.clientX + ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                    ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
                e.pageY = e.clientY + ((doc && doc.scrollTop)  || (body && body.scrollTop)  || 0) -
                    ((doc && doc.clientTop)  || (body && body.clientTop)  || 0);
            }
            e.preventDefault = function () {
                this.returnValue = false;
            };
            e.stopPropagation = function () {
                this.cancelBubble = true;
            };
        }

        // Chrome case getting blur for inner elements sending click
        if (window.chrome && e.path !== undefined && e.type === "click") {
            if (e.path.length === undefined) {
                return e;
            }

            for (i = 0; i < e.path.length; i++) {
                if (utils.getTagName(e.path[i]) === "button") {
                    found = true;
                    foundElement = e.path[i];
                    i = e.path.length;
                }
            }
            if (found) {
                return {
                    originalEvent: e,
                    target: foundElement,
                    srcElement: foundElement,
                    type: e.type,
                    pageX: document.body.scrollLeft + foundElement.getBoundingClientRect().left,
                    pageY: document.body.scrollTop + foundElement.getBoundingClientRect().top
                };
            }
        }

        return e;
    }

    /**
     * Normalizes target element. In case of touch event the target is considered to be an
     * element on which the last touch action took place.
     * @private
     * @param {UIEvent} event browser event
     * @return {Element} Normalized target element
     */
    function normalizeTarget(event) {
        var i, len,
            eventPath,
            target = null;

        // Sanity check
        if (!event || !event.type) {
            return null;
        }

        // Special handling for touchXXX events
        if (event.type.indexOf("touch") === 0) {
            target = getEventDetails(event).target;
        } else if (typeof event.composedPath === "function") {
            // Event.composedPath() returns the full path including shadow trees (if any)
            eventPath = event.composedPath();
            if (eventPath && eventPath.length) {
                target = eventPath[0];
                // Switch target to the link element in the path (if any)
                for (i = 0, len = eventPath.length; i < len; i += 1) {
                    if (utils.getTagName(eventPath[i]) === "a") {
                        target = eventPath[i];
                        break;
                    }
                }
            } else {
                target = event.target || window.window;
            }
        } else if (event.srcElement) {
            // IE
            target = event.srcElement;
        } else {
            // W3C
            target = event.target;
        }

        while (target && nonClickableTags[utils.getTagName(target)]) {
            if (target.parentElement) {
                target = target.parentElement;
            } else {
                break;
            }
        }

        return target;
    }


    /**
     * Returns event position independently to the event type.
     * In case of touch event the position of last action will be returned.
     * @private
     * @param {UIEvent} event Browser event
     * @return {Object} object containing x and y properties
     */
    function getEventPosition(event) {
        var posX = 0,
            posY = 0,
            doc = document.documentElement,
            body = document.body;

        event = getEventDetails(event);

        if (event) {
            if (event.pageX || event.pageY) {
                posX = event.pageX;
                posY = event.pageY;
            } else if (event.clientX || event.clientY) {
                posX = event.clientX + (doc ? doc.scrollLeft : (body ? body.scrollLeft : 0)) -
                                       (doc ? doc.clientLeft : (body ? body.clientLeft : 0));
                posY = event.clientY + (doc ? doc.scrollTop : (body ? body.scrollTop : 0)) -
                                       (doc ? doc.clientTop : (body ? body.clientTop : 0));
            }
        }

        return {
            x: posX,
            y: posY
        };
    }

    /**
     * Find one or more elements using a XPath selector.
     * @function
     * @name browserService-queryDom.xpath
     * @param  {String} query The XPath query to search for.
     * @param  {Object} [scope="document"] The DOM subtree to run the query in.
     * @return {Object}       Returns the DOM element matching the XPath.
     */
    queryDom.xpath = function (query, scope) {
        var xpath = null,
            elem,
            pathElem = null,
            pathElemIsHost = false,
            tagName,
            i,
            j,
            k,
            len,
            jlen;

        // Sanity check
        if (!query) {
            return null;
        }

        xpath = serializerService.parse(query);
        scope = scope || document;
        elem = scope;

        if (!xpath) {
            return null;
        }

        for (i = 0, len = xpath.length; i < len && elem; i += 1) {
            pathElem = xpath[i];
            pathElemIsHost = pathElem.length > 1 && pathElem[pathElem.length - 1] === "h";
            if (pathElem.length === 1 || (pathElem.length === 2 && pathElemIsHost)) {
                // HTML ID component
                if (scope.getElementById) {
                    elem = scope.getElementById(pathElem[0]);
                } else if (scope.querySelector) {
                    elem = scope.querySelector("#" + pathElem[0]);
                } else {
                    elem = null;
                }
            } else {
                // Search in children
                for (j = 0, k = -1, jlen = elem.childNodes.length; j < jlen; j += 1) {
                    if (elem.childNodes[j].nodeType === 1 && utils.getTagName(elem.childNodes[j]) === pathElem[0].toLowerCase()) {
                        k += 1;
                        if (k === pathElem[1]) {
                            elem = elem.childNodes[j];
                            break;
                        }
                    }
                }
                if (k !== pathElem[1]) {
                    return null;
                }
            }

            if (!elem) {
                return null;
            }

            if (pathElemIsHost) {
                if (i < len - 1) {
                    if (!elem.shadowRoot) {
                        return null;
                    }
                    elem = elem.shadowRoot;
                    // The scope for the subsequent xpath changes to that of the shadow root document fragment.
                    scope = elem;
                }
            }

            // If elem is a frame or iframe, then point to it's document element
            tagName = utils.getTagName(elem);
            if (tagName === "frame" || tagName === "iframe") {
                elem = utils.getIFrameWindow(elem).document;
                // The scope for the subsequent xpath also changes to that of the frame/iframe document.
                scope = elem;
            }
        }

        return (elem === scope || !elem) ? null : elem;
    };


    /**
     * The Point interface represents a point on the page to
     *     x- and y-coordinates.
     * @constructor
     * @private
     * @name browserService-Point
     * @param {Integer} x The x-coordinate of the point.
     * @param {Integer} y The y-coordinate of the point.
     */
    function Point(x, y) {
        this.x = Math.round(x || 0);
        this.y = Math.round(y || 0);
    }


    /**
     * The Size  interface represents the width and height of an element
     *     on the page.
     * @constructor
     * @private
     * @name browserService-Size
     * @param {Integer} width  Width of the element that received the event.
     * @param {Integer} height Height of the element that received the event.
     */
    function Size(width, height) {
        this.width = Math.round(width || 0);
        this.height = Math.round(height || 0);
    }


    /**
     * The ElementData interface represents a normalized browser event object.
     * @constructor
     * @private
     * @name browserService-ElementData
     * @param {Object} event  The browser event.
     * @param {Object} target The HTML element which received the event.
     */
    function ElementData(event, target) {
        var id,
            elementType,
            pos;

        target = normalizeTarget(event);
        id = this.examineID(target);
        elementType = getElementType(target);
        pos = this.examinePosition(event, target);

        this.element = target;
        this.id = id.id;
        this.idType = id.idType;
        this.type = elementType.type;
        this.subType = elementType.subType;
        this.state = this.examineState(target);
        this.position = new Point(pos.x, pos.y);
        this.size = new Size(pos.width, pos.height);
        this.xPath = id.xPath;
        this.name = id.name;
    }

    /**#@+
     * @constant
     * @enum {Number}
     * @fieldOf browserService-ElementData
     */
    ElementData.HTML_ID = -1;
    ElementData.XPATH_ID = -2;
    ElementData.ATTRIBUTE_ID = -3;
    /**#@-*/

    /**
     * Examines how to specify the target element
     *     (either by css selectors or xpath)
     *     and returns an object with the properties id and type.
     * @function
     * @name browserService-ElementData.examineID
     * @param  {Object} target The HTML element which received the event.
     * @return {Object}        Returns an object with the properties id and type.
     *      id contains either a css or xpath selector.
     *      type contains a reference to either ElementData.HTML_ID,
     *      ElementData.XPATH_ID or ElementData.ATTRIBUTE_ID
     * @todo determine the element css/xpath/attribute selector.
     */
    ElementData.prototype.examineID = function (target) {
        var retObj = {
                id: "",
                idType: 0,
                xPath: "",
                name: ""
            },
            i = customid.length,
            attrib,
            documentElement = document.documentElement;

        // Sanity check
        if (!target) {
            return retObj;
        }

        retObj.xPath = getXPathFromNode(target);
        retObj.name = target.name;

        try {
            // Check if node belongs to a Shadow DOM tree or Frame/Iframe since such nodes always get Xpath IDs
            if (documentElement.contains(target) && (!utils.getWindow(target) || !utils.isIFrameDescendant(target))) {
                if (checkId(target)) {
                    retObj.id = target.id;
                    retObj.idType = ElementData.HTML_ID;
                } else if (customid.length && target.attributes) {
                    while (i) {
                        i -= 1;
                        attrib = target.attributes[customid[i]];
                        if (typeof attrib !== "undefined") {
                            retObj.id = customid[i] + "=" + (attrib.value || attrib);
                            retObj.idType = ElementData.ATTRIBUTE_ID;
                        }
                    }
                }
            }
        } catch (e) { }

        if (!retObj.id) {
            retObj.id = retObj.xPath;
            if (retObj.id !== "null") {
                retObj.idType = ElementData.XPATH_ID;
            }
        }

        return retObj;
    };


    /**
     * Examines the current state of the HTML element if it's an input/ui element.
     * @function
     * @name browserService-ElementData.examineState
     * @param  {Object} target The HTML element which received the event.
     * @return {Object}        Returns an object which contains all properties
     *     to describe the state.
     */
    ElementData.prototype.examineState = function (target) {
        return utils.getTargetState(target);
    };


    /**
     * Gets the current zoom value of the browser with 1 being equivalent to 100%.
     * @function
     * @name getZoomValue
     * @return {int}        Returns zoom value of the browser.
     */
    function getZoomValue() {
        var factor = 1,
            rect,
            physicalW,
            logicalW;

        if (document.body.getBoundingClientRect) {
            // rect is only in physical pixel size in IE before version 8
            // CS-8780: getBoundingClientRect() can throw an exception in certain instances. Observed
            // on IE 9
            try {
                rect = document.body.getBoundingClientRect();
            } catch (e) {
                return factor;
            }
            physicalW = rect.right - rect.left;
            logicalW = document.body.offsetWidth;

            // the zoom level is always an integer percent value
            factor = Math.round((physicalW / logicalW) * 100) / 100;
        }
        return factor;
    }

    /**
     * Gets BoundingClientRect value from a HTML element.
     * @function
     * @name getBoundingClientRectNormalized
     * @param  {Object} element The HTML element.
     * @return {Object} An object with x, y, width, and height.
     */
    function getBoundingClientRectNormalized(element) {
        var rect,
            rectangle,
            zoom,
            scrollPos;

        if (!element || !element.getBoundingClientRect) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        // CS-8780: getBoundingClientRect() can throw an exception in certain instances. Observed
        // on IE 9
        try {
            rect = element.getBoundingClientRect();
            scrollPos = getDocScrollPosition(document);
        } catch (e) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        rectangle = {
            // Normalize viewport-relative left & top with scroll values to get left-x & top-y relative to the document
            x: rect.left + scrollPos.left,
            y: rect.top + scrollPos.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        if (utils.isIE) {
            // IE ONLY: the bounding rectangle include the top and left borders of the client area
            rectangle.x -= document.documentElement.clientLeft;
            rectangle.y -= document.documentElement.clientTop;

            zoom = getZoomValue();
            if (zoom !== 1) {  // IE 7 at non-default zoom level
                rectangle.x = Math.round(rectangle.x / zoom);
                rectangle.y = Math.round(rectangle.y / zoom);
                rectangle.width = Math.round(rectangle.width / zoom);
                rectangle.height = Math.round(rectangle.height / zoom);
            }
        }
        return rectangle;
    }

    /**
     * Examines the position of the event relative to the HTML element which
     * received the event on the page. The top left corner of the element is 0,0
     * and bottom right corner of the element is equal to it's width, height.
     * @function
     * @name browserService-ElementData.examinePosition
     * @param  {Object} target The HTML element which received the event.
     * @return {Point}        Returns a Point object.
     */
    ElementData.prototype.examinePosition = function (event, target) {
        var posOnDoc = getEventPosition(event),
            elPos = getBoundingClientRectNormalized(target);

        elPos.x = (posOnDoc.x || posOnDoc.y) ? Math.round(Math.abs(posOnDoc.x - elPos.x)) : elPos.width / 2;
        elPos.y = (posOnDoc.x || posOnDoc.y) ? Math.round(Math.abs(posOnDoc.y - elPos.y)) : elPos.height / 2;

        return elPos;
    };

    /**
     * Returns the normalized orientation in degrees. Normalized values are measured
     * from the default portrait position which has an orientation of 0. From this
     * position the respective values are as follows:
     * 0   - Portrait orientation. Default
     * -90 - Landscape orientation with screen turned clockwise.
     * 90  - Landscape orientation with screen turned counterclockwise.
     * 180 - Portrait orientation with screen turned upside down.
     * @private
     * @function
     * @name browserService-getNormalizedOrientation
     * @return {integer} The normalized orientation value.
     */
    function getNormalizedOrientation() {
        var orientation = (typeof window.orientation === "number") ? window.orientation : 0;

        /*
         * Special handling for Android based on screen width/height since
         * certain Android devices do not adhere to the standards.
         * e.g. Some tablets report portrait orientation = 90 and landscape = 0
         */
        if (utils.isLandscapeZeroDegrees) {
            if (Math.abs(orientation) === 180 || Math.abs(orientation) === 0) {
                orientation = 90;
            } else if (Math.abs(orientation) === 90) {
                orientation = 0;
            }
        }

        return orientation;
    }

    /**
     * Scans through the core configuration and creates the list of
     * custom event state properties.
     * @private
     * @function
     * @name browserService-initCustomEventList
     * @param {Object} [list] An object containing any custom event state configuration
     * @return {Object} An object containing any custom event state configuration
     */
    function initCustomEventList(list) {
        var i,
            len,
            coreConfig,
            event,
            modules,
            moduleName;

        if (list) {
            return list;
        }

        coreConfig = core.getCoreConfig() || {};
        modules = coreConfig.modules;
        list = {};

        for (moduleName in modules) {
            if (modules.hasOwnProperty(moduleName) && modules[moduleName].events) {
                for (i = 0, len = modules[moduleName].events.length; i < len; i += 1) {
                    event = modules[moduleName].events[i];
                    if (event.state) {
                        list[event.name] = event.state;
                    }
                }
            }
        }

        return list;
    }

    /**
     * Checks if any custom state is configured for the specified
     * event and return it's value.
     * @private
     * @function
     * @name browserService-getCustomState
     * @param {Object} event The native browser event.
     * @return {Object} The state object if any or null.
     */
    function getCustomState(event) {
        var state;

        // Initialize the global custom event state
        customEventList = initCustomEventList(customEventList);

        if (customEventList[event.type]) {
            // Get the state information as per the object specified in the event configuration
            state = utils.getValue(event, customEventList[event.type], null);
        }

        return state;
    }

    /**
     * The WebEvent  interface represents a normalized browser event object.
     *     When an event occurs, the BrowserService wraps the native event
     *     object in a WebEvent.
     * @constructor
     * @private
     * @name browserService-WebEvent
     * @param {Object} event The native browser event.
     */
    function WebEvent(event) {
        var pos,
            eventType,
            state;

        this.data = event.data || null;
        this.delegateTarget = event.delegateTarget || null;

        //add the gesture event data to the webevent if it exists.
        if (event.gesture || (event.originalEvent && event.originalEvent.gesture)) {
            this.gesture = event.gesture || event.originalEvent.gesture;
            //Set the idType for the gesture target. Normal processing will set the idType of this.target which is not necessarily the same as the gesture target.
            this.gesture.idType = (new ElementData(this.gesture, this.gesture.target)).idType;
        }

        event = normalizeEvent(event);
        pos = getEventPosition(event);
        this.custom = false;    // @TODO: how to determine if it's a custom event?
        this.nativeEvent = this.custom === true ? null : event;
        this.position = new Point(pos.x, pos.y);
        this.target = new ElementData(event, event.target);
        this.orientation = getNormalizedOrientation();

        // For custom events the state is determined by the "state" property specified
        // in the event configuration
        state = getCustomState(event);
        if (state) {
            this.target.state = state;
        }

        // Do not rely on browser provided event.timeStamp since FF sets
        // incorrect values. Refer to Mozilla Bug 238041
        this.timestamp = (new Date()).getTime();

        eventType = getEventType(event, this.target);
        this.type = eventType.type;
        this.subType = eventType.subType;
    }

    /**
     * 
     */
    function processDOMEvent(event) {
        if (core.isInitialized()) {
            core._publishEvent(new WebEvent(event));
        } else {
        }
    }

    /**
     * Constructor
     */
    function Xpath(node) {
        var fullXpath = "",
            fullXpathList = [],
            topElem,
            xpath = "",
            xpathList = [];

        // Sanity check
        if (!(this instanceof Xpath)) {
            return null;
        }

        // Sanity check
        if (typeof node !== "object" || !node.nodeType) {
            this.fullXpath = "";
            this.xpath = "";
            this.fullXpathList = [];
            this.xpathList = [];
            return;
        }

        // Text nodes are promoted to their parent element
        if (node.nodeType === 3) {
            node = node.parentElement;
        }

        // Calculate xpath list from DOM node
        xpathList = getXPathListFromNode(node, false);

        // Check if the topmost xpath element is an HTML ID. If so, we need to compute the full xpath.
        topElem = xpathList[0];
        if (xpathList.length && (topElem.length === 1 || (topElem.length === 2 && topElem[1] === "h"))) {
            fullXpathList = getXPathListFromNode(node, true);
        } else {
            fullXpathList = utils.clone(xpathList);
        }

        this.xpath = xpathListToString(xpathList);
        this.xpathList = xpathList;

        this.fullXpath = xpathListToString(fullXpathList);
        this.fullXpathList = fullXpathList;

        /**
         *
         */
        this.applyPrefix = function (prefix) {
            var part,
                lastPrefixPart;

            // Sanity check
            if (!(prefix instanceof Xpath) || !prefix.fullXpathList.length) {
                return;
            }

            // Process the full xpath first.
            lastPrefixPart = prefix.fullXpathList[prefix.fullXpathList.length - 1];
            part = this.fullXpathList.shift();

            // Check if they share a common element tag
            if (utils.isEqual(part[0], lastPrefixPart[0])) {
                // Concatenate
                this.fullXpathList = prefix.fullXpathList.concat(this.fullXpathList);
            } else {
                // Revert
                this.fullXpathList.unshift(part);
                return;
            }

            // Recreate the xpath string
            this.fullXpath = xpathListToString(this.fullXpathList);

            // Next, deal with the regular xpath.
            part = this.xpathList.shift();
            if (part.length === 1) {
                // The regular xpath begins with a HTML ID and cannot be prefixed.
                this.xpathList.unshift(part);
                return;
            }
            this.xpathList = prefix.xpathList.concat(this.xpathList);
            this.xpath = xpathListToString(this.xpathList);
        };

        /**
         *
         */
        this.compare = function (xpathB) {
            // Sanity check
            if (!(xpathB instanceof Xpath)) {
                return 0;
            }
            return (this.fullXpathList.length - xpathB.fullXpathList.length);
        };

        this.isSame = function (xpathB) {
            var isEqual = false;

            // Sanity check
            if (!(xpathB instanceof Xpath)) {
                return isEqual;
            }

            if (this.compare(xpathB) === 0) {
                // Check if the fullXPath matches
                isEqual = (this.fullXpath === xpathB.fullXpath);
            }

            return isEqual;
        };

        /**
         * Checks to see if the node defined by this xpath is a child of the given parent xpath.
         * @function
         * @param {Object} parentXpath Parent node XPath object
         * @param {Boolean} [ignoreShadows] Optional flag indicating if the containment check should consider
         *        xpaths as contained within a parent even though the child is in a Shadow DOM.
         * @returns {Boolean} Returns true if the xpath is contained within the parent xpath, false otherwise.
         */
        this.containedIn = function (parentXpath, ignoreShadows) {
            var i, j, len,
                tmpNode;

            // Sanity check
            if (!(parentXpath instanceof Xpath)) {
                return false;
            }

            if (parentXpath.fullXpathList.length > this.fullXpathList.length) {
                return false;
            }

            for (i = 0, len = parentXpath.fullXpathList.length; i < len; i += 1) {
                if (!utils.isEqual(parentXpath.fullXpathList[i], this.fullXpathList[i])) {
                    return false;
                }
            }

            if (!ignoreShadows) {
                // Check if the remainder of the node is within a Shadow DOM in which case
                // it is not directly contained in the DOM of the parent.
                for (j = i, len = this.fullXpathList.length; j < len; j += 1) {
                    tmpNode = this.fullXpathList[j];
                    if (tmpNode[tmpNode.length - 1] === "h") {
                        return false;
                    }
                }
            }

            return true;
        };
    }

    /**
     *
     */
    Xpath.prototype = (function () {
        // Private variables and functions

        // XPath Prototype object
        return {};
    }());

    return {
        init: function () {
            if (!isInitialized) {
                initBrowserBase();
            } else {
            }
        },
        destroy: function () {
            destroy();
        },
        WebEvent: WebEvent,
        ElementData: ElementData,
        Xpath: Xpath,
        processDOMEvent: processDOMEvent,
        getNormalizedOrientation: getNormalizedOrientation,

        getXPathFromNode: function (moduleName, node, wantFullPath, wantObject) {
            return getXPathFromNode(node, wantFullPath, wantObject);
        },
        getNodeFromID: getNodeFromID,
        queryDom: queryDom
    };

});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The browserService implements some low-level methods for
 * modifying / accessing the DOM.
 * @exports browserService
 */

/*global TLT, XPathResult, document */
/*global console: false */

/**
 * @name browserService
 * @namespace
 */
TLT.addService("browser", function (core) {
    "use strict";

    var utils = core.utils,
        configService = core.getService("config"),
        browserBaseService = core.getService('browserBase'),
        ajaxService = core.getService('ajax'),
        addEventListener = null,
        removeEventListener = null,
        // Need to test for configService in unit testing scenario
        serviceConfig = configService ? configService.getServiceConfig("browser") : {},
        useCapture = utils.getValue(serviceConfig, "useCapture", true),
        isInitialized = false,
        errorCodes = {
            NO_QUERY_SELECTOR: "NOQUERYSELECTOR"
        },

        /**
         * Returns a new function which will be used in the subscribe method and which calls the
         * handler function with the normalized WebEvent.
         * @private
         * @function
         * @name browserService-wrapWebEvent
         * @param  {Function} handler The handler which was passed to the browserService's subscribe method.
         * @return {Function}         Returns a new function which, when called, passes a WebEvent to the handler.
         */
        wrapWebEvent = function (handler) {
            return function (event) {
                /* IE8 only allows access to event attributes in the context of an Event.
                 * We need to instantiate our event in a local variable here before passing it 
                 * into the setTimeout handler.
                 */
                var webEvent = new browserBaseService.WebEvent(event);
                if (event.type === "resize" || event.type === "hashchange") {
                    /* Certain events like resize & hashchange need to be processed after their triggering events
                     * e.g. orientationchange could trigger a resize or a click handler could trigger a hashchange etc.
                     * To account for these cases, process these events after giving a chance for the triggering event
                     * to be processed first.
                     */
                    setTimeout(function () {
                        handler(webEvent);
                    }, 5);
                } else {
                    handler(webEvent);
                }
            };
        },

        queryDom = {
            /**
             * Helper function to transform a nodelist into an array.
             * @function
             * @name browserService-queryDom.list2Array
             * @param  {List} nodeList Pass in a DOM NodeList
             * @return {Array}          Returns an array.
             */
            list2Array: function (nodeList) {
                var len = nodeList.length,
                    result = [],
                    i;
                if (typeof nodeList.length === "undefined") {
                    return [nodeList];
                }
                for (i = 0; i < len; i += 1) {
                    result[i] = nodeList[i];
                }
                return result;
            },
            /**
             * Finds one or more elements in the DOM using a CSS or XPath selector
             * and returns an array instead of a NodeList.
             * @function
             * @name browserService-queryDom.find
             * @param  {String} query Pass in a CSS or XPath selector query.
             * @param  {Object} [scope="document"]  The DOM subtree to run the query in.
             *      If not provided, document is used.
             * @param  {String} [type="css"]  The type of query. Either "css' (default)
             *      or 'xpath' to allow XPath queries.
             * @return {Array}       Returns an array of nodes that matches the particular query.
             */
            find: function (query, scope, type) {
                type = type || "css";
                return this.list2Array(this[type](query, scope));
            },
            /**
             * Find one or more elements using a CSS selector.
             * @function
             * @name browserService-queryDom.css
             * @param  {String} query The CSS selector query.
             * @param  {Object} [scope="document"] The DOM subtree to run the query in.
             * @return {Array}       Returns an array of nodes that matches the particular query.
             */
            css: function (query, scope) {
                var self = this,
                    message = null,
                    bodyEl = document.getElementsByTagName("body")[0],
                    jQuery = serviceConfig.jQueryObject ? utils.access(serviceConfig.jQueryObject) : window.jQuery,
                    sizzle = serviceConfig.sizzleObject ? utils.access(serviceConfig.sizzleObject) : window.Sizzle;

                if (typeof document.querySelectorAll === "undefined") {
                    // redefine self.css to use self.Sizzle as selector engine.
                    self.css = function (query, scope) {
                        scope = scope || document;
                        return self.Sizzle(query, scope);
                    };
                    if (typeof self.Sizzle === "undefined") {
                        // define self.Sizzle function to use either Sizzle library or jQuery.
                        try {
                            if (bodyEl === sizzle("html > body", document)[0]) {
                                // if Sizzle is defined and behaves as expected, use it as self.Sizzle.
                                self.Sizzle = sizzle;
                            }
                        } catch (e1) {
                            try {
                                if (bodyEl === jQuery(document).find("html > body").get()[0]) {
                                    // if jQuery is defined on window and behaves correctly define
                                    // self.Sizzle to use jQuery.
                                    self.Sizzle = function (query, scope) {
                                        return jQuery(scope).find(query).get();
                                    };
                                }
                            } catch (e2) {
                                core.fail("Sizzle was not found", errorCodes.NO_QUERY_SELECTOR);
                            }
                        }
                    }
                } else {
                    // otherwise, if document.querySelectorAll is available, use it.
                    self.css = function (query, scope) {
                        scope = scope || document;
                        return scope.querySelectorAll(query);
                    };
                }
                return self.css(query, scope);
            }
        },
        // store handler functions which got passed to subscribe/unsubscribe.
        handlerMappings = (function () {
            var data = new utils.WeakMap();

            return {
                add: function (originalHandler) {
                    var handlers = data.get(originalHandler) || [wrapWebEvent(originalHandler), 0];

                    handlers[1] += 1;
                    data.set(originalHandler, handlers);
                    return handlers[0];
                },

                find: function (originalHandler) {
                    var handlers = data.get(originalHandler);
                    return handlers ? handlers[0] : null;
                },

                remove: function (originalHandler) {
                    var handlers = data.get(originalHandler);
                    if (handlers) {
                        handlers[1] -= 1;
                        if (handlers[1] <= 0) {
                            data.remove(originalHandler);
                        }
                    }
                }
            };
        }());

    /**
     * Initialization function
     * @function
     */
    function initBrowserServiceW3C() {
        queryDom.xpath = browserBaseService.queryDom.xpath;

        if (typeof document.addEventListener === 'function') {
            addEventListener = function (target, eventName, handler) {
                target.addEventListener(eventName, handler, useCapture);
            };
            removeEventListener = function (target, eventName, handler) {
                target.removeEventListener(eventName, handler, useCapture);
            };
        } else if (typeof document.attachEvent !== 'undefined') {
            addEventListener = function (target, eventName, handler) {
                target.attachEvent('on' + eventName, handler);
            };
            removeEventListener = function (target, eventName, handler) {
                target.detachEvent('on' + eventName, handler);
            };
        } else {
            throw new Error("Unsupported browser");
        }

        isInitialized = true;
    }


    /**
     * @scope browserService
     */
    return {

        init: function () {
            if (!isInitialized) {
                initBrowserServiceW3C();
            } else {
            }
        },

        destroy: function () {
            isInitialized = false;
        },

        getServiceName: function () {
            return "W3C";
        },

        /**
         * Find a single element in the DOM mathing a particular query.
         * @param  {String} query Either a CSS or XPath query.
         * @param {Object} [scope="document"] The DOM subtree to run the query in.
         *     If not provided document is used.
         * @param  {String} [type="css"]  The type of the query. Either 'css' (default)
         *     or 'xpath' to allow XPath queries.
         * @return {Object|null}       The first matching HTML element or null if not found.
         */
        query: function (query, scope, type) {
            try {
				return queryDom.find(query, scope, type)[0] || null;
			} catch (err) {
				return [];
			}
        },

        /**
         * Find all elements in the DOM mathing a particular query.
         * @param  {String} query Either a CSS or XPath query.
         * @param {Object} [scope="document"] The DOM subtree to run the query in.
         *     If not provided document is used.
         * @param  {String} [type="css"]  The type of the query. Either 'css' (default)
         *     or 'xpath' to allow XPath queries.
         * @return {Object[]|Array}       An array of HTML elements matching the query
         *     or and empty array if no elements are matching.
         */
		queryAll: function (query, scope, type) {
            try {
				return queryDom.find(query, scope, type);
			} catch (err) {
				return [];
			}
        },

        /**
         * Subscribes an event handler to be called when a particular event occurs.
         * @param  {String} eventName The name of the event to listen for.
         * @param  {Object} target    The object on which the event will fire.
         * @param  {Function} handler   The function to call when the event occurs.
         *     The browserServices passes a WebEvent object to this handler
         */
        subscribe: function (eventName, target, handler) {
            var wrappedHandler = handlerMappings.add(handler);
            addEventListener(target, eventName, wrappedHandler);
        },

        /**
         * Unsubscribes an event handler from a particular event.
         * @param  {String} eventName The name of the event for which the handler was subscribed.
         * @param  {Object} target    The object on which the event fires.
         * @param  {Function} handler   The function to remove as an event handler.
         */
        unsubscribe: function (eventName, target, handler) {
            var wrappedHandler = handlerMappings.find(handler);
            if (wrappedHandler) {
                try {
                    removeEventListener(target, eventName,  wrappedHandler);
                } catch (e) {
                }
                handlerMappings.remove(handler);
            }
        }
    };
});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*global TLT:true, window:true, ActiveXObject, Uint8Array */

/**
 * @name ajaxService
 * @namespace
 */
TLT.addService("ajax", function (core) {
    "use strict";

    var utils = core.utils,
        getXHRObject,
        useBeacon = false,
        isInitialized = false;

    /**
     * Builds an array of HTTP headers from the given object.
     * @private
     * @function
     * @name ajaxService-convertHeadersToArray
     * @param {Object} headersObj Object containing name: value pairs.
     * @returns {Array} Array containing [name, value] pairs.
     */
    function convertHeadersToArray(headersObj) {
        var header = "",
            headers = [];

        for (header in headersObj) {
            if (headersObj.hasOwnProperty(header)) {
                headers.push([header, headersObj[header]]);
            }
        }
        return headers;
    }

    /**
     * Builds a query string from the given object
     * @private
     * @function
     * @name ajaxService-convertHeadersToQuery
     * @param {Object} headersObj Object containing name: value pairs.
     * @returns {String} Query string containing name=value pairs.
     */
    function convertHeadersToQuery(headersObj) {
        var header = "",
            headers = "?";

        for (header in headersObj) {
            if (headersObj.hasOwnProperty(header)) {
                headers += encodeURIComponent(header) +
                           "=" +
                           encodeURIComponent(headersObj[header]) +
                           "&";
            }
        }

        // Return the query string after removing the last character (which would be the extra '&' from the loop)
        return headers.slice(0, -1);
    }

    /**
     * @private
     * @function
     * @name ajaxService-makeBeaconCall
     * @see browserService.sendRequest
     */
    function makeBeaconCall(message) {
        var data,
            retVal = false,
            query = convertHeadersToQuery(message.headers);

        if (typeof message.data === "string") {
            data = message.data;
        } else {
            data = message.data ? new Uint8Array(message.data) : "";
        }

        retVal = navigator.sendBeacon(message.url + query, data);

        return retVal;
    }

    /**
     * This function returns a function which can be passed to the XHR object
     * as a callback handler. It will call the callback with the correct
     * ajaxResponse interface.
     * @private
     * @function
     * @name ajaxService.w3c-wrapAjaxResponse
     * @param {Function} origCallback The original callback function which
     *        should be invoked when the request finishes with a normalized
     *        result object.
     * @return {Function} A function which could be passed as a callback
     *         handler to the XHR object.
     */
    function wrapAjaxResponse(origCallback) {

        // Sanity check
        if (typeof origCallback !== "function") {
            return;
        }

        /**
         * Calls the ajax callback function and provides the ajaxResponse in the correct format.
         * This Function gets called by the XHR callback method.
         * @private
         * @function
         * @name ajaxService.w3c-wrapAjaxResponse-ajaxResponseHandler
         * @param {Object} event The DOM event object or the Ajax response object in case of a
         *        direct call to the callback function.
         */
        return function ajaxResponseHandler(event) {
            var xhr,
                status,
                success = false;

            // Sanity check
            if (!event) {
                return;
            }

            xhr = event.target;
            if (!xhr) {
                // Synthetic call to the callback function
                return origCallback(event);
            }

            status = xhr.status;
            if (status >= 200 && status < 300) {
                success = true;
            }

            // Invoke original callback method with normalized response object
            origCallback({
                headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                responseText: xhr.responseText,
                statusCode: status,
                statusText: xhr.statusText,
                id: xhr.id,
                success: success
            });
        };
    }

    /**
     * @private
     * @function
     * @name ajaxService-makeAjaxCall
     * @see browserService.sendRequest
     */
    function makeAjaxCall(message) {
        var xhr = getXHRObject(),
            headers = [["X-Requested-With", "XMLHttpRequest"]],
            timeout = 0,
            async = typeof message.async !== "boolean" ? true : message.async,
            header = "",
            callbackFn = null,
            i,
            length;

        if (message.headers) {
            headers = headers.concat(convertHeadersToArray(message.headers));
        }
        if (message.contentType) {
            headers.push(["Content-Type", message.contentType]);
        }
        xhr.open(message.type.toUpperCase(), message.url, async);

        for (i = 0, length = headers.length; i < length; i += 1) {
            header = headers[i];
            if (header[0] && header[1]) {
                xhr.setRequestHeader(header[0], header[1]);
            }
        }

        if (message.error) {
            message.error = wrapAjaxResponse(message.error);
            xhr.addEventListener("error", message.error);
        }

        xhr.onreadystatechange = callbackFn = function () {
            if (xhr.readyState === 4) {
                xhr.onreadystatechange = callbackFn = function () {};
                if (message.timeout) {
                    window.clearTimeout(timeout);
                }
                message.oncomplete({
                    id: message.id,
                    headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                    responseText: (xhr.responseText || null),
                    statusCode: xhr.status,
                    statusText: xhr.statusText,
                    success: (xhr.status >= 200 && xhr.status < 300)
                });
                xhr = null;
            }
        };

        xhr.send(message.data || null);
        callbackFn();

        if (message.timeout) {
            timeout = window.setTimeout(function () {
                if (!xhr) {
                    return;
                }

                xhr.onreadystatechange = function () {};
                if (xhr.readyState !== 4) {
                    xhr.abort();
                    if (typeof message.error === "function") {
                        message.error({
                            id: message.id,
                            statusCode: xhr.status,
                            statusText: "timeout",
                            success: false
                        });
                    }
                }
                // oncomplete is called after success and error callbacks
                message.oncomplete({
                    id: message.id,
                    headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                    responseText: (xhr.responseText || null),
                    statusCode: xhr.status,
                    statusText: "timeout",
                    success: false
                });

                xhr = null;
            }, message.timeout);
        }
    }

    function initAjaxService() {
        var queueServiceConfig = core.getServiceConfig("queue");

        if (typeof window.XMLHttpRequest !== 'undefined') {
            getXHRObject = function () {
                return new XMLHttpRequest();
            };
        } else {
            getXHRObject = function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }

        // Enable Beacon use if configured
        useBeacon = !!queueServiceConfig.useBeacon && (typeof navigator.sendBeacon === "function");

        isInitialized = true;
    }

    return {
        init: function () {
            if (!isInitialized) {
                initAjaxService();
            }
        },

        /**
         * Destroys service state
         */
        destroy: function () {
            isInitialized = false;
        },

        /**
         * Makes an Ajax request to the server.
         * @param {Object} message An AjaxRequest object containing all the information
         *     neccessary for making the request.
         * @param {String} [message.contentType] Set to a string to override the default
         *     content type of the request.
         * @param {String} [message.data] A string containing data to POST to the server.
         * @param {Object} [message.headers] An object whose properties represent HTTP headers.
         * @param {Function} message.oncomplete A callback function to call when the
         *     request has completed.
         * @param {Integer} [message.timeout] The number of milliseconds to wait
         *     for a response before closing the Ajax request.
         * @param {String} [message.type="POST"] Either 'GET' or 'POST',
         *     indicating the type of the request to make.
         * @param {String} message.url The URL to send the request to.
         *     This should contain any required query string parameters.
         */
        sendRequest: function (message) {
            var unloading = core.getState() === "unloading",
                retVal;

            message.type = message.type || "POST";

            // If enabled, use Beacon API instead of XHR on page unload or when sending synchronous request
            if ((unloading || !message.async) && useBeacon) {
                retVal = makeBeaconCall(message);
                if (!retVal) {
                    // If Beacon fails, fallback to XHR
                    makeAjaxCall(message);
                }
            } else {
                makeAjaxCall(message);
            }
        }
    };
});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The DOM Capture Service provides the ability to capture a snapshot of
 * the DOM as a HTML snippet.
 * @exports domCaptureService
 */

/*global TLT:true, window: true, Node:true, performance:true */
/*global console: false */

/**
 * @name domCaptureService
 * @namespace
 */
TLT.addService("domCapture", function (core) {
    "use strict";

    var configService = core.getService("config"),
        browserBaseService = core.getService("browserBase"),
        browserService = core.getService("browser"),
        messageService,
        dcServiceConfig,
        dcDefaultOptions = {
            captureFrames: false,
            removeScripts: true,
            removeComments: true
        },
        defaultDiffObserverConfig = {
            childList: true,
            attributes: true,
            attributeOldValue: true,
            characterData: true,
            subtree: true
        },
        diffEnabled = (typeof window.MutationObserver !== "undefined"),
        diffObserver,
        diffObserverConfig = defaultDiffObserverConfig,
        observedWindowList = [],
        observedShadowHostList = [],
        shadowEventList = [],
        mutatedTargets = [],
        mutatedAttrTargets = [],
        mutationCount = 0,
        mutationThreshold = 100,
        forceFullDOM = false,
        fullDOMSent = false,
        isInitialized = false,
        tltUniqueIDIndex = 1,
        dupNode = function () {},
        getDOMCapture = function () {},
        updateConfig = function () {},
        publishEvent = core._publishEvent,
        utils = core.utils;

    /**
     * Clear the global lists which are tracking mutated nodes and attributes.
     * @private
     * @function
     */
    function clearMutationRecords() {
        mutatedTargets = [];
        mutatedAttrTargets = [];
        mutationCount = 0;
        forceFullDOM = false;
    }

    /**
     * Consolidate mutated nodes by eliminating any children nodes whose parents
     * are already in the mutated list.
     * @private
     * @function
     * @param {object} mutatedTargets List of mutated targets to be consolidated.
     */
    function consolidateTargets(mutatedTargets) {
        var i, j,
            parentTarget;

        if (!mutatedTargets || !mutatedTargets.length) {
            return;
        }

        // Sort the targets list
        mutatedTargets = mutatedTargets.sort(function (xpathA, xpathB) {
            return xpathA.compare(xpathB);
        });

        // Eliminate any children contained within the parent node
        for (i = 0; i < mutatedTargets.length; i += 1) {
            parentTarget = mutatedTargets[i];
            // Search and eliminate any possible children contained within the parent
            for (j = i + 1; j < mutatedTargets.length; j += 0) {
                if (mutatedTargets[j].containedIn(parentTarget)) {
                    // Remove the child
                    mutatedTargets.splice(j, 1);
                } else {
                    j += 1;
                }
            }
        }
    }

    /**
     * Given a list of attribute records, removes "oldValue" from each entry in the list.
     * @private
     * @function
     * @param {Array} attrList List of attribute records.
     * @returns {Array} The list of attribute records where each record has been modified to remove the "oldValue" property.
     */
    function removeOldAttrValues(attrList) {
        var i,
            len;

        // Sanity check
        if (!attrList) {
            return attrList;
        }

        for (i = 0, len = attrList.length; i < len; i += 1) {
            delete attrList[i].oldValue;
        }

        return attrList;
    }

    /**
     * Given a list of attribute records and an attribute name, returns true if
     * it finds the attribute in the list.
     * @private
     * @function
     * @param {Array} attrList List of attribute records
     * @param {String} attrName Attribute name to be searched
     * @returns {Boolean} true if the attribute name is found in the list, false otherwise.
     */
    function hasAttr(attrList, attrName) {
        var i,
            len,
            found = false;

        // Sanity check
        if (!attrList || !attrName) {
            return found;
        }

        for (i = 0, len = attrList.length; i < len; i += 1) {
            if (attrList[i].name === attrName) {
                found = true;
                break;
            }
        }

        return found;
    }

    /**
     * Merge a mutated attribute by checking if there is an existing entry for the attribute
     * in the current list. If there is no existing entry for the attribute then one is created.
     * @private
     * @function
     * @param {object} currAttrList List of current attribute mutations.
     * @param {object} newAttr New attribute mutation containing the attribute name & value.
     * @returns {object} The merged attribute list.
     */
    function mergeAttributeChanges(currAttrList, newAttr) {
        var i,
            len,
            attr,
            found;

        // Check if new attribute name already exists
        for (i = 0, len = currAttrList.length, found = false; i < len; i += 1) {
            attr = currAttrList[i];
            if (attr.name === newAttr.name) {
                if (attr.oldValue === newAttr.value) {
                    // If the newAttr value matches the oldValue of attr then it is a redundant change
                    // Remove the attribute entry in that case
                    currAttrList.splice(i, 1);
                } else {
                    // Update the attribute value to the latest new value
                    attr.value = newAttr.value;
                }
                found = true;
                break;
            }
        }

        if (!found) {
            // Add to the current attributes
            currAttrList.push(newAttr);
        }

        return currAttrList;
    }

    /**
     * Add the mutation record to the list of mutated nodes. If the node
     * is already in the mutated list then merge the mutation.
     * @private
     * @function
     * @param {object} xpath The XPath of the mutated node
     * @param {object} mutationRecord The DOM Mutation Record object.
     */
    function addToMutatedTargets(xpath, mutationRecord) {
        var i, j, k,
            len,
            found,
            target;

        // For removals, we only track the number of removed nodes
        xpath.removedNodes = mutationRecord.removedNodes.length;
        xpath.addedNodes = utils.convertToArray(mutationRecord.addedNodes);

        // Check if xpath already exists in the mutatedTargets
        for (i = 0, len = mutatedTargets.length; i < len; i += 1) {
            target = mutatedTargets[i];
            if (xpath.isSame(target)) {
                // The xpaths are the same, merge the node mutations
                if (xpath.removedNodes) {
                    for (j = 0; j < mutationRecord.removedNodes.length; j += 1) {
                        k = target.addedNodes.indexOf(mutationRecord.removedNodes[j]);
                        if (k !== -1) {
                            // Match found, remove it from target's addedNodes & decrement the removedNodes count from current xpath
                            target.addedNodes.splice(k, 1);
                            xpath.removedNodes -= 1;
                        }
                    }
                }

                target.removedNodes += xpath.removedNodes;
                target.addedNodes.concat(xpath.addedNodes);

                // Remove the target xpath entry if there are no mutations to keep track of.
                if (!target.removedNodes && !target.addedNodes.length) {
                    mutatedTargets.splice(i, 1);
                }

                found = true;
                break;
            }
        }

        if (!found) {
            // Add a new entry to the mutatedTargets list
            mutatedTargets.push(xpath);
        }
    }

    /**
     * Checks if the node is a child of existing nodes that have been added.
     * @private
     * @function
     * @param {object} xpath The XPath of the mutated node
     * @param {object} node The DOM node.
     * @returns {boolean} True if the node is a child of previously added nodes.
     */
    function isNodePartOfMutatedTargets(xpath, node) {
        var i, j,
            len,
            found = false,
            mutatedNodes,
            target;

        for (i = 0, len = mutatedTargets.length; !found && i < len; i += 1) {
            target = mutatedTargets[i];
            if (xpath.containedIn(target)) {
                // Xpath indicates node is a child but is it contained within the mutated nodes?
                mutatedNodes = target.addedNodes;
                for (j = 0; j < mutatedNodes.length; j += 1) {
                    // Check if Node.contains exists before using because Node.contains is not
                    // implemented in IE for all node types.
                    // See https://connect.microsoft.com/IE/Feedback/Details/785343
                    if (mutatedNodes[j].contains && mutatedNodes[j].contains(node)) {
                        found = true;
                        break;
                    }
                }
            }
        }

        return found;
    }

    /**
     * Adds the attribute mutation to the list of mutated attribute targets.
     * @private
     * @function
     * @param {object} xpath The XPath of the mutated node.
     * @param {object} mutationRecord The DOM Mutation record.
     */
    function addToMutatedAttributeTargets(xpath, mutationRecord) {
        var i,
            len,
            attributeName,
            currAttributes,
            found,
            target = null;

        attributeName = mutationRecord.attributeName;

        // If the attribute is "checked" or "selected" then ignore if element is privacy masked
        if (attributeName === "checked" || attributeName === "selected") {
            target = browserBaseService.ElementData.prototype.examineID(mutationRecord.target);
            if (messageService.isPrivacyMatched(target)) {
                return;
            }
            target = null;
        }

        // If the attribute is "value" check if privacy masking needs to be applied
        if (attributeName === "value") {
            target = browserBaseService.ElementData.prototype.examineID(mutationRecord.target);
            target.currState = utils.getTargetState(mutationRecord.target) || {};
            if (target.currState.value) {
                messageService.applyPrivacyToTarget(target);
            } else {
                target = null;
            }
        }

        xpath.attributes = [
            {
                name: attributeName,
                oldValue: mutationRecord.oldValue,
                // New value
                value: target ? target.currState.value : mutationRecord.target.getAttribute(attributeName)
            }
        ];

        currAttributes = xpath.attributes[0];
        if (currAttributes.oldValue === currAttributes.value) {
            return;
        }

        // Check if xpath already exists in the mutatedAttrTargets
        for (i = 0, len = mutatedAttrTargets.length, found = false; i < len; i += 1) {
            target = mutatedAttrTargets[i];
            if (xpath.isSame(target)) {
                // The xpaths are the same, merge the attributes
                target.attributes = mergeAttributeChanges(target.attributes, currAttributes);
                if (!target.attributes.length) {
                    // The attribute changes cancelled each other out, delete the entry
                    mutatedAttrTargets.splice(i, 1);
                } else {
                    // If the node is part of the mutated nodes then ignore as the mutation record will capture the attribute as well.
                    if (isNodePartOfMutatedTargets(xpath, mutationRecord.target)) {
                        mutatedAttrTargets.splice(i, 1);
                    }
                }
                found = true;
                break;
            }
        }

        if (!found && !isNodePartOfMutatedTargets(xpath, mutationRecord.target)) {
            // Add a new entry to the mutatedAttrTargets list
            mutatedAttrTargets.push(xpath);
        }
    }

    /**
     * Process DOM mutation records.
     * @param {object} records
     */
    function processMutationRecords(records) {
        var i,
            len,
            fullXpathList,
            record,
            xpath;

        if (!records || !records.length) {
            return;
        }

        mutationCount += records.length;

        // Check if mutationCount exceeds safety threshold
        if (mutationCount >= mutationThreshold) {
            if (!forceFullDOM) {
                forceFullDOM = true;
            }
            return;
        }

        // Process each record as per it's type
        for (i = 0, len = records.length; i < len; i += 1) {
            record = records[i];
            // calculate xpath of the target element
            xpath = new browserBaseService.Xpath(record.target);
            if (xpath) {
                fullXpathList = xpath.fullXpathList;
                if (fullXpathList.length && fullXpathList[0][0] === "html") {
                    switch (record.type) {
                    case "characterData":
                    case "childList":
                        // Push xpath to mutatedTargets list
                        addToMutatedTargets(xpath, record);
                        break;
                    case "attributes":
                        addToMutatedAttributeTargets(xpath, record);
                        break;
                    default:
                        utils.clog("Unknown mutation type: " + record.type);
                        break;
                    }
                }
            }
        }
    }

    /**
     * Initialize the DOM Mutation Observer.
     * @private
     * @returns {object} The observer object.
     */
    function initDOMDiffObserver() {
        var observer;

        observer = new window.MutationObserver(function (records) {
            if (records) {
                processMutationRecords(records);
                utils.clog("Processed [" + records.length + "] mutation records.");
            }
        });

        return observer;
    }

    /**
     * Initialization of the service. Subscribe with config service for
     * the configupdated message.
     * @private
     * @function
     * @param {object} config
     */
    function initDOMCaptureService(config) {
        var i, len,
            module,
            event,
            eventList,
            coreConfig = configService.getCoreConfig();

        configService.subscribe("configupdated", updateConfig);
        messageService = core.getService("message");

        dcServiceConfig = config;
        dcServiceConfig.options = utils.mixin({}, dcDefaultOptions, dcServiceConfig.options);

        diffEnabled = diffEnabled && utils.getValue(dcServiceConfig, "diffEnabled", true);
        mutationThreshold = utils.getValue(dcServiceConfig.options, "maxMutations", 100);

        if (diffEnabled) {
            // Initialize DOM Diff observer
            diffObserverConfig = utils.getValue(dcServiceConfig, "diffObserverConfig", defaultDiffObserverConfig);
            diffObserver = initDOMDiffObserver();
            // Add the main window to be observed.
            observedWindowList.push(window);
        }

        // Populate the shadowEventList
        for (module in coreConfig.modules) {
            if (coreConfig.modules.hasOwnProperty(module)) {
                eventList = coreConfig.modules[module].events || [];
                for (i = 0, len = eventList.length; i < len; i += 1) {
                    if (eventList[i].attachToShadows) {
                        event = eventList[i].name;
                        if (shadowEventList.indexOf(event) === -1) {
                            shadowEventList.push(event);
                        }
                    }
                }
            }
        }

        isInitialized = true;
    }

    /**
     * Destroy the service. Unsubscribe from the configupdated message.
     * @private
     * @function
     */
    function destroyDOMCaptureService() {
        configService.unsubscribe("configupdated", updateConfig);
        if (diffObserver) {
            diffObserver.disconnect();
        }
        isInitialized = false;
    }

    /**
     * Returns a unique identifier string.
     * @private
     * @function
     * @returns {String} A string that can be used as a unique identifier.
     */
    function getUniqueID() {
        var id;

        id = "tlt-" + utils.getSerialNumber();

        return id;
    }

    /**
     * Remove child nodes matching the tag name from the node.
     * @private
     * @function
     * @param {DOMNode} node The root or parent DOM Node element
     * @param {String}  tagName The tag to be removed
     * @param {Array}  [attribute] Optional name, value pair to match the tag on.
     * @returns The node without any tags matching tagName
     */
    function removeTags(node, tagName, attribute) {
        var i,
            attrName,
            attrValue,
            nodeList,
            tag;

        // Sanity check
        if (!node || !node.getElementsByTagName || !tagName) {
            return;
        }

        if (attribute && attribute.length === 2) {
            attrName = attribute[0];
            attrValue = attribute[1];
        }

        nodeList = node.getElementsByTagName(tagName);
        if (nodeList && nodeList.length) {
            for (i = nodeList.length - 1; i >= 0; i -= 1) {
                tag = nodeList[i];
                if (!attrName) {
                    tag.parentNode.removeChild(tag);
                } else {
                    if (tag[attrName] === attrValue) {
                        tag.parentNode.removeChild(tag);
                    }
                }
            }
        }

        return node;
    }

    /**
     * Remove child nodes matching the nodeType from the node.
     * @private
     * @function
     * @param {DOMNode} node The root or parent DOM Node element
     * @param {Integer} nodeType The integer code of the node type to be removed.
     *                           e.g. 1 = Element, 8 = comment etc.
     * @returns The node without any tags matching tagName
     */
    function removeNodes(node, nodeType) {
        var i,
            child;

        for (i = 0; node.hasChildNodes() && i < node.childNodes.length; i += 1) {
            child = node.childNodes[i];
            if (child.nodeType === nodeType) {
                node.removeChild(child);
                // Since we removed the child node, decrement the index to negate the loop increment
                i -= 1;
            } else if (child.hasChildNodes()) {
                // Check if child node itself contains nodeType nodes.
                removeNodes(child, nodeType);
            }
        }

        return node;
    }

    /**
     * Returns the DOCTYPE of the document as a formatted string.
     * @private
     * @function
     * @param {DOMNode} node A document node.
     * @returns {String} The formatted doctype or null.
     */
    function getDoctypeAsString(node) {
        var doctype,
            doctypeStr = null;

        // Sanity check
        if (!node || !node.doctype) {
            return null;
        }

        doctype = node.doctype;
        if (doctype) {
            doctypeStr = "<!DOCTYPE " + doctype.name +
                         (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : "") +
                         (!doctype.publicId && doctype.systemId ? ' SYSTEM' : "") +
                         (doctype.systemId ? ' "' + doctype.systemId + '"' : "") +
                         ">";
        }

        return doctypeStr;
    }

    /**
     * Fix child input nodes and set attributes such as value & checked.
     * @private
     * @function
     * @param {DOMNode} source The original root or parent DOM node element.
     * @param {DOMNode} target The copy of the root or parent DOM Node element.
     */
    function fixInputs(source, target) {
        var i,
            sourceInputElement,
            targetInputElement,
            sourceInputList,
            targetInputList,
            len;

        // Sanity check
        if (!target) {
            return;
        }

        sourceInputList = source.getElementsByTagName("input");
        targetInputList = target.getElementsByTagName("input");
        if (targetInputList) {
            for (i = 0, len = targetInputList.length; i < len; i += 1) {
                sourceInputElement = sourceInputList[i];
                targetInputElement = targetInputList[i];
                switch (targetInputElement.type) {
                case "checkbox":
                case "radio":
                    // IE 10 cloneNode bug does not reflect correct state of checkbox control in cloned copy.
                    if (utils.isIE ? sourceInputElement.checked : targetInputElement.checked) {
                        targetInputElement.setAttribute("checked", "checked");
                    } else {
                        targetInputElement.removeAttribute("checked");
                    }
                    break;
                default:
                    targetInputElement.setAttribute("value", targetInputElement.value);
                    if (!targetInputElement.getAttribute("type")) {
                        // For input elements that do not have an explicit "type" attribute set.
                        targetInputElement.setAttribute("type", "text");
                    }
                    break;
                }
            }
        }
    }

    /**
     * Set the value attribute of the child textarea nodes.
     * @private
     * @function
     * @param {DOMNode} source The original DOM Node element
     * @param {DOMNode} target The target DOM Node element that is a copy of the source
     */
    function fixTextareas(source, target) {
        var i,
            len,
            sourceTextareaElement,
            sourceTextareaList,
            targetTextareaElement,
            targetTextareaList;

        // Sanity check
        if (!source || !source.getElementsByTagName || !target || !target.getElementsByTagName) {
            return;
        }

        sourceTextareaList = source.getElementsByTagName("textarea");
        targetTextareaList = target.getElementsByTagName("textarea");

        if (sourceTextareaList && targetTextareaList) {
            for (i = 0, len = sourceTextareaList.length; i < len; i += 1) {
                sourceTextareaElement = sourceTextareaList[i];
                targetTextareaElement = targetTextareaList[i];
                targetTextareaElement.setAttribute("value", sourceTextareaElement.value);
                targetTextareaElement.value = targetTextareaElement.textContent = sourceTextareaElement.value;
            }
        }
    }

    /**
     * Fix the child select lists by setting the selected attribute on the option elements of
     * the lists in the target node.
     * @private
     * @function
     * @param {DOMNode} source The original or source DOM Node element
     * @param {DOMNode} target The target DOM Node element that is a copy of the source
     */
    function fixSelectLists(source, target) {
        var sourceElem,
            sourceList,
            targetElem,
            targetList,
            i,
            j,
            len;

        // Sanity check
        if (!source || !source.getElementsByTagName || !target || !target.getElementsByTagName) {
            return;
        }

        sourceList = source.getElementsByTagName("select");
        targetList = target.getElementsByTagName("select");

        // TODO: ASSERT source and target nodes have same order of select elements

        if (sourceList) {
            for (i = 0, len = sourceList.length; i < len; i += 1) {
                sourceElem = sourceList[i];
                targetElem = targetList[i];
                for (j = 0; j < sourceElem.options.length; j += 1) {
                    if (j === sourceElem.selectedIndex || sourceElem.options[j].selected) {
                        targetElem.options[j].setAttribute("selected", "selected");
                    } else {
                        targetElem.options[j].removeAttribute("selected");
                    }
                }
            }
        }
    }

    /**
     * Return the outer HTML of the document or element.
     * @private
     * @function
     * @param {DOMNode} node The DOM Node element
     * @returns {String} The HTML text of the document or element. If the node is not
     * a document or element type then return null.
     */
    function getHTMLText(node) {
        var nodeType,
            htmlText = null;

        if (node) {
            nodeType = node.nodeType || -1;
            switch (nodeType) {
            case 11:
                // DOCUMENT_FRAGMENT
                htmlText = node.innerHTML;
                break;
            case 9:
                // DOCUMENT_NODE
                htmlText = node.documentElement ? node.documentElement.outerHTML : "";
                break;
            case 1:
                // ELEMENT_NODE
                htmlText = node.outerHTML;
                break;
            default:
                htmlText = null;
                break;
            }
        }
        return htmlText;
    }

    /**
     * Checks if the DOM node is allowed for capture. Only document and element
     * node types are allowed for capture.
     * @private
     * @function
     * @param {DOMNode} node The DOM Node element to be checked
     * @returns {Boolean} Returns true if the node is allowed for DOM capture.
     */
    function isNodeValidForCapture(node) {
        var nodeType,
            valid = false;

        // Only DOCUMENT (9) & ELEMENT (1) nodes are valid for capturing
        if (node && typeof node === "object") {
            nodeType = node.nodeType || -1;
            switch (nodeType) {
            case 9:
            case 1:
                valid = true;
                break;
            default:
                valid = false;
                break;
            }
        }
        return valid;
    }

    /**
     * Capture the frames from the source and add the unique token to the frame element
     * in the target.
     * @private
     * @function
     * @param {DOMNode} source The source element
     * @param {DOMNode} target The target element duplicated from the source.
     * @param {Object}  options The capture options object
     * @returns {Object} Returns the captured frame/iframe elements as per the enabled options.
     */
    function getFrames(source, target, options) {
        var i, j,
            len,
            frameTag,
            frameTags = [ "iframe", "frame" ],
            sourceIframe,
            iframeWindow,
            iframeDoc,
            iframeCapture,
            iframeID,
            iframeSrc,
            returnObject = {
                frames: []
            },
            sourceIframeList,
            targetIframeList,
            urlInfo;

        for (j = 0; j < frameTags.length; j += 1) {
            frameTag = frameTags[j];
            // Get the frames in the original DOM
            sourceIframeList = source.getElementsByTagName(frameTag);

            // Get the cloned frames - the content is not copied here - these will be
            // used to add an attribute to specify which item in the frames collection
            // contains the content for this frame
            targetIframeList = target.getElementsByTagName(frameTag);

            if (sourceIframeList) {
                for (i = 0, len = sourceIframeList.length; i < len; i += 1) {
                    try {
                        sourceIframe = sourceIframeList[i];
                        iframeWindow = utils.getIFrameWindow(sourceIframe);
                        if (iframeWindow && iframeWindow.document && iframeWindow.location.href !== "about:blank") {
                            iframeDoc = iframeWindow.document;

                            iframeCapture = getDOMCapture(iframeDoc, iframeDoc.documentElement || iframeDoc, "", options);
                            iframeID = getUniqueID();

                            // Set the tltid for this frame in the target DOM
                            targetIframeList[i].setAttribute("tltid", iframeID);
                            iframeCapture.tltid = iframeID;

                            // Add the host and url path
                            urlInfo = utils.getOriginAndPath(iframeDoc.location);
                            iframeCapture.host = urlInfo.origin;
                            iframeCapture.url = urlInfo.path;

                            // Add the charset
                            iframeCapture.charset = iframeDoc.characterSet || iframeDoc.charset;

                            // Set the src attribute on the frame tag if one doesn't already exist (to aid replay)
                            iframeSrc = targetIframeList[i].getAttribute("src");
                            if (!iframeSrc) {
                                iframeSrc = iframeWindow.location.href;
                                targetIframeList[i].setAttribute("src", iframeSrc);
                            }

                            // Merge this frame's captured DOM into the return object
                            returnObject.frames = returnObject.frames.concat(iframeCapture.frames);
                            delete iframeCapture.frames;

                            returnObject.frames.push(iframeCapture);
                        }
                    } catch (e) {
                        // Do nothing!
                    }
                }
            }
        }
        return returnObject;
    }

    /**
     * Attach event listeners identified in the shadowEventList to the shadowRoot.
     * @private
     * @function
     * @param {DOMNode} root The shadow root document-fragment
     */
    function attachEventListeners(root) {
        var i, len,
            event;

        root.TLTListeners = root.TLTListeners || {};
        for (i = 0, len = shadowEventList.length; i < len; i += 1) {
            event = shadowEventList[i];
            if (!root.TLTListeners[event]) {
                browserService.subscribe(event, root, publishEvent);
                root.TLTListeners[event] = true;
            }
        }
    }

    /**
     * Capture Shadow DOM trees from the source and add the unique token to the host element
     * in the target.
     * @private
     * @function
     * @param {DOMNode} source The source element
     * @param {DOMNode} target The target element duplicated from the source.
     * @param {Object}  options The capture options object
     * @returns {Object} Returns the captured Shadow DOM as per the enabled options.
     */
    function getShadowDOM(source, target, options, thisSource) {
        var i,
            len,
            captures,
            element,
            elements,
            hostXpath,
            returnObject = {
                shadows: []
            };

        // Sanity check
        if (!source || (!thisSource && !source.children)) {
            return returnObject;
        }

        if (thisSource) {
            elements = [ source ];
        } else {
            elements = source.children;
        }

        for (i = 0, len = elements.length; i < len; i += 1) {
            element = elements[i];
            if (element.shadowRoot) {
                hostXpath = new browserBaseService.Xpath(element);
                captures = getDOMCapture(element.ownerDocument, element.shadowRoot, "", options);
                returnObject.shadows.push({
                    root: captures.root,
                    xpath: hostXpath.xpath
                });
                returnObject.shadows = returnObject.shadows.concat(captures.shadows);

                // Attach event listeners
                attachEventListeners(element.shadowRoot);
                // Observe Diffs
                if (diffEnabled) {
                    diffObserver.observe(element.shadowRoot, diffObserverConfig);
                    element.shadowRoot.TLTListeners.mutation = true;
                    // Add element to list of observed Shadow hosts.
                    if (utils.indexOf(observedShadowHostList, element) === -1) {
                        observedShadowHostList.push(element);
                    }
                }
            }
            captures = getShadowDOM(element, null, options);
            returnObject.shadows = returnObject.shadows.concat(captures.shadows);
        }
        return returnObject;
    }

    /**
     * Calculate the total length of the HTML in the captured object.
     * @private
     * @function
     * @param {Object} captureObj The DOM capture object containing the serialized HTML.
     * @returns {Number} Returns the total length of the serialized object.
     */
    function getCapturedLength(captureObj) {
        var i, j,
            len,
            attrLen,
            attrRecord,
            diffRecord,
            totalLength = 0;

        if (!captureObj) {
            return totalLength;
        }

        if (captureObj.root) {
            totalLength += captureObj.root.length;
            if (captureObj.frames) {
                for (i = 0, len = captureObj.frames.length; i < len; i += 1) {
                    if (captureObj.frames[i].root) {
                        totalLength += captureObj.frames[i].root.length;
                    }
                }
            }
        } else if (captureObj.diffs) {
            for (i = 0, len = captureObj.diffs.length; i < len; i += 1) {
                diffRecord = captureObj.diffs[i];
                totalLength += diffRecord.xpath.length;
                if (diffRecord.root) {
                    totalLength += diffRecord.root.length;
                } else if (diffRecord.attributes) {
                    for (j = 0, attrLen = diffRecord.attributes.length; j < attrLen; j += 1) {
                        attrRecord = diffRecord.attributes[j];
                        totalLength += attrRecord.name.length;
                        if (attrRecord.value) {
                            totalLength += attrRecord.value.length;
                        }
                    }
                }
            }
        }

        return totalLength;
    }

    /**
     * Consolidates the DOM node mutation records and attribute mutation records. Removes
     * any attribute mutation records that are contained within any mutated target.
     * @private
     * @function
     */
    function consolidateMutationsWithAttributeChanges() {
        var i, j,
            len,
            parentTarget;

        for (i = 0, len = mutatedTargets.length; i < len && mutatedAttrTargets.length; i += 1) {
            parentTarget = mutatedTargets[i];
            // Search and eliminate any possible children contained within the parent
            for (j = 0; j < mutatedAttrTargets.length; j += 1) {
                if (mutatedAttrTargets[j].containedIn(parentTarget)) {
                    // Remove the child
                    mutatedAttrTargets.splice(j, 1);
                    // Decrement the array index to account for removal of the current entry
                    // The index will get auto incremented as part of the for-loop.
                    j -= 1;
                }
            }
        }
    }

    function enumerateUntrackedShadows(node) {
        var i, len,
            element,
            elements,
            shadowList = [];

        if (!node || !node.children) {
            return shadowList;
        }

        elements = node.children;

        for (i = 0, len = elements.length; i < len; i += 1) {
            element = elements[i];
            if (element.shadowRoot) {
                if (!element.shadowRoot.TLTListeners) {
                    shadowList.push([element, element.shadowRoot]);
                }
                shadowList = shadowList.concat(enumerateUntrackedShadows(element.shadowRoot));
            }
            shadowList = shadowList.concat(enumerateUntrackedShadows(element));
        }
        return shadowList;
    }

    function getUntrackedShadows(doc, options) {
        var i, len,
            shadows,
            retObj,
            untrackedShadowList;

        // Sanity check
        if (!doc || !options) {
            return;
        }

        if (!options.captureShadowDOM) {
            return;
        }

        untrackedShadowList = enumerateUntrackedShadows(doc, options);
        for (i = 0, len = untrackedShadowList.length, shadows = []; i < len; i += 1) {
            retObj = getShadowDOM(untrackedShadowList[i][0], null, options, true);
            shadows = shadows.concat(retObj.shadows);
        }
        return shadows;
    }


    /**
     * Capture the full DOM starting at the root element as per the provided configuration options.
     * @private
     * @function
     * @param {DOMNode} doc The document element that needs to be captured.
     * @param {Object}  options The capture options object.
     * @returns {Object} Returns the object containing the captured and serialized DOM.
     */
    function getFullDOM(doc, options) {
        var captureObj,
            urlInfo,
            shadowRoots,
            startTime,
            endTime;


        captureObj = getDOMCapture(doc, doc.documentElement || doc, null, options);
        if (!captureObj) {
            captureObj = {};
        }


        // Set the document charset
        captureObj.charset = doc.characterSet || doc.charset;

        // Add the host and url path
        urlInfo = utils.getOriginAndPath(doc.location);
        captureObj.host = urlInfo.origin;
        captureObj.url = urlInfo.path;

        return captureObj;
    }

    /**
     * Returns the DOM Diff object based on the consolidated mutation records. The Diff object
     * consists of the serialized HTML of added/removed nodes along with any attribute changes
     * on existing nodes.
     * @private
     * @function
     * @param {Object} options The capture options object.
     * @returns {Object} Returns the object containing the captured and serialized DOM Diff(s).
     */
    function getDOMDiff(options) {
        var i,
            len,
            returnObj = {
                fullDOM: false,
                diffs: [],
                attributeDiffs: {}
            },
            diff,
            captureShadowDOM,
            untrackedShadows,
            target,
            targetXpath;

        // Consolidate the DOM Node mutations
        consolidateTargets(mutatedTargets);
        // Consolidate the DOM Node mutations with the attribute mutations
        consolidateMutationsWithAttributeChanges();

        // Do not capture full Shadow DOM as part of the diff, any untracked Shadow roots will be captured subsequently
        captureShadowDOM = options.captureShadowDOM;
        options.captureShadowDOM = false;

        // Add the DOM Node mutations
        for (i = 0, len = mutatedTargets.length; i < len; i += 1) {
            targetXpath = mutatedTargets[i];
            target = browserBaseService.getNodeFromID(targetXpath.xpath, -2);
            if (target === window.document.body) {
                // If diff includes the document body, then send the full DOM instead.
                options.captureShadowDOM = captureShadowDOM;
                return getFullDOM(window.document, options);
            }
            diff = getDOMCapture(window.document, target, targetXpath, options);
            if (diff.shadows && diff.shadows.length === 0) {
                delete diff.shadows;
            }
            if (diff.frames && diff.frames.length === 0) {
                delete diff.frames;
            }
            diff.xpath = targetXpath.xpath;
            returnObj.diffs.push(diff);
        }

        // Helper function to add attribute diffs.
        function addAttributeDiffs(attribute, index) {
            // Sanity check
            if (!attribute || !attribute.name) {
                return;
            }
            returnObj.attributeDiffs[diff.xpath][attribute.name] = { value: attribute.value };
        }

        // Add the attribute mutations
        for (i = 0, len = mutatedAttrTargets.length; i < len; i += 1) {
            targetXpath = mutatedAttrTargets[i];
            diff = {
                // If the HTML id attribute itself is being modified then use the full xpath.
                xpath: hasAttr(targetXpath.attributes, "id") ? targetXpath.fullXpath : targetXpath.xpath,
                attributes: removeOldAttrValues(targetXpath.attributes)
            };
            returnObj.diffs.push(diff);

            // Add to the attributeDiffs object
            returnObj.attributeDiffs[diff.xpath] = {};
            utils.forEach(diff.attributes, addAttributeDiffs);
        }

        // Add newly created Shadow DOM roots not being tracked
        options.captureShadowDOM = captureShadowDOM;
        untrackedShadows = getUntrackedShadows(window.document, options);
        if (untrackedShadows && untrackedShadows.length) {
            returnObj.shadows = untrackedShadows;
        }

        return returnObj;
    }

    /**
     * Clone the provided document or element node.
     * @private
     * @function
     * @param {DOMNode} node The element to be duplicated.
     * @returns {DOMNode} Returns the duplicated node.
     */
    dupNode = function (node) {
        var dup = null;

        if (isNodeValidForCapture(node)) {
            dup = node.cloneNode(true);
            if (!dup && node.documentElement) {
                // Fix for Android and Safari bug which returns null when cloneNode is called on the document element.
                dup = node.documentElement.cloneNode(true);
            }
        }

        return dup;
    };

    /**
     * Capture the DOM starting at the root element as per the provided configuration options.
     * This function makes a copy of the root element and then applies various modifications to
     * the copy of the root such as removing script tags, removing comment nodes, applying input
     * textarea and select elements value attribute. Finally, the privacy rules are applied (by
     * invoking the message service's applyPrivacyToNode API)
     * @private
     * @function
     * @param {DOMNode} doc The document element.
     * @param {DOMNode} root The root element that needs to be captured. For a full DOM capture
     *                       this would be the same as the document element.
     * @param {Xpath}   rootXpath The root element's Xpath object.
     * @param {Object}  options The capture options object.
     * @returns {Object} Returns the object containing the captured and serialized DOM.
     */
    getDOMCapture = function (doc, root, rootXpath, options) {
        var cloned = true,
            rootCopy,
            frameCaptureObj,
            shadowDOMObj,
            captureObj = {},
            serializedDOM,
            urlInfo;

        // Sanity check
        if (!doc || !root) {
            return captureObj;
        }

        // Make a copy of the root because we will be modifying it.
        rootCopy = dupNode(root, doc);
        if (!rootCopy && root.host) {
            // A shadow root cannot be cloned
            cloned = false;
        } else if (!rootCopy) {
            // Could not copy the root node
            return captureObj;
        }

        if (cloned) {
            // Remove script tags
            if (!!options.removeScripts) {
                removeTags(rootCopy, "script");
                removeTags(rootCopy, "noscript");
            }

            // Remove link imports
            if (!options.keepImports) {
                removeTags(rootCopy, "link", ["rel", "import"]);
            }

            // Remove comment nodes
            if (!!options.removeComments) {
                removeNodes(rootCopy, 8);
            }

            // Set "selected" attribute on select list elements
            fixSelectLists(root, rootCopy);

            // Set attributes on input elements.
            fixInputs(root, rootCopy);

            // Set attributes on textarea elements.
            fixTextareas(root, rootCopy);

            // Apply privacy
            rootCopy = messageService.applyPrivacyToNode(rootCopy, rootXpath, doc);

            // Optionally capture any frames
            if (!!options.captureFrames) {
                // Get the iframes
                frameCaptureObj = getFrames(root, rootCopy, options);
            }
        }

        // Capture any shadow DOM trees
        if (!!options.captureShadowDOM) {
            shadowDOMObj = getShadowDOM(root, rootCopy, options);
        }

        // Add all the captured data to the capture object
        if (frameCaptureObj) {
            captureObj = utils.mixin(captureObj, frameCaptureObj);
        }
        if (shadowDOMObj) {
            captureObj = utils.mixin(captureObj, shadowDOMObj);
        }

        serializedDOM = (getDoctypeAsString(root) || "") + getHTMLText(rootCopy || root);

        // Apply privacy patterns to the serialized DOM
        captureObj.root = messageService.applyPrivacyPatterns(serializedDOM);

        return captureObj;
    };

    /**
     * Callback function which receives notification from config service when
     * the configuration is updated.
     * @private
     * @function
     */
    updateConfig = function () {
        configService = core.getService("config");
        // TODO: reinit only if config changed.
        initDOMCaptureService(configService.getServiceConfig("domCapture") || {});
    };

    /**
     * @scope domCaptureService
     */
    return {
        /**
         * Callback function invoked by the core to initialize the DOM Capture service.
         * @private
         * @function
         */
        init: function () {
            configService = core.getService("config");
            if (!isInitialized) {
                initDOMCaptureService(configService.getServiceConfig("domCapture") || {});
            } else {
            }
        },

        /**
         * Callback function invoked by the core to destroy the DOM Capture service.
         * @private
         * @function
         */
        destroy: function () {
            destroyDOMCaptureService();
        },

        /**
         * Adds the specified window object to the list of windows to be observed.
         * @param  {DOMWindow} win The window object to be added.
         */
        observeWindow: function (win) {
            var i,
                len;

            if (!win) {
                return;
            }

            if (!utils.getValue(dcServiceConfig, "options.captureFrames", false) && !(win === window)) {
                // Do not observe any frame/iframe windows if the option is not enabled
                return;
            }

            if (utils.indexOf(observedWindowList, win) === -1) {
                observedWindowList.push(win);
            }
        },

        /**
         * API function exposed by the DOM Capture service. Accepts the root element and
         * DOM capture options object.
         * @param  {DOMNode} root The root element for the DOM capture.
         * @param  {Object}  options The configuration options for performing the DOM capture.
         * @return {Object} An object containing the captured DOM.
         */
        captureDOM: function (root, options) {
            var i,
                len,
                captureObj = null,
                observedWindow,
                totalLength = 0;

            // Sanity check - DOM Capture is not supported on IE 8 and below
            if (!isInitialized || utils.isLegacyIE) {
                return captureObj;
            }

            // Merge user configured options with built-in configuration options
            options = utils.mixin({}, dcServiceConfig.options, options);

            root = root || window.document;

            if (!fullDOMSent || !diffEnabled || forceFullDOM || options.forceFullDOM) {
                if (diffObserver) {
                    // Stop observing
                    diffObserver.disconnect();
                }
                // Capture full DOM
                captureObj = getFullDOM(root, options);

                // Set flags indicating this is a fullDOM and if it was forced.
                captureObj.fullDOM = true;
                captureObj.forced = !!(forceFullDOM || options.forceFullDOM);

                // Remember a full DOM has been sent for later.
                fullDOMSent = true;

                if (diffObserver) {
                    // Start observing for diffs from the recently captured full DOM
                    for (i = 0, len = observedWindowList.length; i < len; i += 1) {
                        observedWindow = observedWindowList[i];
                        try {
                            diffObserver.observe(observedWindow.document, diffObserverConfig);
                        } catch (e) {
                            // The observed window is no longer valid.
                            observedWindowList.splice(i, 1);
                            len = observedWindowList.length;
                            i -= 1;
                        }
                    }
                }
            } else {
                captureObj = getDOMDiff(options);
                // Set fullDOM to false or true depending on if diffs are present
                captureObj.fullDOM = captureObj.diffs ? false : true;
            }

            if (diffEnabled) {
                // Add the number of mutations that were processed.
                captureObj.mutationCount = mutationCount;
            }

            // Clean the slate of any mutation records.
            clearMutationRecords();

            // Check if the capture meets the length threshold (if any)
            if (options.maxLength) {
                totalLength = getCapturedLength(captureObj);
                if (totalLength > options.maxLength) {
                    captureObj = {
                        errorCode: 101,
                        error: "Captured length (" + totalLength + ") exceeded limit (" + options.maxLength + ")."
                    };
                }
            }

            return captureObj;
        }
    };

});

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The EncoderService provides the ability to extend the library with various data encodings.
 * @exports encoderService
 */

/*global TLT:true, window: true */
/*global console: false */

/**
 * @name encoderService
 * @namespace
 */
TLT.addService("encoder", function (core) {
    "use strict";

    var encoderServiceConfig = {},
        configService = null,
        handleConfigUpdated = null,
        isInitialized = false;

    /**
     * Returns the encoder object for the specified encoder type.
     * @private
     * @function
     * @param {String} type The type of encoder object. e.g. "gzip"
     * @returns {Object} The encoder object or null if not found.
     */
    function getEncoder(type) {
        var encoder = null;

        // Sanity check
        if (!type) {
            return encoder;
        }
        encoder = encoderServiceConfig[type];
        if (encoder && typeof encoder.encode === "string") {
            encoder.encode = core.utils.access(encoder.encode);
        }

        return encoder;
    }

    /**
     * Initializes the encoder service.
     * @private
     * @function
     * @param {Object} config The configuration object for this service
     */
    function initEncoderService(config) {
        encoderServiceConfig = config;

        configService.subscribe("configupdated", handleConfigUpdated);
        isInitialized = true;
    }

    /**
     * Destroys the encoder service.
     * @private
     * @function
     */
    function destroy() {
        configService.unsubscribe("configupdated", handleConfigUpdated);

        isInitialized = false;
    }

    /**
     * Callback handler for the configupdated event. Refreshes the service configuration to the latest.
     * @private
     * @function
     */
    handleConfigUpdated = function () {
        configService = core.getService("config");
        // TODO: reinit only if config changed.
        initEncoderService(configService.getServiceConfig("encoder") || {});
    };

    /**
     * @scope serializerService
     */
    return {

        init: function () {
            configService = core.getService("config");
            if (!isInitialized) {
                initEncoderService(configService.getServiceConfig("encoder") || {});
            } else {
            }
        },

        destroy: function () {
            destroy();
        },

        /**
         * Encodes data using specified encoder.
         * @param  {String} data The data to encode.
         * @param  {String} type The name of the encoder to use.
         * @return {Object} An object containing the encoded data or error message.
         */
        encode: function (data, type) {
            var encoder,
                result,
                returnObj = {
                    data: null,
                    encoding: null,
                    error: null
                };

            // Sanity check
            if ((typeof data !== "string" && !data) || !type) {
                returnObj.error = "Invalid " + (!data ? "data" : "type") + " parameter.";
                return returnObj;
            }

            // Get the specified encoder
            encoder = getEncoder(type);
            if (!encoder) {
                returnObj.error = "Specified encoder (" + type + ") not found.";
                return returnObj;
            }

            // Sanity check
            if (typeof encoder.encode !== "function") {
                returnObj.error = "Configured encoder (" + type + ") encode method is not a function.";
                return returnObj;
            }

            try {
                // Invoke the encode method of the encoder and return the result.
                result = encoder.encode(data);
            } catch (e) {
                returnObj.error = "Encoding failed: " + (e.name ? e.name + " - " : "") + e.message;
                return returnObj;
            }

            if (!result || core.utils.getValue(result, "buffer", null) === null) {
                returnObj.error = "Encoder (" + type + ") returned an invalid result.";
                return returnObj;
            }

            returnObj.data = result.buffer;
            returnObj.encoding = encoder.defaultEncoding;

            return returnObj;
        }
    };

});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The MessageService creates messages in the correct format to be transmitted to the server.
 * @exports messageService
 */

/*global TLT:true */

/**
 * @name messageService
 * @namespace
 */
TLT.addService("message", function (core) {
    "use strict";

    var utils = core.utils,
        prevScreenviewOffsetTime = 0,
        screenviewOffsetTime = 0,
        count             = 0,
        messageCount      = 0,
        sessionStart      = new Date(),
        browserBaseService = core.getService("browserBase"),
        browserService    = core.getService("browser"),
        configService     = core.getService("config"),
        config            = configService.getServiceConfig("message") || {},
        windowHref        = window.location.href,
        windowHostname    = window.location.hostname,
        privacy           = config.hasOwnProperty("privacy") ? config.privacy : [],
        privacyPatterns,
        privacyMasks      = {},
        maskingCharacters = {
            lower: "x",
            upper: "X",
            numeric: "9",
            symbol: "@"
        },

        devicePixelRatio = parseFloat((window.devicePixelRatio || 1).toFixed(2)),
        screen = window.screen || {},
        screenWidth = screen.width || 0,
        screenHeight = screen.height || 0,
        deviceOrientation = browserBaseService.getNormalizedOrientation(),
        // iOS Safari reports constant width/height irrespective of orientation, so we have to swap manually
        deviceWidth = !utils.isiOS ? screenWidth : Math.abs(deviceOrientation) === 90 ? screenHeight : screenWidth,
        deviceHeight = !utils.isiOS ? screenHeight : Math.abs(deviceOrientation) === 90 ? screenWidth : screenHeight,
        deviceToolbarHeight = (window.screen ? window.screen.height - window.screen.availHeight : 0),
        startWidth = window.innerWidth || document.documentElement.clientWidth,
        startHeight = window.innerHeight || document.documentElement.clientHeight,
        isInitialized = false;


    /**
     * Base structure for a message object.
     * @constructor
     * @private
     * @name messageService-Message
     * @param {Object} event The QueueEvent to transform into a message object.
     */
    function Message(event) {
        var key = '',
            timestamp = event.timestamp || (new Date()).getTime();

        delete event.timestamp;

        /**
         * The message type.
         * @type {Number}
         * @see browserService-Message.TYPES
         */
        this.type          = event.type;
        /**
         * The offset from the beginning of the session.
         * @type {Number}
         */
        this.offset        = timestamp - sessionStart.getTime();

        this.screenviewOffset = 0;
        if (event.type === 2) {
            prevScreenviewOffsetTime = screenviewOffsetTime;
            screenviewOffsetTime = timestamp;
            if (event.screenview.type === "UNLOAD") {
                this.screenviewOffset = timestamp - (prevScreenviewOffsetTime || sessionStart.getTime());
            }
        } else if (screenviewOffsetTime) {
            /**
             * The offset from the most recent application context message (screenview)
             * @type {Number}
             */
            this.screenviewOffset = timestamp - screenviewOffsetTime;
        }

        // If message type is 0 it is a dummy request to obtain current offsets.
        if (!this.type) {
            return;
        }

        /**
         * The count of the overall messages until now.
         * @type {Number}
         */
        this.count         = (messageCount += 1);

        /**
         * To indicate that user action came from the web.
         * @type {Boolean}
         */
        this.fromWeb       = true;

        // iterate over the properties in the queueEvent and add all the objects to the message.
        for (key in event) {
            if (event.hasOwnProperty(key)) {
                this[key] = event[key];
            }
        }
    }

    /**
     * Empty filter. Returns an empty string which would be used as value.
     * @param  {String} value The value of the input/control.
     * @return {String}       Returns an empty string.
     */
    privacyMasks.PVC_MASK_EMPTY = function (value) {
        return "";
    };

    /**
     * Basic filter. Returns a predefined string for every value.
     * @param  {String} value The value of the input/control.
     * @return {String}       Returns a predefined mask/string.
     */
    privacyMasks.PVC_MASK_BASIC = function (value) {
        var retMask = "XXXXX";

        // Sanity check
        if (typeof value !== "string") {
            return "";
        }
        return (value.length ? retMask : "");
    };

    /**
     * Type filter. Returns predefined values for uppercase/lowercase
     *                         and numeric values.
     * @param  {String} value The value of the input/control.
     * @return {String}       Returns a string/mask which uses predefined
     *                        characters to mask the value.
     */
    privacyMasks.PVC_MASK_TYPE = function (value) {
        var characters,
            i = 0,
            len = 0,
            retMask = "";

        // Sanity check
        if (typeof value !== "string") {
            return retMask;
        }

        characters = value.split("");

        for (i = 0, len = characters.length; i < len; i += 1) {
            if (utils.isNumeric(characters[i])) {
                retMask += maskingCharacters.numeric;
            } else if (utils.isUpperCase(characters[i])) {
                retMask += maskingCharacters.upper;
            } else if (utils.isLowerCase(characters[i])) {
                retMask += maskingCharacters.lower;
            } else {
                retMask += maskingCharacters.symbol;
            }
        }
        return retMask;
    };

    privacyMasks.PVC_MASK_EMPTY.maskType = 1; // reported value is empty string.
    privacyMasks.PVC_MASK_BASIC.maskType = 2; // reported value is fixed string "XXXXX".
    privacyMasks.PVC_MASK_TYPE.maskType = 3;  // reported value is a mask according to character type
                                              // as per configuration, e.g. "HelloWorld123" becomes "XxxxxXxxxx999".
    privacyMasks.PVC_MASK_CUSTOM = {
        maskType: 4 // reported value is return value of custom function provided by config.
    };

    /**
     * Checks which mask should be used to replace the value and applies
     * it to the string. If an invalid mask is specified,
     * the BASIC mask will be applied.
     * @param  {Object} mask The privacy object.
     * @param  {String} str  The string to be masked.
     */
    function maskStr(mask, str) {
        var filter = privacyMasks.PVC_MASK_BASIC;

        // Sanity check
        if (typeof str !== "string") {
            return str;
        }

        if (!mask) {
            // Default
            filter = privacyMasks.PVC_MASK_BASIC;
        } else if (mask.maskType === privacyMasks.PVC_MASK_EMPTY.maskType) {
            filter = privacyMasks.PVC_MASK_EMPTY;
        } else if (mask.maskType === privacyMasks.PVC_MASK_BASIC.maskType) {
            filter = privacyMasks.PVC_MASK_BASIC;
        } else if (mask.maskType === privacyMasks.PVC_MASK_TYPE.maskType) {
            filter = privacyMasks.PVC_MASK_TYPE;
        } else if (mask.maskType === privacyMasks.PVC_MASK_CUSTOM.maskType) {
            if (typeof mask.maskFunction === "string") {
                filter = utils.access(mask.maskFunction);
            } else {
                filter = mask.maskFunction;
            }
            if (typeof filter !== "function") {
                // Reset to default
                filter = privacyMasks.PVC_MASK_BASIC;
            }
        }
        return filter(str);
    }

    /**
     * Checks which mask should be used to replace the value and applies
     * it on the message object. By default, if an invalid mask is specified,
     * the BASIC mask will be applied.
     * @param  {Object} mask  The privacy object.
     * @param  {Object} state The prevState or currState state object.
     */
    function applyMask(mask, state) {
        var prop;

        // Sanity check
        if (!mask || !state) {
            return;
        }

        for (prop in state) {
            if (state.hasOwnProperty(prop)) {
                if (prop === "value") {
                    // Mask the value
                    state[prop] = maskStr(mask, state[prop]);
                } else {
                    // Remove all other state information as it could compromise privacy.
                    delete state[prop];
                }
            }
        }
    }

    /**
     * Checks whether one of the privacy targets matches the target
     * of the current message.
     * @param  {Array} targets An array of objects as defined in the
     *                         privacy configuration.
     * @param  {Object} target  The target object of the message.
     * @return {Boolean}         Returns true if one of the targets match.
     *                           Otherwise false.
     */
    function matchesTarget(targets, target) {
        return (utils.matchTarget(targets, target) !== -1);
    }

    /**
     * Performs privacy pattern matching and replacement on the provided string.
     * @param {String} str Input string to which privacy pattern matching and
     *                     replacement is to be applied
     * @return {String} Output string with privacy pattern replacement applied.
     */
    function applyPrivacyPatterns(str) {
        var i,
            len,
            begin,
            duration,
            rule;

        // Sanity check
        if (!str) {
            return "";
        }


        for (i = 0, len = privacyPatterns.length; i < len; i += 1) {
            rule = privacyPatterns[i];
            rule.cRegex.lastIndex = 0;
            str = str.replace(rule.cRegex, rule.replacement);
        }

        return str;
    }

    /**
     * Runs through all privacy rules and checks if any rule matches the
     * target object. If yes, applies privacy mask to the target currState
     * and prevState.
     * @param  {Object} target  The target object.
     * @return {Object}         The target, either with replaced values
     *                          if a target of the privacy configuration
     *                          matched or the original target if the
     *                          configuration didn't match.
     */
    function privacyFilter(target) {
        var i,
            len,
            exclude,
            mask,
            maskApplied = false,
            prevState,
            currState;

        // Sanity check
        if (!target || (!target.currState && !target.prevState)) {
            return target;
        }

        prevState = target.prevState;
        currState = target.currState;

        for (i = 0, len = privacy.length; i < len; i += 1) {
            mask = privacy[i];
            exclude = utils.getValue(mask, "exclude", false);
            if (matchesTarget(mask.targets, target) !== exclude) {
                applyMask(mask, prevState);
                applyMask(mask, currState);
                maskApplied = true;
                break;
            }
        }

        if (!maskApplied) {
            // Apply privacy patterns
            if (prevState && prevState.value) {
                prevState.value = applyPrivacyPatterns(prevState.value);
            }
            if (currState && currState.value) {
                currState.value = applyPrivacyPatterns(currState.value);
            }
        }

        return target;
    }

    /**
     * Runs through all the privacy rules and checks if any rule matches
     * the target of the message object.
     * @param  {Object} message The message object.
     * @return {Object}         The message, either with replaced values
     *                          if a target of the privacy configuration
     *                          matched or the original values if the
     *                          target didn't match.
     */
    function applyPrivacyToMessage(message) {
        // Sanity check
        if (!message || !message.target) {
            return message;
        }

        privacyFilter(message.target);
        return message;
    }

    /**
     * Replaces actual value attribute with a masked value as per the specified masking rule.
     * For select list elements it also sets the selectedIndex property to -1
     * and removes the selected attribute from its option elements.
     * @param {Element} element DOM element
     * @param {Object} mask The masking rule
     */
    function maskElement(element, mask) {
        var i,
            len,
            maskedValue,
            option;

        // Sanity check
        if (!mask || !element) {
            return;
        }

        if (element.value) {
            maskedValue = maskStr(mask, element.value);
            element.setAttribute("value", maskedValue);
            element.value = maskedValue;
        }

        if (element.checked) {
            element.removeAttribute("checked");
        }

        // Special handling for select element
        if (utils.getTagName(element) === "select") {
            element.selectedIndex = -1;
            for (i = 0, len = element.options.length; i < len; i += 1) {
                option = element.options[i];
                option.removeAttribute("selected");
                option.selected = false;
            }
        } else if (utils.getTagName(element) === "textarea") {
            // Special handling for textarea element
            element.textContent = element.value;
        }
    }

    /**
     * This function accepts a list of privacy rules containing regex and xpath targets.
     * It tests each of these rules with all the input, textarea and select elements in
     * the scope of the root node. Elements that match the rule are privacy masked or
     * excluded from privacy masking as per the configuration.
     * @param {Array} regexAndXpathRules List containing privacy rules with regex and xpath targets.
     * @param {DOMNode} root Node subtree to which privacy is to be applied.
     * @param {Array} rootXpath The full xpath of the root node.
     * @param {DOMNode} doc The document object associated with the root node.
     * @param {Array} excludedElements List containing elements to be excluded from privacy masking.
     * @param {Object} excludeMask Object specifying the privacy mask to be applied to any remaining non-excluded elements.
     */
    function applyRegexAndXpathPrivacyRules(regexAndXpathRules, root, rootXpath, doc, excludedElements, excludeMask) {
        var i, j, k,
            len,
            element,
            elementInfo,
            elements = [],
            elementXpath,
            exclude,
            maskedValue,
            rule,
            target,
            qr;

        // Check if there are any privacy rules to be applied based on regex or xpath targets
        if (!regexAndXpathRules.length && !excludedElements.length && !excludeMask) {
            return [];
        }

        // Identify all eligible input, select and textarea elements from the DOM subtree
        qr = browserService.queryAll("input, select, textarea", root);
        if (!qr || !qr.length) {
            return [];
        }

        // Remove excluded elements (if any)
        for (i = 0, len = excludedElements.length; i < len; i += 1) {
            j = qr.indexOf(excludedElements[i]);
            if (j !== -1) {
                qr.splice(j, 1);
            }
        }

        // Only calculate element xpaths if there are regex or xpath rules
        if (regexAndXpathRules.length) {
            // Calculate the id & idType of each element
            for (i = 0, len = qr.length, elements = []; i < len; i += 1) {
                if (qr[i].value) {
                    elementInfo = browserBaseService.ElementData.prototype.examineID(qr[i]);

                    // Xpath needs additional processing
                    if (elementInfo.idType === -2) {
                        // Element xpath needs to be prefixed with the rootXpath
                        elementXpath = new browserBaseService.Xpath(qr[i]);
                        elementXpath.applyPrefix(rootXpath);
                        elementInfo.id = elementXpath.xpath;
                    }

                    elements.push({
                        id: elementInfo.id,
                        idType: elementInfo.idType,
                        element: qr[i]
                    });
                }
            }
        }

        // Test each element against the regex and xpath rules
        for (i = 0, len = regexAndXpathRules.length; i < len; i += 1) {
            rule = privacy[regexAndXpathRules[i].ruleIndex];
            exclude = utils.getValue(rule, "exclude", false);
            target = rule.targets[regexAndXpathRules[i].targetIndex];
            if (typeof target.id === "string" && target.idType === -2) {
                // Normal Xpath id
                for (j = 0; j < elements.length; j += 1) {
                    if (elements[j].idType === target.idType && elements[j].id === target.id) {
                        if (!exclude) {
                            // Apply the mask
                            element = elements[j].element;
                            maskElement(element, rule);
                        } else {
                            k = qr.indexOf(element);
                            qr.splice(k, 1);
                        }
                    }
                }
            } else {
                // Regex
                for (j = 0; j < elements.length; j += 1) {
                    target.cRegex.lastIndex = 0;
                    if (elements[j].idType === target.idType && target.cRegex.test(elements[j].id)) {
                        element = elements[j].element;
                        if (!exclude) {
                            // Apply the mask
                            maskElement(element, rule);
                        } else {
                            k = qr.indexOf(element);
                            qr.splice(k, 1);
                        }
                    }
                }
            }
        }

        if (excludeMask) {
            // Apply privacy mask to any remaining non-excluded elements
            for (i = 0, len = qr.length; i < len; i += 1) {
                maskElement(qr[i], excludeMask);
            }
        }
    }

    /**
     * Applies the privacy configuration to all the matching elements
     * of the specified DOM object.
     * @param  {DOMNode} root The DOM node to which the privacy rules need to be applied.
     * @param  {Xpath} rootXpath The root node's Xpath object.
     * @return {DOMNode} The document object to which the privacy rules have been applied.
     */
    function applyPrivacyToNode(root, rootXpath, doc) {
        var i, j, k,
            element,
            exclude,
            excludedElements = [],
            excludeMask,
            len,
            mask,
            maskedValue,
            qr,
            qrLen,
            regexAndXpathRules = [],
            target,
            targets,
            targetsLen;

        // Sanity check
        if (!root || !doc) {
            return null;
        }

        // Go through each privacy rule
        for (i = 0, len = privacy.length; i < len; i += 1) {
            mask = privacy[i];
            exclude = utils.getValue(mask, "exclude", false);
            if (exclude) {
                excludeMask = mask;
            }
            targets = mask.targets;
            // Go through each target
            for (j = 0, targetsLen = targets.length; j < targetsLen; j += 1) {
                target = targets[j];
                if (typeof target === "string") {
                    // CSS selector
                    qr = browserService.queryAll(target, root);
                    if (!exclude) {
                        for (k = 0, qrLen = qr.length; k < qrLen; k += 1) {
                            element = qr[k];
                            maskElement(element, mask);
                        }
                    } else {
                        excludedElements = excludedElements.concat(qr);
                    }
                } else {
                    if (typeof target.id === "string") {
                        switch (target.idType) {
                        case -1:
                        case -3:
                            element = browserBaseService.getNodeFromID(target.id, target.idType, root);
                            if (!exclude) {
                                maskElement(element, mask);
                            } else {
                                excludedElements.push(element);
                            }
                            break;
                        case -2:
                            // Handle the case where the target.id is XPath
                            regexAndXpathRules.push({
                                ruleIndex: i,
                                targetIndex: j,
                                exclude: exclude
                            });
                            break;
                        default:
                            break;
                        }
                    } else {
                        // Handle the case where the target.id is a regex.
                        regexAndXpathRules.push({
                            ruleIndex: i,
                            targetIndex: j,
                            exclude: exclude
                        });
                    }
                }
            }
        }

        applyRegexAndXpathPrivacyRules(regexAndXpathRules, root, rootXpath, doc, excludedElements, excludeMask);

        return root;
    }

    /**
     * Returns true if the target matches a privacy rule.
     * @param {Object} target The target object.
     * @return {Boolean} True if the target matched with a privacy rule, false otherwise.
     */
    function isPrivacyMatched(target) {
        var i,
            len,
            mask,
            retVal = false;

        if (!target) {
            return retVal;
        }

        for (i = 0, len = privacy.length; i < len; i += 1) {
            mask = privacy[i];
            if (matchesTarget(mask.targets, target)) {
                retVal = true;
                break;
            }
        }
        return retVal;
    }

    /**
     * Gets called when the configserver fires configupdated event.
     */
    function updateConfig() {
        var i, j,
            len,
            rule,
            rulesLen,
            target,
            targets,
            targetsLen;

        configService = core.getService("config");
        config = configService.getServiceConfig("message") || {};
        privacy = config.privacy || [];
        privacyPatterns = config.privacyPatterns || [];

        // Fix idType to integers and setup regex targets (if any)
        for (i = 0, rulesLen = privacy.length; i < rulesLen; i += 1) {
            rule = privacy[i];
            targets = rule.targets;
            for (j = 0, targetsLen = targets.length; j < targetsLen; j += 1) {
                target = targets[j];
                if (typeof target === "object") {
                    if (typeof target.idType === "string") {
                        // Force idType conversion to a Number
                        target.idType = +target.idType;
                    }
                    if (typeof target.id === "object") {
                        // Regex target
                        target.cRegex = new RegExp(target.id.regex, target.id.flags);
                    }
                }
            }
        }

        // Validate privacy patterns and cache the regex.
        for (len = privacyPatterns.length, i = len - 1; i >= 0; i -= 1) {
            rule = privacyPatterns[i];
            if (typeof rule.pattern === "object") {
                rule.cRegex = new RegExp(rule.pattern.regex, rule.pattern.flags);
            } else {
                privacyPatterns.splice(i, 1);
            }
        }
    }

    function initMessageService() {
        if (configService.subscribe) {
            configService.subscribe("configupdated", updateConfig);
        }

        updateConfig();

        isInitialized = true;
    }

    function destroy() {
        configService.unsubscribe("configupdated", updateConfig);

        isInitialized = false;
    }


    /**
     * @scope messageService
     */
    return {

        init: function () {
            if (!isInitialized) {
                initMessageService();
            } else {
            }
        },

        destroy: function () {
            destroy();
        },

        applyPrivacyToNode: applyPrivacyToNode,

        applyPrivacyToMessage: applyPrivacyToMessage,

        applyPrivacyToTarget: privacyFilter,

        applyPrivacyPatterns: applyPrivacyPatterns,

        isPrivacyMatched: isPrivacyMatched,

        /**
         * Accepts a simple queue event  and wraps it into a complete message that the server can understand.
         * @param  {Object} event The simple event information
         * @return {Object}       A complete message that is ready for transmission to the server.
         */
        createMessage: function (event) {
            if (typeof event.type === "undefined") {
                throw new TypeError("Invalid queueEvent given!");
            }
            return applyPrivacyToMessage(new Message(event));
        },

        /**
         * Mock function to create a JSON structure around messages before sending to server.
         * @param  {Array} messages An array of messages
         * @return {Object}          Returns a JavaScript object which can be serialized to JSON
         *      and send to the server.
         *  @todo rewrite functionality
         */
        wrapMessages: function (messages) {
            var messagePackage = {
                messageVersion: "10.0.0.0",
                serialNumber: (count += 1),
                sessions: [{
                    id: core.getPageId(),
                    startTime: sessionStart.getTime(),
                    timezoneOffset: sessionStart.getTimezoneOffset(),
                    messages: messages,
                    clientEnvironment: {
                        webEnvironment: {
                            libVersion: "5.6.0.1818",
                            domain: windowHostname,
                            page: windowHref,
                            referrer: document.referrer,
                            screen: {
                                devicePixelRatio: devicePixelRatio,
                                deviceWidth: deviceWidth,
                                deviceHeight: deviceHeight,
                                deviceToolbarHeight: deviceToolbarHeight,
                                width: startWidth,
                                height: startHeight,
                                orientation: deviceOrientation
                            }
                        }
                    }
                }]
            },
                webEnvScreen = messagePackage.sessions[0].clientEnvironment.webEnvironment.screen;

            webEnvScreen.orientationMode = utils.getOrientationMode(webEnvScreen.orientation);

            return messagePackage;
        }
    };

});

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The SerializerService provides the ability to serialize
 * data into one or more string formats.
 * @exports serializerService
 */

/*global TLT:true, window: true */
/*global console: false */

/**
 * @name serializerService
 * @namespace
 */
TLT.addService("serializer", function (core) {
    "use strict";

    /**
     * JSON serializer. If possible it uses JSON.stringify method, but
     * for older browsers it provides minimalistic implementaction of
     * custom serializer (limitations: does not detect circular
     * dependencies, does not serialize date objects and does not
     * validate names of object fields).
     * @private
     * @function
     * @name serializerService-serializeToJSON
     * @param {Any} obj - any value
     * @returns {string} serialized string
     */
    function serializeToJSON(obj) {
        var str,
            key,
            len = 0;
        if (typeof obj !== "object" || obj === null) {
            switch (typeof obj) {
            case "function":
            case "undefined":
                return "null";
            case "string":
                return '"' + obj.replace(/\"/g, '\\"') + '"';
            default:
                return String(obj);
            }
        } else if (Object.prototype.toString.call(obj) === "[object Array]") {
            str = "[";
            for (key = 0, len = obj.length; key < len; key += 1) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    str += serializeToJSON(obj[key]) + ",";
                }
            }
        } else {
            str = "{";
            for (key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    str = str.concat('"', key, '":', serializeToJSON(obj[key]), ",");
                    len += 1;
                }
            }
        }
        if (len > 0) {
            str = str.substring(0, str.length - 1);
        }
        str += String.fromCharCode(str.charCodeAt(0) + 2);
        return str;
    }


    /**
     * Serializer / Parser implementations
     * @type {Object}
     */
    var configService = core.getService("config"),
        serialize = {},
        parse = {},
        defaultSerializers = {
            json: (function () {
                if (typeof window.JSON !== "undefined") {
                    return {
                        serialize: window.JSON.stringify,
                        parse: window.JSON.parse
                    };
                }

                return {
                    serialize: serializeToJSON,
                    parse: function (data) {
                        // AppScan: To disable use of eval set the "defaultToBuiltin" property to false
                        // in the serializer service configuration. Refer to the documentation for details.
                        return eval("(" + data + ")");
                    }
                };
            }())
        },
        updateConfig = null,
        isInitialized = false;

    function addObjectIfExist(paths, rootObj, propertyName) {
        var i,
            len,
            obj;

        paths = paths || [];
        for (i = 0, len = paths.length; i < len; i += 1) {
            obj = paths[i];
            if (typeof obj === "string") {
                obj = core.utils.access(obj);
            }
            if (typeof obj === "function") {
                rootObj[propertyName] = obj;
                break;
            }
        }
    }
	function checkParserAndSerializer() {
		var isParserAndSerializerInvalid;
        if (typeof serialize.json !== "function" || typeof parse.json !== "function") {
			isParserAndSerializerInvalid = true;
        } else {
			if (typeof parse.json('{"foo": "bar"}') === "undefined") {
				isParserAndSerializerInvalid = true;
			} else {
				isParserAndSerializerInvalid = parse.json('{"foo": "bar"}').foo !== "bar";
			}
			if (typeof parse.json("[1, 2]") === "undefined") {
				isParserAndSerializerInvalid = true;
			} else {
				isParserAndSerializerInvalid = isParserAndSerializerInvalid || parse.json("[1, 2]")[0] !== 1;
				isParserAndSerializerInvalid = isParserAndSerializerInvalid || parse.json("[1,2]")[1] !== 2;
			}
			isParserAndSerializerInvalid = isParserAndSerializerInvalid || serialize.json({"foo": "bar"}) !== '{"foo":"bar"}';
			isParserAndSerializerInvalid = isParserAndSerializerInvalid || serialize.json([1, 2]) !== "[1,2]";
		}
		return isParserAndSerializerInvalid;
	}

    function initSerializerService(config) {
        var format;
        for (format in config) {
            if (config.hasOwnProperty(format)) {
                addObjectIfExist(config[format].stringifiers, serialize, format);
                addObjectIfExist(config[format].parsers, parse, format);
            }
        }

        // use default JSON parser/serializer if possible
        if (!(config.json && config.json.hasOwnProperty("defaultToBuiltin")) || config.json.defaultToBuiltin === true) {
            serialize.json = serialize.json || defaultSerializers.json.serialize;
            parse.json = parse.json || defaultSerializers.json.parse;
        }

        //sanity check
        if (typeof serialize.json !== "function" || typeof parse.json !== "function") {
            core.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.");
        }
		if (checkParserAndSerializer()) {
			core.fail("JSON stringification and parsing are not working as expected");
		}

        if (configService) {
            configService.subscribe("configupdated", updateConfig);
        }

        isInitialized = true;
    }


    function destroy() {
        serialize = {};
        parse = {};

        if (configService) {
            configService.unsubscribe("configupdated", updateConfig);
        }

        isInitialized = false;
    }

    updateConfig = function () {
        configService = core.getService("config");
        // TODO: reinit only if config changed. Verify initSerializerService is idempotent
        initSerializerService(configService.getServiceConfig("serializer"));
    };

    /**
     * @scope serializerService
     */
    return {
        init: function () {
            var ssConfig;

            if (!isInitialized) {
                ssConfig = configService ? configService.getServiceConfig("serializer") : {};
                initSerializerService(ssConfig);
            } else {
            }
        },

        destroy: function () {
            destroy();
        },

        /**
         * Parses a string into a JavaScript object.
         * @param  {String} data The string to parse.
         * @param  {String} [type="json"] The format of the data.
         * @return {Object}      An object representing the string data.
         */
        parse: function (data, type) {
            type = type || "json";
            return parse[type](data);
        },

        /**
         * Serializes object data into a string using the format specified.
         * @param  {Object} data The data to serialize.
         * @param  {String} [type="json"] The format to serialize the data into.
         * @return {String}      A string containing the serialization of the data.
         */
        serialize: function (data, type) {
            var serializedData;

            type = type || "json";

            serializedData = serialize[type](data);

            return serializedData;
        }
    };

});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The TLCookie module implements the functionality related to reading, setting and transmitting cookies and tokens.
 * @exports TLCookie
 */

/*global TLT:true */

TLT.addModule("TLCookie", function (context) {
    "use strict";

    var moduleConfig = {},
        sessionIDStorageTTL = 0,
        wcxCookieName = "WCXSID",
        tltCookieName = "TLTSID",
        visitorCookieName = "CoreID6",
        wcxCookieValue,
        tltCookieValue,
        visitorCookieValue = null,
        tlAppKey,
        utils = context.utils;

    /**
     * Return a random 32 digit string.
     * @function
     * @private
     * @return {String} A randomly generated 32 digit string.
     */
    function generateTLTSID() {
        var dataSet = "123456789",
            tltsid = utils.getRandomString(1, dataSet) + utils.getRandomString(31, dataSet + "0");

        return tltsid;
    }

    /**
     * Create a TLTSID cookie using a randomly generated 32 character length string.
     * This is a session cookie i.e. no expires or max-age.
     * @function
     * @private
     * @return {String} The session cookie value or null if the cookie could not be set.
     */
    function createTLTSIDCookie() {
        var cookieValue = generateTLTSID();

        // Set the session cookie
        utils.setCookie(tltCookieName, cookieValue);

        return utils.getCookieValue(tltCookieName);
    }

    /**
     * Get DA visitor cookie (CoreID6) and store it in visitorCookieValue.
     * @function
     * @private
     */
    function getVisitorCookie() {
        if (!window.cmRetrieveUserID) {
            return;
        }
        window.cmRetrieveUserID(function (id) {
            visitorCookieValue = id;
        });
    }

    /**
     * Parse and return the session id value from localStorage.
     * @function
     * @private
     * @param {String} sidKey The session id key.
     * @return {String}|undefined Returns the session id value if found, else returns undefined.
     */
    function getSIDFromStorage(sidKey) {
        var expires,
            items,
            itemVal,
            sidValue;

        // Sanity check
        if (!localStorage || !sidKey) {
            return;
        }

        itemVal = localStorage.getItem(sidKey);
        if (itemVal) {
            items = itemVal.split("|");
            expires = parseInt(items[0], 10);
            if (Date.now() > expires) {
                localStorage.removeItem(sidKey);
            } else {
                sidValue = items[1];
            }
        }

        return sidValue;
    }

    /**
     * Set the session id value in localStorage along with the expiration time.
     * @function
     * @private
     * @param {String} sidKey The session id key.
     * @param {String} sidValue The session id value.
     * @return {String}|undefined Returns the session id value if set, else returns undefined.
     */
    function setSIDInStorage(sidKey, sidValue) {
        var expires;

        // Sanity check
        if (!localStorage || !sidKey) {
            return;
        }

        sidValue = sidValue || generateTLTSID();
        expires = Date.now() + sessionIDStorageTTL;
        localStorage.setItem(sidKey, expires + "|" + sidValue);

        return getSIDFromStorage(sidKey);
    }

    /**
     * Process the module configuration and setup the corresponding cookies and tokens.
     * Setup the callback to add the respective headers when the library POSTs.
     * @function
     * @private
     * @param {object} config The module configuration.
     */
    function processConfig(config) {
        var reqHeaders = [],
            sessionIDUsesCookie = utils.getValue(config, "sessionIDUsesCookie", true),
            sessionIDUsesStorage = utils.getValue(config, "sessionIDUsesStorage", false);

        // Check if the tlAppKey is specified
        if (config.tlAppKey) {
            tlAppKey = config.tlAppKey;
            reqHeaders.push(
                {
                    name: "X-Tealeaf-SaaS-AppKey",
                    value: tlAppKey
                }
            );
        }

        if (config.visitorCookieName) {
            visitorCookieName = config.visitorCookieName;
        }

        /**
         * WCX session cookie processing
         */
        if (config.wcxCookieName) {
            wcxCookieName = config.wcxCookieName;
        }
        wcxCookieValue = utils.getCookieValue(wcxCookieName);
        if (wcxCookieValue) {
            reqHeaders.push(
                {
                    name: "X-WCXSID",
                    value: wcxCookieValue
                }
            );
        }

        /**
         * TLTSID processing
         */
        if (config.sessionizationCookieName) {
            tltCookieName = config.sessionizationCookieName;
        }

        // Storing the session value in Storage is preferred over cookie when both are enabled.
        // Hence, check localStorage for session id before checking cookie.
        if (sessionIDUsesStorage) {
            sessionIDStorageTTL = utils.getValue(config, "sessionIDStorageTTL", 600000);
            tltCookieValue = getSIDFromStorage(tltCookieName);
        }
        if (!tltCookieValue && sessionIDUsesCookie) {
            tltCookieValue = utils.getCookieValue(tltCookieName);
        }

        // A new session id needs to be created. Check for WCXSID before creating a new TLTSID.
        if (!tltCookieValue) {
            if (wcxCookieValue) {
                tltCookieValue = wcxCookieValue;
            } else {
                if (sessionIDUsesStorage) {
                    tltCookieValue = setSIDInStorage(tltCookieName);
                }
                if (!tltCookieValue && sessionIDUsesCookie) {
                    // Create the TLTSID session cookie
                    tltCookieValue = createTLTSIDCookie();
                }
            }
        }

        // Session id could not be created in either Storage or Cookie!
        if (!tltCookieValue) {
            tltCookieValue = "Check7UIC7Cookie7Configuration77";
        }
        reqHeaders.push(
            {
                name: "X-Tealeaf-SaaS-TLTSID",
                value: tltCookieValue
            }
        );

        if (reqHeaders.length) {
            // Register the callback function to pass the X-Tealeaf headers
            TLT.registerBridgeCallbacks([
                {
                    enabled: true,
                    cbType: "addRequestHeaders",
                    cbFunction: function () {
                        return reqHeaders;
                    }
                }
            ]);
        }
    }

    /**
     * Check if the cookie name is whitelisted
     * @function
     * @private
     * @param {String} cookieName The cookie name.
     * @returns {Boolean} true if name is whitelisted, false otherwise.
     */
    function isCookieWhitelisted(cookieName) {
        var i, len,
            result = false,
            rule,
            whitelist = moduleConfig.appCookieWhitelist;

        // Sanity check
        if (!whitelist || !whitelist.length) {
            return result;
        }

        for (i = 0, len = whitelist.length; i < len && !result; i += 1) {
            rule = whitelist[i];
            if (rule.regex) {
                // Create the RegExp object once
                if (!rule.cRegex) {
                    rule.cRegex = new RegExp(rule.regex, rule.flags);
                }
                // Reset and test
                rule.cRegex.lastIndex = 0;
                result = rule.cRegex.test(cookieName);
            } else {
                result = (rule === cookieName);
            }
        }

        return result;
    }

    /**
     * Read the document level cookies, filter them as per the configured whitelist,
     * and record them in a type 14 message.
     * @function
     * @private
     */
    function postAppCookies() {
        var i, j, len,
            appCookies = {},
            cookie,
            cookies = document.cookie,
            cookieList = [],
            cookieName = "",
            cookieValue = "";

        if (!cookies) {
            return;
        }

        cookieList = cookies.split("; ");
        for (i = 0, len = cookieList.length; i < len; i += 1) {
            cookie = cookieList[i];
            j = cookie.indexOf("=");
            // Handle edge case where cookie has no name i.e. j == -1
            if (j >= 0) {
                try {
                    cookieName = decodeURIComponent(cookie.substr(0, j));
                } catch (e1) {
                    cookieName = cookie.substr(0, j);
                }
            }
            cookieValue = cookie.substr(j + 1);
            // Check if this cookie is whitelisted
            if (isCookieWhitelisted(cookieName)) {
                try {
                    appCookies[cookieName] = decodeURIComponent(cookieValue);
                } catch (e2) {
                    appCookies[cookieName] = cookieValue;
                }
            }
        }

        // Add in the visitor cookie if not already present
        if (visitorCookieValue && !appCookies[visitorCookieName]) {
            appCookies[visitorCookieName] = visitorCookieValue;
        }

        context.post({
            type: 14,
            cookies: appCookies
        });
    }

    // Return the module's interface object. This contains callback functions which
    // will be invoked by the UIC core.
    return {
        init: function () {
            moduleConfig = context.getConfig() || {};
            processConfig(moduleConfig);

            getVisitorCookie();
        },

        destroy: function () {
            if (moduleConfig.sessionIDUsesStorage) {
                // Reset the expiry of the storage session id
                setSIDInStorage(tltCookieName, tltCookieValue);
            }
        },

        onevent: function (webEvent) {
            switch (webEvent.type) {
            case "screenview_load":
                if (utils.getValue(moduleConfig, "appCookieWhitelist.length", 0)) {
                    getVisitorCookie();
                    postAppCookies();
                }
                break;
            default:
                break;
            }
        }
    };

});
/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The Overstat module implements the logic for collecting
 * data for cxOverstat. The current uses are for the Hover Event and
 * Hover To Click event.
 * @exports overstat
 */

/*global TLT:true */

// Sanity check
if (TLT && typeof TLT.addModule === "function") {
    /**
     * @name overstat
     * @namespace
     */
    TLT.addModule("overstat", function (context) {
        "use strict";

        var utils = context.utils,
            eventMap = {},
            configDefaults = {
                updateInterval : 250,
                hoverThresholdMin : 1000,
                hoverThresholdMax : 2 * 60 * 1000,
                gridCellMaxX : 10,
                gridCellMaxY : 10,
                gridCellMinWidth : 20,
                gridCellMinHeight : 20
            },
            MAX_ITERATIONS = 50;

        function getConfigValue(key) {
            var overstatConfig = context.getConfig() || {},
                value = overstatConfig[key];
            return typeof value === "number" ? value : configDefaults[key];
        }

        function postUIEvent(hoverEvent, options) {
            var target = utils.getValue(hoverEvent, "webEvent.target", {}),
                tagName = utils.getValue(target, "element.tagName") || "",
                type = tagName.toLowerCase() === "input" ? utils.getValue(target, "element.type") : "",
                tlType = utils.getTlType(target),
                uiEvent = {
                    type: 9,
                    event: {
                        hoverDuration: hoverEvent.hoverDuration,
                        hoverToClick: utils.getValue(options, "hoverToClick")
                    },
                    target: {
                        id: target.id || "",
                        idType: target.idType || "",
                        name: target.name || "",
                        tlType: tlType,
                        type: tagName,
                        subType: type,
                        position: {
                            width: utils.getValue(target, "element.offsetWidth", 0),
                            height: utils.getValue(target, "element.offsetHeight", 0),
                            relXY: hoverEvent.relXY
                        }
                    }
                };

            // if id is null or empty, what are we firing on? it can't be replayed anyway
            if ((typeof uiEvent.target.id) === undefined || uiEvent.target.id === "") {
                return;
            }

            context.post(uiEvent);
        }

        function getNativeNode(node) {
            if (node && !node.nodeType && node.element) { node = node.element; }
            return node;
        }

        function stopNode(node) {
            node = getNativeNode(node);
            return !node || node === document.body || node === document.html || node === document;
        }

        function getParent(node) {
            node = getNativeNode(node);
            if (!node) { return null; }
            return node.parentNode;
        }

        function getOffsetParent(node) {
            node = getNativeNode(node);
            if (!node) { return null; }
            return node.offsetParent || node.parentElement || getParent(node);
        }

        /*
         * for when mouseout is called - if you have moved over a child element, mouseout is fired for the parent element
         * @private
         * @function
         * @name overstat-isChildOf
         * @return {boolean} Returns whether node is a child of root
         */
        function isChildOf(root, node) {
            var idx = 0;
            if (!node || node === root) { return false; }
            node = getParent(node);

            while (!stopNode(node) && idx++ < MAX_ITERATIONS) {
                if (node === root) { return true; }
                node = getParent(node);
            }

            if (idx >= MAX_ITERATIONS) {
                utils.clog("Overstat isChildOf() hit iterations limit");
            }

            return false;
        }

        function getNativeEvent(e) {
            if (e.nativeEvent) { e = e.nativeEvent; }
            return e;
        }

        function getNativeTarget(e) {
            return getNativeEvent(e).target;
        }

        function getNodeType(node) {
            node = getNativeNode(node);
            if (!node) { return -1; }
            return node.nodeType || -1;
        }

        function getNodeTagName(node) {
            node = getNativeNode(node);
            if (!node) { return ""; }
            return node.tagName ? node.tagName.toUpperCase() : "";
        }

        function stopEventPropagation(e) {
            if (!e) { return; }
            if (e.nativeEvent) { e = e.nativeEvent; }

            if (e.stopPropagation) {
                e.stopPropagation();
            } else if (e.cancelBubble) {
                e.cancelBubble();
            }
        }

        function ignoreNode(node) {
            var tagName = getNodeTagName(node);
            return getNodeType(node) !== 1 || tagName === "TR" || tagName === "TBODY" || tagName === "THEAD";
        }

        /**
         * Generates an XPath for a given node, stub method until the real one is available
         * @function
         */
        function getXPathFromNode(node) {
            if (!node) { return ""; }
            if (node.xPath) { return node.xPath; }
            node = getNativeNode(node);
            return context.getXPathFromNode(node);
        }

        /*
         * replacement for lang.hitch(), setTimeout loses all scope
         * @private
         * @function
         * @name overstat-callHoverEventMethod
         * @return {object} Returns the value of the called method
         */
        function callHoverEventMethod(key, methodName) {
            var hEvent = eventMap[key];
            if (hEvent && hEvent[methodName]) { return hEvent[methodName](); }
        }

        function HoverEvent(dm, gx, gy, webEvent) {
            this.xPath = dm !== null ? getXPathFromNode(dm) : "";
            this.domNode = dm;
            this.hoverDuration = 0;
            this.hoverUpdateTime = 0;
            this.gridX = Math.max(gx, 0);
            this.gridY = Math.max(gy, 0);
            this.parentKey = "";
            this.updateTimer = -1;
            this.disposed = false;
            this.childKeys = {};
            this.webEvent = webEvent;

            /*
             * @public
             * @function
             * @name overstat-HoverEvent.getKey
             * @return {string} Returns the string unique key of this event
             */
            this.getKey = function () {
                return this.xPath + ":" + this.gridX + "," + this.gridY;
            };

            /*
             * update hoverTime, set timer to update again
             * @public
             * @function
             * @name overstat-HoverEvent.update
             */
            this.update = function () {
                var curTime = new Date().getTime(),
                    key = this.getKey();

                if (this.hoverUpdateTime !== 0) {
                    this.hoverDuration += curTime - this.hoverUpdateTime;
                }

                this.hoverUpdateTime = curTime;

                clearTimeout(this.updateTimer);
                this.updateTimer = setTimeout(function () { callHoverEventMethod(key, "update"); }, getConfigValue("updateInterval"));
            };

            /*
             * leaveClone is true if you want to get rid of an event but leave a new one in it's place.
             * usually this will happen due to a click, where the hover ends, but you want a new hover to
             * begin in the same place
             * @public
             * @function
             * @name overstat-HoverEvent.dispose
             */
            this.dispose = function (leaveClone) {
                clearTimeout(this.updateTimer);
                delete eventMap[this.getKey()];
                this.disposed = true;

                if (leaveClone) {
                    var cloneEvt = this.clone();
                    eventMap[cloneEvt.getKey()] = cloneEvt;
                    cloneEvt.update();
                }
            };

            /*
             * clear update timer, add to hover events queue if threshold is reached, dispose in any case
             * @public
             * @function
             * @name overstat-HoverEvent.process
             * @return {boolean} Returns whether or not the event met the threshold requirements and was added to the queue
             */
            this.process = function (wasClicked) {
                clearTimeout(this.updateTimer);
                if (this.disposed) { return false; }

                var addedToQueue = false,
                    hEvent = this,
                    key = null,
                    idx = 0;
                if (this.hoverDuration >= getConfigValue("hoverThresholdMin")) {
                    this.hoverDuration = Math.min(this.hoverDuration, getConfigValue("hoverThresholdMax"));
                    // add to ui event queue here
                    addedToQueue = true;
                    postUIEvent(this, { hoverToClick : !!wasClicked });

                    while (typeof hEvent !== "undefined" && idx++ < MAX_ITERATIONS) {
                        hEvent.dispose(wasClicked);
                        hEvent = eventMap[hEvent.parentKey];
                    }

                    if (idx >= MAX_ITERATIONS) {
                        utils.clog("Overstat process() hit iterations limit");
                    }
                } else {
                    this.dispose(wasClicked);
                }

                return addedToQueue;
            };

            /*
             * return a fresh copy of this event
             * @public
             * @function
             * @name overstat-HoverEvent.clone
             * @return {HoverTest} Returns a copy of this event with a reset hover time
             */
            this.clone = function () {
                var cloneEvent = new HoverEvent(this.domNode, this.gridX, this.gridY);
                cloneEvent.parentKey = this.parentKey;

                return cloneEvent;
            };
        }

        function createHoverEvent(node, x, y, webEvt) {
            return new HoverEvent(node, x, y, webEvt);
        }

        /*
         * get element offset according to the top left of the document
         * @private
         * @function
         * @name overstat-calculateNodeOffset
         * @return {object} Returns an object with x and y offsets
         */
        function calculateNodeOffset(node) {
            if (node && node.position) { return { x: node.position.x, y: node.position.y }; }
            node = getNativeNode(node);
            var boundingRect = node && node.getBoundingClientRect ? node.getBoundingClientRect() : null,
                offsetX =  boundingRect ? boundingRect.left : (node ? node.offsetLeft : 0),
                offsetY = boundingRect ? boundingRect.top : (node ? node.offsetHeight : 0),
                lastOffsetX = offsetX,
                lastOffsetY = offsetY,
                offsetDiffX = 0,
                offsetDiffY = 0,
                curNode = getOffsetParent(node),
                idx = 0;

            while (curNode && idx++ < MAX_ITERATIONS) {
                if (stopNode(curNode)) { break; }

                offsetDiffX = curNode.offsetLeft - (curNode.scrollLeft || 0);
                offsetDiffY = curNode.offsetTop - (curNode.scrollTop || 0);

                if (offsetDiffX !== lastOffsetX || offsetDiffY !== lastOffsetY) {
                    offsetX += offsetDiffX;
                    offsetY += offsetDiffY;

                    lastOffsetX = offsetDiffX;
                    lastOffsetY = offsetDiffY;
                }

                curNode = getOffsetParent(curNode);
            }

            if (idx >= MAX_ITERATIONS) {
                utils.clog("Overstat calculateNodeOffset() hit iterations limit");
            }

            if (isNaN(offsetX)) { offsetX = 0; }
            if (isNaN(offsetY)) { offsetY = 0; }
            return { x: offsetX, y: offsetY };
        }

        /*
         * calculate position relative to top left corner of element
         * @private
         * @function
         * @name overstat-calculateRelativeCursorPos
         * @return {object} Returns an object with x and y offsets
         */
        function calculateRelativeCursorPos(node, cursorX, cursorY) {
            node = getNativeNode(node);
            var nodeOffset = calculateNodeOffset(node),
                offsetX = cursorX - nodeOffset.x,
                offsetY = cursorY - nodeOffset.y;

            if (!isFinite(offsetX)) { offsetX = 0; }
            if (!isFinite(offsetY)) { offsetY = 0; }
            return { x: offsetX, y: offsetY };
        }

        /*
         * format relXY coords into two decimal 0<x<1 values
         * @private
         * @function
         * @name overstat-formatRelXY
         * @return {object} Formats the x and y location
         */
        function formatRelXY(x, y) {
            x = Math.floor(Math.min(Math.max(x, 0), 1) * 100) / 100;
            y = Math.floor(Math.min(Math.max(y, 0), 1) * 100) / 100;

            return x +  "," + y;
        }

        /*
         * determine grid cell dimensions based on the constants
         * @private
         * @function
         * @name overstat-calculateGridCell
         * @return {object} Returns the x and y grid location
         */
        function calculateGridCell(node, offsetX, offsetY) {
            node = getNativeNode(node);
            var boundingRect = node.getBoundingClientRect ? node.getBoundingClientRect() : null,
                oWidth =  boundingRect ? boundingRect.width : node.offsetWidth,
                oHeight = boundingRect ? boundingRect.height : node.offsetHeight,
                cellWidth = oWidth && oWidth > 0 ? Math.max(oWidth / getConfigValue("gridCellMaxX"), getConfigValue("gridCellMinWidth")) : getConfigValue("gridCellMinWidth"),
                cellHeight = oHeight && oHeight > 0 ? Math.max(oHeight / getConfigValue("gridCellMaxY"), getConfigValue("gridCellMinHeight")) : getConfigValue("gridCellMinHeight"),

                cellX = Math.floor(offsetX / cellWidth),
                cellY = Math.floor(offsetY / cellHeight),
                xVal = oWidth > 0 ? offsetX / oWidth : 0,
                yVal = oHeight > 0 ? offsetY / oHeight : 0,
                relXYVal = "";

            if (!isFinite(cellX)) { cellX = 0; }
            if (!isFinite(cellY)) { cellY = 0; }
            relXYVal = formatRelXY(xVal, yVal);

            return { x: cellX, y: cellY, relXY: relXYVal };
        }

        /*
         * called when a hover event fires - processes all unrelated hover events from the queue.
         * events are related if they are the calling event, or any parent events
         * @private
         * @function
         * @name overstat-cleanupHoverEvents
         */
        function cleanupHoverEvents(curEvent) {
            var hEvent = curEvent,
                curKey = curEvent.getKey(),
                allowedKeyMap = {},
                key = null,
                childKey = null,
                addedToQueue = false,
                idx = 0;

            allowedKeyMap[curKey] = true;

            while (typeof hEvent !== "undefined" && idx++ < MAX_ITERATIONS) {
                allowedKeyMap[hEvent.parentKey] = true;
                if (hEvent.parentKey === "" || hEvent.parentKey === hEvent.getKey()) {
                    break;
                }

                if (idx >= MAX_ITERATIONS) {
                    utils.clog("Overstat cleanupHoverEvents() hit iterations limit");
                }

                hEvent = eventMap[hEvent.parentKey];
            }

            for (key in eventMap) {
                if (eventMap.hasOwnProperty(key) && !allowedKeyMap[key]) {
                    hEvent = eventMap[key];
                    if (hEvent) {
                        if (!addedToQueue) {
                            addedToQueue = hEvent.process();
                        } else {
                            hEvent.dispose();
                        }
                    }
                }
            }
        }

        /*
         * similar to cleanupHoverEvents, this will process all events within a domNode (fired on mouseout)
         * @private
         * @function
         * @name overstat-processEventsByDomNode
         */
        function processEventsByDomNode(eventNode, keyToIgnore) {
            var hEvent = null,
                key = null,
                addedToQueue = false;

            for (key in eventMap) {
                if (eventMap.hasOwnProperty(key)) {
                    hEvent = eventMap[key];
                    if (hEvent && hEvent.domNode === eventNode && hEvent.getKey() !== keyToIgnore) {
                        if (!addedToQueue) {
                            addedToQueue = hEvent.process();
                        } else {
                            hEvent.dispose();
                        }
                    }
                }
            }
        }

        /*
         * 1) determine element and grid position for event
         * 2) find existing matching event if possible
         * 3) update event hover time
         * 4) bubble to parent node, for linking purposes
         * within the UI SDK framework, this should be called for each node in the heirarchy (box model)
         * going top down. so the parent (if the calculation is correct) should already exist, and have
         * it's own parent link, which helps during cleanupHoverEvents
         * @private
         * @function
         * @name overstat-hoverHandler
         * @return {HoverEvent} Returns the relevant HoverEvent object (either found or created)
         */
        function hoverHandler(e, node, isParent) {
            if (!node) { node = e.target; }
            if (stopNode(node)) { return null; }
            if (utils.isiOS || utils.isAndroid) { return null; }

            var rPos, gPos, hEvent, key, parentKey, parentEvent, offsetParent;

            if (!ignoreNode(node)) {
                rPos = calculateRelativeCursorPos(node, e.position.x, e.position.y);
                gPos = calculateGridCell(node, rPos.x, rPos.y);
                hEvent = new HoverEvent(node, gPos.x, gPos.y, e);
                hEvent.relXY = gPos.relXY;
                key = hEvent.getKey();

                if (eventMap[key]) {
                    hEvent = eventMap[key];
                } else {
                    eventMap[key] = hEvent;
                }

                hEvent.update();

                // link parent, but in the case that it refers to itself (sometimes with frames) make sure the parentKey
                // is not the same as the current key
                if (!isParent) {
                    offsetParent = getOffsetParent(node);
                    if (offsetParent) {
                        parentEvent = hoverHandler(e, offsetParent, true);
                        if (parentEvent !== null) {
                            parentKey = parentEvent.getKey();
                            key = hEvent.getKey();
                            if (key !== parentKey) {
                                hEvent.parentKey = parentKey;
                            }
                        }
                    }

                    cleanupHoverEvents(hEvent);
                }
            } else {
                hEvent = hoverHandler(e, getOffsetParent(node), isParent);
            }

            return hEvent;
        }

        /*
         * process all events related to the event target, as hovering stops when leaving the element
         * @private
         * @function
         * @name overstat-leaveHandler
         */
        function leaveHandler(e) {
            e = getNativeEvent(e);
            if (isChildOf(e.target, e.relatedTarget)) {
                return;
            }

            processEventsByDomNode(e.target);
        }

        /*
         * on click, resolve current hover events, and reset hover count
         * @private
         * @function
         * @name overstat-clickHandler
         */
        function clickHandler(e) {
            var hEvent = null,
                key = null,
                addedToQueue = false;

            for (key in eventMap) {
                if (eventMap.hasOwnProperty(key)) {
                    hEvent = eventMap[key];
                    if (hEvent) {
                        if (!addedToQueue) {
                            addedToQueue = hEvent.process(true);
                        } else {
                            hEvent.dispose();
                        }
                    }
                }
            }
        }

        function submitHandler(e) {
            context.performFormCompletion(true);
        }

        /*
         * switches on window event type and routes it appropriately
         * @private
         * @function
         * @name overstat-handleEvent
         */
        function handleEvent(e) {
            var targetId = utils.getValue(e, "target.id");

            // Sanity check
            if (!targetId) {
                return;
            }

            switch (e.type) {
            case "mousemove":
                hoverHandler(e);
                break;
            case "mouseout":
                leaveHandler(e);
                break;
            case "click":
                clickHandler(e);
                break;
            case "submit":
                submitHandler(e);
                break;
            default:
                break;
            }
        }

        // Module interface.
        /**
         * @scope performance
         */
        return {


            /**
             * Initialize the overstat module.
             */
            init: function () {
            },

            /**
             * Terminate the overstat module.
             */
            destroy: function () {
                var key, i;
                for (key in eventMap) {
                    if (eventMap.hasOwnProperty(key)) {
                        eventMap[key].dispose();
                        delete eventMap[key];
                    }
                }
            },

            /**
             * Handle events subscribed by the overstat module.
             * @param  {Object} event The normalized data extracted from a browser event object.
             */
            onevent: function (event) {
                // Sanity check
                if (typeof event !== "object" || !event.type) {
                    return;
                }

                handleEvent(event);
            },

            /**
             * Handle system messages subscribed by the overstat module.
             * @param  {Object} msg An object containing the message information.
             */
            onmessage: function (msg) {

            },

            createHoverEvent: createHoverEvent,
            cleanupHoverEvents: cleanupHoverEvents,
            eventMap: eventMap
        };
    });  // End of TLT.addModule
} else {


}

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The Performance module implements the logic for monitoring and
 * reporting performance data such as the W3C Navigation Timing.
 * @exports performance
 */

/*global TLT:true */

// Sanity check
if (TLT && typeof TLT.addModule === "function") {
    /**
     * @name performance
     * @namespace
     */
    TLT.addModule("performance", function (context) {
        "use strict";

        var moduleState = {
                loadReceived: false,
                unloadReceived: false,
                perfEventSent: false
            },
            calculatedRenderTime = 0,
            config,
            utils = context.utils;


        /**
         * Returns true if the property is filtered out. The property is considered
         * to be filtered out if it exists in the filter object with a value of true.
         * @private
         * @function
         * @name performance-isFiltered
         * @param {string} prop The property name to be tested.
         * @param {object} [filter] An object that contains property names and their
         * associated boolean value. A property marked true will be filtered out.
         * @return {boolean} true if the property is filtered out, false otherwise.
         */
        function isFiltered(prop, filter) {
            // Sanity check
            if (typeof prop !== "string") {
                return false;
            }

            // If there is no filter object then the property is not filtered out.
            if (!filter || typeof filter !== "object") {
                return false;
            }

            return (filter[prop] === true);
        }

        /**
         * Returns the normalized timing object. Normalized values are offsets measured
         * from the "navigationStart" timestamp which serves as the epoch. Also applies
         * the filter.
         * @private
         * @function
         * @name performance-parseTiming
         * @param {object} timing An object implementing the W3C PerformanceTiming
         * interface.
         * @param {object} [filter] An object that contains property names and their
         * associated boolean value. A property marked true will be filtered out.
         * @return {object} The normalized timing properties.
         */
        function parseTiming(timing, filter) {
            var epoch = 0,
                normalizedTiming = {},
                prop = "",
                value = 0;

            // Sanity checks
            if (!timing || typeof timing !== "object" || !timing.navigationStart) {
                return {};
            }

            epoch = timing.navigationStart;
            for (prop in timing) {
                // IE_COMPAT, FF_COMPAT: timing.hasOwnProperty(prop) returns false for
                // performance timing members in IE 9 and Firefox 14.0.1.

                // IE_COMPAT: timing.hasOwnProperty does not exist in IE8 and lower for
                // host objects. Legacy IE does not support hasOwnProperty on hosted objects.
                if (Object.prototype.hasOwnProperty.call(timing, prop) || typeof timing[prop] === "number") {
                    if (!isFiltered(prop, filter)) {
                        value = timing[prop];
                        if (typeof value === "number" && value && prop !== "navigationStart") {
                            normalizedTiming[prop] = value - epoch;
                        } else {
                            normalizedTiming[prop] = value;
                        }
                    }
                }
            }

            return normalizedTiming;
        }

        /**
         * Calculates the render time from the given timing object.
         * @private
         * @function
         * @name performance-getRenderTime
         * @param {object} timing An object implementing the W3C PerformanceTiming
         * interface.
         * @return {integer} The calculated render time or 0.
         */
        function getRenderTime(timing) {
            var renderTime = 0,
                startTime,
                endTime;

            if (timing) {
                // Use the lesser of domLoading or responseEnd as the start of render, see data in CS-8915
                startTime = (timing.responseEnd > 0 && timing.responseEnd < timing.domLoading) ? timing.responseEnd : timing.domLoading;
                endTime = timing.loadEventStart;
                if (utils.isNumeric(startTime) && utils.isNumeric(endTime) && endTime > startTime) {
                    renderTime = endTime - startTime;
                }
            }

            return renderTime;
        }

        /**
         * Calculates the render time by measuring the difference between when the
         * library core was loaded and when the page load event occurs.
         * @private
         * @function
         * @name performance-processLoadEvent
         * @param  {Object} event The normalized data extracted from a browser event object.
         */
        function processLoadEvent(event) {
            var startTime = context.getStartTime();
            if (event.timestamp > startTime && !calculatedRenderTime) {
                // Calculate the render time
                calculatedRenderTime = event.timestamp - startTime;
            }
        }

        /**
         * Posts the performance event.
         * @private
         * @function
         * @name performance-postPerformanceEvent
         * @param {object} window The DOM window
         */
        function postPerformanceEvent(window) {
            var navType = "UNKNOWN",
                queueEvent = {
                    type: 7,
                    performance: {}
                },
                navigation,
                performance,
                timing;

            // Sanity checks
            if (!window || moduleState.perfEventSent) {
                return;
            }

            performance = window.performance || {};
            timing = performance.timing;
            navigation = performance.navigation;

            if (timing) {
                queueEvent.performance.timing = parseTiming(timing, config.filter);
                queueEvent.performance.timing.renderTime = getRenderTime(timing);
            } else if (config.calculateRenderTime) {
                queueEvent.performance.timing = {
                    renderTime: calculatedRenderTime,
                    calculated: true
                };
            } else {
                // Nothing to report.
                return;
            }

            // Do not include renderTime if it is over the threshold.
            if (config.renderTimeThreshold && queueEvent.performance.timing.renderTime > config.renderTimeThreshold) {
                queueEvent.performance.timing.invalidRenderTime = queueEvent.performance.timing.renderTime;
                delete queueEvent.performance.timing.renderTime;
            }

            if (navigation) {
                switch (navigation.type) {
                case 0:
                    navType = "NAVIGATE";
                    break;
                case 1:
                    navType = "RELOAD";
                    break;
                case 2:
                    navType = "BACKFORWARD";
                    break;
                default:
                    navType = "UNKNOWN";
                    break;
                }
                queueEvent.performance.navigation = {
                    type: navType,
                    redirectCount: navigation.redirectCount
                };
            }

            // Invoke the context API to post this event
            context.post(queueEvent);
            moduleState.perfEventSent = true;
        }

        // Module interface.
        /**
         * @scope performance
         */
        return {


            /**
             * Initialize the performance module.
             */
            init: function () {
                config = context.getConfig();
            },

            /**
             * Terminate the performance module.
             */
            destroy: function () {
                config = null;
            },

            /**
             * Handle events subscribed by the performance module.
             * @param  {Object} event The normalized data extracted from a browser event object.
             */
            onevent: function (event) {
                // Sanity check
                if (typeof event !== "object" || !event.type) {
                    return;
                }

                switch (event.type) {
                case "load":
                    moduleState.loadReceived = true;
                    processLoadEvent(event);
                    setTimeout(function () {
                        if (context.isInitialized()) {
                            postPerformanceEvent(window);
                        }
                    }, utils.getValue(config, "delay", 2000));
                    break;
                case "unload":
                    moduleState.unloadReceived = true;
                    // Force the performance data to be posted (if it hasn't been done already.)
                    if (!moduleState.perfEventSent) {
                        postPerformanceEvent(window);
                    }
                    break;
                default:
                    break;
                }
            },

            /**
             * Handle system messages subscribed by the performance module.
             * @param  {Object} msg An object containing the message information.
             */
            onmessage: function (msg) {

            }
        };
    });  // End of TLT.addModule
} else {


}

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @fileOverview The Replay module implements the logic for monitoring and
 * reporting user interaction data used for replay and usability.
 * @exports replay
 */

/*global TLT:true */

// Sanity check
TLT.addModule("replay", function (context) {
    "use strict";

    var utils = context.utils,
        currOrientation = 0,
        savedTouch = {
            scale: 0,
            timestamp: 0
        },
        pastEvents = {},
        lastEventId = null,
        tmpQueue = [],
        eventCounter = 0,
        firstDOMCaptureEventFlag = true,
        curClientState = null,
        pastClientState = null,
        onerrorHandled = false,
        errorCount = 0,
        visitOrder = "",
        lastVisit = "",
        pageLoadTime = (new Date()).getTime(),
        pageDwellTime = 0,
        prevWebEvent = null,
        viewEventStart = null,
        viewTimeStart = null,
        scrollViewStart = null,
        scrollViewEnd = null,
        nextScrollViewStart = null,
        viewPortXStart = 0,
        viewPortYStart = 0,
        lastFocusEvent = { inFocus: false },
        lastClickEvent = null,
        replayConfig = context.getConfig() || {},
        viewPortWidthHeightLimit = utils.getValue(replayConfig, "viewPortWidthHeightLimit", 10000),
        deviceScale = 1,
        previousDeviceScale = 1,
        extendGetItem,
        gridValues = {
            cellMaxX : 10,
            cellMaxY : 10,
            cellMinWidth: 20,
            cellMinHeight : 20
        };

    /**
     * Resets the visitedCount of all controls recorded in pastEvents.
     * @private
     */
    function resetVisitedCounts() {
        var control;
        for (control in pastEvents) {
            if (pastEvents.hasOwnProperty(control)) {
                pastEvents[control].visitedCount = 0;
            }
        }
    }

    /**
     * Returns true if the click event changes the target state or is otherwise
     * relevant for the target.
     * @private
     * @param {WebEvent.target} target Webevent target
     * @return {boolean} true if the click event is relevant for the target, false otherwise.
     */
    function isTargetClickable(target) {
        var clickable = false,
            clickableInputTypes = "|button|image|submit|reset|",
            subType = null;

        if (typeof target !== "object" || !target.type) {
            return clickable;
        }

        switch (target.type.toLowerCase()) {
        case "input":
            // Clicks are relevant for button type inputs only.
            subType = "|" + (target.subType || "") + "|";
            if (clickableInputTypes.indexOf(subType.toLowerCase()) === -1) {
                clickable = false;
            } else {
                clickable = true;
            }
            break;
        case "select":
        case "textarea":
            clickable = false;
            break;
        default:
            // By default, clicks are relevant for all targets.
            clickable = true;
            break;
        }

        return clickable;
    }

    function parentElements(node) {
        var parents = [];
        node = node.parentNode;
        while (node) {
            parents.push(node);
            node = node.parentNode;
        }
        return parents;
    }

    function getParentLink(parents) {
        return utils.some(parents, function (node) {
            var tagName = utils.getTagName(node);

            // Either links or buttons could have content
            if (tagName === "a" || tagName === "button") {
                return node;
            }
            return null;
        });
    }

    /**
     * Get the normalized tlEvent from the underlying DOM event and target.
     * @private
     * @param {object} webEvent The normalized webEvent with event and target (control.)
     * @return {string} The normalized value for the tlEvent as per the JSON Logging Data Format.
     */
    function getTlEvent(webEvent) {
        var tlEvent = webEvent.type,
            target = webEvent.target;

        if (typeof tlEvent === "string") {
            tlEvent = tlEvent.toLowerCase();
        } else {
            tlEvent = "unknown";
        }

        if (tlEvent === "blur") {
            tlEvent = "focusout";
        }

        if (tlEvent === "change") {
            if (target.type === "INPUT") {
                switch (target.subType) {
                case "text":
                case "date":
                case "time":
                    // tlEvent is textChange, dateChange or timeChange respectively.
                    tlEvent = target.subType + "Change";
                    break;
                default:
                    // For all other input fields the tlEvent is valueChange.
                    tlEvent = "valueChange";
                    break;
                }
            } else if (target.type === "TEXTAREA") {
                tlEvent = "textChange";
            } else {
                tlEvent = "valueChange";
            }
        }

        return tlEvent;
    }

    /**
     * Invoke the core API to take the DOM capture. If a delay is specified, then
     * schedule a DOM capture.
     * @private
     * @param {DOMElement} root Root element from which the DOM capture snapshot should be taken.
     * @param {object} [config] Configuration options for the capture.
     * @param {Number} [delay] Milliseconds after which to take the DOM snapshot.
     * @return {string} Returns the unique DOM Capture id.
     */
    function scheduleDOMCapture(root, config, delay) {
        var dcid = null;
        // Sanity check
        if (!root) {
            return dcid;
        }
        config = config || {};

        // Set the eventOn property (true for the 1st DOM Capture)
        config.eventOn = firstDOMCaptureEventFlag;
        firstDOMCaptureEventFlag = false;

        if (delay) {
            dcid = "dcid-" + utils.getSerialNumber() + "." + (new Date()).getTime() + "s";
            window.setTimeout(function () {
                config.dcid = dcid;
                context.performDOMCapture(root, config);
            }, delay);
        } else {
            delete config.dcid;
            dcid = context.performDOMCapture(root, config);
        }
        return dcid;
    }

    /**
     * Check the DOM capture rules to see if DOM capture should be triggered for this combination
     * of event, target, screenview as applicable.
     * @private
     * @param {String} eventType Name of the event e.g. click, change, load, unload
     * @param {DOMElement} target The target element of the event. Some events (such as load/unload) may not
     * have a target in which case it would be null.
     * @param {String} [screenviewName] The screenview name for load and unload events.
     * @returns {String} Returns the unique DOM Capture id or null.
     */
    function addDOMCapture(eventType, target, screenviewName) {
        var i, j,
            capture = false,
            captureConfig = {},
            dcEnabled = false,
            dcTrigger,
            dcTriggerList,
            dcid = null,
            delay = 0,
            len,
            screenview,
            screenviews,
            screenviewsLen;

        // Sanity check
        if (!eventType || (!target && !screenviewName)) {
            return dcid;
        }
        if (!target && !(eventType === "load" || eventType === "unload")) {
            return dcid;
        }

        replayConfig = context.getConfig() || {};
        dcEnabled = utils.getValue(replayConfig, "domCapture.enabled", false);
        if (!dcEnabled || utils.isLegacyIE) {
            // DOM Capture is not supported for IE8 and below
            return dcid;
        }

        dcTriggerList = utils.getValue(replayConfig, "domCapture.triggers") || [];
        for (i = 0, len = dcTriggerList.length; !capture && i < len; i += 1) {
            dcTrigger = dcTriggerList[i];
            if (dcTrigger.event === eventType) {
                if (eventType === "load" || eventType === "unload") {
                    if (dcTrigger.screenviews) {
                        screenviews = dcTrigger.screenviews;
                        // Screenview match
                        for (j = 0, screenviewsLen = screenviews.length; !capture && j < screenviewsLen; j += 1) {
                            screenview = screenviews[j];
                            switch (typeof screenview) {
                            case "object":
                                // Regex match
                                if (!screenview.cRegex) {
                                    // Cache the regex object for future
                                    screenview.cRegex = new RegExp(screenview.regex, screenview.flags);
                                }
                                // Reset and test
                                screenview.cRegex.lastIndex = 0;
                                capture = screenview.cRegex.test(screenviewName);
                                break;
                            case "string":
                                capture = (screenview === screenviewName);
                                break;
                            default:
                                break;
                            }
                        }
                    } else {
                        capture = true;
                    }
                } else {
                    if (dcTrigger.targets) {
                        capture = (-1 !== utils.matchTarget(dcTrigger.targets, target));
                    } else {
                        capture = true;
                    }
                }
            }
        }

        if (capture) {
            // Immediate or delayed?
            delay = dcTrigger.delay || (dcTrigger.event === "load" ? 7 : 0);
            // Force full DOM snapshot?
            captureConfig.forceFullDOM = !!dcTrigger.fullDOMCapture;

            dcid = scheduleDOMCapture(window.document, captureConfig, delay);
        }

        return dcid;
    }

    /**
     * Used to create a control object from a webEvent.
     * @private
     * @function
     * @name replay-createQueueEvent
     * @param {object} options An object with the following properties:
     *                 webEvent A webEvent that will created into a control.
     *                 id Id of the object.
     *                 prevState Previous state of the object.
     *                 currState Current state of the object.
     *                 visitedCount Visited count of the object.
     *                 dwell Dwell time on the object.
     *                 focusInOffset When you first focused on the object.
     * @return {object} Control object.
     */
    function createQueueEvent(options) {
        var control,
            dcid,
            target        = utils.getValue(options, "webEvent.target", {}),
            targetType    = target.type,
            targetSubtype = target.subType || "",
            tlType        = utils.getTlType(target),
            parents       = parentElements(utils.getValue(target, "element")),
            parentLinkNode = null,
            relXY         = utils.getValue(target, "position.relXY"),
            eventSubtype  = utils.getValue(options, "webEvent.subType", null);

        control = {
            timestamp: utils.getValue(options, "webEvent.timestamp", 0),
            type: 4,
            target: {
                id: target.id || "",
                idType: target.idType,
                name: target.name,
                tlType: tlType,
                type: targetType,
                position: {
                    width: utils.getValue(target, "size.width"),
                    height: utils.getValue(target, "size.height")
                },
                currState: options.currState || null
            },
            event: {
                tlEvent: getTlEvent(utils.getValue(options, "webEvent")),
                type: utils.getValue(options, "webEvent.type", "UNKNOWN")
            }
        };

        if (targetSubtype) {
            control.target.subType = targetSubtype;
        }

        if (relXY) {
            control.target.position.relXY = relXY;
        }

        if (typeof options.dwell === "number" && options.dwell > 0) {
            control.target.dwell = options.dwell;
        }

        if (typeof options.visitedCount === "number") {
            control.target.visitedCount = options.visitedCount;
        }

        if (typeof options.prevState !== "undefined") {
            control.prevState = options.prevState;
        }

        if (eventSubtype) {
            control.event.subType = eventSubtype;
        }

        // Add usability to config settings
        parentLinkNode = getParentLink(parents);
        control.target.isParentLink = !!parentLinkNode;
        if (parentLinkNode) {
            // Add the parent's href, value and innerText if the actual target doesn't
            // support these properties
            if (parentLinkNode.href) {
                control.target.currState = control.target.currState || {};
                control.target.currState.href = control.target.currState.href || parentLinkNode.href;
            }
            if (parentLinkNode.value) {
                control.target.currState = control.target.currState || {};
                control.target.currState.value = control.target.currState.value || parentLinkNode.value;
            }
            if (parentLinkNode.innerText || parentLinkNode.textContent) {
                control.target.currState = control.target.currState || {};
                control.target.currState.innerText = utils.trim(control.target.currState.innerText || parentLinkNode.innerText || parentLinkNode.textContent);
            }
        }

        if (utils.isUndefOrNull(control.target.currState)) {
            delete control.target.currState;
        }
        if (utils.isUndefOrNull(control.target.name)) {
            delete control.target.name;
        }

        return control;
    }

    function postUIEvent(queueEvent) {
        context.post(queueEvent);
    }


    /**
     * Posts all events from given array to the message service. The input
     * array is cleared on exit from the function.
     * Function additionally consolidates events fired on the same DOM element
     * TODO: Explain the consolidation process. Needs to be refactored!
     * @private
     * @param {Array} queue An array of QueueEvents
     * @return void
     */
    function postEventQueue(queue) {
        var i = 0,
            j,
            len = queue.length,
            e1,
            e2,
            tmp,
            ignoredEvents = {
                mouseout: true,
                mouseover: true
            },
            results = [];

        for (i = 0; i < len; i += 1) {
            e1 = queue[i];
            if (!e1) {
                continue;
            }
            if (ignoredEvents[e1.event.type]) {
                results.push(e1);
            } else {
                for (j = i + 1; j < len && queue[j]; j += 1) {
                    if (!ignoredEvents[queue[j].event.type]) {
                        break;
                    }
                }
                if (j < len) {
                    e2 = queue[j];
                    if (e2 && e1.target.id === e2.target.id && e1.event.type !== e2.event.type) {
                        if (e1.event.type === "click") {
                            tmp = e1;
                            e1 = e2;
                            e2 = tmp;
                        }
                        if (e2.event.type === "click") {
                            e1.target.position = e2.target.position;
                            i += 1;
                        } else if (e2.event.type === "blur") {
                            e1.target.dwell = e2.target.dwell;
                            e1.target.visitedCount = e2.target.visitedCount;
                            e1.focusInOffset = e2.focusInOffset;
                            e1.target.position = e2.target.position;
                            i += 1;
                        }
                        queue[j] = null;
                        queue[i] = e1;
                    }
                }
                results.push(queue[i]);
            }
        }

        for (e1 = results.shift(); e1; e1 = results.shift()) {
            context.post(e1);
        }
        queue.splice(0, queue.length);
    }


    if (typeof window.onerror !== "function") {
        window.onerror = function (msg, url, line) {
            var errorMessage = null;

            if (typeof msg !== "string") {
                return;
            }
            line = line || -1;
            errorMessage = {
                type: 6,
                exception: {
                    description: msg,
                    url: url,
                    line: line
                }
            };

            errorCount += 1;
            context.post(errorMessage);
        };
        onerrorHandled = true;
    }

    /**
     * Create and add value that will be posted to queue.
     * @private
     * @param {string} id ID of an elment
     * @param {WebEvent} webEvent Normalized browser event
     * @return void
     */
    function addToTmpQueue(webEvent, id) {
        tmpQueue.push(createQueueEvent({
            webEvent: webEvent,
            id: id,
            currState: utils.getValue(webEvent, "target.state")
        }));
    }

    /**
     * Handles blur events. It is invoked when browser blur events fires or from the
     * handleFocus method (only when browser 'blur' event didn't take place).
     * In the first case it's called with current event details, in the second one -
     * with lastFocusEvent. Method posts the tmpQueue of events. If during the same
     * focus time change event was fired the focus data will be combined together with
     * the last change event from the tmpQueue.
     * @private
     * @param {string} id ID of an elment
     * @param {WebEvent} webEvent Normalized browser event
     * @return void
     */
    function handleBlur(id, webEvent) {
        var convertToBlur = false,
            convertToChange = false,
            dcid,
            lastQueueEvent,
            targetState,
            i = 0;

        // Sanity check
        if (!id) {
            return;
        }

        if (tmpQueue.length === 0) {
            // Empty tmpQueue means there are no pending messages to handle
            return;
        }

        webEvent = webEvent || (pastEvents[id] ? pastEvents[id].webEvent : {});
        if (webEvent.type === "blur" || webEvent.type === "change") {
            targetState = utils.getValue(webEvent, "target.state", null);
        } else if (webEvent.target) {
            targetState = utils.getTargetState(webEvent.target.element) || {};
        } else {
            targetState = {};
        }

        lastQueueEvent = tmpQueue[tmpQueue.length - 1];

        if (pastEvents[id]) {
            lastQueueEvent.focusInOffset = pastEvents[id].focusInOffset;
            lastQueueEvent.target.visitedCount = pastEvents[id].visitedCount;

            if (pastEvents[id].focus) {
                pastEvents[id].dwell =  Number(new Date()) - pastEvents[id].focus;
                lastQueueEvent.target.dwell = pastEvents[id].dwell;
            }

            if (!pastEvents[id].processedChange && pastEvents[id].prevState) {
                // Should this blur be converted to a change event?
                if (!utils.isEqual(pastEvents[id].prevState, targetState)) {
                    convertToChange = true;
                    webEvent.type = "change";
                    lastQueueEvent.event.type = webEvent.type;
                    lastQueueEvent.event.tlEvent = getTlEvent(webEvent);
                    lastQueueEvent.target.prevState = pastEvents[id].prevState;
                    lastQueueEvent.target.currState = targetState;
                }
            }
        } else {
            // Blur without any record of a prior event on this control.
            pastEvents[id] = {};
        }

        // if the click (without generating change event) fires on an
        // input element for which it's not relevant - report event as a blur and update the currState
        if (lastQueueEvent.event.type === "click") {
            if (!isTargetClickable(lastQueueEvent.target)) {
                lastQueueEvent.target.currState = targetState;
                convertToBlur = true;
            }
        } else if (lastQueueEvent.event.type === "focus") {
            convertToBlur = true;
        }

        if (convertToBlur) {
            lastQueueEvent.event.type = "blur";
            lastQueueEvent.event.tlEvent = "focusout";
        }

        if (!lastQueueEvent.dcid) {
            // Check if DOM Capture needs to be triggered for this message.
            dcid = addDOMCapture(lastQueueEvent.event.type, webEvent.target);
            if (dcid) {
                lastQueueEvent.dcid = dcid;
            }
        }

        // Reset the inFocus state of the lastFocusEvent
        lastFocusEvent.inFocus = false;

        postEventQueue(tmpQueue);
    }

    /**
     * Handles the focus events. It is fired either when the real focus event take place
     * or right after the click event on an element (only when browser focus event was not fired)
     * @private
     * @param {string} id ID of an elment
     * @param {WebEvent} webEvent Normalized browser event
     * @return void
     */
    function handleFocus(id, webEvent) {
        if (lastFocusEvent.inFocus && lastFocusEvent.target.id === id) {
            // Target is already in focus
            return;
        }

        if (lastFocusEvent.inFocus) {
            // Synthetic blur on the previously in-focus element
            handleBlur(lastFocusEvent.target.id, lastFocusEvent);
        }

        lastFocusEvent = webEvent;
        lastFocusEvent.inFocus = true;
        if (!pastEvents[id]) {
            pastEvents[id] = {};
        }

        pastEvents[id].focus = lastFocusEvent.dwellStart = Number(new Date());
        pastEvents[id].focusInOffset = viewTimeStart ? lastFocusEvent.dwellStart - Number(viewTimeStart) : -1;
        if (webEvent.type === "focus" || webEvent.type === "click") {
            pastEvents[id].prevState = utils.getValue(webEvent, "target.state");
        }
        pastEvents[id].visitedCount = pastEvents[id].visitedCount + 1 || 1;
        pastEvents[id].webEvent = webEvent;
        pastEvents[id].processedChange = false;
        pastEvents[id].processedClick = false;

        addToTmpQueue(webEvent, id);
    }

    /**
     * Checks the tmpQueue for any prior/pending interaction that needs to be posted.
     * @private
     * @param {string} id ID of the current element being interacted with.
     * @param {WebEvent} webEvent Normalized browser event of the current interaction.
     * @return {Boolean} True if there was a pending interaction that has been posted, false otherwise.
     */
    function checkQueue(id, webEvent) {
        var pendingInteractionPosted = false,
            prevID,
            tmpQueueLength = tmpQueue.length,
            tmpQueueEvent = tmpQueueLength ? tmpQueue[tmpQueueLength - 1] : null;

        // Return immediately if there is nothing pending in the tmpQueue
        if (!tmpQueueEvent) {
            return pendingInteractionPosted;
        }

        prevID = tmpQueueEvent.target.id;

        // Check if there is a focus, click or change on a different element than one in the tmpQueue
        // Select lists are an exception because the option element can be selected
        if (prevID !== id && tmpQueueEvent.target.tltype !== "selectList") {
            // Is there is a focus, click or change event on another element
            if (webEvent.type === "focus" || webEvent.type === "click" || webEvent.type === "change") {
                // Synthetic blur on the previous element
                handleBlur(prevID);
                pendingInteractionPosted = true;
            }
        }
        return pendingInteractionPosted;
    }

    /**
     * Handles change events. Its called when the browser 'change' event fires.
     * @private
     * @param {string} id ID of an elment
     * @param {WebEvent} webEvent Normalized browser event
     * @return void
     */
    function handleChange(id, webEvent) {
        var tmpQueueEvent;

        // Ensure focus is processed for the target element
        handleFocus(id, webEvent);

        tmpQueueEvent = tmpQueue[tmpQueue.length - 1];
        tmpQueueEvent.event.type = "change";
        tmpQueueEvent.event.tlEvent = getTlEvent(webEvent);
        tmpQueueEvent.target.currState = webEvent.target.state;
        if (pastEvents[id].prevState) {
            tmpQueueEvent.target.prevState = pastEvents[id].prevState;
        }

        pastEvents[id].webEvent = webEvent;
        pastEvents[id].processedChange = true;
    }

    /**
     * Sets the relative X & Y values to a webEvent.
     * Same as the overstat module - break node into a grid based on cell size limitations, and the size of the element itself
     * @private
     * @param {WebEvent} webEvent Normalized browser event
     * @return String value of relative X & Y
     */
    function getRelativeXY(webEvent) {
        var cellWidth,
            cellHeight,
            cellX,
            cellY,
            node = utils.getValue(webEvent, "target.element", {}),
            nodeWidth = utils.getValue(webEvent, "target.size.width", node.offsetWidth),
            nodeHeight = utils.getValue(webEvent, "target.size.height", node.offsetHeight),
            offsetX = utils.getValue(webEvent, "target.position.x", 0),
            offsetY = utils.getValue(webEvent, "target.position.y", 0);

        cellWidth = nodeWidth ? Math.max(nodeWidth / gridValues.cellMaxX, gridValues.cellMinWidth) : gridValues.cellMinWidth;
        cellHeight = nodeHeight ? Math.max(nodeHeight / gridValues.cellMaxY, gridValues.cellMinHeight) : gridValues.cellMinHeight;
        cellX = Math.floor(offsetX / cellWidth);
        cellY = Math.floor(offsetY / cellHeight);

        if (!isFinite(cellX)) { cellX = 0; }
        if (!isFinite(cellY)) { cellY = 0; }

        return cellX + "," + cellY;
    }

    /**
     * Handles click events. Additionally it recognizes situations when browser didn't
     * fire the focus event and in such case it invokes 'handleFocus' method.
     * @private
     * @param {string} id ID of an elment
     * @param {WebEvent} webEvent Normalized browser event
     * @return void
     */
    function handleClick(id, webEvent) {
        var relXY,
            tmpQueueEvent;

        if (webEvent.target.type === "select" && lastClickEvent && lastClickEvent.target.id === id) {
            lastClickEvent = null;
            return;
        }

        // Ensure focus is registered for the element being clicked
        handleFocus(id, webEvent);

        // Get the relative XY of the click
        relXY = getRelativeXY(webEvent);
        webEvent.target.position.relXY = relXY;

        // Update the existing queue entry with relXY info. from the click event
        tmpQueueEvent = tmpQueue[tmpQueue.length - 1];
        tmpQueueEvent.event.type = "click";
        tmpQueueEvent.event.tlEvent = getTlEvent(webEvent);
        tmpQueueEvent.target.position.relXY = relXY;

        pastEvents[id].webEvent = webEvent;
        pastEvents[id].processedClick = true;

        // For clickable targets, process and post the click right away
        if (isTargetClickable(webEvent.target)) {
            handleBlur(id, webEvent);
        }

        lastClickEvent = webEvent;
    }

    /**
     * Handles the "orientationchange" event and posts the appropriate message
     * to the replay module's queue.
     * @private
     * @function
     * @name replay-handleOrientationChange
     * @param {object} webEvent A normalized event object per the WebEvent
     * interface definition.
     */
    function handleOrientationChange(webEvent) {
        var newOrientation = webEvent.orientation,
            orientationChangeEvent = {
                type: 4,
                event: {
                    type: "orientationchange"
                },
                target: {
                    prevState: {
                        orientation: currOrientation,
                        orientationMode: utils.getOrientationMode(currOrientation)
                    },
                    currState: {
                        orientation: newOrientation,
                        orientationMode: utils.getOrientationMode(newOrientation)
                    }
                }
            };

        postUIEvent(orientationChangeEvent);
        currOrientation = newOrientation;
    }

    /* TODO: Refactor this to use a well-defined touchState object */
    function isDuplicateTouch(touchState) {
        var result = false;

        if (!touchState) {
            return result;
        }

        result = (savedTouch.scale === touchState.scale &&
                Math.abs((new Date()).getTime() - savedTouch.timestamp) < 500);

        return result;
    }

    function saveTouchState(touchState) {
        savedTouch.scale = touchState.scale;
        savedTouch.rotation = touchState.rotation;
        savedTouch.timestamp = (new Date()).getTime();
    }

    /**
     * Takes the scale factor and returns the pinch mode as a text string.
     * Values less than 1 correspond to a pinch close gesture. Values greater
     * than 1 correspond to a pinch open gesture.
     * @private
     * @function
     * @name replay-getPinchType
     * @return {String} "CLOSE", "OPEN" or "NONE" for valid scale values.
     * "INVALID" in case of error.
     */
    function getPinchType() {
        var s,
            pinchType;

        s = deviceScale - previousDeviceScale;
        if (isNaN(s)) {
            pinchType = "INVALID";
        } else if (s < 0) {
            pinchType = "CLOSE";
        } else if (s > 0) {
            pinchType = "OPEN";
        } else {
            pinchType = "NONE";
        }

        return pinchType;
    }


    /**
     * Used to create the client state message from a webEvent.
     * @private
     * @function
     * @name replay-getClientStateMessage
     * @param {object} webEvent A webEvent that will be used to create the clientState.
     * @return {object} Client state message object.
     */
    function getClientStateMessage(webEvent) {
        var documentElement = document.documentElement,
            documentBody = document.body,
            screen = window.screen,
            screenWidth = screen.width,
            screenHeight = screen.height,
            deviceOrientation = utils.getValue(webEvent, "orientation", 0),
            // iOS Safari always reports the screen width of the portrait mode
            normalizedScreenWidth = !utils.isiOS ? screenWidth : Math.abs(deviceOrientation) === 90 ? screenHeight : screenWidth,
            msg = {
                type: 1,
                clientState: {
                    pageWidth: document.width || (!documentElement ? 0 : documentElement.offsetWidth),
                    pageHeight: Math.max((!document.height ? 0 : document.height), (!documentElement ? 0 : documentElement.offsetHeight), (!documentElement ? 0 : documentElement.scrollHeight)),
                    viewPortWidth: window.innerWidth || documentElement.clientWidth,
                    viewPortHeight: window.innerHeight || documentElement.clientHeight,
                    viewPortX: Math.round(window.pageXOffset || (!documentElement ? (!documentBody ? 0 : documentBody.scrollLeft) : documentElement.scrollLeft || 0)),
                    viewPortY: Math.round(window.pageYOffset || (!documentElement ? (!documentBody ? 0 : documentBody.scrollTop) : documentElement.scrollTop || 0)),
                    deviceOrientation: deviceOrientation,
                    event: utils.getValue(webEvent, "type")
                }
            },
            clientState = msg.clientState,
            scaleWidth;

        pastClientState = pastClientState || msg;

        // Workaround for browser/webviews that give incorrect values for innerWidth & innerHeight during unload
        if (clientState.event === "unload" &&
                clientState.viewPortHeight === clientState.pageHeight &&
                clientState.viewPortWidth === clientState.pageWidth) {
            if (pastClientState.clientState.viewPortHeight < clientState.viewPortHeight) {
                // Use viewport values from the previous clientState event.
                clientState.viewPortHeight = pastClientState.clientState.viewPortHeight;
                clientState.viewPortWidth = pastClientState.clientState.viewPortWidth;
            }
        }

        if ((clientState.viewPortY + clientState.viewPortHeight) > clientState.pageHeight) {
            // Scroll beyond the bottom of the page results in viewPortY overshooting the rendered pageHeight. Cap it at the pageHeight.
            clientState.viewPortY = clientState.pageHeight - clientState.viewPortHeight;
        }

        // Normalize the viewPortY values to account for any scrolls beyond the page boundaries
        if (clientState.viewPortY < 0) {
            // Scroll beyond the top of the page results in negative viewPortY. Cap it at 0.
            clientState.viewPortY = 0;
        }

        // Calculate the scale based on the ratio between the screen width and viewport width
        scaleWidth = !clientState.viewPortWidth ? 1 : (normalizedScreenWidth / clientState.viewPortWidth);
        clientState.deviceScale = scaleWidth.toFixed(3);

        // Set the viewTime for this client state
        clientState.viewTime = 0;
        if (scrollViewStart && scrollViewEnd) {
            clientState.viewTime = scrollViewEnd.getTime() - scrollViewStart.getTime();
        }

        if (webEvent.type === "scroll") {
            clientState.viewPortXStart = pastClientState.clientState.viewPortX;
            clientState.viewPortYStart = pastClientState.clientState.viewPortY;
        }

        return msg;
    }

    /**
     * Post the current client state and also record it as pastClientState.
     * Reset the scrollViewStart/End values.
     * @private
     * @function
     * @name replay-sendClientState
     */
    function sendClientState() {
        var cs;

        if (curClientState) {
            cs = curClientState.clientState;
            // Sanity checks: These are needed since we have observed some unexplained instances
            // of negative values in the viewPortHeight.
            if (cs.viewPortHeight > 0 && cs.viewPortHeight < viewPortWidthHeightLimit &&
                    cs.viewPortWidth > 0 && cs.viewPortWidth < viewPortWidthHeightLimit) {
                postUIEvent(curClientState);
            }
            pastClientState = curClientState;
            curClientState = null;
            scrollViewStart = nextScrollViewStart || scrollViewStart;
            scrollViewEnd = null;
        }
        sendClientState.timeoutId = 0;
    }

    /**
     * Used to create client state from a webEvent.
     * @private
     * @function
     * @name replay-handleClientState
     * @param {object} webEvent A webEvent that will created into a clientState and saved for previous and current client state.
     * @return {object} Client state object.
     */
    function handleClientState(webEvent) {
        var attentionMsg = null;

        // Opera Mini has a faulty implementation and produces incorrect data. Do not send incorrect data.
        if (utils.isOperaMini) {
            return;
        }

        curClientState = getClientStateMessage(webEvent);

        // TODO: Change these if-else to a switch statement
        if (webEvent.type === "scroll" || webEvent.type === "resize") {
            // Set the interval timeout so we can collect related scroll / resize events in one batch
            if (sendClientState.timeoutId) {
                window.clearTimeout(sendClientState.timeoutId);
            }
            sendClientState.timeoutId = window.setTimeout(sendClientState, utils.getValue(replayConfig, "scrollTimeout", 2000));
        } else if (webEvent.type === "touchstart" || webEvent.type === "load") {
            if (curClientState) {
                // set the initial device scale which is used to determine what type of pinch happened
                previousDeviceScale = parseFloat(curClientState.clientState.deviceScale);
            }
        } else if (webEvent.type === "touchend") {
            if (curClientState) {
                // used to determine what type of pinch happened
                deviceScale = parseFloat(curClientState.clientState.deviceScale);
                // Send client state on touchend
                sendClientState();
            }
        }

        if (webEvent.type === "load" || webEvent.type === "unload") {
            // The "Attention" event is deprecated
            if (webEvent.type === "unload" && pageLoadTime) {
                // Save the "attention" event which is essentially a dup of the unload with viewTime starting from page load.
                attentionMsg = utils.clone(curClientState);
                attentionMsg.clientState.event = "attention";
                attentionMsg.clientState.viewTime = (new Date()).getTime() - pageLoadTime;
            }

            sendClientState();

            if (attentionMsg) {
                // send the attentionMsg
                curClientState = attentionMsg;
                sendClientState();
            }
        }

        return curClientState;
    }

    /**
     * Handles the "touchstart" event, which is only used to get the deviceScale before a pinch
     * @private
     * @function
     * @name replay-handleTouchStart
     * @param {object} webEvent A normalized event object per the WebEvent
     * interface definition.
     */
    function handleTouchStart(webEvent) {
        var fingerCount = utils.getValue(webEvent, "nativeEvent.touches.length", 0);

        if (fingerCount === 2) {
            handleClientState(webEvent);
        }
    }

    /**
     * Handles the "touchend" event and posts the appropriate message to the
     * replay module's queue.
     * @private
     * @function
     * @name replay-handleTouchEnd
     * @param {object} webEvent A normalized event object per the WebEvent
     * interface definition.
     */
    function handleTouchEnd(webEvent) {
        var fingerCount,
            prevTouchState = {},
            // Rotation angle for android devices does not work for all devices/browsers
            rotation = utils.getValue(webEvent, "nativeEvent.rotation", 0) || utils.getValue(webEvent, "nativeEvent.touches[0].webkitRotationAngle", 0),
            scale = utils.getValue(webEvent, "nativeEvent.scale", 1),
            touchState = null,
            touchEndEvent = {
                type: 4,
                event: {
                    type: "touchend"
                },
                target: {
                    id: utils.getValue(webEvent, "target.id"),
                    idType: utils.getValue(webEvent, "target.idType")
                }
            };

        // count the number of fingers placed on the screen
        fingerCount = utils.getValue(webEvent, "nativeEvent.changedTouches.length", 0) + utils.getValue(webEvent, "nativeEvent.touches.length", 0);
        if (fingerCount !== 2) {
            return;
        }

        // 1st handle the client state change. This will update the device scale information.
        handleClientState(webEvent);

        // Only post when there are two fingers reported by the touchend event object
        // create the current touchstate
        touchState = {
            rotation: rotation ? rotation.toFixed(2) : 0,
            scale: deviceScale ? deviceScale.toFixed(2) : 1
        };
        touchState.pinch = getPinchType();

        // create the prev touch state
        prevTouchState.scale = previousDeviceScale ? previousDeviceScale.toFixed(2) : 1;

        // Set the curr and prev states
        touchEndEvent.target.prevState = prevTouchState;
        touchEndEvent.target.currState = touchState;

        postUIEvent(touchEndEvent);
    }

    /**
     * Compares two WebEvent's to determine if they are duplicates. Examines
     * the event type, target id and the timestamp to make this determination.
     * XXX - Push this into the browser service or core?!?
     * @private
     * @function
     * @name replay-isDuplicateEvent
     * @param {object} curr A WebEvent object
     * @param {object} prev A WebEvent object
     * @return {boolean} Returns true if the WebEvents are duplicates.
     */
    function isDuplicateEvent(curr, prev) {
        var propsToCompare = ["type", "name", "target.id"],
            prop = null,
            i,
            len,
            duplicate = true,
            DUPLICATE_EVENT_THRESHOLD_TIME = 10,
            timeDiff = 0,
            currTimeStamp = 0,
            prevTimeStamp = 0;

        // Sanity check
        if (!curr || !prev || typeof curr !== "object" || typeof prev !== "object") {
            return false;
        }

        // Compare WebEvent properties
        for (i = 0, len = propsToCompare.length; duplicate && i < len; i += 1) {
            prop = propsToCompare[i];
            if (utils.getValue(curr, prop) !== utils.getValue(prev, prop)) {
                duplicate = false;
                break;
            }
        }

        if (duplicate) {
            currTimeStamp = utils.getValue(curr, "timestamp");
            prevTimeStamp = utils.getValue(prev, "timestamp");
            // Don't compare if neither objects have a timestamp
            if (!(isNaN(currTimeStamp) && isNaN(prevTimeStamp))) {
                // Check if the event timestamps are within the predefined threshold
                timeDiff = Math.abs(utils.getValue(curr, "timestamp") - utils.getValue(prev, "timestamp"));
                if (isNaN(timeDiff) || timeDiff > DUPLICATE_EVENT_THRESHOLD_TIME) {
                    duplicate = false;
                }
            }
        }

        return duplicate;
    }



    /**
     * Default handler for event types that are not being processed by the module.
     * @private
     * @function
     * @param {object} webEvent A WebEvent object
     * @name replay-defaultEventHandler
     */
    function defaultEventHandler(webEvent) {
        var msg = {
                type: 4,
                event: {
                    type: webEvent.type
                },
                target: {
                    id: utils.getValue(webEvent, "target.id"),
                    idType: utils.getValue(webEvent, "target.idType"),
                    currState: utils.getValue(webEvent, "target.state")
                }
            },
            dcid;

        // Add DOM Capture message if configured
        dcid = addDOMCapture(webEvent.type, webEvent.target);
        if (dcid) {
            msg.dcid = dcid;
        }

        postUIEvent(msg);
    }

    /**
     * Add geolocation message if the event is a load event and the
     * geolocation feature is enabled.
     * @private
     * @function
     * @param {String} eventName The event name.
     * @name replay-addGeolocationMsg
     */
    function addGeolocationMsg(eventName) {
        var geolocationConfig = utils.getValue(replayConfig, "geolocation"),
            triggers;

        if (!geolocationConfig || !geolocationConfig.enabled) {
            return;
        }

        triggers = geolocationConfig.triggers || [];
        if (!triggers.length) {
            return;
        }

        if (triggers[0].event === eventName) {
            TLT.logGeolocation();
        }
    }

    return {
        init: function () {
            tmpQueue = [];
        },
        destroy: function () {
            handleBlur(lastEventId);
            tmpQueue = [];

            // Clear out any pending clientState timeout
            if (sendClientState.timeoutId) {
                window.clearTimeout(sendClientState.timeoutId);
                sendClientState.timeoutId = 0;
            }

            if (onerrorHandled) {
                // Detach the onerror handler
                window.onerror = null;
                onerrorHandled = false;
            }
        },
        onevent: function (webEvent) {
            var id = null,
                returnObj = null,
                orientation,
                screenOrientation;

            // Sanity checks
            if (typeof webEvent !== "object" || !webEvent.type) {
                return;
            }

            if (isDuplicateEvent(webEvent, prevWebEvent)) {
                prevWebEvent = webEvent;
                return;
            }

            prevWebEvent = webEvent;


            id = utils.getValue(webEvent, "target.id");

            if (!pastEvents[id]) {
                pastEvents[id] = {};
            }

            checkQueue(id, webEvent);

            switch (webEvent.type) {
            case "hashchange":
                // These are handled in core-detectScreenviewChange()
                break;
            case "focus":
                returnObj = handleFocus(id, webEvent);
                break;
            case "blur":
                returnObj = handleBlur(id, webEvent);
                break;
            case "click":
                // Normal click processing
                returnObj = handleClick(id, webEvent);
                break;
            case "change":
                returnObj = handleChange(id, webEvent);
                break;
            case "orientationchange":
                returnObj = handleOrientationChange(webEvent);
                break;
            case "touchstart":
                handleTouchStart(webEvent);
                break;
            case "touchend":
                returnObj = handleTouchEnd(webEvent);
                break;
            case "loadWithFrames":
                TLT.logScreenviewLoad("rootWithFrames");
                break;
            case "load":
                // initialize the orientation
                currOrientation = webEvent.orientation;

                // initialize the start time for the scrolled view
                scrollViewStart = new Date();

                /*
                * Special handling for Android based on screen width/height since
                * certain Android devices do not adhere to the standards.
                * e.g. Some tablets report portrait orientation = 90 and landscape = 0
                */
                if (typeof window.orientation !== "number" || utils.isAndroid) {
                    // Use screen.width/height to determine orientation if window.orientation does not match
                    screenOrientation = (window.screen.width > window.screen.height ? 90 : 0);
                    orientation = window.orientation;
                    if (Math.abs(orientation) !== screenOrientation && !(orientation === 180 && screenOrientation === 0)) {
                        utils.isLandscapeZeroDegrees = true;
                        if (Math.abs(orientation) === 180 || Math.abs(orientation) === 0) {
                            currOrientation = 90;
                        } else if (Math.abs(orientation) === 90) {
                            currOrientation = 0;
                        }
                    }
                }

                // send initial clientstate after a slight delay as some browsers need time to provide correct viewport values
                setTimeout(function () {
                    if (context.isInitialized()) {
                        handleClientState(webEvent);
                    }
                }, 100);

                // Check and add geolocation
                addGeolocationMsg(webEvent.type);

                // XXX - Use the context instead?
                TLT.logScreenviewLoad("root");

                break;
            case "screenview_load":
                // starts screenview time used for calculating the offset
                viewTimeStart = new Date();

                // Reset visited counts
                resetVisitedCounts();

                // Check and add DOM Capture
                returnObj = addDOMCapture("load", null, webEvent.name);

                break;
            case "screenview_unload":
                // Check and add DOM Capture
                returnObj = addDOMCapture("unload", null, webEvent.name);

                break;
            case "resize":
            case "scroll":
                if (!scrollViewEnd) {
                    scrollViewEnd = new Date();
                }
                nextScrollViewStart = new Date();

                handleClientState(webEvent);

                break;
            case "unload":
                // Flush any saved control
                if (tmpQueue) {
                    postEventQueue(tmpQueue);
                }

                // set the final timestamp of this scrolled view.
                scrollViewEnd = new Date();

                // send final clientstate
                handleClientState(webEvent);

                // XXX - Use the context instead?
                TLT.logScreenviewUnload("root");

                break;
            default:
                // Call the default handler for all other DOM events
                defaultEventHandler(webEvent);
                break;
            }

            lastEventId = id;
            return returnObj;
        },
        onmessage: function () {
        }
    };
});

/**
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2018
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// Default configuration
(function () {
    "use strict";
        // TLT is expected to be defined in the global scope i.e. window.TLT
    var TLT = window.TLT,
        /**
         * Due to issue with lack of change event propagation on legacy IE (W3C version of UIC)
         * its mandatory to provide more specific configuration on IE6, IE7, IE8 and IE9 in legacy
         * compatibility mode. For other browsers changeTarget can remain undefined as it is
         * sufficient to listen to the change event at the document level.
         */
        changeTarget;

    if (TLT.getFlavor() === "w3c" && TLT.utils.isLegacyIE) {
        changeTarget = "input, select, textarea, button";
    }

    TLT.init({
        core: {
            // List of CSS selectors corresponding to elements for which no user interaction is to be reported.
            // WARNING: Since this list has to be evaluated for each event, specifying inefficient selectors can cause performance issues.
            blockedElements: [],

            // WARNING: For advanced users only. Modifying the modules section may lead to unexpected behavior and or performance issues.
            modules: {
                overstat: {
                    events: [
                        { name: "click", recurseFrames: true },
                        { name: "mousemove", recurseFrames: true },
                        { name: "mouseout", recurseFrames: true },
                        { name: "submit", recurseFrames: true }
                    ]
                },
                performance: {
                    events: [
                        { name: "load", target: window },
                        { name: "unload", target: window }
                    ]
                },
                replay: {
                    events: [
                        { name: "change", target: changeTarget, recurseFrames: true, attachToShadows: true },
                        { name: "click", recurseFrames: true },
                        { name: "hashchange", target: window },
                        { name: "focus", target: changeTarget, recurseFrames: true },
                        { name: "blur", target: changeTarget, recurseFrames: true },
                        { name: "load", target: window},
                        { name: "unload", target: window},
                        { name: "resize", target: window},
                        { name: "scroll", target: window},
                        { name: "orientationchange", target: window},
                        { name: "touchend" },
                        { name: "touchstart" }
                    ]
                },
                TLCookie: {
                    enabled: true
                }
            },
            // Set the sessionDataEnabled flag to true only if it's OK to expose Tealeaf session data to 3rd party scripts.
            sessionDataEnabled: false,
            sessionData: {
                // Set this flag if the session value needs to be hashed to derive the Tealeaf session ID
                sessionValueNeedsHashing: true,

                // Specify sessionQueryName only if the session id is derived from a query parameter.
                sessionQueryName: "sessionID",
                sessionQueryDelim: ";",

                // sessionQueryName, if specified, takes precedence over sessionCookieName.
                sessionCookieName: "jsessionid"
            },
            // Automatically detect screenview changes by tracking URL path and hash change.
            screenviewAutoDetect: true,
            // list of ignored frames pointed by css selector (top level only)
            framesBlacklist: [
                "#iframe1"
            ]
        },
        services: {
            queue: {
                // WARNING: Enabling asynchronous request on unload may result in incomplete or missing data
                asyncReqOnUnload: false,
                useBeacon: true,
                xhrLogging: true,
                queues: [
                    {
                        qid: "DEFAULT",
                        endpoint: "//prodqa-collector.tealeaf.ibmcloud.com/collector/collectorPost",
                        maxEvents: 50,
                        timerInterval: 300000,
                        maxSize: 100000,
                        checkEndpoint: true,
                        endpointCheckTimeout: 5000,
                        encoder: "gzip"
                    }
                ]
            },
            message: {
                privacy: [
                    {
                        targets: [
                            // CSS Selector: All password input fields
                            "input[type=password]"
                        ],
                        "maskType": 3
                    }
                ],
                privacyPatterns: [
                    /**
                     * Use privacy patterns to match and replace specific patterns in the HTML.
                     *
                     * WARNING: Applying regular expressions to the HTML DOM can have a
                     * performance impact on the application. Adequate testing must be performed
                     * to ensure that pattern matching is not only working as expected but also
                     * not causing performance impact.
                     *
                     * Example illustrating blocking of SSN
                    {
                        pattern: { regex: "\\d{3}-\\d{2}-\\d{4}", flags: "g" },
                        replacement: "XXX-XX-XXXX"
                    }
                     */
                ]
            },
            serializer: {
                json: {
                    defaultToBuiltin: true,
                    parsers: [ "JSON.parse" ],
                    stringifiers: [ "JSON.stringify" ]
                }
            },
            encoder: {
                gzip: {
                    /**
                     * The encode function should return encoded data in an object like this:
                     * {
                     *     buffer: "encoded data"
                     * }
                     */
                    encode: "window.pako.gzip",
                    defaultEncoding: "gzip"
                }
            },
            domCapture: {
                diffEnabled: true,
                // DOM Capture options
                options: {
                    maxMutations: 100,       // If this threshold is met or exceeded, a full DOM is captured instead of a diff.
                    maxLength: 1000000,      // If this threshold is exceeded, the snapshot will not be sent
                    captureFrames: false,    // Should child frames/iframes be captured
                    captureShadowDOM: true, // Should Shadow DOM content be captured
                    removeScripts: true      // Should script tags be removed from the captured snapshot
                }
            },
            browser: {
                sizzleObject: "window.Sizzle",
                jQueryObject: "window.jQuery"
            }
        },
        modules: {
            overstat: {
                hoverThreshold: 1000
            },
            performance: {
                calculateRenderTime: true,
                renderTimeThreshold: 600000,
                filter: {
                    navigationStart: true,
                    unloadEventStart: true,
                    unloadEventEnd: true,
                    redirectStart: true,
                    redirectEnd: true,
                    fetchStart: true,
                    domainLookupStart: true,
                    domainLookupEnd: true,
                    connectStart: true,
                    connectEnd: true,
                    secureConnectionStart: true,
                    requestStart: true,
                    responseStart: true,
                    responseEnd: true,
                    domLoading: true,
                    domInteractive: true,
                    domContentLoadedEventStart: true,
                    domContentLoadedEventEnd: true,
                    domComplete: true,
                    loadEventStart: true,
                    loadEventEnd: true
                }
            },
            replay: {
                // Geolocation configuration
                geolocation: {
                    enabled: false,
                    triggers: [
                        {
                            event: "load"
                        }
                    ]
                },
                // DOM Capture configuration
                domCapture: {
                    /**
                     * NOTE: Enabling DOM Capture has significant implications on data transmission and infrastructure.
                     * Hence this feature should be enabled judiciously. If enabled, it requires further configuration
                     * to only perform the DOM Capture based on specific events and elements. Please refer to the
                     * documentation for more details.
                     */
                    enabled: true,
                    /**
                     * The rules for triggering DOM Snapshots are similar to the Privacy configuration.
                     * It accepts a mandatory "event" followed by one or more optional targets
                     * as well as an optional delay after which to take the DOM snapshot.
                     * 
                     * The default configuration below will capture a full DOM snapshot for each and every click,
                     * change action as well as for all screenview load and unloads. Refer to the documentation
                     * for details on fine tuning this configuration to specific elements and screenviews.
                     */
                    triggers: [
                        {
                            event: "click"
                        },
                        {
                            event: "change"
                        },
                        {
                            event: "load",
                            delay: 100
                        }
                    ]
                }
            },
            TLCookie: {
                appCookieWhitelist: [
                    { regex: ".*" }
                ],
                tlAppKey: "51cf21eff4174195a38b901f29cab5b3"
            }
        }
    });
}());
