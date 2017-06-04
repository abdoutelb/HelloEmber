import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        
        if(params.id == "1"){
            return {
                name : "Ember SetUp",
                steps : [{
                    id :1,
                    do : "Download Ember Cli"
            },
            {
                    id :2,
                    do : "Generate New Project"
            },
            {
                    id :3,
                    do : "Generate Pages&Routes"
            }
                ]
            };
        }
        else if(params.id == "2"){
            return {
                name : "GitHub",
                steps : [{
                    id :1,
                    do : "Sign in your github"
            },
            {
                    id :2,
                    do : "Add the changed files"
            },
            {
                    id :3,
                    do : "Commit & Push"
            }
                ]
            };
        }else{
            return {
                error : true,
                name : "Not Found",
                message : "There is no task with this id"
            }
        }
    }
});
