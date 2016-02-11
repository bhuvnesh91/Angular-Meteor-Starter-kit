Meteor.startup(function () {
    if (Contacts.find().count() === 0) {
        var contacts = [
            {
                'firstName': 'Rohan',
                'lastName': 'Singh',
                'age': '20',
                'city': 'Chandigarh',
                'country': 'India',
                'contact': '9632587415'
            },
            {
                'firstName': 'Harry',
                'lastName': 'Bansal',
                'age': '25',
                'city': 'Delhi',
                'country': 'India',
                'contact': '8532587415'
            },
            {
                'firstName': 'Binny',
                'lastName': 'Maheswari',
                'age': '22',
                'city': 'Mumbai',
                'country': 'India',
                'contact': '9122587415'
            }
        ];

        for (var i = 0; i < contacts.length; i++) {
            Contacts.insert(contacts[i]);
        }
    }
});
