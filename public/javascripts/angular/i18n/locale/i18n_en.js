angular.module('app.localeTranslation', []).
	value('currentLocale', {

        // Navigation
		HOME: 'Home',
		ABOUT: 'About',
		LOGIN: 'Login',
        SIGNUP:'Signup',
        ACCOUNT:'Account',
        LOGOUT:'Logout',

        // Login and SignUp
         EMAIL:'Email',
         PASSWORD:'Password',
         NOACCOUNT:"Don't Have an Account?",
         CREATEACCOUNT:'Click here to create an account',
         LOGIN:'Log in',
         FIRSTNAME:'First Name',
         LASTNAME:'Last Name',
         SIGNUP:'Sign up',
         EXISTINGACCOUNT:'Account already in use!',
         WRONGUSERNAME:'Wrong username/Password combination !',
         ACCOUNTCREATED:'Account created!',
         AUTHENTICATIONSUCCESS:'User authenticated!',

		_getLocalizationKeys: function() {
			// Returns an object that has as properties the same properties of this object.
			// The values of these properties is equal to the name of each properties.
			var keys = {};
			for (var k in this) {
				keys[k] = k;
			}
			return keys;
		}	
	});