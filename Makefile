install: 
	npm ci

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .