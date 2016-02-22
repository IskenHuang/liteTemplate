describe('liteTemplate', function() {
    var obj = {
        name: 'Isken Huang',
        age: 18,
        skills: ['watch movie', 'read book'],
        schedule: {
            sun: 'work',
            mon: 'work',
            tue: 'work',
            wed: 'work',
            thu: 'work',
            fri: 'work',
            sat: 'work'
        }
    },
    template;

    it('should be replace keywords', function () {
        template = 'Hi {{ greeting }}, My name is {{ name }}. I am {{ age }} years old. My skill is {{ skills }}. You can contact me when I working {{ schedule }}.';
        liteTemplate(template, obj).indexOf('{{').should.equal(-1);
        liteTemplate(template, obj).indexOf('}}').should.equal(-1);
    });

    it('should be replace keywords and using custom syntax', function () {
        template = 'Hi [[ greeting ]], My name is [[ name ]]. I am [[ age ]] years old. My skill is [[ skills ]]. You can contact me when I working [[ schedule ]].';

        liteTemplate(template, obj, {open: '\[\[', close: '\]\]'}).indexOf('[[').should.equal(-1);
        liteTemplate(template, obj, {open: '[[', close: ']]'}).indexOf(']]').should.equal(-1);
    });

    it('should be replace keywords ', function () {
        template = 'Hi {{ greeting }}, My name is {{ name }}. I am {{ age }} years old. My skill is {{ skills }}. You can contact me when I working {{ schedule }}.';

        liteTemplate(template, obj).match('Isken Huang').should.not.equal(null);
        liteTemplate(template, obj).match('18').should.not.equal(null);
        liteTemplate(template, obj).match('Hi\ \,').indexOf('Hi ,').should.equal(0);
    });

    it('should input wrong obj dont throws error', function () {
        template = 'Hi {{ greeting }}, My name is {{ name }}. I am {{ age }} years old. My skill is {{ skills }}. You can contact me when I working {{ schedule }}.';

        liteTemplate(template, 'obj').indexOf('{{').should.equal(-1);
        liteTemplate(template, 'obj').indexOf('}}').should.equal(-1);
    });
});