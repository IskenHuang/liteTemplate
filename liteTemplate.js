(function(){
    self.liteTemplate = function(template, obj) {
        template += '';

        var open = '{{',
            close = '}}',
            reg = new RegExp(open + '\\ *\\w*\\ *' + close, 'g'),
            matchString = template.match(reg),
            getString = function(v) {
                var _type = Object.prototype.toString.call(v),
                    result = '';
                _type = _type.substring(8, _type.length-1).toLowerCase();

                switch(_type) {
                    case 'string':
                        result = v;
                        break;
                    case 'number':
                        result = v + '';
                        break;
                    case 'object':
                    case 'array':
                        result = JSON.stringify(v);
                        break;
                }

                return result;
            };

        if(matchString) {
            for(var i = 0; i < matchString.length; i++) {
                var ms = matchString[i],
                    key = ms.replace(open, '').replace(close, '').trim(),
                    val = getString(obj[key]).replace(/\>/g, '&gt;').replace(/\</g, '&lt;'),
                    _regex = new RegExp(ms, 'g');

                template = template.replace(_regex, val);
            }
        }

        return template;
    }
})();