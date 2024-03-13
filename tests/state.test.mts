import { describe, expect, it } from 'vitest'

import { getGlobalHashes } from '../src/state.mjs'

describe('getGlobalHashes', () => {
	it('returns a singleton', () => {
		const gh1 = getGlobalHashes()
		const gh2 = getGlobalHashes()

		expect(gh1).toBe(gh2)
	})
})
