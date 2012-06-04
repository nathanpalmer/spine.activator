Spine = window.Spine

moduleKeywords = ['included', 'extended']

class Module
	activators: []

	constructor: ->
		console.log("test")
		this[activator]() for activator in @activators when typeof this[activator] is "function"
		@init?(arguments...)

proto = Spine.Module::

Spine.Module.prototype = Module::

Spine.Module.include = (obj) ->
	throw('include(obj) requires obj') unless obj
	for key, value of obj when key not in moduleKeywords
		if key is "activators"
			@::[key] = @::[key].concat(value)
		else
  			@::[key] = value
	obj.included?.apply(@)
	this
