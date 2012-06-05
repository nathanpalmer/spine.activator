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

	var parent, child;

	var Tests = function() {
		it("should activate the module when included", function() {
			parent.include(mod1);

			var child = new parent();

			expect(child.mod1activated).toBe(true);
		});

		it("should activate multiple modules when included", function() {
			parent.include(mod1);
			parent.include(mod2);

			var child = new parent();

			expect(child.mod1activated).toBe(true);
			expect(child.mod2activated).toBe(true);
		});
	};

	describe("for Spine.Module", function() {
		beforeEach(function() {
			parent = Spine.Module.sub();
		});

		Tests();
	});

	describe("for Spine.Model", function() {
		beforeEach(function() {
			parent = Spine.Model.sub();
		});

		Tests();

		it("should activate the module when included on create", function() {
			parent.include(mod1);

			var child = parent.create();

			expect(child.mod1activated).toBe(true);
		});
	});

	describe("for Spine.Controller", function() {
		beforeEach(function() {
			parent = Spine.Controller.sub();
		});

		Tests();
	});
});
