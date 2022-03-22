const swup = new Swup()



var startElement1 = document.getElementById('donut_segment1'),
endElement1 = document.getElementById('description_segment1'),

startElement2 = document.getElementById('donut_segment2'),
endElement2 = document.getElementById('description_segment2'),

startElement3 = document.getElementById('donut_segment3'),
endElement3 = document.getElementById('description_segment3'),

startElement4 = document.getElementById('donut_segment4'),
endElement4 = document.getElementById('description_segment4'),

startElement5 = document.getElementById('donut_segment5'),
endElement5 = document.getElementById('description_segment5');

var line1 = new LeaderLine(
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
        size: 1
    }
);

var line2 = new LeaderLine(
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
        size: 1
    }
);

var line3 = new LeaderLine(
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
        size: 1
    }
);

var line4 = new LeaderLine(
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
        size: 1
    }
);

