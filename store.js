function toggleSize1() {
    var image = document.getElementById('img1');
    image.classList.toggle('enlarged');
  
    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize2() {
    var image = document.getElementById('img2');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize3() {
    var image = document.getElementById('img3');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize4() {
    var image = document.getElementById('img4');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize5() {
    var image = document.getElementById('img5');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize6() {
    var image = document.getElementById('img6');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize7() {
    var image = document.getElementById('img7');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize8() {
    var image = document.getElementById('img8');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize9() {
    var image = document.getElementById('img9');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize10() {
    var image = document.getElementById('img10');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize11() {
    var image = document.getElementById('img11');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize12() {
    var image = document.getElementById('img12');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize13() {
    var image = document.getElementById('img13');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize14() {
    var image = document.getElementById('img14');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize15() {
    var image = document.getElementById('img15');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize16() {
    var image = document.getElementById('img16');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize17() {
    var image = document.getElementById('img17');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize18() {
    var image = document.getElementById('img18');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize19() {
    var image = document.getElementById('img19');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}
function toggleSize20() {
    var image = document.getElementById('img20');
    image.classList.toggle('enlarged');

    setTimeout(function() {
          image.classList.remove('enlarged');
            }, 3000); 
}

function updateStock1() {
    // Get the current stock and quantity values
    var stock1 = parseInt(document.getElementById('stock1').innerText);
    var qty1 = parseInt(document.getElementById('qty1').value);
   var total1 = parseInt(document.getElementById('total1').innerText);

    // Calculate the new stock level
    var newStock1 = stock1 - qty1;
  var newtotal1 = qty1 * 2000;

    // Update the stock display
    document.getElementById('stock1').innerText = newStock1;
   document.getElementById('total1').innerText = newtotal1;
}
function updateStock2() {
    // Get the current stock and quantity values
    var stock2 = parseInt(document.getElementById('stock2').innerText);
    var qty2 = parseInt(document.getElementById('qty2').value);
   var total2 = parseInt(document.getElementById('total2').innerText);

    // Calculate the new stock level
    var newStock2 = stock2 - qty2;
  var newtotal2 = qty2 * 1200;


    // Update the stock display
    document.getElementById('stock2').innerText = newStock2;
   document.getElementById('total2').innerText = newtotal2;

}
function updateStock3() {
    // Get the current stock and quantity values
    var stock3 = parseInt(document.getElementById('stock3').innerText);
    var qty3 = parseInt(document.getElementById('qty3').value);
    var total3 = parseInt(document.getElementById('total3').innerText);
    // Calculate the new stock level
    var newStock3 = stock3 - qty3;
    var newtotal3 =qty3 * 1800;

    // Update the stock display
    document.getElementById('stock3').innerText = newStock3;
    document.getElementById('total3').innerText = newtotal3;
}
function updateStock4() {
    // Get the current stock and quantity values
    var stock4 = parseInt(document.getElementById('stock4').innerText);
    var qty4 = parseInt(document.getElementById('qty4').value);
   var total4 = parseInt(document.getElementById('total4').innerText);

    // Calculate the new stock level
    var newStock4 = stock4 - qty4;
  var newtotal4 = qty4 * 1500;

    // Update the stock display
    document.getElementById('stock4').innerText = newStock4;
   document.getElementById('total4').innerText = newtotal4;
   
}
function updateStock5() {
    // Get the current stock and quantity values
    var stock5 = parseInt(document.getElementById('stock5').innerText);
    var qty5 = parseInt(document.getElementById('qty5').value);
    var total5 = parseInt(document.getElementById('total5').innerText);

    // Calculate the new stock level
    var newStock5 = stock5 - qty5;
    var newtotal5 = qty5 * 400;

    // Update the stock display
    document.getElementById('stock5').innerText = newStock5;
    document.getElementById('total5').innerText = newtotal5;
}
function updateStock6() {
    // Get the current stock and quantity values
    var stock6 = parseInt(document.getElementById('stock6').innerText);
    var qty6 = parseInt(document.getElementById('qty6').value);
    var total6 = parseInt(document.getElementById('total6').innerText);
    // Calculate the new stock level
    var newStock6 = stock6 - qty6;
    var newtotal6 = qty6 * 500;
    // Update the stock display
    document.getElementById('stock6').innerText = newStock6;
    document.getElementById('total6').innerText = newtotal6;
}
function updateStock7() {
    // Get the current stock and quantity values
    var stock7 = parseInt(document.getElementById('stock7').innerText);
    var qty7 = parseInt(document.getElementById('qty7').value);
    var total7 = parseInt(document.getElementById('total7').innerText);
    // Calculate the new stock level
    var newStock7 = stock7 - qty7;
    var newtotal7 = qty7 * 850;
    // Update the stock display
    document.getElementById('stock7').innerText = newStock7;
    document.getElementById('total7').innerText = newtotal7;
}
function updateStock8() {
    // Get the current stock and quantity values
    var stock8 = parseInt(document.getElementById('stock8').innerText);
    var qty8 = parseInt(document.getElementById('qty8').value);
    var total8 = parseInt(document.getElementById('total8').innerText);

    // Calculate the new stock level
    var newStock8 = stock8 - qty8;
    var newtotal8 =qty8 * 800;

    // Update the stock display
    document.getElementById('stock8').innerText = newStock8;
    document.getElementById('total8').innerText = newtotal8;
   
   
}
function updateStock9() {
    // Get the current stock and quantity values
    var stock9 = parseInt(document.getElementById('stock9').innerText);
    var qty9 = parseInt(document.getElementById('qty9').value);
    var total9 = parseInt(document.getElementById('total9').innerText);


    // Calculate the new stock level
    var newStock9 = stock9 - qty9;	
    var newtotal9 =qty9 * 3000;

    // Update the stock display
    document.getElementById('stock9').innerText = newStock9;
    document.getElementById('total9').innerText = newtotal9;
}
function updateStock10() {
    // Get the current stock and quantity values
    var stock10 = parseInt(document.getElementById('stock10').innerText);
    var qty10 = parseInt(document.getElementById('qty10').value);
    var total10 = parseInt(document.getElementById('total10').innerText);
    // Calculate the new stock level
    var newStock10 = stock10 - qty10;
    var newtotal10 = qty10 * 6000;

    // Update the stock display
    document.getElementById('stock10').innerText = newStock10;
    document.getElementById('total10').innerText = newtotal10;
}
function updateStock11() {
    // Get the current stock and quantity values
    var stock11 = parseInt(document.getElementById('stock11').innerText);
    var qty11 = parseInt(document.getElementById('qty11').value);
    var total11 = parseInt(document.getElementById('total11').innerText);

    // Calculate the new stock level
    var newStock11 = stock11 - qty11;
  var newtotal11 = qty11 * 2000;

    // Update the stock display
    document.getElementById('stock11').innerText = newStock11;
   document.getElementById('total11').innerText = newtotal11;
}
function updateStock12() {
    // Get the current stock and quantity values
    var stock12 = parseInt(document.getElementById('stock12').innerText);
    var qty12 = parseInt(document.getElementById('qty12').value);
   var total12 = parseInt(document.getElementById('total12').innerText);

    // Calculate the new stock level
    var newStock12 = stock12 - qty12;
  var newtotal12 = qty12 * 5500;

    // Update the stock display
    document.getElementById('stock12').innerText = newStock12;
   document.getElementById('total12').innerText = newtotal12;
}
function updateStock13() {
    // Get the current stock and quantity values
    var stock13 = parseInt(document.getElementById('stock13').innerText);
    var qty13 = parseInt(document.getElementById('qty13').value);
   var total13 = parseInt(document.getElementById('total13').innerText);

    // Calculate the new stock level
    var newStock13 = stock13 - qty13;
  var newtotal13 = qty13 * 800;

    // Update the stock display
    document.getElementById('stock13').innerText = newStock13;
   document.getElementById('total13').innerText = newtotal13;
}
function updateStock14() {
    // Get the current stock and quantity values
    var stock14 = parseInt(document.getElementById('stock14').innerText);
    var qty14 = parseInt(document.getElementById('qty14').value);
   var total14 = parseInt(document.getElementById('total14').innerText);

    // Calculate the new stock level
    var newStock14 = stock14 - qty14;
  var newtotal14 = qty14 * 850;

    // Update the stock display
    document.getElementById('stock14').innerText = newStock14;
   document.getElementById('total14').innerText = newtotal14;
}
function updateStock15() {
    // Get the current stock and quantity values
    var stock15 = parseInt(document.getElementById('stock15').innerText);
    var qty15 = parseInt(document.getElementById('qty15').value);
   var total15 = parseInt(document.getElementById('total15').innerText);

    // Calculate the new stock level
    var newStock15 = stock15 - qty15;
  var newtotal15 = qty15 * 1200;

    // Update the stock display
    document.getElementById('stock15').innerText = newStock15;
   document.getElementById('total15').innerText = newtotal15;
}
function updateStock16() {
    // Get the current stock and quantity values
    var stock16 = parseInt(document.getElementById('stock16').innerText);
    var qty16 = parseInt(document.getElementById('qty16').value);
   var total16 = parseInt(document.getElementById('total16').innerText);

    // Calculate the new stock level
    var newStock16 = stock16 - qty16;
  var newtotal16 = qty16 * 700;

    // Update the stock display
    document.getElementById('stock16').innerText = newStock16;
   document.getElementById('total16').innerText = newtotal16;
}
function updateStock17() {
    // Get the current stock and quantity values
    var stock17 = parseInt(document.getElementById('stock17').innerText);
    var qty17 = parseInt(document.getElementById('qty17').value);
   var total17 = parseInt(document.getElementById('total17').innerText);

    // Calculate the new stock level
    var newStock17 = stock17 - qty17;
  var newtotal17 = qty17 * 19000;

    // Update the stock display
    document.getElementById('stock17').innerText = newStock17;
   document.getElementById('total17').innerText = newtotal17;
}
function updateStock18() {
    // Get the current stock and quantity values
    var stock18 = parseInt(document.getElementById('stock18').innerText);
    var qty18 = parseInt(document.getElementById('qty18').value);
    var total18 = parseInt(document.getElementById('total18').innerText);

    // Calculate the new stock level
    var newStock18 = stock18 - qty18;
  var newtotal18 = qty18 * 10000;

    // Update the stock display
    document.getElementById('stock18').innerText = newStock18;
   document.getElementById('total18').innerText = newtotal18
}
function updateStock19() {
    // Get the current stock and quantity values
    var stock19 = parseInt(document.getElementById('stock19').innerText);
    var qty19 = parseInt(document.getElementById('qty19').value);
    var total19 = parseInt(document.getElementById('total19').innerText);

    // Calculate the new stock level
    var newStock19 = stock19 - qty19;
  var newtotal19 = qty19 * 26000;

    // Update the stock display
    document.getElementById('stock19').innerText = newStock19;
    document.getElementById('total19').innerText = newtotal19;
}
function updateStock20() {
    // Get the current stock and quantity values
    var stock20 = parseInt(document.getElementById('stock20').innerText);
    var qty20 = parseInt(document.getElementById('qty20').value);
   var total20 = parseInt(document.getElementById('total20').innerText);

    // Calculate the new stock level
    var newStock20 = stock20 - qty20;
  var newtotal20 = qty20 * 30000;
  
    
    // Update the stock display
    document.getElementById('stock20').innerText = newStock20;
   document.getElementById('total20').innerText = newtotal20;
}
function hideButtons() {
    var buttons = document.getElementsByClassName("addstock");
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
    }
}

// Example: call hideButtons() to hide the buttons
hideButtons();

function additems() {
        var back = document.getElementById("back");
        back.style.display = "block";
        
     var addd = document.getElementById("addd");
        addd.style.display = "none";

    var hiddenButtons = document.getElementsByClassName("addstock");

    // Loop through each hidden button and show it
    for (var i = 0; i < hiddenButtons.length; i++) {
    hiddenButtons[i].style.display = "inline-block";
    }
}
function backmain() {
        var back = document.getElementById("back");
        back.style.display = "none";
        
     var addd = document.getElementById("addd");
        addd.style.display = "block";

    var hiddenButtons = document.getElementsByClassName("addstock");

    // Loop through each hidden button and show it
    for (var i = 0; i < hiddenButtons.length; i++) {
    hiddenButtons[i].style.display = "none";
    }
}

function finalprice() {
    // Get the current stock and quantity values
    var ftotal = parseInt(document.getElementById('fprice').innerText);
    var total1 = parseInt(document.getElementById('total1').innerText);
    var total2 = parseInt(document.getElementById('total2').innerText);
    var total3 = parseInt(document.getElementById('total3').innerText);
    var total4 = parseInt(document.getElementById('total4').innerText);
    var total5 = parseInt(document.getElementById('total5').innerText);
    var total6 = parseInt(document.getElementById('total6').innerText);
    var total7 = parseInt(document.getElementById('total7').innerText);
    var total8 = parseInt(document.getElementById('total8').innerText);
    var total9 = parseInt(document.getElementById('total9').innerText);
    var total10 = parseInt(document.getElementById('total10').innerText);
    var total11 = parseInt(document.getElementById('total11').innerText);
    var total12 = parseInt(document.getElementById('total12').innerText);
    var total13 = parseInt(document.getElementById('total13').innerText);
    var total14 = parseInt(document.getElementById('total14').innerText);
    var total15 = parseInt(document.getElementById('total15').innerText);
    var total16 = parseInt(document.getElementById('total16').innerText);
    var total17 = parseInt(document.getElementById('total17').innerText);
    var total18 = parseInt(document.getElementById('total18').innerText);
    var total19 = parseInt(document.getElementById('total19').innerText);
    var total20 = parseInt(document.getElementById('total20').innerText);

    // Calculate the new stock level
    var newftotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 +
    total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18 + total19 + total20;
  

    // Update the stock display
    document.getElementById('fprice').innerText = newftotal;
    
}
 // Function to scroll the webpage to the top
 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}

// Show the scroll to top button when user scrolls down
window.onscroll = function() {
    var button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Function to apply the selected discount
function applyDiscount() {
  // Get the selected discount value from the dropdown
  var discount = parseFloat(document.getElementById("discountDropdown").value);
  
  // Get the original price from the fprice span
  var originalPrice = parseFloat(document.getElementById("fprice").innerText);

  // Calculate the discounted price
  var discountedPrice = originalPrice - (originalPrice * discount);

  // Display the discounted price
  document.getElementById("discountedPriceLabel").innerText = "Discounted Price: ₱" + discountedPrice.toFixed(2);
}


window.onload = function() {
  document.getElementById('stock1').innerText = localStorage.getItem('stock1') || '10';
  document.getElementById('stock2').innerText = localStorage.getItem('stock2') || '10';
  document.getElementById('stock3').innerText = localStorage.getItem('stock3') || '10';
  document.getElementById('stock4').innerText = localStorage.getItem('stock4') || '10';
  document.getElementById('stock5').innerText = localStorage.getItem('stock5') || '10';
  document.getElementById('stock6').innerText = localStorage.getItem('stock6') || '10';
  document.getElementById('stock7').innerText = localStorage.getItem('stock7') || '10';
  document.getElementById('stock8').innerText = localStorage.getItem('stock8') || '10';
  document.getElementById('stock9').innerText = localStorage.getItem('stock9') || '10';
  document.getElementById('stock10').innerText = localStorage.getItem('stock10') || '10';
  document.getElementById('stock11').innerText = localStorage.getItem('stock11') || '10';
  document.getElementById('stock12').innerText = localStorage.getItem('stock12') || '10';
  document.getElementById('stock13').innerText = localStorage.getItem('stock13') || '10';
  document.getElementById('stock14').innerText = localStorage.getItem('stock14') || '10';
  document.getElementById('stock15').innerText = localStorage.getItem('stock15') || '10';
  document.getElementById('stock16').innerText = localStorage.getItem('stock16') || '10';
  document.getElementById('stock17').innerText = localStorage.getItem('stock17') || '10';
  document.getElementById('stock18').innerText = localStorage.getItem('stock18') || '10';
  document.getElementById('stock19').innerText = localStorage.getItem('stock19') || '10';
  document.getElementById('stock20').innerText = localStorage.getItem('stock20') || '10';
};
