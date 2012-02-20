October 18
- Wrapped all customer account templates in div #customers-section and prepended ""#customers-section"" to some CSS selectors that were causing issues
- Changed blog pagination from 2 to 8
- Stupid ie8 bug fix: in stylesheet.css add: 

table.products .ie8-fix { width:180px; display:block;} /* ie8 doesn't support max-width properly, temp work around */

and in the table.products (collection.liquid) wrap the product img in:

<b class="ie8-fix"> <img src="{{ product.images.first....> </b>



October 2
- Added CSS support for customer accounts and modified ALL CA's templates so you will have to redownload the .zip from the theme store and grab all the support there....https://gist.github.com/1297397



Sept 27
- Changed margin-right of li nav
- Added customer accounts https://gist.github.com/1297398
- Removed instances of width-"180px" in the .products table 