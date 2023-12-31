## This is CSS Perspective Playground

#### It is a playground for css transform properties, and it's relation with the 3D. You can play with it to understand what each transform property does to the object in the box.

 Below are the screenshots of the application and which explains the vue process during it's lifecycle hooks...

<i>Screenshots:</i>

After Mapping the vue instance config data properties to the vue template.

![perspective-playground-1.png](playground-images%2Fperspective-playground-1.png)

After using string interpolation in the vue template to show the data property values in the rendering same as the scroll value.

![perspective-playground-2.png](playground-images%2Fperspective-playground-2.png)

As you can see, when I scroll, the data values show as per the data mapped to the template using string interpolation

![perspective-playground-3.png](playground-images%2Fperspective-playground-3.png)

Next, It's time to show the result in the right box square as per the scrolled value selected in the left settings panel.

![perspective-playground-4.png](playground-images%2Fperspective-playground-4.png)

Next Step is to enable the RESET button functionality which would use the click event vue binding resulting in running a callback called reset() written in the methods of our vue instance.

![perspective-playground-5.png](playground-images%2Fperspective-playground-5.png)

Look RESET button is working perfectly fine..

![perspective-playground-6.gif](playground-images%2Fperspective-playground-6.gif)

Finally, we make the COPY button work by using the same click event binding in the vue template which invokes the copy() method in our vue instance.

This copy functionality depends on a browser object called NAVIGATOR, which we would call and use it's clipboard() method to finally call the writeText() via it's API inorder to copy the contents to the browser clipboard. You can use another method called read() or readText() inorder to get the data from the browser's clipboard.

![perspective-playground-7.gif](playground-images%2Fperspective-playground-7.gif)

![perspective-playground-8.png](playground-images%2Fperspective-playground-8.png)

Please Note: writeText() is an async method and returns a promise, therefore we need to await it.
