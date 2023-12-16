import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОплатаEnum from '../enums/i-i-s-dubl2-оплата';

export default FlexberryEnum.extend({
  enum: ОплатаEnum,
  sourceType: 'IIS.Dubl2.Оплата'
});
