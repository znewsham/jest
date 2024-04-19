import '../mixed-package/file1.js';
import '../mixed-package/file3.js';

it('load order is preserved', () => expect(Registrar['file1']).toEqual({}));
