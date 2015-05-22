$.fn.animateProperty = function(options)
{

    var options = $.extend({
        repeats: 1,
        animateWhat: 'backgroundColor',
        fromVal: '#ffffff',
        toVal: '#fffbcc',
        durationIn: 350,
        durationOut: 1650
    }, options);

    var originalVal = options.fromVal || $(this).css(options.animateWhat);

    var animFrom = {};
        animFrom[options.animateWhat] = options.toVal;

    var animTo = {};
        animTo[options.animateWhat] = originalVal;

    var doIt = function(callback)
    {
        $(this).stop().animate(animFrom, options.durationIn, 'linear', function()
        {
            $(this).stop().animate(animTo, options.durationOut, 'linear', callback);
        });

    };

    return this.each(function()
    {
        var me = this;
        var i = +options.repeats;
        var loop = function()
        {
            --i && doIt.call(me, loop);
        };

        doIt.call(me, loop);
    });
};
