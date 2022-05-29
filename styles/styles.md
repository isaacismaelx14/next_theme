# Styles documentation

## Themes:
The themes are the differents colors that you can add to your styles. You can modify the colors that are already registered or you can add a new one. 

### How can I add a new one? 

To add a new theme you can follow this steps: 

1) To add a new theme you should go to `settings/_variables.scss` and add the new theme's name to the array. Example: 

```scss
$themes: ("primary", "custom_primary", "secondary", "danger", "warning");
```
*We added the `custom_primary`*

2) Then you should go to `settings/_colors.scss` and add the new color to the object `$cst-colors`. Example

```scss
$cst-colors: (
    primary: #6492ff,
    secondary: #5e1c1c,
    warning: #fac000,
    danger: #c53232,
    custom_primary: #f20203 /*new color*/

    white: #fff,
    black: #000
);
```

3) The last pass is add the contrast color, this color is that will be used for the text color when you use this color as background, this can be an button or any other background color. This is in the same file that is the `$cst-color` the name of the object is `$cst-contrast_colors`. 

```scss
$cst-contrast_colors: (
    primary: $cst-white-color,
    secondary: $cst-white-color,
    warning: $cst-white-color,
    danger: $cst-white-color,
    custom_primary: #260000 /*new contrast color*/

    white: $cst-black-color,
    black:$cst-white-color
);
```

In case that you going to use a *white* or *black* color you can use the variables already registered for this color, these variables are: 

- `$cst-white-color` for *white*
- `$cst-black-color` for *black*

After this you going to be able to use the new theme. You can do it call it from your HTML like this: 

```html
<button className="btn btn-custom_primary">This is a custom theme</button>
```

*In this example we use it for a button, that have the estructure `btn-theme` in this case `btn-custom_primary`*