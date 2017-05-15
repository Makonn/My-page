/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ma;

var de;

var co;

var c;

var con;

var boxit;

var oldPage;

addEventListener('load', load);


/*
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset);
};
*/


//window.addEventListener("scroll", scrollEventHandler, false);

function main(){
    this.pageNu = 0;
    this.listName = "#mainDiv";
    this.idName = "#menuMain";
    this.onLeftSide = [];
    this.onRightSide = [];
}

function design(){
    this.pageNu = 1;
    this.listName = "#designDiv";
    this.idName = "#menuDesign";
    this.onLeftSide = [];
    this.onRightSide = [];
}

function code(){
    this.pageNu = 2;
    this.listName = "#codeDiv";
    this.idName = "#menuCode";
    this.onLeftSide = [];
    this.onRightSide = [];
}

function cv(){
    this.pageNu = 3;
    this.listName = "#cvDiv";
    this.idName = "#menuCv";
    this.onLeftSide = [];
    this.onRightSide = [];
}

function contact(){
    this.pageNu = 4;
    this.listName = "#contactDiv";
    this.idName = "#menuContact";
    this.onLeftSide = [];
    this.onRightSide = [];
}

function load(){
   
    ma = new main();
    de = new design();
    co = new code();
    c = new cv();
    con = new contact();
    
    de.onLeftSide = [ma, null, null, null, null];
    co.onLeftSide = [ma, de, null, null, null];
    c.onLeftSide = [ma, de, co, null, null];
    con.onLeftSide = [ma, de, co, c, null];
    
    ma.onRightSide = [null, de, co, c, con];
    de.onRightSide = [null, null, co, c, con];
    co.onRightSide = [null, null, null, c, con];
    c.onRightSide = [null, null, null, null, con];
    
    oldPage = ma;
    
    boxit = [ma, de, co, c, con];
    
    $(ma.idName).bind('click', function(){
            moveTo(ma);
        });
    
    $(de.idName).bind('click', function(){
            moveTo(de);
        });
        
    $(co.idName).bind('click', function(){
            moveTo(co);
        });
        
    $(c.idName).bind('click', function(){
            moveTo(c);
        });
        
    $(con.idName).bind('click', function(){
            moveTo(con);
        });
}

function addMiddleAnimations(el, side, left){
    
    /*
    console.log(el);
    console.log(oldPage);
    
    console.log(el.pageNu);
    console.log(oldPage.pageNu);
    console.log(left);
    console.log("forrit seuraavakss");
    */
    
    if(left){
        for(var a = oldPage.pageNu - 1; a > el.pageNu; a--){
            console.log("forissa " + a);
            $(el.onRightSide[a].listName).css("animation-name", side);
        }
    }
    else{
        for(var a = oldPage.pageNu + 1; a < el.pageNu; a++){
            $(el.onLeftSide[a].listName).css("animation-name", side);
        }
    }  
}

function removeMiddleAnimations(el, side){
    for(var a = 0; a < el.onLeftSide.length; a++){
        $(el.onLeftSide[a].listName).css("animation-name", side);
    }
}

function showMiddleAnimations(el, left){
    
    if(left){
        for(var a = oldPage.pageNu - 1; a > el.pageNu; a--){
            
            console.log(a);
            console.log(el.pageNu);
            
            addingMiddle(left, el, a);
                                 
        }
    }
    else{
        
        for(var a = oldPage.pageNu + 1; a < el.pageNu; a++){
            
            console.log(a);
            console.log(el.pageNu);
            
            addingMiddle(left, el, a);

        }
    }
}

function keitto(){
    console.log("KEITTOO");
}

function addingMiddle(left, el, a){
    if(left){
        $(el.onRightSide[a].listName).css("display", "block");
        //console.log("addattu");
    }
    else{
        $(el.onLeftSide[a].listName).css("display", "block");
        //console.log("addattu");
    }
}

function betweenMinMax(x, min, max) {
    return x < max && x > min;
}

function betweenMaxMin(x, min, max){
    return x > max && x < min;
}

function moveTo(el){
    
    var timeDelay;
    
    if(el.pageNu !== oldPage.pageNu){
        
        for(var j = 0; j < boxit.length; j++){
            $(boxit[j].listName).css("display", "none");
        }

        if(el.pageNu > oldPage.pageNu){
            console.log("fromright");
            $(el.listName).css("animation-name", "animateFromRight");
            addMiddleAnimations(el, "animateFromRightMiddle", false);
            timeDelay = showMiddleAnimations(el, false);
        }
        else{
            console.log("fromleft");
            $(el.listName).css("animation-name", "animateFromLeft");
            addMiddleAnimations(el, "animateFromLeftMiddle", true);
            timeDelay = showMiddleAnimations(el, true);
        }

        helpOldPage = oldPage;
        oldPage = el;
        
        timeDelay = timeDelay * 700;
        
        console.log(timeDelay);
        console.log("-------------------------------------");
        
        $(helpOldPage.listName).css("display", "block");
        
        $(helpOldPage.listName).css("animation-name", "animateFromMidToLeft");
        
        
       
        
        for(var i = 0; i < boxit.length; i++){
            if(el.pageNu !== i){
                $(boxit[i].listName).css("display", "none");
            }
            else{
                $(boxit[i].listName).css("display", "block");
            }
        }
                    
                    
    }
}