var windowOrigSizeX = 0;
var windowOrigSizeY = 0;
var windowOrigPosX = 0;
var windowOrigPosY = 0;

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
var wdrag = function(){
    return {
        move : function(divid,xpos,ypos){
            divid.style.left = xpos + 'px';
            divid.style.top = ypos + 'px';
        },
        startMoving : function(divid,container,evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
            divTop = divid.style.top,
            divLeft = divid.style.left,
            eWi = parseInt(divid.style.width),
            eHe = parseInt(divid.style.height),
            cWi = parseInt(document.getElementById(container).style.width),
            cHe = parseInt(document.getElementById(container).style.height);
            document.getElementById(container).style.cursor='default';
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    //if (aX < 0) aX = 0;
                    //if (aY < 0) aY = 0;
                    if (aX + eWi > cWi) aX = cWi - eWi;
                    if (aY + eHe > cHe) aY = cHe -eHe;
                wdrag.move(divid,aX,aY);
            }
        },
        stopMoving : function(container){
            var a = document.createElement('script');
            document.getElementById(container).style.cursor='default';
            document.onmousemove = function(){}
        },
    }
}();

function addEvent(obj, evt, fn) {
if (obj.addEventListener) {
 obj.addEventListener(evt, fn, false);
}
else if (obj.attachEvent) {
 obj.attachEvent("on" + evt, fn);
}
}
addEvent(window,"load",function(e) {
addEvent(document, "mouseout", function(e) {
 e = e ? e : window.event;
 var from = e.relatedTarget || e.toElement;
 if (!from || from.nodeName == "HTML") {
     // stop your drag event here

     wdrag.stopMoving("container")
 }
});
});
function removeWindow() {
  var fw = document.getElementById("base");
  var mw = document.getElementById("hbase");
  fw.outerHTML = "";
  mw.outerHTML = "";
  delete fw;
  delete mw;
  return true;
}
function minimizeWindow() {
  var fw = document.getElementById("base");
  var mw = document.getElementById("hbase");
  fw.style.visibility = 'hidden';
  mw.style.visibility = 'visible';
  return true;
}
function restoreWindow() {
  var fw = document.getElementById("base");
  var mw = document.getElementById("hbase");
  var fwt = document.getElementById("title");
  var mwt = document.getElementById("htitle");
  var closebtnbg = document.getElementById("closebtnbg");
  var closebtnbgia = document.getElementById("closebtnbgia");
  var minimizebtnbg = document.getElementById("minimizebtnbg");
  var minimizebtnbgia = document.getElementById("minimizebtnbgia");
  fw.style.visibility = 'visible';
  mw.style.visibility = 'hidden';
  fwt.style.background = 'linear-gradient(to right, #042967 0%,#a5cef7 100%)';
  mwt.style.background = 'linear-gradient(to right, #808080 0%,#bfbfbf 100%)';
  closebtnbg.style.background = '#a5cef7';
  closebtnbgia.style.background = '#c0c0c0';
  minimizebtnbg.style.background = '#a5cef7';
  minimizebtnbgia.style.background = '#c0c0c0';
  return true;
}
addEvent(window, "resize", function(event) {
  var vhbase = document.getElementById("hbase");
  vhbase.style.top = height - 24 + 'px';
});
document.addEventListener('contextmenu', event => event.preventDefault());

