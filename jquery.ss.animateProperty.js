$.fn.animateProperty = function(options)
{

    var options = $.extend({
        repeats: 1,
        animateWhat: 'backgroundColor',
        toVal: '#FFFBCC',
        durationIn: 350,
        durationOut: 1650
    }, options);

    var originalVal = $(this).css(options.animateWhat);

    var animFrom = {};
        animFrom[options.animateWhat] = options.toVal;
    var animTo = {};
        animTo[options.animateWhat] = originalVal;

    var doIt = function(callback)
    {
        $(this).animate(animFrom, options.durationIn, function()
        {
            $(this).animate(animTo, options.durationOut, callback);
        });
    };
    return this.each(function()
    {
        var i = +options.repeats;
        var me = this;
        var loop = function()
        {
            --i && doIt.call(me, loop)
        };
        doIt.call(this, loop);
    });
};
