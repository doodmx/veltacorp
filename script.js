const swup = new Swup()

// Color-changing navbar on scroll
// $(function () {
//     $(document).scroll(function () {
//       // var $nav = document.getElementById("navbar-transparent")
//       var $nav = $(".navbar");
//       $nav.toggleClass('navbar_dark-blue', $(this).scrollTop() > 700);
//       $nav.toggleClass('navbar-light', $(this).scrollTop() > 700);
//       $nav.toggleClass('navbar-dark', $(this).scrollTop() < 700);
//       // $nav.classList.add('navbar-light',$(this).scrollTop() > $nav.height());
//       // $nav.classList.remove('navbar-dark',$(this).scrollTop() > $nav.height());
//     });
//   });


var startElement1 = document.getElementById('donut_segment1'),
endElement1 = document.getElementById('description_segment1'),

startElement2 = document.getElementById('donut_segment2'),
endElement2 = document.getElementById('description_segment2'),

startElement3 = document.getElementById('donut_segment3'),
endElement3 = document.getElementById('description_segment3'),

startElement4 = document.getElementById('donut_segment4'),
endElement4 = document.getElementById('description_segment4'),

startElement5 = document.getElementById('donut_segment5'),
endElement5 = document.getElementById('description_segment5'),

innerElement = document.getElementById('inner-pie');
innerElementText = document.getElementById('parr_inner-pie');



var lineGreen = new LeaderLine(
    LeaderLine.pointAnchor(
        startElement1, {
            x: 155,
            y:125
        }
    ),
    endElement1,
    {
        color: '#ffffff',
        path: 'grid',
        endSocket: 'bottom',
        endPlug: 'behind',
        size: 1,
        hide: true
    }
);

var lineRed = new LeaderLine(
    LeaderLine.pointAnchor(
        startElement2, {
            x: 510,
            y:140
        }
    ),
    endElement2,
    {
        color: '#ffffff',
        path: 'grid',
        endSocket: 'bottom',
        endPlug:'behind',
        size: 1,
        hide: true
    }
);

var lineBlue = new LeaderLine(
    LeaderLine.pointAnchor(
        startElement3, {
            x: 570,
            y:385
        }
    ),
    endElement3,
    {
        color: '#ffffff',
        path: 'grid',
        startSocket: 'right',
        endSocket: 'top',
        endPlug:'behind',
        size: 1,
        hide: true
    }
);

var lineOrange = new LeaderLine(
    LeaderLine.pointAnchor(
        startElement4, {
            x: 352,
            y:610
        }
    ),
    endElement4,
    {
        color: '#ffffff',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'top',
        endPlug:'behind',
        size: 1,
        hide: true
    }
);

var linePurple = new LeaderLine(
    LeaderLine.pointAnchor(
        startElement4, {
            x: 100,
            y: 450
        }
    ),
    endElement5,
    {
        color: '#ffffff',
        path: 'grid',
        startSocket: 'left',
        endSocket: 'top',
        endPlug:'behind',
        size: 1,
        hide: true
    }
);




// var line4 = new LeaderLine(LeaderLine.mouseHoverAnchor(startElement3, 'draw'), endElement1);
// line4.setOptions({
//     x: 555,
//     y:125,
//     color: '#ffffff',
//     path: 'grid',
//     startSocket: 'top',
//     endSocket: 'bottom',
//     endPlug:'behind',
//     size: 1,
   
// //         hide: true
// });

// var line5 = new LeaderLine(LeaderLine.mouseHoverAnchor(startElement4, 'draw'), endElement5);
// line5.setOptions({
    
//     color: '#ffffff',
//     path: 'grid',
//     startSocket: 'left',
//     endSocket: 'top',
//     endPlug:'behind',
//     size: 1,
   
// //         hide: true
// });



// var line5 = new LeaderLine(
//     LeaderLine.mouseHoverAnchor(startElement5, 'draw', {
//       animOptions: {
//         duration: 1000
//       },
//       x: 10,
//       y: 350
//     }),
//     endElement5,
//     {
//         color: '#ffffff',
//         path: 'grid',
//         startSocket: 'left',
//         endSocket: 'top',
//         endPlug:'behind',
//         size: 1,
//         hide: true
//     }
//   );

//   var line5 = new LeaderLine(
//     LeaderLine.mouseHoverAnchor(startElement5, 'draw', {
//       animOptions: {
//         duration: 1000
//       },
//       x: 310,
//       y: 650
      
//     }),
//     endElement5,
//     {
//         color: '#ffffff',
//         path: 'grid',
//         startSocket: 'left',
//         endSocket: 'top',
//         endPlug:'behind',
//         size: 1,
//         hide: true
//     }
//   );

startElement3.addEventListener('mouseover', function(){ lineGreen.show(); });
startElement5.addEventListener('mouseover', function(){ lineRed.show(); });
startElement1.addEventListener('mouseover', function(){ lineBlue.show(); });
startElement2.addEventListener('mouseover', function(){ lineOrange.show(); });
startElement4.addEventListener('mouseover', function(){ linePurple.show(); });
innerElement.addEventListener('mouseover', function(){
    innerElement.classList.add('opaqued_black');
    innerElementText.classList.remove('hidden');
    document.getElementById('wrapper_donut').style.paddingTop = '5em';
})
 

