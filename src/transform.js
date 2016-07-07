const babel = require('babel-solo');

export default function transform(template, config) {
  const transformed   = babel.transform(template, config);
  const code          = transformed.code;
  const start         = code.indexOf('React.createElement');

  return new Function('data', `
    data = data || {};\n
    return (function jsx() {\n
      try {\n
        with (data) {
          ${code.slice(0, start)}\n
          return ${code.slice(start)}\n
        }
      } catch(error) {\n
        console.log(error);
        return null;
      }\n
    })()`);
}
