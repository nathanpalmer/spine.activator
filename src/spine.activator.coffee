Spine = window.Spine

moduleKeywords = ['included', 'extended']

ctor = ->
	this[activator]() for activator in @activators when typeof this[activator] is "function"
	@init?(arguments...)

construct = (base,sub) ->
	sub::constructor = base


construct(ctor,Spine.Module)

Spine.Module::activators = []

Spine.Module.include = 
Spine.Model.include = 
Spine.Controller.include =
(obj) ->
	throw('include(obj) requires obj') unless obj
	for key, value of obj when key not in moduleKeywords
		if key is "activators"
			@::[key] = @::[key].concat(value) if typeof @::[key] isnt "undefined"
		else
			@::[key] = value
	obj.included?.apply(@)
	this

Spine.Activator = true