function checkWindows() {
  var fw = getComputedStyle(document.getElementById("base"));
  var mw = getComputedStyle(document.getElementById("hbase"));
  var fwt = document.getElementById("title");
  var mwt = document.getElementById("htitle");
  var closebtnbg = document.getElementById("closebtnbg");
  var closebtnbgia = document.getElementById("closebtnbgia");
  var minimizebtnbg = document.getElementById("minimizebtnbg");
  var minimizebtnbgia = document.getElementById("minimizebtnbgia");
  if (event.clientX >= parseInt(fw.left)) {
    if (event.clientX <= parseInt(fw.left) + parseInt(fw.width)) {
      if (event.clientY >= parseInt(fw.top)) {
        if (event.clientY <= parseInt(fw.top) + parseInt(fw.height)) {
          fwt.style.background = 'linear-gradient(to right, #042967 0%,#a5cef7 100%)';
          mwt.style.background = 'linear-gradient(to right, #808080 0%,#bfbfbf 100%)';
          closebtnbg.style.background = '#a5cef7';
          closebtnbgia.style.background = '#c0c0c0';
          minimizebtnbg.style.background = '#a5cef7';
          minimizebtnbgia.style.background = '#c0c0c0';
          return true;
        }
      }
    }
  }
  if (event.clientX >= parseInt(mw.left)) {
    if (event.clientX <= parseInt(mw.left) + parseInt(mw.width)) {
      if (event.clientY >= parseInt(mw.top)) {
        if (event.clientY <= parseInt(mw.top) + parseInt(mw.height)) {
          mwt.style.background = 'linear-gradient(to right, #042967 0%,#a5cef7 100%)';
          fwt.style.background = 'linear-gradient(to right, #808080 0%,#bfbfbf 100%)';
          closebtnbg.style.background = '#c0c0c0';
          closebtnbgia.style.background = '#a5cef7';
          minimizebtnbg.style.background = '#c0c0c0';
          minimizebtnbgia.style.background = '#a5cef7';
          return true;
        }
      }
    }
  }
  mwt.style.background = 'linear-gradient(to right, #808080 0%,#bfbfbf 100%)';
  fwt.style.background = 'linear-gradient(to right, #808080 0%,#bfbfbf 100%)';
  closebtnbg.style.background = '#c0c0c0';
  closebtnbgia.style.background = '#c0c0c0';
  minimizebtnbg.style.background = '#c0c0c0';
  minimizebtnbgia.style.background = '#c0c0c0';
  return true;
}

function resizeWindow(nsx, nsy) {
  //if (nsx < 112) {return false;}
  //if (nsy < 27) {return false;}
  var nsx=665;
  var nsy=330;
  if (nsx < 112) {
    if (nsy < 27) {
      resizeWindow(112, 27);
      return true;
    } else {
      resizeWindow(112, nsy);
      return true;
    }
  } else if (nsy < 27) {
    resizeWindow(nsx, 27);
    return true;
  }
  var fw = document.getElementById("base");
  var fw2 = document.getElementById("base2");
  var fw3 = document.getElementById("base3");
  var fw4 = document.getElementById("base4");
  var fw5 = document.getElementById("base5");
  var fwt = document.getElementById("title");
  fw.style.width = nsx + 'px';
  fw2.style.width = nsx - 1 + 'px';
  fw3.style.width = nsx - 2 + 'px';
  fw4.style.width = nsx - 3 + 'px';
  fw5.style.width = nsx - 4 + 'px';
  fwt.style.width = nsx - 62 + 'px';
  fw.style.height = nsy + 'px';
  fw2.style.height = nsy - 1 + 'px';
  fw3.style.height = nsy - 2 + 'px';
  fw4.style.height = nsy - 3 + 'px';
  fw5.style.height = nsy - 4 + 'px';
  return true;
}

