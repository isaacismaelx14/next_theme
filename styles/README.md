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

---
## Weights

The weights are used for values as margins or paddings.

Example for paddings: `p-1` this will add a padding with `10px` converted to `rem`.

### Modify or add new one

To add a new one or modify you can follow these steps: 

1) Go to `settings/_variables.scss` and look for `$_weights` and `$_nums`. Looks like: 

```scss
$_nums: (1, 2, 3, 4, 5);
$_weights: (
    1: 10px,
    2: 20px,
    3: 30px,
    4: 40px,
    5: 50px
);
```
If you want to modify one of these you just need to modify the value of the number in the `$_weights` object that you wants to modify.

***Note: Only  use pixels. This value going to be converted into REM.***

**IMPORTANT:** "Do not modify the `key` just modify the value, example: If you wants that the `p-2` be `15px` you should modify the value `2: 20px` to `2: 15px`. Never make the `2` as a `3` or another number. If you wants to add or modify the number by another one follow the next steps."

2) If you wants to add a new one first you must to add the number that you want to add to the `$_nums` array. ***Note: "Is recomendable follow the numbers secuence. But is not mandatory."***

```scss
$_nums: (1, 2, 3, 4, 5, 6); /*we added the 6*/
```

3) Now add the number to the `$_weights` object, this value must be in `px`. 
```scss
$_weights: (
    1: 10px,
    2: 20px,
    3: 30px,
    4: 40px,
    5: 50px,
    6: 55px /*We add the value of 55px to the number in pixels*/
);
```
***Note: In case that you wants to modify the secuence you shoul follow the step 2 and change the number that you wants to modify in the array and in the object*** Example: 
```scss
/*THIS IS FOR MODIFY THE VALUE*/
$_nums: (100, 200, 300, 400, 500, 600);
$_weights: (
    100: 10px,
    200: 20px,
    300: 30px,
    400: 40px,
    500: 50px,
);
/*Now you should use p-100, m-200, etc... */
```
**IMPORTANT:** "Keep in mind if you modify one of these value **YOU SHOULD** filter all documents to change the old value to the new one. Ex: `p-2` going to be `p-200`"

4) Once time you added the new value you going to be able to use it in your html.

```html
<div className="p-6"></div>
```

