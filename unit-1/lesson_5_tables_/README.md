### Warmup 

Take a look at the index.html and the rendering on the right and explain the following: 
1. What is the `table` element used for?
2. What is the `tr` and `td`? What is their relationship?
3. How does `tr` and `td` work together to create the preview (rendering)? 


### Our Task

1. What do we notice when we adjust width and height of rows and columns?
  ```css
  td {
    width: 100px;
  }

  tr {
    height: 100px;
  }
  ```
- what if you add padding to td? 


2. `<thead>`, `<tbody>`  are similiar to `<header>`, `<main>`, in our everday html structure. How could we put them in our current html structure? Do it!

3. Let's add borders to EVERY cell? Go to your CSS and find out which html element will give us borders for each cell: `<table>? <thead>? <tbody>? <td>?`

4. Try `border-spacing` property on the `<table>` element in your CSS? Try it with 5px and then with 50px? Where is space being applied?

5. How can we make the spacing as close to the illustration as possible? 

6. Try `border-collapse` on the table. What happens? 

  ```css
  table {
    border: 1px solid black;
    border-collapse: collapse;
  }
  ```
```another option:```
```css 
 border-collapse: border-separate;

```

7. 
```css
table, table * {
  border: 1px solid black;
  border-collapse: collapse;
}
```
8. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: beige;
  }
 ```

9. Demonstrate`colspan` attribute.
  ```html
   <tfoot>
      <tr>
        <td colspan="6">This is the footer</td>
      </tr>
   </tfoot>
  ```



10. Demonstrate`rowspan` attribute.
  ```html
  <th rowspan="2" scope="row">3rd Period</th>
  ```


11. Add `scope` attributes to `<th>`s and then target those attributes for styling using an attribute selector.
  ```css
    th[scope="row"] {
    background-color: darkgray;
    color: #ffffff;
  }
  ```


12. Use the `:nth-child` **pseudo-class** to target another row or.
  ```css
    tr:nth-child(3) {
    background-color: lightgray;
  }
  ```


13. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: beige;
  }
 ```
14. Play around with text alignment by targeting the `text-align` property of the `td` element.
  ```css
  td {
    text-align: center;
  }
  ```
  
15. Play around with background colors.
  ```css
  thead {
    background-color: gray;
  }
  ```

16. 

```css
table, table * {
  border: 1px solid black;
  border-collapse: collapse;
}
```


### Labs 2:00pm - 3:15pm 

* Planetary Labs (Canvas) Due Thursday 8am

