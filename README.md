# google-spreadsheet-json
Use a google spreadsheet as a json store

# Usage
In your spreadsheet, go to File > Publish to the web and click on "Web Page" drop down and select "Comma-separated values" 
and then copy the link. Assuming the link is in the variable `link`.

```
const fetchStore = require('google-spreadsheet-json');

fetchStore(link, (err, data) => console.log(data));
```

For a csv containing:

```
partner,state,date
all,karnataka,05/02/2018
other,delhi,05/02/2018
```

The output will be:

```
{ 
  all: { 
    karnataka: [ '05/02/2018' ] 
  },
  other: { 
    delhi: [ '05/02/2018' ] 
  }
}
```
