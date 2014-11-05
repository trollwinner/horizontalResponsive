(function ($) {
    'use strict';
    $.fn.horizontalResponsive = function () {
        var horizontalResponsive = function (element) {
            var $this = $(element);
            var children = $this.children();
            var childrenCount = children.length;
            var oneChildWidth = 100 / childrenCount;
            var horizontalResponsive = {
                init: function () {
                    $(window).resize($.proxy(function () {
                        $this.promise().done($.proxy(function () {
                            children.css('width', '');
                            $this.css('width', '');
                            this.render();
                        }, this));
                    }, this));
                    this.render();
                },
                render: function () {
                    var parentWidth = $this.parent().width();
                    var childrenPerLoop = Math.round(parentWidth / children.first().outerWidth(true));
                    childrenPerLoop = (childrenPerLoop === 0) ? 1 : childrenPerLoop;
                    var oneChildIinPx = parentWidth / childrenPerLoop;
                    var width = 100 / (parentWidth / (childrenCount * oneChildIinPx));
                    $this.css({
                        width: width + '%'
                    });
                    children.css({
                        width: oneChildWidth + '%'
                    });
                    return this;
                }

            };
            return horizontalResponsive.init();
        };
        return this.each(function () {
            horizontalResponsive(this);
        });
    };
})(jQuery);
