
# Webfonts For Type Nerds
###Introduction
**Typography** is the art and technique of arranging type to make written language readable and appealing. The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).
## Learning Objective(s)
- Students will be able to know the differences between webfonts & desktop fonts
- Students will be able to find good webfonts to use in their projects
- Students will be able to incorporate webfonts into their own designs

## Essential Question(s)
- What differences are there between web & desktop fonts?
- What special CSS rule lets you use a custom font family in your stylesheet?

## Talking Points/Road Map

#### Typeface vs. Fonts

What's a typeface? What's a font? What's the difference?

A **typeface** is the design of the letters. A **font** is that design written with code, wrapped up in what's considered a software package. So legally, a font is considered a piece of software. Which is why when you "buy" a font, you don't actually own it â€“ you're just buying a license to install and use that software in a certain context.


#### Licensing

Licensing often doesn't work exactly the way you'd expect. You usually have to buy a license for the context you're using it in â€“ *web*, *app/ebook*, or *desktop*. 

**Desktop** fonts are meant to be installed locally on your computer, and are only allowed to be used in rasterized images. You're not allowed to embed the font in any way, you can only use it make images of fonts.

**App/ebook** involves giving away a copy of the font to whomever needs to run your program, so often prices are ridiculously high.

**Webfonts** are meant to only be used on a website â€“ they come in weird formats that are necessary for each browser to render them. You often have to estimate how much usage you need â€“ like XXX,XXX monthly views on a page.

#### How to use webfonts

Assuming you've got all the necessary formats you need for multiple browsers (EOT, SVG, TTF, WOFF, WOFF2), all it takes is referencing them using a special CSS rule.

```css
@font-face {
    font-family: 'League Spartan';
    src: url('leaguespartan-bold.eot');
    src: url('leaguespartan-bold.eot?#iefix') format('embedded-opentype'),
         url('leaguespartan-bold.woff2') format('woff2'),
         url('leaguespartan-bold.woff') format('woff'),
         url('leaguespartan-bold.ttf') format('truetype'),
         url('leaguespartan-bold.svg#league_spartanbold') format('svg');
    font-weight: bold;
    font-style: normal;
}

h1 { font-family:"League Spartan"; }
```

The **font-family** is whatever want to call it, though it makes sense to have it be the actual font family name. The src order matters, and the example giving is the current suggested order that is most compatible with modern browsers, to make sure each gets the file they need.

The **font-weight** & **font-style** are allowed to be set by you, according to the font. If you have multiple, say a regular weight & a bold weight, as long as you reference the same family name, you'll be to just change the weight or style in your future CSS calls and it'll work like any other font.

#### Where to find good webfonts

A few options â€“ commercial, free, and open-source.

- **[MyFonts](http://www.myfonts.com/)** is a great marketplace for type designers to sell their stuff, so you see a wide variety of prices, from free to super expensive. They're good at organizing, and make it obvious & searchable to find fonts you can use on the web.
- **[Typekit](https://typekit.com/)**, which was recently bought by Adobe, is a subscription service that provides a library of awesome typefaces for use on the web.

- **[FontSquirrel](http://www.fontsquirrel.com/)** is a great list of free fonts â€“ some open-source, some just free. They've also got a webfont generator, where you can upload a font (assuming you're legally allowed to use it), and they'll convert it to all the formats you need and give you a ready-to-use kit.
- **[Google Fonts]()** is a large collection of free fonts, some open-source, which they host and let you reference. It's very easy to use and include if you want your fonts hosted somewhere.

- **[The League of Moveable Type](https://www.theleagueofmoveabletype.com/)**, started by yours truly, is the first open-source type foundry, whose fonts are not only free to use, but free to dissect and learn from, too.

##Steps for using Webfonts
### 1. Upload your webfonts

You must upload your webfont kit to your website. They should be in or near the same directory as your CSS files.

### 2. Include the webfont stylesheet

A special CSS @font-face declaration helps the various browsers select the appropriate font it needs without causing you a bunch of headaches. Learn more about this syntax by reading the Fontspring blog post about it. The code for it is as follows:

```css
@font-face{ 
	font-family: 'MyWebFont';
	src: url('WebFont.eot');
	src: url('WebFont.eot?#iefix') format('embedded-opentype'),
	     url('WebFont.woff') format('woff'),
	     url('WebFont.ttf') format('truetype'),
	     url('WebFont.svg#webfont') format('svg');
}
```


We've already gone ahead and generated the code for you. All you have to do is link to the stylesheet in your HTML, like this:
<link rel="stylesheet" href="stylesheet.css" type="text/css" charset="utf-8" />

### 3. Modify your own stylesheet

To take advantage of your new fonts, you must tell your stylesheet to use them. Look at the original @font-face declaration above and find the property called "font-family." The name linked there will be what you use to reference the font. Prepend that webfont name to the font stack in the "font-family" property, inside the selector you want to change. For example:
p { font-family: 'MyWebFont', Arial, sans-serif; }

### 4. Test

Getting webfonts to work cross-browser can be tricky. Check other documentation here for more info about troubleshooting webfonts.