function changeCursor() {
  //if (mouseDown) {return true;}
  /**var fwc = getComputedStyle(document.getElementById("base"));
  var fw = document.getElementById("base");
  // corner checks
  if (event.clientX >= parseInt(fwc.left)) {
    if (event.clientX <= parseInt(fwc.left) + 4) {
      if (event.clientY >= parseInt(fwc.top)) {
        if (event.clientY <= parseInt(fwc.top) + 4) {
          fw.style.cursor = 'nw-resize';
          return true;
        } else if (event.clientY >= parseInt(fwc.top) + parseInt(fwc.height) - 4) {
          if (event.clientY <= parseInt(fwc.top) + parseInt(fwc.height)) {
            fw.style.cursor = 'sw-resize';
            return true;
          }
        }
      }
    } else if (event.clientX >= parseInt(fwc.left) + parseInt(fwc.width) - 4) {
      if (event.clientX <= parseInt(fwc.left) + parseInt(fwc.width)) {
        if (event.clientY >= parseInt(fwc.top)) {
          if (event.clientY <= parseInt(fwc.top) + 4) {
            fw.style.cursor = 'ne-resize';
            return true;
          } else if (event.clientY >= parseInt(fwc.top) + parseInt(fwc.height) - 4) {
            if (event.clientY <= parseInt(fwc.top) + parseInt(fwc.height)) {
              fw.style.cursor = 'se-resize';
              return true;
            }
          }
        }
      }
    }
  }
  // u/d checks
  if (event.clientX > parseInt(fwc.left) + 4) {
    if (event.clientX < parseInt(fwc.left) + parseInt(fwc.width) - 4) {
      if (event.clientY >= parseInt(fwc.top)) {
        if (event.clientY <= parseInt(fwc.top) + 4) {**/
        /**  console.log("----------");
          console.log("X data goes here");
          console.log(event.clientX);
          console.log(parseInt(fwc.left));
          console.log(parseInt(fwc.width));
          console.log("Y data goes here");
          console.log(event.clientY);
          console.log(parseInt(fwc.top));
          console.log("----------");**/
          /**fw.style.cursor = 'n-resize';
          return true;
        } else if (event.clientY >= parseInt(fwc.top) + parseInt(fwc.height) - 4) {
          if (event.clientY <= parseInt(fwc.top) + parseInt(fwc.height)) {
            fw.style.cursor = 's-resize';
            return true;
          }
        }
      }
    }
  }
  // l/r checks
  if (event.clientY > parseInt(fwc.top) + 4) {
    if (event.clientY < parseInt(fwc.top) + parseInt(fwc.height) - 4) {
      if (event.clientX >= parseInt(fwc.left)) {
        if (event.clientX <= parseInt(fwc.left) + 4) {
          fw.style.cursor = 'w-resize';
          return true;
        }
        else if (event.clientX >= parseInt(fwc.left) + parseInt(fwc.width) - 4) {
          if (event.clientX <= parseInt(fwc.left) + parseInt(fwc.width)) {
            fw.style.cursor = 'e-resize';
            return true;
          }
        }
      }
    }
  }
  fw.style.cursor = 'default';**/
  return true;
}

var mouseDown = 0;

