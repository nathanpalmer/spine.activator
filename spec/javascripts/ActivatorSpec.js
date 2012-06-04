describe("Activate", function() {
	var mod1 = {
		activators: [ "prepareModule1" ],

		prepareModule1: function() {
			this.mod1activated = true;
		}
	};

	var mod2 = {
		activators: [ "prepareModule2" ],

		prepareModule2: function() {
			this.mod2activated = true;
		}
	};

	it("should activate the module when included", function() {
		var c = Spine.Module.sub();
		c.include(mod1);

		var d = new c();

		expect(d.mod1activated).toBe(true);
	});

	it("should activate multiple modules when included", function() {
		var c = Spine.Module.sub();
		c.include(mod1);
		c.include(mod2);

		var d = new c();

		expect(d.mod1activated).toBe(true);
		expect(d.mod2activated).toBe(true);
	});
});
