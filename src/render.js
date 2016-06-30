import _ from 'lodash';

export default function render(transform, supplied, context) {
  const data = _.merge({}, context, supplied);
  return transform(data);
}
