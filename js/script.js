    //Timer
    // Set the date we're counting down to
    var countDownDate = new Date("May 1, 2019 15:37:25").getTime();
    
    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    //Chart
    window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light2", "dark1", "dark2"
    animationEnabled: false, // change to true
    title:{
        text: 'סה"כ הוצאות'
    },
    axisY:{
		title:"בשקלים (₪)"
    },
    axisX:{
		title:'30,000₪'
    },
    data: [
    {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: [
            { label: "מקסיקו",  y: 5000  },
            { label: "ברזיל", y: 5000 },
            { label: "פרו", y: 5000 },
            { label: "קולומביה",  y: 5000  },
            { label: "ארגנטינה",  y: 5000  }
        ]
    }
    ]
    });
    chart.render();
    }


    //Create list
    let list1 = document.querySelector('#list1');

    let newValue = localStorage.getItem('New');

    list1.addEventListener('click', addList);

    
    function addList(){
        var newInput = document.querySelector('#nameInput').value;

        var needList = [];

        needList.push(newInput);

        localStorage.setItem('needlist', JSON.stringify(newInput));
        // this.name = _name;
    
        let newLi = document.createElement("li");
        newLi.className = "list-unstyled mb-4";
        newLi.innerHTML += newInput;
        newLi.innerHTML += `<i class="fa fa-check green-text ml-1"></i><hr>`;
    
        newList.appendChild(newLi);
    }

    // addList('אוהל');
    // addList('נעליים');

    //--------------------------------------------

    (function(){
  
        var list = document.querySelector('#list'),
            form = document.querySelector('form'),
            item = document.querySelector('#item');
        
        form.addEventListener('submit',function(e){
          e.preventDefault();
          list.innerHTML += '<li>' + item.value + '</li>';
          store();
          item.value = "";
        },false)
        
        list.addEventListener('click',function(e){
          var t = e.target;
          if(t.classList.contains('checked')){
            t.parentNode.removeChild(t);
          } else {
            t.classList.add('checked');
          }
          store();
        },false)
        
        function store() {
          window.localStorage.myitems = list.innerHTML;
        }
        
        function getValues() {
          var storedValues = window.localStorage.myitems;
          if(!storedValues) {
            list.innerHTML = '<li>Make a to do list</li>'+
                             '<li>Check off first thing on the to do list</li>'+
                             '<li>Realize you have already accomplished 2 things in the list</li>'+
                             '<li>Reward yourself with a nap</li>';
          }
          else {
            list.innerHTML = storedValues;
          }
        }
        getValues();
      })();







