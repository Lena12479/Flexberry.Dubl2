import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  тип: DS.attr('i-i-s-dubl2-оплата')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dubl2-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-dubl2-заказ.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-dubl2-заказ', {
    дата: attr('Дата', { index: 0 }),
    тип: attr('Тип', { index: 1 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-dubl2-заказ', {
    дата: attr('Дата', { index: 0 }),
    тип: attr('Тип', { index: 1 })
  });
};
