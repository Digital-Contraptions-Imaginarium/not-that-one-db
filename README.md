not-that-one-db
===============

##Introduction
This repository contains the set of rules by which [@Giacecco](https://twitter.com/giacecco) chooses what packaged food **not** to buy, using the (upcoming) Digital Contraptions Imaginarium's [**Not That One!**](http://digital-contraptions-imaginarium.github.io/not-that-one) mobile app.

The source for the data is @Giacecco himself, going around supermarkets and spotting products that shouldn't be bought, or - in the future - other contributors doing the same. @Giacecco won't generally be able to check that the data being submitted by contributors is truthful, althoigh he will assure the consistency of the file format, as that can break the whole system.

##You are welcome to contribute...
You can contribute to this repository by forking it and submitting your improvements back as pull requests. E.g. if you find one more brand that homogenise their milk, add it [here](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/tells/homogenised_milk.json). Or, if you mistakenly bought sausages with little or no pork in them, add them [here](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/tells/pork_meat_in_sausages.json). 

You are welcome to leave notes alongside your findings, see an example of how to do it [here](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/tells/pork_meat_in_sausages.json).

##... or to define rules of your own
You can define your own set of rules, too! Fork this repository and re-configure your **Not That One!** app to point at your rules rather than @Giacecco's. You can see [here](http://digital-contraptions-imaginarium.github.io/not-that-one/#/4/1) how that is done. Note that the repository name must be "not-that-one-db".

##What is the format of the database?
Below is a brief description, while awaiting for more precise specifications. 

The database is made of "tells" and a "whitelist". 

As the name suggests, the [whitelist](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/whitelist.json) is just a list of products that @Giacecco reckons are suitable for consumption.

[Tells](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/tells.json) instead are the descriptions of issues.

These are then referenced by one dedicated file per tell, that lists the products that match that tell and hence are unsuitable for consumption, e.g. the one about [pork meat in sausages](https://github.com/Digital-Contraptions-Imaginarium/not-that-one-db/blob/master/tells/pork_meat_in_sausages.json).

See the files themselves for their format.

##Licence
![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png "Creative Commons License") This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) and all its data is public domain.

![ODI badge](https://raw.github.com/Digital-Contraptions-Imaginarium/not-that-one-db/master/images/odiBadge.png) The data used for this project has achieved the Open Data Institute's Open Data Certificate ["Pilot level"](https://certificates.theodi.org/datasets/1188/certificates/13322) on 19 January 2014, which means extra effort went in to support and encourage feedback from people who use this open data.
