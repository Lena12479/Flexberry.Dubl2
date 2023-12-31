import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dubl2-заказ', 'Unit | Serializer | i-i-s-dubl2-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dubl2-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dubl2-оплата',

    'model:i-i-s-dubl2-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
