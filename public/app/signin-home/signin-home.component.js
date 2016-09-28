angular.module('signinHome').component('signinHome',{
	templateUrl: 'app/signin-home/signin-home.template.html',
	controller: function signInController(){
        this.username='';
        this.password='';
        this.signin=function signin(){
                //code to be added here
		this.value=this.username+this.password;
        	}; 
	}
});
