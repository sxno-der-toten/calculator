var main = document.querySelector("#main");
function sign(dig) {
  var dig = main.value;
  if (dig == "") {
    main.value = "";
  } else {
    if (dig > 0 ) {
      main.value = "-" + main.value;
    }else {
      main.value = Math.abs(main.value);
    }
  }
}
function cls(dig) {
  main.value = dig;
}
function show(dig) {
 main.value += dig;
}

function comma(dis) {
  var dis = main.value;
  if (dis == "") {
    main.value += "0.";
  } else {
    if (dis.indexOf('.') != -1) {
      document.getElementById('comma').setAttribute = "disabled";
    } else {
      main.value += ".";
    }
  }
}
function calcul(dig) {
  var dis = main.value ;
  if (dis== "") {
    document.getElementById('equal').setAttribute = "disabled";
  } else {
    dig = main.value ;
    try {
      main.value = eval(dig);
    } catch (e) {
      if (e instanceof SyntaxError) {
        main.value ="Syntax Error";
      }
    }
  }
}
