
    fetch('https://gnews.io/api/v4/top-headlines?&token=4cee6301b5f853ad0f0c67d26c36ef94&lang=en')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       var html = '';
      console.log(data)
       for(var i = 0; i < data.articles.length; i++) {       
        html += '<ul>';
    
        html += '<li>'; 
        
          html += '<img src="'+ data.articles[i].image + '">';
            html += '<div>';
            html += '<a href="'+ data.articles[i].url+'" target="_blank"><b>'+ data.articles[i].title  + '</b></a>';
               html +=  '<p>'+data.articles[i].description + '</p>';
           html += '</div>';
        html += '</li>';
        html += '</ul>';

       }
       document.getElementById('container').innerHTML = html;
    });
    function mySearch(){   

      var input = document.getElementById('search1').value;
      console.log(input);
      fetch(`https://gnews.io/api/v4/search?q=${input}&token=4cee6301b5f853ad0f0c67d26c36ef94&lang=en&max=3`)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
         var html = '';
         for(var i = 0; i < data.articles.length; i++) {       
          html += '<ul>';
      
          html += '<li>'; 
          
            html += '<img src="'+ data.articles[i].image + '">';
              html += '<div>';
                 html += '<a href="'+ data.articles[i].url+'" target="_blank"><b>'+ data.articles[i].title  + '</b></a>';
                 html +=  '<p>'+data.articles[i].description + '</p>';
             html += '</div>';
          html += '</li>';
          html += '</ul>';
  
         }
         document.getElementById('container').innerHTML = html;
        
      });
      

  }
   