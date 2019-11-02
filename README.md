FL Autoplaceholder
====================================

Library auto set attribute **placeholder** for element **form**

Getting started
----------
**Include**
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./js/fl-autoplaceholder.js"></script>
```
**html**
```html
 <form id="form">
    <label for="first_name">First name</label>
    <input type="text" name="first_name" />
    <label for="last_name">Last name</label>
    <input type="text" name="last_name" />
 </form>
```
**js**
```html
$('#form').flAutoplaceholder();
```
