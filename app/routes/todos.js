import Ember from 'ember';

export default Ember.Route.extend({
    model (){
        return [{
            "id" : 1,
            "desc" : "Try use ember"
        },
        {
            "id" : 2,
            "desc" : "Add it to github"
        },
        ];

    }
});