function checkResizing() {
  if (!mouseDown) {return true;}
  var fwc = getComputedStyle(document.getElementById("base"));
  var fw = document.getElementById("base");
  switch(fwc.cursor) {
    case 'n-resize':
      var wty = parseInt(fwc.top) + parseInt(fwc.height);
      if (wty - event.clientY < 27) {
        fw.style.top = wty - 27;
        resizeWindow(parseInt(fwc.width), 27);
        return true;
      }
      fw.style.top = event.clientY;
      resizeWindow(parseInt(fwc.width), wty - event.clientY);
      return true;
    case 's-resize':
      resizeWindow(parseInt(fwc.width), event.clientY - parseInt(fwc.top));
      return true;
    case 'e-resize':
      resizeWindow(event.clientX - parseInt(fwc.left), parseInt(fwc.height));
      return true;
    case 'w-resize':
      var wtx = parseInt(fwc.left) + parseInt(fwc.width);
      if (wtx - event.clientX < 112) {
        fw.style.left = wtx - 112;
        resizeWindow(112, parseInt(fwc.height));
        return true;
      }
      fw.style.left = event.clientX;
      resizeWindow(wtx - event.clientX, parseInt(fwc.height));
      return true;
    case 'ne-resize':
      var wty = parseInt(fwc.top) + parseInt(fwc.height);
      if (wty - event.clientY < 27) {
        fw.style.top = wty - 27;
        resizeWindow(event.clientX - parseInt(fwc.left), 27);
        return true;
      }
      fw.style.top = event.clientY;
      resizeWindow(event.clientX - parseInt(fwc.left), wty - event.clientY);
      return true;
    case 'nw-resize':
      var wtx = parseInt(fwc.left) + parseInt(fwc.width);
      var wty = parseInt(fwc.top) + parseInt(fwc.height);
      if (wtx - event.clientX < 112) {
        if (wty - event.clientY < 27) {
          fw.style.left = wtx - 112;
          fw.style.top = wty - 27;
          resizeWindow(112, 27);
          return true;
        } else {
          fw.style.left = wtx - 112;
          fw.style.top = event.clientY;
          resizeWindow(112, wty - event.clientY);
          return true;
        }
      } else if (wty - event.clientY < 27) {
        fw.style.left = event.clientX;
        fw.style.top = wty - 27;
        resizeWindow(wtx - event.clientX, 27);
        return true;
      }
      fw.style.left = event.clientX;
      fw.style.top = event.clientY;
      resizeWindow(wtx - event.clientX, wty - event.clientY);
      return true;
    case 'se-resize':
      resizeWindow(event.clientX - parseInt(fwc.left), event.clientY - parseInt(fwc.top));
      return true;
    case 'sw-resize':
      var wtx = parseInt(fwc.left) + parseInt(fwc.width);
      if (wtx - event.clientX < 112) {
        fw.style.left = wtx - 112;
        resizeWindow(112, event.clientY - parseInt(fwc.top));
        return true;
      }
      fw.style.left = event.clientX;
      resizeWindow(wtx - event.clientX, event.clientY - parseInt(fwc.top));
      return true;
  }
  return true;
}

function maximizeWindow() {
  console.log("ran");
  var fwc = getComputedStyle(document.getElementById("base"));
  var fw = document.getElementById("base");
  var mpc = getComputedStyle(document.getElementById("mp"));
  var mp = document.getElementById("mp");
  var mppc = getComputedStyle(document.getElementById("mpp"));
  var mpp = document.getElementById("mpp");
  if (mpc.visibility == "hidden") {
    fw.style.left = windowOrigPosX;
    fw.style.top = windowOrigPosY;
    resizeWindow(windowOrigSizeX, windowOrigSizeY);
    mp.style.visibility = null;
    mpp.style.visibility = null;
    return true;
  }
  windowOrigSizeX = parseInt(fwc.width);
  windowOrigSizeY = parseInt(fwc.height);
  windowOrigPosX = parseInt(fwc.left);
  windowOrigPosY = parseInt(fwc.top);
  fw.style.left = 0;
  fw.style.top = 0;
  resizeWindow(width, height);
  mp.style.visibility = "hidden";
  mpp.style.visibility = "hidden";
  return true;
}

function loadReady5() {
  var gjorck = document.getElementById("blink");
  gjorck.style.backgroundImage = "url('blink.png')";
  setTimeout(function(){ loadReady4(); }, 1000);
}

function loadReady4() {
  var gjorck = document.getElementById("blink");
  gjorck.style.backgroundImage = null;
}

function shutdown() {
  removeWindow();
}

function showNotification() {
  var pinkcatzero = document.getElementById("notification");
  pinkcatzero.style.backgroundImage = "url('notification.png')";
  setTimeout(function(){ hideNotification(); }, 7500);
}

function hideNotification() {
  var pinkcatzero = document.getElementById("notification");
  pinkcatzero.style.backgroundImage = null;
  setTimeout(function(){ showWarning(); }, 1000);
}

function showWarning() {
  var pinkcatzero = document.getElementById("notification");
  pinkcatzero.style.backgroundImage = "url('notificationtwo.png')";
  setTimeout(function(){ hideWarning(); }, 7500);
}

function hideWarning() {
  var pinkcatzero = document.getElementById("notification");
  pinkcatzero.style.backgroundImage = null;
}
setTimeout(function(){ showNotification(); }, 1000);
setTimeout(function(){ shutdown(); }, 600000);