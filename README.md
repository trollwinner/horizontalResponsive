horizontalResponsive
====================
Places element's children on one line and set their width as it was before js init

```html
<div style="overflow: scroll">
  <div class="js-selector">
      <div class="col-md-3 col-sm-4 col-xs-6">content</div>
      <div class="col-md-3 col-sm-4 col-xs-6">content</div>
      <div class="col-md-3 col-sm-4 col-xs-6">content</div>
      ...
      <div class="col-md-3 col-sm-4 col-xs-6">content</div>
  </div>
</div>
```
init:
```javascript
jQuery('.js-selector').horizontalResponsive();
```
