FL-Library-Autoplaceholder
====================================

Library สร้าง Attribute **placeholder** อัตโนมัติ สำหรับ element **input** โดยนำ text จาก label เป็นค่า value ของ **placeholder**
----------
### ตัวอย่าง
**using**
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./js/fl-autoplaceholder.js"></script>
```
**html**
```html
 <form id="form">
    <label for="first_name">ชื่อ</label>
    <input type="text" name="first_name" />
    <label for="last_name">นามสกุล</label>
    <input type="text" name="last_name" />
 </form>
```
**js**
```html
$('#form').flAutoplaceholder();
```
