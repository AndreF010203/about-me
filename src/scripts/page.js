export class Page {
  static init() {
    /**
     * Menu class 
     */
    $(window).on('scroll', function() {
      const scroll = $('body').scrollTop();
      if(scroll > 0) {
        $('header').removeClass('top-color').addClass('body-color');
      } else {
        $('header').addClass('top-color').removeClass('body-color');
      }
    });

    /**
     * timeline manager
     */
    $(function($){
      const $timeline_block = $('.timeline-block');
    
      //hide timeline blocks which are outside the viewport
      $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
          $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
        }
      });
    
      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function(){
        $timeline_block.each(function(){
          if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img').hasClass('is-hidden') ) {
            $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });
    });

    /**
     * timeline calc time
     */
    $(function($){
      const $timeline_date = $(".timeline-timespan");
      $timeline_date.each(function(){
        const data = $(this).data();
        const [startM, startY] = data.start.split('/');
        const [endM, endY] = data.end 
          ? data.end.split('/')
          : [(new Date()).getMonth() + 1, (new Date()).getFullYear()];
        const yearDiff =  endY - startY;
        const monthDiff = (endM - startM); 
        let str = "";
        if (yearDiff >= 1) {
          str = `${yearDiff} ${yearDiff === 1 ? data.year : data.years} `;
        }
        if(monthDiff >= 1) {
          str += `${monthDiff} ${monthDiff === 1 ? data.month : data.months}`;
        }
        $(this).text(str);
      });
    });
  }
}