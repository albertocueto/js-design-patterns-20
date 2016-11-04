//In javascript there are no interfaces, but there are abstract factories
(function(win, $) {
    /*var RedCircle = function() {
      this.item = $('<div class="circle"></div>');
    },
    BlueCircle = function() {
      this.item = $('<div class="circle" style="background-color: blue"></div>');
    },
    CircleFactory = function() {
      this.create = function(color) {
        if(color === 'blue') {
          return new BlueCircle();
        } else {
          return new RedCircle();
        }
      };
    };*/

    //Abstract factory pattern:
    function RedCircle() {};
    RedCircle.prototype.create = function() {
      this.item = $('<div class="circle"></div>');
      return this;
    };
    function BlueCircle() {};
    BlueCircle.prototype.create = function() {
      this.item = $('<div class="circle" style="background-color: blue"></div>');
      return this;
    };

    //This is the abstract circle factory
    CircleFactory = function() {
      this.types = {};
      this.create = function(type) {
        return new this.types[type]().create();
      };

      this.register = function(type, cls) {
        if(cls.prototype.create) {
          this.types[type] = cls;
        }
      };
    };

    var CircleGeneratorSingleton = (function() {
        var instance;

        function init() {
            var _aCircle = [],
                _stage = $('.advert'),
                _cf = new CircleFactory();
                _cf.register('red', RedCircle);
                _cf.register('blue', BlueCircle);

            function _position(circle, left, top) {
                circle.css('left', left);
                circle.css('top', top);
            }

            function create(left, top, type) {
                var circle = _cf.create(type).item;
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
            var circle = cgs.create(e.pageX - 25, e.pageY - 25, 'red');

            cgs.add(circle);

        });

        $(document).keypress(function(e) {
            if (e.key == 'a') {
                var cgs = CircleGeneratorSingleton.getInstance();
                var circle = cgs.create(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600), 'blue');
                cgs.add(circle);
            }
        });

    });

})(window, jQuery);
