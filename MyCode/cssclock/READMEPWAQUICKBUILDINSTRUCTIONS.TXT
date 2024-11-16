Update , 

The real PWA Build Instructions , 
By Vampeyer ,
--- hmu for questions , I pwn ChatGPT on the regular. 


PWA Build Instuctions , from the top. 


1 . Make sure this little meta tag is in the html like this ,  
 <meta content="width=device-width, initial-scale=1.0" name="viewport"> 


 2.    Get the manifest.json file in there  , 
 
Make it look somewthing    like this 
     
     {
  "name": "Jacob Thompson ",
  "short_name": "My Profile",
  "icons": [
    {
      "src": "./assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./assets/icon-384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "./assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "index.html",
  "display": "standalone",
  "orientation": "portrait"
}


4. PUT those icons in there  , they all have to be in there , 
they all have to be the right dimensions.  
Place them in there to get it too work. 




5. Put the RIGHT service worker in there , 
here we are just saving it as sw.js 





6.  Instantiate that service worker in the HTML.
 
 Meaning , at the bottom of , inside the body tag , 
 put this script in it . 





  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
      });
    }
  </script>
















Making a PWA from  this PWA repository  , 



#1 , the index.html files are in the root directory, 
   while the javascript is in the 
   /JS folder , 
   and the CSS is in the 
   /css Folder

   --- step one is to delete these 3  files , and replace them with your 
    index.html file , 
    style.css         -- css file  , located in css/style.css 
    main.js    -- js file in /js/main.js 

#2 After placing the files in the correct directories , 
make sure to replace , 
in the index.html, the paths for the newly placed html and css. 



#3 