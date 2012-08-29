jQuery.resizestop (and resizestart)
===
Simple resize control special event plugin for jQuery.

## `resizestart` event

This is how you bind resize start event:
```js
jQuery(window).on('resizestart', function () {
	console.log('resize started!');
});
```

## `resizestop` event

This is how you bind resize stop event:
```js
jQuery(window).on('resizestop', function () {
	console.log('resize stopped!');
});
```

## Defining the sensivity

The second parameter sets the sensivity of start/stop event. Lesser value is higher. Default is 300 for event start, 200 for event stop.
```js
jQuery(window).on('resizestop', 100, function () {
	console.log('resize stopped!');
});
```
That will work more slowly.
```js
jQuery(window).on('resizestop', 1000, function () {
	console.log('resize stopped!');
});
```

## Catching the event type with `event.type`
```js
jQuery(window).on('resizestop resizestart', function (e) {
	console.log(e.type); // e.type will return "resizestart" or "resizestop"
});
```

## Currying
You can use `resizestart` and `resizestop` instead of using `on` binding.
```js
jQuery(window).resizestart(function (e) {
	console.log('resize started');
});
```

```js
jQuery(window).resizestop(function (e) {
	console.log('resize stopped');
});
```

```js
jQuery(window).resizestop(1000, function (e) {
	console.log('resize stopped'); // will work 1000ms delayed.
});
```

## License
License is CC0, means it is published to the public domain. You can use it for free wherever/whenever you want.