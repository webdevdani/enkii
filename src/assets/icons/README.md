# Icons

When adding a new icon, copy over the SVG code into a new functional component, and then follow these steps for cleaning it up:

1. Remove the `?xml` tag and `xmlns:xlink` property
2. Remove any comments
3. Change the fill to be `currentColor`
4. Rename any properties with dashes in them to be camel case. Ex: `fill-rule` -> `fillRule`
5. Change the title to be a prop. The default can be the icons name, but it should have an optional prop that can replace that title.
