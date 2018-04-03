import DS from 'ember-data';

export default DS.Model.extend({
    post: DS.hasMany('post'),
    name: DS.attr(),
    username: DS.attr(),
    email: DS.attr(),
    address: DS.attr(),
    phone: DS.attr(),
    website: DS.attr()
});
