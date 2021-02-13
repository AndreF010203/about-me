# About-me
About-Me is a ready-to-use responsive website for personal showcase and résumé for software engineers. Just inject your data in the json and deploy it on Git Pages or another host of your choice!

# **Installation**

You can install the template by cloning this repository and then:

```js
npm install
```
And build with
```js
npm run build
```

Or simply with: 
```js
npx about_me
```


# **Customization**

There are many customizable aspects in about-me: 

**Color Palette**

Customize the look & feel of your about-me page in:

```unix
src/scss/color-palette.scss
```

**Custom Data**

Insert the data yuo want to show in the resumé in: 

```unix
data/content.json
```

Refer to the complete table for more details.
Also, put the images you refer to in: 

```unix
data/imgs/
```

# **Content.json**

Breakdown for the content.json fields

**menu** - Navbar Customization
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  nameFont  | Font of the top-right name | https://fonts.googleapis.com/css2?family=PT+Mono&display=swap |
|  name      | Name to display | John Doe |
|  top       | Name of the "top" section in the navbar | Top |
|  about     | Name of the "about" section in the navbar| About |
|  experience    | Name of the "experience" section in the navbar | Experience |
|  education     | Name of the "education" section in the navbar | Education |
|  portfolio     | Name of the "portfolio" section in the navbar | Personal Works |
|  pagetitle     | Name of the page in the browser | John Doe |

**header** - Top section
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  title     | Title in top section | I am John Doe |
|  content     | Subtitle in top section | And this is my personal page |
|  button     | Label of the button | Discover |
|  cover     | Name of the cover image for the top section | img.png |


**about** - About section
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  cover     | Name of the cover image | img.png |
|  title     | Title of the about section | Hello World |
|  content     | Content of the about section. You can use HTML markdown | Lorem ipsum etc.. |


**links** - Each link enables the relative icon. Leave it blank and the icon will not be displayed. Icons are shown in the about section and in the footer.
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  linkedin.url     | Url of your linkedin profile | www.linkedin.com/example |
|  github.url     | Url of your github profile | www.github.com/example |
|  stackoverflow.url     | Url of your stackoverflow profile | www.stackoverflow.com/example |
|  mail.url     | Mail address, preceded by *mailto:* | mailto:you@example.com |


**experiences** - Each experience is an element of the array. Keep them in descending order (most recent comes first). An automatic timespan calculation is enabled. Leave blank the end date of your most recent experience in order to calculate correctly the time spent in the role.
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  companyname     | Name of the company | Example ltd |
|  companylogo     | Logo of the company | img.png |
|  companysite     | Site of the company | www.example.com |
|  location     | Location of the company | Rome (IT) |
|  jobtitle     | Title of your role | CTO |
|  timespan     | Literal time span | Jan 2020 - Jan 2021 |
|  datestart     | Start date in the format *month/year* | 01/2020 |
|  dateend     | End date in the format *month/year* or empty in case of current role | 01/2021 |
|  description     | Description on the role, readmore is enabled, HTML is allowed | Lorem ipsum |


**education** - Each education experience is an element of the array. Keep them in descending order (most recent comes first). An automatic timespan calculation is enabled. Leave blank the end date of your most recent experience if you are still a student.
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  schoolname     | Name of the university | Example University |
|  schoollogo     | Logo of the university | img.png |
|  location     | Location of the university | Rome (IT) |
|  title     | Title of your studies | Master degree |
|  timespan     | Literal time span | Jan 2020 - Jan 2021 |
|  datestart     | Start date in the format *month/year* | 01/2020 |
|  dateend     | End date in the format *month/year* or empty in case of current studies | 01/2021 |
|  description     | Description on the studies, readmore is enabled, HTML is allowed | Lorem ipsum |


**portfolio** - List of personal works and projects, organized as an array.
|      Field    |    Description |  Example Value   |
|:-------------:|:-------------:|:------:|
|  title     | Title of the portfolio section | Personal Portfolio |
|  works     | Array of works | see below |
|  url     | Link the work (repository, website etc) | www.example.com |
|  title     | Name of the project | Top project |
|  img     | Image of the project (screenshot or GIF) | img.jfif |
|  description     | Description of the project | Lorem ipsum |

