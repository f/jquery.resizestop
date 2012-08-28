$.extend($.event.special, {
    resizestop: (function() {
        return {
            setup: function(data, ns) {
                this.timeout = data;
            },
            add: function(handle) {
                var handler = handle.handler;

                $(this).resize(function(e) {
                    clearTimeout(handler._timer);
                    e.type = 'resizestop';
                    var _proxy = $.proxy(handler, this, e);
                    handler._timer = setTimeout(_proxy, timeout || 200);
                });
            }
        }
    })(),
    resizestart: (function() {
        return {
            setup: function(data, ns) {
                this.timeout = data;
            },
            add: function(handle) {
                var handler = handle.handler;
                
                $(this).on('resize', function(e) {
                    clearTimeout(handler._timer);
                    if (!handler._started) {
                        e.type = 'resizestart';
                        handler.apply(this, arguments);
                        handler._started = true;
                    }
                    handler._timer = setTimeout($.proxy(function() {
                        handler._started = false;
                    }, this), 300);
                });
            }
        }
    })()
});