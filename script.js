// const swup = new Swup()

// Color-changing navbar on scroll
$(function () {
    $(document).scroll(function () {
      // var $nav = document.getElementById("navbar-transparent")
      var $nav = $(".navbar_index");
      $nav.toggleClass('navbar_dark-blue', $(this).scrollTop() > 700);
      $nav.toggleClass('navbar-light', $(this).scrollTop() > 700);
    //   $nav.toggleClass('navbar-dark', $(this).scrollTop() < 700);
      if($(this).scrollTop() > 700){
          $nav.removeClass('navbar_transparent');
      }
      // $nav.classList.add('navbar-light',$(this).scrollTop() > $nav.height());
      // $nav.classList.remove('navbar-dark',$(this).scrollTop() > $nav.height());
    });
  });

function changeNavbarColor(){
    var $nav = $(".navbar");
    $nav.toggleClass('bgd-darkblue');
    // navbar = document.getElementById('navbar');

}

navbarToggled = document.getElementById('navbarToggled');


if(navbarToggled.classList.contains('show')){
    navbar.classList.add('bgd-darkblue');
}

//Draw lines acccording to doc name
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
var width = window.innerWidth;

if(page=='proyectos.html'){
    
    // Var assignment for donut elements in products
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

    //Starts, new=small
    oldGreenStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 155,
            y:125
        }
    );
    newGreenStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 150,
            y:60
        }
    );

    oldRedStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 510,
            y:140
        }
    );
    newRedStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 330,
            y:70
        }
    );

    oldBlueStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 570,
            y:365
        }
    );
    newBlueStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 390,
            y:300
        }
    );

    oldOrangeStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 332,
            y:580
        }
    );
    newOrangeStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 230,
            y:400
        }
    );

    oldPurpleStart = LeaderLine.pointAnchor(
        startElement1, {
            x: 100,
            y: 450
        }
    );
    newPurpleStart = LeaderLine.pointAnchor(
        startElement4, {
            x: 75,
            y:320
        }
    );

    //Lines for donut elements
    
    if(width >=992){
        //On desktop

        var lineGreen = new LeaderLine(
            oldGreenStart,
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
            oldRedStart,
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
            oldBlueStart,
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
            oldOrangeStart,
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
            oldPurpleStart,
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

    }else{
        //On mobile
        var lineGreen = new LeaderLine(
            newGreenStart,
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
            newRedStart,
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
            newBlueStart,
            endElement3,
            {
                color: '#ffffff',
                path: 'grid',
                tartSocket:"bottom",
                endSocket:"top",
                endPlug:'behind',
                size: 1,
                hide: true
            }
        );

        var lineOrange = new LeaderLine(
            newOrangeStart,
            endElement4,
            {
                color: '#ffffff',
                path: 'grid',
                startSocket: 'bottom',
                startSocket:"bottom",
                endSocket:"top",
                size: 1,
                hide: true
            }
        );

        var linePurple = new LeaderLine(
            newPurpleStart,
            endElement5,
            {
                color: '#ffffff',
                path: 'grid',
                startSocket:"bottom",
                endSocket:"top",
                startSocketGravity:70,
                endPlug:'behind',
                size: 1,
                hide: true
            }
        );
    }


    startElement3.addEventListener('mouseover', function(){
        lineGreen.show();
        changeProjectsLines(lineGreen);
        $(endElement1).removeClass("camouflaged_blue");
          
    });
    startElement5.addEventListener('mouseover', function(){
        lineRed.show(); 
        $(endElement2).removeClass("camouflaged_blue");
    });
    startElement1.addEventListener('mouseover', function(){
        lineBlue.show(); 
        $(endElement3).removeClass("camouflaged_blue");
    });
    startElement2.addEventListener('mouseover', function(){
        lineOrange.show();
        $(endElement4).removeClass("camouflaged_blue");
    });
    startElement4.addEventListener('mouseover', function(){
        linePurple.show();
        $(endElement5).removeClass("camouflaged_blue");
     });
    innerElement.addEventListener('mouseover', function(){
        innerElement.classList.add('opaqued_black');
        innerElementText.classList.remove('hidden');
        // document.getElementById('wrapper_donut').style.paddingTop = '5em';
    });
    drawLinesProyectos();

}else if(page=='index.html'){
    //Var assignment for path elements in index
    var imgEarth = document.getElementById('img_path_index_earth'),
    imgHands = document.getElementById('img_path_index_hands'),
    imgPeople = document.getElementById('img_path_index_people'),
    circleIndex = document.getElementById('circle_bottom_index');

    if(width >=992){

            //Lines for path elements
        var linePath1 = new LeaderLine(
            imgEarth,
            imgHands,
            {
                color: '#C47C5A',
                path: 'fluid',
                startSocket: 'bottom',
                endSocket: 'top',
                endPlug: 'behind',
                size: 3
            }
        );

        var linePath2 = new LeaderLine(
            imgHands,
            imgPeople,
            {
                color: '#C47C5A',
                path: 'fluid',
                startSocket: 'bottom',
                endSocket: 'top',
                endPlug: 'behind',
                size: 3
            }
        );

        var linePath3 = new LeaderLine(
            imgPeople,
            circleIndex,
            {
                color: '#C47C5A',
                path: 'fluid',
                startSocket: 'bottom',
                endSocket: 'top',
                endPlug: 'behind',
                size: 3
            }
        );
        drawLinesIndex();
    }
}



async function drawLinesIndex(){
    console.log('index ran')
}

async function drawLinesProyectos(){
    console.log('proyectos ran')
}


var counter = 0;

function resizeChanges() {

    const heightOutput = document.querySelector('#height');
    var width = window.innerWidth;
    const widthOutput = document.querySelector('#width');

    if(page=='proyectos.html'){
        if(width <=992){
            
            lineGreen.setOptions({start:newGreenStart});
            
            lineRed.setOptions({start:newRedStart});
            
            lineBlue.setOptions({start:newBlueStart, startSocket:"bottom", endSocket:"top"});
            
            lineOrange.setOptions({start:newOrangeStart, startSocket:"bottom", endSocket:"top"});
            
            linePurple.setOptions({start:newPurpleStart, startSocket:"bottom", endSocket:"top", startSocketGravity:80});
            console.log('mobile screen now');
    
        }else{
            lineRed.start = oldRedStart;
            lineBlue.start = oldBlueStart;
            lineGreen.setOptions({start:oldGreenStart});
            // lineRed.setOptions({start:oldRedStart});
            lineBlue.setOptions({start:oldBlueStart});
            lineOrange.setOptions({start:oldOrangeStart});
            linePurple.setOptions({start:oldPurpleStart});
            console.log('size upped');
        }

    }else if(page=='index.html'){

    }

    
}

window.onresize = resizeChanges;




function changeProjectsLines(line){
    // line.setOptions({color: '#C47C5A'});
}





async function deleteLines(){
    lineGreen.remove(); 
    lineRed.remove(); 
    lineBlue.remove(); 
    lineOrange.remove();
    linePurple.remove();
}
// document.addEventListener("DOMContentLoaded", function(){
// 
//     //dom is fully loaded, but maybe waiting on images & css files
// });

