"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[4997],{62075:function(t,e,o){o(69826),o(41539),o(73210);var n=o(19755),i=o.n(n),s={piwikTrackSubmitEvent:function(t){return!i()(t).data("data-submit")&&(i()(t).data("data-submit",1),"undefined"!=typeof _paq&&_paq.push(["trackEvent","Forms","Forms: submit","Forms: submit: "+s.piwikGetFormName(t)]),!0)},piwikGetFormName:function(t){var e=i()(t).attr("name");return e||(e=i()(t).find(".form-name").val())||(e=i()(t).attr("action")),e},trackInput:function(t,e){t.find(".track-input").on("change",(function(){var t=i()(this),o=t.val().trim(),n="select"===t.prop("tagName").toLowerCase()?"chosen":"entered";if(o.length){o=o.substring(0,4096);var s=t.attr("data-name");s||(s=t.attr("id")||t.attr("name")),_paq.push(["trackEvent","Forms",e+": "+n,e+": "+n+": "+s+': "'+o+'"'])}}))},trackOpen:function(){"undefined"!=typeof _paq&&_paq.push(["trackEvent","Forms","Forms: popup","Forms: popup: opened"])},trackPiwikCustom:function(t,e,o){"undefined"!=typeof _paq&&_paq.push(["trackEvent",t,t+": "+e,t+": "+e+": "+o])},delayedClick:function(t){setTimeout((function(){location.href=t}),600)}};e.Z={piwikTrackSubmitEvent:s.piwikTrackSubmitEvent,trackInput:s.trackInput,trackOpen:s.trackOpen,trackPiwikCustom:s.trackPiwikCustom,delayedClick:s.delayedClick}},59102:function(t,e,o){o.d(e,{Z:function(){return s}});o(74916),o(15306);var n=o(19755),i=o.n(n);function s(t){var e=t,o=i()("<div></div>"),n=null;e.addClass("txtstuff"),o.addClass("txta"),o.hide(),e.on("input",(function(){var t,e;i()(this).after(o),i()(this).css({resize:"none",overflow:"hidden"}),t=i()(this).val(),e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},n=(n=t.replace(/[&<>"']/g,(function(t){return e[t]}))).replace(/\n/g,"<br>"),o.html(n+'<br style="line-height: 3px;">'),o.css("visibility","hidden"),o.show(),this.style.height=o[0].offsetHeight+"px",o.css("visibility","visible"),o.hide()}))}},98809:function(t,e,o){o.d(e,{Z:function(){return s}});o(69826),o(41539),o(57327),o(73210),o(54747);var n=o(19755),i=o.n(n);o(27908),o(43511);function s(t){editmode||(i()('[data-slider="'.concat(t.id,'"]')).each((function(){var e=i()(this),o=new Array(t.options),n={maxSlides:1,adaptiveHeight:!0,preloadImages:"visible",touchEnabled:!0,oneToOneTouch:!0,swipeThreshold:100,pager:!0,controls:!0,infiniteLoop:!0,onSliderResize:function(){d()},onSliderLoad:function(){i()(".bx-clone").each((function(){i()(this).find("a").removeAttr("data-group")}))}},s=!!t.destroySlider&&t.destroySlider,a=!1,r=i()(this).children().filter((function(){return i().trim(i()(this).html())})).length,c=i()(".p-contact.old-template").length;function d(t){if(!s||window.innerWidth<=s.point){var r=window.innerWidth,c=i().extend({},n);o.length&&o[0].forEach((function(t){!isNaN(parseFloat(t.size))&&r>=parseFloat(t.size)&&(c=i().extend(c,t.props))})),a=a.reloadSlider?a:e.bxSlider(c),t<=1?a.destroySlider():a&&a.reloadSlider(c)}else a&&(a.destroySlider(),a=!1)}d(r),c>0&&setTimeout((function(){d(r)}),500),s&&i()(window).on("resize",(function(){d(r)})),e.on("reload-slider",d),e.find("img").one("load",(function(){e.parent().height()<e.height()&&e.parent().height(e.height())})),e.closest(".a-services__content-block").siblings(".a-services__tabs-container").find(".a-services__tabs-label").on("click",(function(t){var o=i()(this).data("slide-index");e.goToSlide(o),t.preventDefault(),t.stopPropagation()}))})),Waypoint.refreshAll())}},46826:function(t,e,o){var n=o(19755),i=o.n(n),s=(o(69826),o(41539),o(90584)),a=o.n(s),r=o(16943),c=o(62075),d=o(24812);var l=o(59102),u="/cache/esi/ask-the-author",p="#authorAskModalForm",h="Forms: askauthor",f=a(),m=function(){var t=i()("#author-ask-modal");(0,r.Z)({form:p,btn:".modal-form__btn",url:u+"?is_submitted=1",successCallback:function(){t.addClass("success-send"),t.find("form")[0].reset(),i()("body").trigger("authorAskSuccess")},errorCallback:function(t){console.log(t.responseJSON)},beforeSend:function(){!i()(p).data("data-submit")&&(i()(p).data("data-submit",1),"undefined"!=typeof _paq&&_paq.push(["trackEvent","Forms","Forms: submit",h+": submit"])),t.addClass("__waiting __waiting--load")},completeCallback:function(){t.removeClass("__waiting __waiting--load")}})};function v(){i()("[data-switch]").each((function(){!function(t,e){var o=e.messagePrimary,n=e.messageSecondary,s=e.switchEvent,a=e.resetEvent;function r(){t.text(o)}function c(){t.text(n)}r(),i()("body").on(s,c),i()("body").on(a,r)}(i()(this),i()(this).data("switch"))}))}var k=o(98809);i()(document).ready((function(){var t,e,o=i()(".author-ask").data("author-name"),n=(t={authorName:o},e=new f.modal({footer:!1,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"Close",onOpen:function(){i().get(u+"?author_name="+t.authorName,(function(t){var o=i()("#authorAskModalForm");e.setContent(t),v(),c.Z.trackInput(i()(p),h),d.Z.piwikFormId(),d.Z.formValidation(o,!1,!1),m(),i()(".modal-form__close, .modal-form__back").on("click",(function(){e.close()})),(0,l.Z)(o.find(".form-group.textarea textarea"))}))},onClose:function(){i()(e.modalBoxContent.firstChild).removeClass("success-send"),i()("body").trigger("authorAskReset")}}));i()(".author-ask-btn").on("click",(function(){n.open()})),(0,k.Z)({id:"authorLatestPosts",class:"author-latest-posts__items",destroySlider:{point:767},options:[{size:0,props:{mode:"horizontal",minSlides:1,controls:!1,shrinkItems:!0,pager:!0,slideWidth:277,adaptiveHeight:!1,slideMargin:16}}]}),(0,k.Z)({id:"authorProjects",class:"author-projects__items",destroySlider:{point:767},options:[{size:0,props:{mode:"horizontal",minSlides:1,controls:!1,shrinkItems:!0,pager:!0,slideWidth:280,adaptiveHeight:!1,slideMargin:16}}]});var s={$postsItems:i()(".author-latest-posts__items"),$btn:i()(".author-latest-posts__more-btn"),authorId:parseInt(i()('[name="author-posts"]').val(),10),limitPosts:parseInt(i()('[name="limit-posts"]').val(),10),limitAddPosts:parseInt(i()('[name="limit-add-posts"]').val(),10),countPosts:parseInt(i()('[name="count-posts"]').val(),10),offsetPosts:parseInt(i()('[name="offset-posts"]').val(),10),urlGetPosts:"/get-author-posts?"},a=s.offsetPosts+s.limitPosts;function r(t){s.$postsItems.append(t.posts),a+=s.limitAddPosts,s.countPosts<=a&&s.$btn.hide()}function b(){s.$postsItems.removeClass("blur")}s.$btn&&s.$btn.on("click",(function(t){t.preventDefault(),s.$postsItems.addClass("blur");var e=s.urlGetPosts+"offset="+a+"&author_id="+s.authorId;i().ajax({url:e,method:"GET",success:r,complete:b})})),i()(".page-share-link").on("click",(function(){return window.open(i()(this).attr("href"),"windowName","width=600, height=400"),!1}))}))}},function(t){t.O(0,[9755,6055,1022,5306,6813,4603,8080,3587,584,73,7908,9323,4812],(function(){return e=46826,t(t.s=e);var e}));t.O()}]);