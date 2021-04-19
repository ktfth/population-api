import assert from 'assert';
import app from '../../../src/app';

describe('\'v1/population\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/population');

    assert.ok(service, 'Registered the service');
  });
});
