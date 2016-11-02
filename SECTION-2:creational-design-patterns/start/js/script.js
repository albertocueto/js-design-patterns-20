(function(win, $) {
    var CircleGeneratorSingleton = (function() {
        var instance;

        function init() {
            var _aCircle = [],
                _stage = $('.advert');

            function _position(circle, left, top) {
                circle.css('left', left);
                circle.css('top', top);
            }

            function create(left, top) {
                var circle = $('<div class="circle"></div>');
                _position(circle, left, top);
                return circle;
            }

            function add(circle) {
                _stage.append(circle);
                _aCircle.push(circle);
            }

            function index() {
                return _aCircle.lenegth;
            }

            return {
                index: index,
                create: create,
                add: add
            };
        }

        //Only public method is the one that provides access to the single instance
        return {
            getInstance: function() {
                if (!instance) {
                    instance = init();
                }

                return instance;
            }
        };
    })();

    $(win.document).ready(function() {
        $('.advert').click(function(e) {
            var cgs = CircleGeneratorSingleton.getInstance();
            var circle = cgs.create(e.pageX - 25, e.pageY - 25)

            cgs.add(circle);

        });

        $(document).keypress(function(e) {
            if (e.key == 'a') {
                var cgs = CircleGeneratorSingleton.getInstance();
                var circle = cgs.create(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600));
                cgs.add(circle);
            }
        });

    });

})(window, jQuery);
