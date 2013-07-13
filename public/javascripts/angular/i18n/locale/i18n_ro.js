angular.module('app.localeTranslation', []).
    value('currentLocale', {

        // Navigation
        HOME: 'Acasa',
        ABOUT: 'Despre aplicatie',
        LOGIN: 'Autentificare',
        SIGNUP:'Creare cont',
        ACCOUNT:'Contul meu',
        LOGOUT:'Logout',

        // Login and SignUp
        EMAIL:'Email',
        PASSWORD:'Parola',
        NOACCOUNT:"Nu ai cont?",
        CREATEACCOUNT:'Click aici pentru creare cont',
        LOGIN:'Autentificare',
        FIRSTNAME:'Nume',
        LASTNAME:'Prenume',
        SIGNUP:'Inregistrare',
        EXISTINGACCOUNT:'Cont existent !',
        WRONGUSERNAME:'Utilizatorul / parola gresit/a !',
        ACCOUNTCREATED:'Contul a fost creat!',
        AUTHENTICATIONSUCCESS:'Utilizator autentificat !',

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