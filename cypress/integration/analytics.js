const sites = Cypress.config('sites');

sites.forEach((site) => {
	let url = 'https://www.' + site.domain;

	describe(site.domain, () => {
		it('Loads', () => {
			cy.visit(url);
		});

		it('Has Google Analytics snippet', () => {
			cy.window().its('ga');
		});

		it('Google Analytics snippet is not empty', () => {
			let isEmpty;

			cy.window()
				.then((win) => {
					// The object is empty if the snippet is not configured
					isEmpty = Cypress._.isEmpty(win.gaData);
				})
				.then(() => {
					expect(isEmpty).to.equal(false);
				});
		});
	});
});
